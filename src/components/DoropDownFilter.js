import React from 'react';
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Badge, Form, FormGroup,Input,TableLabel, Label } from 'reactstrap';
import PropTypes from 'prop-types';

class DoropDownFilter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onChange = (e) => {
    this.setState({ });
  }

  componentWillMount() {
  }

  onchangeHandler = (e) => {
    this.props.sortUsersByAddress(e.target.value);
  }


  render (){
    let dropdownList = [];
      dropdownList = this.props.posts;

    let list =  dropdownList.map(elm => {
        return (
          <option key={elm.id}  value={elm.id}>{elm.address.city}</option>
        );
    });

    list.unshift((<option key="0"  value="0">Sortuj</option>));

    return (
      <div>
        <Col xs="12" sm="12" md="12" lg="12" className="mb-5">
          <p>
            <span>
              Rola
            </span>
            <select onChange={e=>{this.onchangeHandler(e)}} className="custom-select ml-3 col-md-2 col-lg-2">
              {list}
            </select>
          </p>
        </Col>
      </div>
    );
  }
};

export default DoropDownFilter;
