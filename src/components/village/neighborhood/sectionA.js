import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import SectionDescription from './block/sectionDescriptions'
import Laptop from './block/house/laptop'

class SectionA extends Component {
  render() {
    return (
         <section className="section-a">
            <Container>
      			   <Row>
      				    <SectionDescription/>
                  <Laptop/>
      			   </Row>
            </Container>
          </section>     	
    );
  }
}

export default SectionA;
