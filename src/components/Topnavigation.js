import React from 'react';
import { Container, Row, Col, Button, Badge,
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
   } from 'reactstrap';

class Topnavigation extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // navigationsHandler = () =>{
  //   this.props.navigationsHandler();
  // }

  render (){
    return (
      <Navbar expand="md" className="pb-4">
        <Button type="button" className="pink_bg border-0">
          <i class="fas fa-bars"></i>
        </Button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <span>Wyloguj</span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

export default Topnavigation;
