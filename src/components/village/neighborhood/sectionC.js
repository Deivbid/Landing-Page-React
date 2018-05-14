import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import CallToAction from './block/callToAction'
import SectionDescription from './block/house/sectionDescription'

class SectionC extends Component {
  render() {
    return (
         <section className="section-c">
             <Container>
      			<Row>
              <CallToAction />
      			</Row>
            </Container>
          </section>     	
    );
  }
}

export default SectionC;
