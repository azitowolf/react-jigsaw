'use strict';

import React from 'react';
import ProblemCard from './ProblemCardComponent';
import SliderOverlay from './SliderOverlayComponent';

require('../styles/Slider.scss');

var Slider = require('react-slick');

class SliderComponent extends React.Component{
  render() {
    var rightOverlay = <SliderOverlay direction="right" />;
    var leftOverlay = <SliderOverlay direction="left" />;
    var screenWidth = window.innerWidth;
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: screenWidth > 715 ? 3:1,
      slidesToScroll: 1,
      centerMode: false,
      arrows:true,
      draggable: false,
      nextArrow: rightOverlay,
      prevArrow: leftOverlay,
      swipe:false,
      accessibility: true,
      className: true
    };

    var problemCardsArray = this.props.problemsJson.problemList.map(problem => <div><ProblemCard title={problem.problemNumber} description={problem.problemStatement}/></div>);

    return (<div className="slider-component">
      <Slider {...settings}>
        {problemCardsArray}
      </Slider>
    </div>
    );
  }
};

SliderComponent.displayName = 'SliderComponent';

export default SliderComponent;
