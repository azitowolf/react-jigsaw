'use strict';


import React from 'react';
import NavComponent from './NavComponent';

require('../styles/Hero.scss');

class HeroComponent extends React.Component {
  render() {
    var source = this.props.problemsJson;
    return (
      <div className="hero-container">
      <NavComponent problemsJson={source} isMobile={this.props.isMobile} />
        <div className="hero">
          <div className="hero-body">
            <h1 className="hero-header">{source.header}</h1>
            <h3 className="hero-subheader">{source.subheader}</h3>
            <a className="work-with-us-button" href="#footer">{source.callToActionButtonText}</a>
          </div>
        </div>
      </div>
    );
  }
}

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
