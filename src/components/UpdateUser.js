import React from 'react';
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Badge, Form, FormGroup,Input,TableLabel, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

class UpdateUser extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email:"",
      address: "fsdfsd",
      name:"",
      username:"",
      redirect: false,
      isOpen: false,
      posts: []
    };
  }

  componentWillMount() {
    let posts = this.props.posts.filter(user => user.id == this.props.match.params.id)[0]
    this.setState({
      ...posts,
    });
  }

  updateHandler = () => {
    const post = {
      id: this.props.match.params.id,
      name: this.state.name,
      username: this.state.username,
      address: {city: this.state.address.city},
      email: this.state.email,
    };
    this.props.updateUser(post, this.props.match.params.id);
    this.setState({
      redirect: true
    })
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  cansel = ()=>{
    this.setState({
      redirect: true
    })
  }

  render (){
    return (
      <div>
        <div>
        {this.state.redirect && <Redirect to="/users" />}
          <Col xs="12" sm="12" md="12" lg="12" >
            <div className="light_white_bg pb-5 pt-4">
                <Col xs="12" sm="12" md="12">
                  <Form>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={2}>Name</Label>
                      <Col sm={10}>
                        <Input type="text" name="name" id="user-name" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Username</Label>
                      <Col sm={10}>
                        <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.onChangeHandler}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>City</Label>
                      <Col sm={10}>
                        <Input type="text" name="city" id="address[city]" placeholder="City" value={this.state.address ? this.state.address.city : null} onChange={this.onChangeHandler}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Email</Label>
                      <Col sm={10}>
                        <Input type="text" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeHandler}/>
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }} className="text-right">
                        {/*<NavLink className="mr-2 border-1 btn" to={`/users`}>Anuluj</NavLink>*/}
                        <Button className="mr-2 border-1 btn" onClick={this.cansel}>Anuluj</Button>
                        <Button className="pink_bg no_border pl-5 pr-5 btn btn-secondary" onClick={this.updateHandler}>Zapisz</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
            </div>
          </Col>
        </div>
      </div>
    );
  }
};

export default withRouter(UpdateUser);
