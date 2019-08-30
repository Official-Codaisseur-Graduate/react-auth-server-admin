import React, { Component } from 'react';
import Contributor from './Contributor';
import Grid from '@material-ui/core/Grid';

export default class Contributors extends Component {
  render() {
    return (
      <div className="contributors-container">
        <h1>Contributors</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Contributor
              name='Billy Vlachos'
              github='https://github.com/lakylekidd'
              linkedin='https://www.linkedin.com/in/billy-vlachos' />
            <Contributor
              name='Yuri van Schaaik'
              linkedin='https://www.linkedin.com/in/yuri-van-schaaik-603006180'
              github='https://github.com/YvanSchaaik' />
            <Contributor
              name='Adrianus Cornet'
              linkedin='https://www.linkedin.com/in/adrianus-cornet-27390a172'
              github='https://github.com/AdrianusCornet' />
            <Contributor
              name='Kamaal Farah'
              linkedin='https://www.linkedin.com/in/adrianus-cornet-27390a172'
              github='https://github.com/AdrianusCornet' />
            <Contributor
              name='Nicola Urech'
              linkedin=''
              github='https://github.com/AdrianusCornet' />
            <Contributor
              name='Rejin Cusi'
              linkedin='https://www.linkedin.com/in/adrianus-cornet-27390a172'
              github='https://github.com/AdrianusCornet' />
            <Contributor
              name='Zorawar Singh'
              linkedin='https://www.linkedin.com/in/adrianus-cornet-27390a172'
              github='https://github.com/AdrianusCornet' />
          </Grid>
        </Grid>
      </div>
    )
  }
}
