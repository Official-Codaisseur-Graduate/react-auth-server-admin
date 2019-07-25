import React, { Component } from 'react'

export default class Contributor extends Component {
  render() {
    return (
      <div className='Contributor'>
        <h6>{this.props.name}</h6>
        <a href={this.props.linkdin}>LinkdIn</a>
        <a href={this.props.github}>GitHub</a>
      </div>
    )
  }
}
