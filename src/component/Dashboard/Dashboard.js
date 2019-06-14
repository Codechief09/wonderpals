import React from 'react';
import './Dashboard.scss';
import {connect} from 'react-redux';

import Navigation from '../Navigation/Navigation';
import ItineraryCarousel from '../ItineraryCarousel/ItineraryCarousel';
import { Typography, Container } from '@material-ui/core';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Container id='dashboard' maxWidth='lg'>
          <Typography variant='h4'>
            Welcome back, USERNAME!
          </Typography>
          <Typography variant='h5'>
            See upcoming trips
          </Typography>
          <ItineraryCarousel/>

          <Typography variant='h5'>
            See past trips
          </Typography>
          <ItineraryCarousel/>
        </Container>

      </div>
    )
  }
}
const mapStateToProps = state => {
  return{

  }
};
const mapDispatchToProps = dispatch => {

};



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);