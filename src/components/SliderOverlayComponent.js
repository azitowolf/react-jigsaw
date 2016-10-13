'use strict';

import React from 'react';

class SliderOverlayComponent extends React.Component {
  render() {
    var classes = "fade-overlay"
    this.props.direction == "right" ? classes += " right" : classes += " left";
    return (
      <div>
        <div {...this.props} className={classes}></div>
      </div>
    );
  }
}

SliderOverlayComponent.displayName = 'SliderOverlayComponent';

export default SliderOverlayComponent;
