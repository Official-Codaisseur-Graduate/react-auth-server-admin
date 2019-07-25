import React, { Component } from 'react';
import Contributor from './Contributor';

export default class Contributors extends Component {
  render() {
    return (
      <div className='contributors'>
        <Contributor
          name='Billy Vlachos'
          linkdin='https://github.com/lakylekidd'
          github='https://www.linkedin.com/in/billy-vlachos' />
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
