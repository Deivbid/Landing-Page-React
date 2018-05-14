import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import Heading from './house/heading'
import Divider from './house/divider'
import Paragraph from './house/paragraph'
class SectionDescription extends Component {
  render() {
    return (
      <Col lg={6}>
      	<Heading/>
        <Divider/>
        <Paragraph/>
      </Col>     
    );
  }
}

export default SectionDescription;
