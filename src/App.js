import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'
import LandingPage from './components/village/landingPage'
import ArticleCover from './components/village/neighborhood/block/house/articleCover.js';

class App extends Component {
  render() {
    return (
      <LandingPage />
    );
  }
}

export default App;
