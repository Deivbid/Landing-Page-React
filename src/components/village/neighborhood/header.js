import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import Navigation from './block/navigation'
import CallToAction from './block/callToAction'
import SlackChannel from './block/house/slackChannel'

class Header extends Component {
  render() {
    return (
         <section className="header">
             <Container>
      			<Row>
      				<Navigation/>
      			</Row>
      			<Row>
      				<CallToAction/>
      			</Row>
      			<Row>
      				<SlackChannel/>
      			</Row>
             </Container>
          </section>     	
    );
  }
}

export default Header;
