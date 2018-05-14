import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import Navigation from './block/navigation'
class Footer extends Component {
  render() {
    return (
         <section className="footer">
            <Container>
      			 <Row>
              <Navigation />
      			 </Row>
            </Container>
          </section>     	
    );
  }
}

export default Footer;
