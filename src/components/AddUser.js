import React from 'react';
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Badge, Form, FormGroup,Input,TableLabel, Label } from 'reactstrap';
import PropTypes from 'prop-types';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      email:"",
      city:"",
      name:"",
      username:"",
      isOpen: false,
      redirect: false,
    };
    this.form = React.createRef();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount() {
  }

  updateHandler = () => {
    const post = {
      name: this.state.name,
      username: this.state.username,
      address: {city: this.state.city},
      email: this.state.email,
    };

    this.props.addUser(post);
    this.setState({
      redirect: true
    })
  }

  cansel = ()=>{
    this.setState({
      redirect: true
    })
  }


  render (){
    return (
      <div>
        {this.state.redirect && <Redirect to="/users" />}
        <div>
          <Col xs="12" sm="12" md="12" lg="12" >
            <div className="light_white_bg pb-5 pt-4">
                <Col xs="12" sm="12" md="12">
                  <Form ref={this.form}>
                    <FormGroup row>
                      <Label for="exampleEmail" sm={2}>Name</Label>
                      <Col sm={10}>
                        <Input type="text" name="name" id="user-name" pattern="\d{3}" title="test" placeholder="Name"
                          onChange={this.onChange}
                          value={this.state.name}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Username</Label>
                      <Col sm={10}>
                        <Input type="text" name="username" id="username" pattern="[A-Za-z]{20}" placeholder="Username"
                        onChange={this.onChange}
                        value={this.state.username}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>City</Label>
                      <Col sm={10}>
                        <Input type="text" name="city" id="city" pattern="[A-Za-z]{10}" placeholder="City"
                        onChange={this.onChange}
                        value={this.state.city}/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Email</Label>
                      <Col sm={10}>
                        <Input type="text" name="email" id="email" placeholder="Email"
                        onChange={this.onChange}
                        value={this.state.email}/>
                      </Col>
                    </FormGroup>
                    <FormGroup check row>
                      <Col sm={{ size: 10, offset: 2 }} className="text-right">
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

export default UserList;
