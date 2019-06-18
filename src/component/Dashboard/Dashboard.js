import React from 'react';
import './Dashboard.scss';
import {connect} from 'react-redux';

import Navigation from '../Navigation/Navigation';
import ItineraryCarousel from '../ItineraryCarousel/ItineraryCarousel';
import { Typography, Container } from '@material-ui/core';
import ItineraryForm from '../ItineraryForm/ItineraryForm';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navigation class='dashboard-nav'/>
        <Container id='dashboard' maxWidth='lg'>
            <div><ItineraryForm/></div>
          <Typography variant='h4' mb={2}>
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