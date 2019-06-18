import React from 'react';
import './ItineraryCarousel.scss';

export default class ItineraryCarousel extends React.Component {
  render() {

    return (

        <div id='itinerary-card-carousel'>

          <div id='itinerary-card'>

            {
              this.props.Cards.map(card => {




              })
            }

          </div>

        </div>

    )

  }

}