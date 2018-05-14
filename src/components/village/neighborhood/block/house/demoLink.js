import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'


class DemoLink extends Component {
  render() {
    return (
      <div>
        <a href="#">
          <span className="demo-link">
          Demo
          </span>
        </a>
      </div>
    )
  }
}


export default DemoLink;
