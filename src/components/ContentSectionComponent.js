'use strict';

import React from 'react';
require('../styles/ContentSection.scss');

const placeholderImage = require('../images/placeholder-image.svg');

class ContentSectionComponent extends React.Component{
  constructor(){
    super()
  }
  createMarkup(copy) { return {__html: copy}; };
  render(){
    var classes = "content-block";

    // change alignment for desktop layout
    switch (this.props.alignment) {
      case "center":
        classes += " align-center";
        break;
      case "right":
        classes += " align-right";
        break;
      case "left":
        classes += " align-left";
        break;
      default:
        return false;
    }


    return (
      <div className={classes}>
        <div className="content-block-image">
          <img src={placeholderImage}></img>
        </div>
        <span className="problem-image-text">
          <h2>Header Text</h2>
          <p dangerouslySetInnerHTML={this.createMarkup("hi this is some sample text that will describe this content block quickly and succinctly but also be really informative")}></p>
        </span>
      </div>)
  }
}

ContentSectionComponent.displayName = 'ContentSectionComponent';
export default ContentSectionComponent;
