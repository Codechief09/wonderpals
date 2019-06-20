import React from "react";
import Day from "../Day/Day";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";
//import {object} from "prop-types";
import './Itinerary.scss';
import Grid from '@material-ui/core/Grid';

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraryHeaderStyle: {
        backgroundColor: "#008080"
        // backgroundImage://img link here
      },
      testItinerary: {
        itineraryName: "testItinerary",
        itineraryLocation: "lab",
        arrayOfDays: ['4/20', '4/21', '4/22'],
      },
      hours: [],
    };
  }

  makeHours = () =>{
    for(let i = 0; i < 48; i++){
      let j = null;
      let hour = null;
      let min = null;
      let suffix = 'am';
      if(i > 1){
        j = i * 30;
        if(j % 60){
          hour = `${Math.floor(j / 60)}`;
          min = '30';
        }else{
          hour = `${Math.floor(j / 60)}`;
          min = '00';
        }
        if(hour > 12){
          hour -= 12;
          suffix = 'pm'
        }
      }else if(i === 1){
        hour = '12';
        min = '30';
      }else if(i === 0){
        hour = '12';
        min = '00'
      }
      let str = hour + ':' + min + suffix;
      this.state.hours.push(str);
    }
  };

  render() {
    return (
      <div>
        {this.makeHours()}
        <Navigation />
        <div id="itineraryHeader" style={this.state.itineraryHeaderStyle}>
          <h1>{this.state.testItinerary.itineraryName}</h1>
          <h3>{this.state.testItinerary.itineraryLocation}</h3>
        </div>

        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          id="dayContainerDiv"
        >
          {this.state.testItinerary.arrayOfDays.map(day=>
            <Grid item>
              <Day className="paper"
                   date={day}
                   hours = {this.state.hours}
              />
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    days: state
    //itineraryBackgroundImage: ,
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Itinerary);
