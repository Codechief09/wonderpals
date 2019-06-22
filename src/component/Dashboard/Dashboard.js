import React from "react";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import ItineraryCarousel from "../ItineraryCarousel/ItineraryCarousel";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import Footer from "../Footer/Footer";
import { Typography, Container, Divider } from "@material-ui/core";
import * as itineraryActions from "../../action/itinerary-actions";

class Dashboard extends React.Component {
  componentWillMount() {
    if (!this.props.token) {
      return (<Redirect to='/'/>);
    }

    this.props.getAll(this.props.token.user._id);
  }

  name = () => {
    return this.props.token ? this.props.token.user.name : "friend";
  };


  render() {

    if (!this.props.token) {
      return (
        <Redirect to='/'/>
      );
    }

    const TEST = [
      {
        name: 'Summer Vacay in Mexico',
        dateStart: '2019-07-04',
        dateEnd: '2019-07-14',
        location: 'Tulum, MX',
        image: './assets/test/mx.jpg',
        id: 1023910
      },
      {
        name: `Chris's birthday in Vegas`,
        dateStart: '2019-08-08',
        dateEnd: '2019-08-11',
        location: 'Las Vegas, NV',
        image: './assets/test/vegas.jpg',
        id: 204224
      },
      {
        name: 'Labor day in Bend, OR',
        dateStart: '2019-08-30',
        dateEnd: '2019-09-02',
        location: 'Bend, OR',
        image:'./assets/test/bend.jpg',
        id: 202231
      },
      {
        name: 'Christmas in Charleston',
        dateStart: '2019-12-24',
        dateEnd: '2019-12-30',
        location: 'Charleston, SC',
        image: './assets/test/charleston.jpg',
        id: 20531
      }
    ];

    const TEST2 = [
      {
        name: 'Jessica goes to Turkey',
        dateStart: '2019-05-04',
        dateEnd: '2019-05-14',
        location: 'Istanbul, Turkey',
        image: './assets/test/turkey.jpg',
        id: 1023910
      },
      {
        name: `Party on the moon`,
        dateStart: '2012-08-08',
        dateEnd: '2012-08-11',
        location: 'The Moon',
        image: './assets/test/moon.jpg',
        id: 204224
      }
    ];

    return (
      <div>

        {this.props.token ? undefined : <Redirect to='/'/>}

        <Navigation class='dashboard-nav' position='static'/>
        <Container id='dashboard' maxWidth='lg'>
          <Typography variant='h4' mb={2}>
            Welcome back, {this.name()}!
          </Typography>
          <div id="createNew"><ItineraryForm userId={this.props.token.user._id}/></div>
          <Divider/>
          <Typography variant='h5'>
            See upcoming trips
          </Typography>
          <ItineraryCarousel TEST={TEST}/>

          <Typography variant='h5'>
            See past trips
          </Typography>
          <ItineraryCarousel TEST={TEST2}/>
        </Container>

        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    itineraries: state.itineraries
  };
};

const mapDispatchToProps = dispatch => ({
  getAll: (id) => dispatch(itineraryActions.getItineraries(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);