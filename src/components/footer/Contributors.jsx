import React, { Component } from 'react';
import Contributor from './Contributor';

export default class Contributors extends Component {
  render() {
    return (
      <div className='contributors'>
        <h1>Contributors</h1>
        <Contributor
          name='Billy Vlachos'
          github='https://github.com/lakylekidd'
          linkdin='https://www.linkedin.com/in/billy-vlachos' />
        <Contributor
          name='Yuri van Schaaik'
          linkdin='https://www.linkedin.com/in/yuri-van-schaaik-603006180'
          github='https://github.com/YvanSchaaik' />
        <Contributor
          name='Adrianus Cornet'
          linkdin='https://www.linkedin.com/in/adrianus-cornet-27390a172'
          github='https://github.com/AdrianusCornet' />
      </div>
    )
  }
}
