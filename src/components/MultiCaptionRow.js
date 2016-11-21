'use strict';

import React from 'react';
require('../styles/MultiCaptionRow.scss');


class MultiCaptionRowComponent extends React.Component{
  constructor(){
    super()
  }
  createMarkup(copy) { return {__html: copy}; };
  render(){
    var classes = "content-block";
    var source = this.props.source;

    //create the HTML
    var HTMLcontent = (
      <div className="content-block multi-caption-row">
        <span className="caption">
          <h3>{source.people.subBlocks[0].title}💩</h3>
          <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[0].text)}></p>
        </span>

        <span className="caption">
          <h3>{source.people.subBlocks[1].title}</h3>
          <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[1].text)}></p>
        </span>

        <span className="caption">
          <h3>{source.people.subBlocks[2].title}</h3>
          <p dangerouslySetInnerHTML={this.createMarkup(source.people.subBlocks[2].text)}></p>
        </span>
      </div>
      )

    return (<div>{HTMLcontent}</div>);
  }
}

MultiCaptionRowComponent.displayName = 'MultiCaptionRow';
export default MultiCaptionRowComponent;
