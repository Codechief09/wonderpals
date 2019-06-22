import React from 'react';
import './About.scss';
import Divider from '@material-ui/core/Divider';

import { Typography, Container } from '@material-ui/core';

export default class About extends React.Component {
  render() {
    return (
      <Container id='about' maxWidth='lg'>
        <Typography variant='h3'>
          About
        </Typography>
        <Typography variant='body1'>
          Welcome to the wonderful WanderPal application! We are here to make your group travel experiences more enjoyable by taking some of the stress out of keeping up with your busy schedule. Whether you are travelling as a squad of 3 , or a large group, with WanderPal you can coordinate your travel and events with everyone in a place where it is accessible.
            <Divider variant="middle" id="divide"/>
          We on the the WanderPal team believe in working hard and playing harder.  That's why we want your time away from work to be as stress free as as possible. Go and get your wander on!

        </Typography>

      </Container>
    )
  }
}
