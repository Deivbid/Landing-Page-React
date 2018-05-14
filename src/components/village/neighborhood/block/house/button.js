import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'

class Button extends Component {
  render() {
    return (
      <div>
      	<button className="button">Add to Slack</button>
      </div>
    );
  }
}

export default Button;
