import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import Topnavigation from './components/Topnavigation';
import HeaderTitle from './components/HeaderTitle';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      posts:[],
      addUser: this.addUser,
      updateUser: this.updateUser,
      deleteUser: this.deleteUser,
      sortUsersByAddress: this.sortUsersByAddress,
      filters: [],
      search: this.search,
      dropdownList: [],
      empty_result: false,
      clear: this.clear,
    }
  }

  request = () => {

  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(posts =>{
        this.setState({
          posts:posts
        })
      });
  }

  updateUser = (post, id) => {
    this.state.posts.map(elm => {
      if (elm.id == id) {
        elm['address'] = post.address;
        elm['name'] = post.name;
        elm['username'] = post.username;
        elm['email'] = post.email;
      }
    })

      fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log('user has been updated',json))
  }

  search = (str) =>{
      let searchresult = this.state.posts.filter(elm => elm.username.search(str) != -1);
      if (searchresult.length != 0) {
        this.setState({
          filters: searchresult
        })
      }else{
        this.setState({
          empty_result: true
        })
      }
  }

  clear = () => {
    this.setState({
      empty_result: false,
      filters: []
    })
  }

  addUser = (post) => {
    if (this.state.posts.length != 0) {
      post.id =this.state.posts[this.state.posts.length -1].id + 1
    }else{
      post.id = 1;
    }
    this.state.posts.push(post);

      fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log('user has been added',json))
  }

  deleteUser = (id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE'
    })

    let new_posts = this.state.posts.filter(elm => elm.id != id);
    let new_filters = this.state.filters.filter(elm => elm.id != id);
    this.setState({
      posts: new_posts,
      filters: new_filters
    })
  }

  sortUsersByAddress = (id) =>{
    let new_filters = [];
    new_filters = this.state.posts.filter(elm => elm.id == id)
    this.setState({
      filters: new_filters,
    })
  }

  render (){
    console.log('dsf',this.props);
    return (
      <Router>
          <div className="justify-content-center h-100">
              <Row className="h-100">
                <Sidebar/>
                <Col xs="12" sm="12" md="10" lg="10" className="white_bg paddgin-left_0">
                  <Topnavigation/>
                  <HeaderTitle/>
                  <Route path={'/users'} render={props => <UserList {...this.state}/>} />
                  <Route path={'/add_user'} render={props => <AddUser {...this.state} />} />
                  <Route exact path={'/update_user/:id'} component={props => <UpdateUser  {...this.state}/>} />
                </Col>
              </Row>
          </div>
        </Router>
    );
  }
}

export default App;
