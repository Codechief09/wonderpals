import React from 'react';
import './Landing.scss';

import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import HowToUse from '../HowToUse/HowToUse';
import Footer from '../Footer/Footer';


import { Box } from '@material-ui/core';
import {connect} from "react-redux";

export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Create memories, together.'
    }
  }

  render() {
    return (
      <section>
        <div>
          <Box id='header'>
            <div id='subheader'>
              <h1>{ this.state.message }</h1>
            </div>
          </Box>
          <a name="#about"/>
          <About/>
          <HowToUse/>
        </div>
        <Navigation class='landing-nav' props='fixed'/>
        <Footer/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(Landing);
