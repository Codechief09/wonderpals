import React from 'react';

import { Container, Typography, Card, CardContent, Grid, CardMedia } from "@material-ui/core";

export default class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        'Click the login button in the top right corner of the app.  Once logged in you will be redirected to your dashboard.',
        'From your dashboard you can either create a new itinerary or view an itinerary that you\'ve already started.',
        'While viewing your itinerary of vacation days, click an available time slot to add an event.'
      ],
      cardImage: [
        'https://image.flaticon.com/icons/svg/1918/1918580.svg',
        'https://image.flaticon.com/icons/svg/1792/1792411.svg',
        'https://image.flaticon.com/icons/svg/1497/1497835.svg'
      ]
    }
  }
  render() {
    return (
      <Container maxWidth='lg'>
        <Typography variant='h3'>
          How to Use
        </Typography>

        <Grid container justify='center' spacing={2}>
          {
            this.state.cardData.map((data, index) => (
              <Grid item xs key={index}>
                <Card>
                  <CardMedia
                    height='185px'
                    component="img"
                    className="howto"
                    image={this.state.cardImage[index]}
                  />
                  <CardContent>
                    <Typography variant='h6'>
                      Step { index + 1 }
                    </Typography>
                    <Typography variant='body2'>
                      { data }
                    </Typography>
                    </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    )
  }
}