import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as itineraryActions from "../../action/itinerary-actions";

import Navigation from "../Navigation/Navigation";
import Day from "../Day/Day";
import ItineraryForm from "../ItineraryForm/ItineraryForm";
import Grid from "@material-ui/core/Grid";
import "./Itinerary.scss";



class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.history.location.state.id,
      deleted: false,
      itineraryHeaderStyle: {
        backgroundColor: "#008080"
        // backgroundImage://img link here
      },
      testItinerary: {
        itineraryName: "testItinerary",
        itineraryLocation: "lab",
        arrayOfDays: ["4/20", "4/21", "4/22"]
      },
      hours: []
    };
  }

  componentWillMount() {
    if (!this.props.token) {
      return (<Redirect to='/'/>);
    }

    // Before mounted, get all days in itinerary
    // this.props.getAll(this.props.token.user._id);
  }

  handleDelete = (id) => {
    this.props.deleteItinerary(id);
    this.setState({deleted: true});
  };


  makeHours = () => {
    for (let i = 0; i < 48; i++) {
      let j = null;
      let hour = null;
      let min = null;
      let suffix = "am";
      if (i > 1) {
        j = i * 30;
        if (j % 60) {
          hour = `${Math.floor(j / 60)}`;
          min = "30";
        } else {
          hour = `${Math.floor(j / 60)}`;
          min = "00";
        }
        if (hour > 12) {
          hour -= 12;
          suffix = "pm";
        }
      } else if (i === 1) {
        hour = "12";
        min = "30";
      } else if (i === 0) {
        hour = "12";
        min = "00";
      }
      let str = hour + ":" + min + suffix;
      this.state.hours.push(str);
    }
  };

  render() {

    // if (!this.props.token) {
    //   return (
    //     <Redirect to='/'/>
    //   );
    // }

    let { id } = this.props;
    return (
      <div>
        { this.state.deleted ? <Redirect to='/dashboard'/> : undefined}
        {this.makeHours()}
        <Navigation/>
        <div id="itineraryHeader" style={this.state.itineraryHeaderStyle}>
          <h1>{this.state.testItinerary.itineraryName}</h1>
          <h3>{this.state.testItinerary.itineraryLocation}</h3>
        </div>

        <Grid>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            id="dayContainerDiv"
          >
            <ItineraryForm/>
            <button onClick={() => this.handleDelete(this.state.id)}>Delete</button>
            {this.state.testItinerary.arrayOfDays.map(day =>
              <Grid item>
                <Day className="paper"
                     date={day}
                     hours={this.state.hours}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    days: state.days
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
