import React from 'react';

import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core';

export default class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        'Click the login button in the top right corner of the app.  Once logged in you will be redirected to your dashboard.',
        'From your dashboard you can either create a new itinerary or view an itinerary that you\'ve already started.',
        'While viewing your itinerary of vacation days, click an available time slot to add an event.'
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