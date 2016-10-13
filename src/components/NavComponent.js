'use strict';

import React from 'react';

require('../styles/Nav.scss');
const stockLogo = require('../images/stock-logo.svg');

class NavComponent extends React.Component{

  constructor(){
    super()
    this.state={
      belowHero:false
    }
    this.checkHeight = this.checkHeight.bind(this);

    window.addEventListener("scroll", this.checkHeight);
  }
  checkHeight(){
    var heroElementHeight = document.getElementsByClassName('hero')[0].offsetHeight;
    var scrollFromTop = window.scrollY;
    if (scrollFromTop >= heroElementHeight){
      this.setState({belowHero:true});
    } else {
      this.setState({belowHero:false});
    }
  }
  render(){
    var source = this.props.problemsJson;
    var navClasses = "sticky-top-nav-wrapper";
    if(this.state.belowHero){navClasses += ' belowHero'};
    return (
    <div className="both-navs">

      <div className="top-nav-wrapper">
        <div className="top-nav">
          <div className="ef-logo"><img src={stockLogo} /></div>
        </div>
      </div>

      <div className={navClasses}>
        <div className="top-nav">
          <div className="ef-logo"><img src={this.props.isMobile ? stockLogo : stockLogo} /></div>
          <a className="work-with-us-button" href="#footer">{source.callToActionButtonText}</a>
        </div>
      </div>
    </div>
    );
  }
}

NavComponent.displayName = 'NavComponent';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default NavComponent;
