import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as itineraryActions from "../../action/itinerary-actions";
import { eachDayOfInterval, parse } from "date-fns";

import Navigation from "../Navigation/Navigation";
import Day from "../Day/Day";
import Footer from "../Footer/Footer";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import "./Itinerary.scss";
import { Box, Grid, Container, Typography, Button, ButtonGroup } from "@material-ui/core";
import { Delete } from "@material-ui/icons";


class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itinerary: this.props.history.location.state.itinerary,
      deleted: false,
      itineraryHeaderStyle: {
        backgroundColor: "#008080"
        // backgroundImage://img link here
      },
      hours: []
    };
  }

  days = () => {
    return eachDayOfInterval({
      start: new Date(this.state.itinerary.dateStart),
      end: new Date(this.state.itinerary.dateEnd)
    });
  };

  componentWillMount() {
    if (!this.props.token) {
      return (<Redirect to='/'/>);
    }
  }

  handleDelete = (id) => {
    this.props.deleteItinerary(id);
    this.setState({ deleted: true });
  };

  render() {


    if (!this.props.token) {
      return (
        <Redirect to='/'/>
      );
    }

    let { id } = this.props;
    let days = this.days();

    let divStyle = {
      backgroundImage: "url(" + this.state.itinerary.image + ")"
    };

    let date = Object.values(days);

    return (
      <div>
        {this.props.token ? undefined : <Redirect to='/'/>}
        {this.state.deleted ? <Redirect to='/dashboard'/> : undefined}

        <div>
          <Box id='itineraryHeader' style={divStyle}>
            <div id='sub'>
              <h1>{this.state.itinerary.name}</h1>
              <h4>{this.state.itinerary.location}</h4>
            </div>
          </Box>
          <Container>
            <Grid container justify="flext-start" direction="row">
              <Grid>
                <ItineraryForm variant="outlined" color="primary" itineraryId={this.state.itinerary._id}/>
              </Grid>
              <Grid>
                <Button size="small" variant="outlined" color="primary"
                        onClick={() => this.handleDelete(this.state.itinerary._id)}>
                  <Delete/>
                  Delete
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-start"
              spacing={2}
              id="dayContainerDiv"
            >

              {
                days.map((day, index) => {
                  return (
                      <Grid item xs={3} key={index}>
                        <Typography variant="h4">
                          {JSON.stringify(date[index]).split('T')[0]}
                        </Typography>
                        <Day className="paper"/>
                      </Grid>
                    )
                  }
                )}
            </Grid>
          </Container>
        </div>
        <Navigation class='landing-nav' props='fixed'/>
        <Footer/>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.days,
    token: state.token,
    itineraries: state.itineraries
    //itineraryBackgroundImage: ,
  };
};
const mapDispatchToProps = dispatch => ({
  deleteItinerary: (id) => dispatch(itineraryActions.deleteItinerary(id)),
  updateItinerary: (id) => dispatch(itineraryActions.getItineraries(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary);
