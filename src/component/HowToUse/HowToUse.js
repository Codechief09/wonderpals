import React from 'react';

import { Container, Typography, Card, CardContent, Grid } from '@material-ui/core';

export default class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        'Open the thing and do something.',
        'Then, click the thing and do something else.',
        'Then, go do the thing again ok.'
      ]
    }
  }
  render() {
    return (
      <Container maxWidth='md'>
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