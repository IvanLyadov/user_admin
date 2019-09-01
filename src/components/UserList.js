import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Badge, Form, FormGroup,Input,Table,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import DoropDownFilter from './DoropDownFilter';
import { withRouter } from "react-router";

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      clear: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // componentDidMount(){
  //
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  deleteUser = (id)=>{
    if (window.confirm('Czy na pewno chcesz usunąć')) {
      this.props.deleteUser(id);
    }
  }

  searchHandler = ()=>{
    this.props.search(document.getElementById('search_input').value);
  }

  clearHandler = ()=>{
    document.getElementById('search_input').value = "";
    this.setState({
      clear:false,
    })
    this.props.clear();
  }

  onChangeHandler = () => {
    if (document.getElementById('search_input').value) {
      this.setState({
        clear:true,
      })
    }else{
      this.setState({
        clear:false,
      })
    }

  }

  render (){
    let list = [];

    if (this.props.filters.length != 0) {
      list = this.props.filters;
    }else{
      list = this.props.posts;
    }
    let users = [];
    if (this.props.empty_result == false) {
      users = list.map(user =>(
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address ? user.address.city : null}</td>
          <td>
            <NavLink className="yellow_bg m-1 pb-1 pt-1 border-0 btn btn-secondary" to={`/update_user/${user.id}`}><i class="fas fa-wrench"></i></NavLink>
            <Button onClick={e=>{this.deleteUser(user.id)}} className="yellow_bg m-1 pb-1 pt-1 border-0"><i class="fas fa-trash"></i></Button>
          </td>
        </tr>
      ));
    }else{
      users = (
        <b>Brak wyników ....</b>);
    }

    return (
      <div>
        <DoropDownFilter {...this.props}/>
        <div>
          <Col xs="12" sm="12" md="12" lg="12" >
            <div className="light_white_bg text-right p-3">
              <span className="float-left">
                Lista użytkownikow
              </span>
              <NavLink className="pink_bg no_border btn text-light pl-5 pr-5" to={`/add_user`}>Nowy</NavLink>
            </div>
          </Col>
        </div>
        <div>
          <Col xs="12" sm="12" md="12" lg="12" >
            <div className="light_white_bg search_sc">
                {this.state.clear ? (<Button onClick={this.clearHandler} className="pink_bg search_btn">X</Button>) : null}

                <span className="search_item">
                  <Input type="text" name="search" id="search_input" onInput={this.onChangeHandler} placeholder="Szukaj" />
                </span>
                  <Button onClick={this.searchHandler} className="pink_bg search_btn">Szukaj</Button>
            </div>
          </Col>
        </div>
        <div>
          <Col xs="12" sm="12" md="12" lg="12" >
            <div className="light_white_bg pb-5">
                <Col xs="12" sm="12" md="12">
                  <Table striped className="cst-tabl">
                    <thead>
                      <tr>
                        <th width="5%">ID</th>
                        <th width="25%">Name</th>
                        <th width="20%">Username</th>
                        <th width="20%">Email</th>
                        <th width="20%">City</th>
                        <th width="10%">Akcje</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users}
                    </tbody>
                  </Table>
                </Col>
            </div>
          </Col>
        </div>
      </div>
    );
  }
};

export default withRouter(UserList);
