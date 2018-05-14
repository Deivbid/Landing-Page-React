import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import DemoLink from './house/demoLink'
import Branding from './house/branding'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Col lg={6}>
          <Branding/>
        </Col>
        <Col lg={6}>
          <DemoLink/>
        </Col>
      </div>
    )
  }
}

export default Navigation;
