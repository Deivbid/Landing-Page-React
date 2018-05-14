import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import Header from './neighborhood/header'
import SectionA from './neighborhood/sectionA'
import SectionB from './neighborhood/sectionB'
import SectionC from './neighborhood/sectionC'
import Footer from './neighborhood/footer'

class LandingPage extends Component {
  render() {
    return (
      <div className="Landing-Page">
      	<Header/>
      	<SectionA/>
      	<SectionB/>
      	<SectionC/>
      	<Footer/>
      </div>
    );
  }
}

export default LandingPage;
