import React from 'react';
import './ItineraryCarousel.scss';
import ItineraryCard from '../ItineraryCard/ItineraryCard';
import {Grid} from "@material-ui/core";
import { connect } from "react-redux";

export class ItineraryCarousel extends React.Component {

  render() {
    const { itineraries } = this.props;

    return (
      <Grid className='carousel' container justify='flex-start' spacing={2}>
        {
          itineraries.map(itinerary =>
            <Grid item xs={3} key={itinerary.id}>
              <ItineraryCard itinerary={itinerary}/>
            </Grid>
          )
        }
      </Grid>

    )

  }
<<<<<<< HEAD
}

const mapStateToProps = state => {
  return {
    token: state.token,
    itineraries: state.itineraries
  };
};

// const mapDispatchToProps = dispatch => ({
//   getAll: (id) =>  dispatch(itineraryActions.getItineraries(id))
// });

export default connect(mapStateToProps, null)(ItineraryCarousel);
=======

}
>>>>>>> 5bc7b36da74cb4cea4da63f065c0607a593f8bef
