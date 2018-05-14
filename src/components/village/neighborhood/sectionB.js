import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import ArticleCover from './block/house/articleCover'
import SectionDescription from './block/sectionDescriptions'

class SectionB extends Component {
  render() {
    return (
         <section className="section-b">
             <Container>
      			<Row>
              <ArticleCover />
      				<SectionDescription/>
      			</Row>
            </Container>
          </section>     	
    );
  }
}

export default SectionB;
