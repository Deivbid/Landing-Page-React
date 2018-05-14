import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'

class SlackChannel extends Component {
  render() {
    return (
      
      	<Col lg={12}>
      		<img className="slack-channel" src="./images/Slack Channel.svg" />
      	</Col>
      
    );
  }
}

export default SlackChannel;
