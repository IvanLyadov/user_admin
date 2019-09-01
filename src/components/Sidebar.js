import React from 'react';
import { Row, Col, Button, Badge,
  Collapse,
  Navbar,
  NavbarToggler} from 'reactstrap';
  import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {

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

  render (){
    return (
      <Col xs="12" sm="12" md="2" lg="2" className="blue_bg text-light">
        <Navbar expand="md">
            <Row>
              <Col md="12" lg="12" className="mb-4 mt-4">
                <img src="http://via.placeholder.com/70x70" className="rounded-circle"></img>
                <div>
                  Moony Lab
                </div>
                <div>
                  Super Admin
                </div>
              </Col>
              <Col md="12" lg="12" className="blue_bg">
                <NavbarToggler onClick={this.toggle} />

                  <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="no_list navbar-left-wrapper">
                      <li className="pb-3 pt-3"><Badge className="cst_badge mr-2"><i class="fas fa-list"></i></Badge>
                        <NavLink className="text-light" to={`/users`}>Lista użytkownikow</NavLink>
                      </li>
                      <li className="pb-3 pt-3"><Badge className="cst_badge mr-2"><i class="fas fa-indent"></i></Badge>
                        <NavLink className="text-light" to={`/add_user`}>Dodaj użytkownika</NavLink>
                      </li>
                    </ul>
                  </Collapse>
              </Col>
            </Row>
        </Navbar>
      </Col>
    );
  }
};

export default Sidebar;
