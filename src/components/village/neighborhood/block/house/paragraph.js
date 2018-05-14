import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system'

class Paragraph extends Component {
  render() {
    return (
      <div>
      	<p className="paragraph">
			 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, elit\
			  pulvinar aliquam convallis, libero mauris rhoncus erat, non porttitor lectus ju\
			 sto et ex. In hac habitasse platea dictumst.
      	</p>
      </div>
    );
  }
}

export default Paragraph;
