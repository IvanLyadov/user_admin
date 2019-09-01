import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from "react-router";

class HeaderTitle extends React.Component {

  constructor(props) {
    super(props);
  }

  render (){
    console.log(this.props);
    return (
      <div className="light_white_bg">
        <Col xs="12" sm="12" md="12" lg="12" className="pb-1 pt-3 mb-3">
          <h2>
            Użytkownicy
          </h2>
          <p>
            Lista użytkownikow
          </p>
        </Col>
      </div>
    );
  }
};
export default withRouter(HeaderTitle);
