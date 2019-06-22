import React from "react";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import ItineraryCarousel from "../ItineraryCarousel/ItineraryCarousel";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import Footer from "../Footer/Footer";
import { Typography, Container } from "@material-ui/core";
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

    return (
      <div>
        {this.props.token ? undefined : <Redirect to='/'/>}
        <Navigation class='dashboard-nav' position='static'/>
        <Container id='dashboard' maxWidth='lg'>
          <div><ItineraryForm userId={this.props.token.user._id}/></div>
          <Typography variant='h4' mb={2}>
            Welcome back, {this.name()}!
          </Typography>
          <Typography variant='h5'>
            See upcoming trips
          </Typography>
          {this.props.itineraries.length > 0 ? <ItineraryCarousel itineraries={this.props.itineraries}/> : undefined}

          <Typography variant='h5'>
            See past trips
          </Typography>
          {this.props.itineraries.length > 0 ? <ItineraryCarousel itineraries={this.props.itineraries}/> : undefined}
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