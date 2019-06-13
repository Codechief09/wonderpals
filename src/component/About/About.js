import React from 'react';
import './About.scss';

import { Typography, Container } from '@material-ui/core';

export default class About extends React.Component {
  render() {
    return (
      <Container id='about' maxWidth='md'>
        <Typography variant='h3'>
          About
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, qui essent mollis expetenda in, eum id mutat tantas. Ius stet vitae luptatum et, ullum impetus bonorum nam
          eu. Nostro putant nam at. Ad aeque aliquid accusam duo, magna mazim constituto mei at. Nam utroque inimicus ad, sea vidit inimicus et.            Sit at munere fastidii, soleat possit legendos sed an.

          Decore noster sea et, sit omnis petentium et. At sed quis eleifend voluptaria, per graecis conceptam delicatissimi eu. Eos justo
          lobortis neglegentur an, ius ut duis elitr. Ad dolore quaeque detraxit nec, tempor everti per an, vis dicit laudem luptatum ut. Affert
          mandamus quaerendum te mei, nec tollit eloquentiam ad.
        </Typography>

      </Container>
    )
  }
}
