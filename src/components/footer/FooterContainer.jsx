import React, { Component } from 'react';
import './FooterContainer.css';
import Contributors from './Contributors'

export default class FooterContainer extends Component {
  render() {
    return (
      <footer>
        <Contributors />
      </footer>
    )
  }
}
