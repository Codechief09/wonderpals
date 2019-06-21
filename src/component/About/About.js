import React from 'react';
import './About.scss';

import { Typography, Container } from '@material-ui/core';

export default class About extends React.Component {
  render() {
    return (
      <Container id='about' maxWidth='lg'>
        <Typography variant='h3'>
          About
        </Typography>
        <Typography variant='body1'>
          Welcome to WanderPal! We are here to make your group travel something to enjoy. Whether you are travelling as a little squad of 3 friends, or a large group of more that 10, here you can coordinate your travel and your events with the whole group <break/>.

        </Typography>

      </Container>
    )
  }
}
