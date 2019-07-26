import React, { Component } from 'react';
import gitHubImg from "./../../assets/images/github.svg";
import linkedInImg from "./../../assets/images/linked-in.svg";
import './Contributor.css';

export default class Contributor extends Component {
  render() {
    return (
      <div className='contributor-item'>
        <h1>{this.props.name}</h1>
        <div className="icon-container">         
          <a href={this.props.linkdin}>
            <img srcSet={linkedInImg} alt=""/>  
          </a>  
          <a href={this.props.github}>
            <img srcSet={gitHubImg} alt=""/> 
          </a>
        </div>       
      </div>
    )
  }
}
