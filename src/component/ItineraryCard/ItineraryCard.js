import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import fs from "fs";

export default class ItineraryCard extends React.Component {

  state = {
    handleClick: false,
    itinerary: this.props.itinerary
  };

  render() {
    const { itinerary } = this.props;

    if (this.state.handleClick) {
      return <Redirect to={{
        pathname: "/itinerary",
        state: { itinerary: itinerary }
      }} push={true}/>;
    }

    return (

      <Card>
        <CardActionArea onClick={() => this.setState({ handleClick: true })}>
          <CardMedia
            height='185px'
            component="img"
            // image={`data:image/jpeg;base64,${image}`}
            image={itinerary.image}
            title={itinerary.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {itinerary.name}
            </Typography>
            <Typography variant="body1">
              {itinerary.dateStart} to {itinerary.dateEnd}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );

  }
}