import React from 'react';
import './Dashboard.scss';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import ItineraryCarousel from '../ItineraryCarousel/ItineraryCarousel';
import { Typography, Container } from '@material-ui/core';
import ItineraryForm from '../ItineraryForm/ItineraryForm';

class Dashboard extends React.Component {
  name = () => {
    return this.props.token ? this.props.token[1].name.split(' ')[0] : 'friend';
  };

  componentWillMount() {
    if (!this.props.token) {
      return (
        <div>
          <Redirect to='/'/>
        </div>
      )
    }
  }

  render() {


    return (
      <div>
        { this.props.token ? undefined : <Redirect to='/'/> }
        <Navigation class='dashboard-nav'/>
        <Container id='dashboard' maxWidth='lg'>
            <div><ItineraryForm/></div>
          <Typography variant='h4' mb={2}>
            Welcome back, {this.name()}!
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
    token: state.token,
    currentUser: state.currentUser
  }
};
// const mapDispatchToProps = dispatch => {
//
// };

export default connect(mapStateToProps, null)(Dashboard);