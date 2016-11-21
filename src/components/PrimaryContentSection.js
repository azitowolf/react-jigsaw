// This is an example higher-level component that incorporates several types of content section components
// to create a whole "primary" page content section.
// 这个零件有一些小的零件

'use strict';

import React from 'react';
import PhotoWithCaptionComponent from './PhotoWithCaption';
import MultiCaptionRowComponent from './MultiCaptionRow';

require('../styles/PrimaryContentSection.scss');
const alexImage = require('../images/Desktop/LayoutImages/Alex.jpg');
const teamImage = require('../images/Desktop/LayoutImages/Coding.jpg');
const problemsImage = require('../images/Desktop/LayoutImages/team.jpg');
const cameraImage = require('../images/Perks/Camera.png');
const gretchenImage = require('../images/Desktop/LayoutImages/Gretchen.jpg');
const buildingImage = require('../images/Desktop/LayoutImages/office.jpg');
const purposeImage = require('../images/Desktop/LayoutImages/Purpose1.jpg');
const missionImage = require('../images/Desktop/LayoutImages/Mission2.jpg');

class PrimaryContentSection extends React.Component{
  propTypes:{
    toggleOverlay: React.PropTypes.func
  }
  createMarkup(copy) { return {__html: copy}; };
  render(){
    var source = this.props.problemsJson;
    return (
      <div className="primary-content-section">

        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="center" />
        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="left" />
        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="right" />
        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="center" reverse="true" />
        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="left" reverse="true" />
        <PhotoWithCaptionComponent source={this.props.problemsJson} alignment="right" reverse="true" />

        <MultiCaptionRowComponent source={this.props.problemsJson} />
        <MultiCaptionRowComponent source={this.props.problemsJson} />
        <MultiCaptionRowComponent source={this.props.problemsJson} />

    </div>);
  }
}

PrimaryContentSection.displayName = 'PrimaryContentSection';

// Uncomment properties you need
// ImageAndContentSectionComponent.propTypes = {};
// ImageAndContentSectionComponent.defaultProps = {};

export default PrimaryContentSection;
