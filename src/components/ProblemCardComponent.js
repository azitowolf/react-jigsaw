'use strict';

import React from 'react';

require('../styles/ProblemCard.scss');

class ProblemCardComponent extends React.Component{
  render(){
    return (
    <div className="problem-card">
        <div className="description">
          <b>Problem No. {this.props.title}</b>
          <h2 className="card-detail">{this.props.description}</h2>
        </div>
    </div>
    );
  }
}

ProblemCardComponent.displayName = 'ProblemCardComponent';

export default ProblemCardComponent;
