import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import Subtitle from './house/subtitle'
import Title from './house/title'
import Button from './house/button'

class CallToAction extends Component {
  render() {
    return (
      <Col lg={12}>
        <Title />
        <Subtitle />
        <Button />
      </Col>     
    );
  }
}

export default CallToAction;
