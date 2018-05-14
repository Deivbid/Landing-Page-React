import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'

class Laptop extends Component {
  render() {
    return (
     
      	<Col lg={6}>
      		<img className="laptop" src="./images/Laptop.svg" />
      	</Col>
      
    );
  }
}

export default Laptop;
