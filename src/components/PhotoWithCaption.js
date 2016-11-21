'use strict';

import React from 'react';
require('../styles/PhotoWithCaption.scss');

const placeholderImage = require('../images/placeholder-image.svg');

class PhotoWithCaptionComponent extends React.Component{
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

    //reverse text and image if need be
    if (this.props.reverse) {
      classes += " reverse";
    }

    //create the HTML

    var HTMLcontent = (
      <div className={classes}>
      <div className="content-block-image">
        <img src={placeholderImage}></img>
      </div>
      <span className="problem-image-text">
        <h2>Header Text</h2>
        <p dangerouslySetInnerHTML={this.createMarkup("hi this is some sample text that will describe this content block quickly and succinctly but also be really informative")}></p>
      </span>
      </div>
    )

    if (this.props.reverse) {
       HTMLcontent = (
         <div className={classes}>
        <span className="problem-image-text">
          <h2>Header Text</h2>
          <p dangerouslySetInnerHTML={this.createMarkup("hi this is some sample text that will describe this content block quickly and succinctly but also be really informative")}></p>
        </span>
        <div className="content-block-image">
          <img src={placeholderImage}></img>
        </div>
        </div>
      )
    }

    return (<div>{HTMLcontent}</div>);
  }
}

PhotoWithCaptionComponent.displayName = 'PhotoWithCaption';
export default PhotoWithCaptionComponent;
