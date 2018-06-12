import React, { Component } from 'react';
import Nav from './nav';
import Left from './selectable'
import { Row,Col } from 'react-bootstrap';
import Use from './use';
class App extends Component {
  render() {
    return (
      <div className="App">
	  <Nav/>
	  <Row>
	  <Col xs={3} md={3}>
	  <Left/>
	  </Col>
	  <Col xs={9} md={9}>
	  <div id="page"><Use/></div>
	  </Col></Row>
      </div>
    );
  }
}

export default App;
