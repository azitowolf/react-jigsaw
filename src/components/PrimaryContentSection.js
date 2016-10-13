// This is an example higher-level component that incorporates several types of content section components
// to create a whole "primary" page content section.
// 这个零件有一些小的零件

'use strict';

import React from 'react';
import ContentSection from './ContentSectionComponent';

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

        <ContentSection source={this.props.problemsJson} alignment="center" />
        <ContentSection source={this.props.problemsJson} alignment="left" />
        <ContentSection source={this.props.problemsJson} alignment="right" />

        <div className="content-block alex-zito-wolf">
          <div className="alex-zito-wolf-image" onClick={() => this.props.toggleOverlay(source.perkCaptions.passport)}>
            <img src={alexImage}></img>
          </div>
          <span className="alex-zito-wolf-text">
          <h3>{source.pictureCaptions[1].title}</h3>
          <p dangerouslySetInnerHTML={this.createMarkup(source.pictureCaptions[1].text)}></p>
          </span>
        </div>

        <div className="content-block real-people">
          <span className="real-people-text">
            <h2>{source.people.title}</h2>
            <p dangerouslySetInnerHTML={this.createMarkup(source.people.text)}></p>
          </span>
          <div className="real-people-image" onClick={() => this.props.toggleOverlay(source.perkCaptions.shoes)}>
            <img src={problemsImage}></img>
          </div>
        </div>

        <div className="content-block people-paragraphs">
          <span className="people-give-a-shit">
            <h3>{source.people.subBlocks[0].title}💩</h3>
            <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[0].text)}></p>
          </span>

          <span className="career-growth">
            <h3>{source.people.subBlocks[1].title}</h3>
            <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[1].text)}></p>
          </span>

          <span className="good-people">
            <h3>{source.people.subBlocks[2].title}</h3>
            <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[2].text)}></p>
          </span>
        </div>

        <div className="content-block camera-perk" onClick={() => this.props.toggleOverlay(source.perkCaptions.camera)}>
          <img className="camera-perk-image" src={cameraImage}></img>
        </div>

        <div className="content-block bottom-align">
          <div className="image-with-legend gretchen-cary">
            <div className="gretchen-cary-image">
              <img src={gretchenImage}></img>
            </div>
            <span className="gretchen-cary-text">
              <h3>{source.pictureCaptions[4].title}</h3>
              <p dangerouslySetInnerHTML={this.createMarkup(source.pictureCaptions[4].text)}></p>
            </span>
          </div>
          <div className="image-with-legend physical-office">
            <div className="physical-office-image" onClick={() => this.props.toggleOverlay(source.perkCaptions.flashcards)}>
              <img src={buildingImage}></img>
            </div>
            <span className="physical-office-text">
              <h3>{source.pictureCaptions[3].title}</h3>
              <p dangerouslySetInnerHTML={this.createMarkup(source.pictureCaptions[3].text)}></p>
            </span>
          </div>
        </div>

        {
          !this.props.isMobile ?
          <div className="content-block">
            <div className="girl-looking-up-image">
              <img src={purposeImage}></img>
            </div>
          </div>
          :
          ''
        }


        <div className="content-block purpose-behind">
          <div className="purpose-behind-image" onClick={() => this.props.toggleOverlay(source.perkCaptions.calculator)}>
            <img src={missionImage}></img>
          </div>
          <span className="purpose-behind-text">
            <h2>{source.mission.title}</h2>
            <p dangerouslySetInnerHTML={this.createMarkup(source.mission.text)}></p>
          </span>
        </div>

    </div>);
  }
}

PrimaryContentSection.displayName = 'PrimaryContentSection';

// Uncomment properties you need
// ImageAndContentSectionComponent.propTypes = {};
// ImageAndContentSectionComponent.defaultProps = {};

export default PrimaryContentSection;
