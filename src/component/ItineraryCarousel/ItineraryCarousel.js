import React from 'react';
import './ItineraryCarousel.scss';
import ItineraryCard from '../ItineraryCard/ItineraryCard';
import {Grid} from "@material-ui/core";

export default class ItineraryCarousel extends React.Component {
  // const { itineraries } = this.props;


  render() {

    const itinerariesTEST = [
      {
        name: 'Summer Vacay in Mexico',
        dateStart: '2019-07-04',
        dateEnd: '2019-07-14',
        location: 'Tulum, MX',
        imagePath: './assets/test/tulum.jpg',
        id: 1023910
      },
      {
        name: `Chris's birthday in Vegas`,
        dateStart: '2019-08-08',
        dateEnd: '2019-08-11',
        location: 'Las Vegas, NV',
        imagePath: './assets/test/vegas.jpg',
        id: 204224
      },
      {
        name: 'Labor day in Bend, OR',
        dateStart: '2019-08-30',
        dateEnd: '2019-09-02',
        location: 'Bend, OR',
        imagePath: './assets/test/bend.jpg',
        id: 202231
      },
      {
        name: 'Christmas in Charleston',
        dateStart: '2019-12-24',
        dateEnd: '2019-12-30',
        location: 'Charleston, SC',
        imagePath: './assets/test/charleston.jpg',
        id: 20531
      }
    ];

    return (
      <Grid className='carousel' container justify='flex-start' spacing={2}>
        {
          itinerariesTEST.map(itinerary =>
            <Grid item xs={3} key={itinerary.id}>
              <ItineraryCard itinerary={itinerary}/>
            </Grid>
          )
        }
      </Grid>
    )
  }
}