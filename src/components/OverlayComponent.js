'use strict';

import React from 'react';

require('../styles/Overlay.scss');

class OverlayComponent extends React.Component {
  render() {
    return (
      <div className="overlay-component" onClick={this.props.toggleOverlay}>
        <h1 className="overlay-header">{this.props.overlayText}</h1>
      </div>
    );
  }
}

OverlayComponent.displayName = 'OverlayComponent';

export default OverlayComponent;
