'use strict';

import React from 'react';

require('../styles/Footer.scss');

class FooterComponent extends React.Component {
  createMarkup(copy) { return {__html: copy}; };
  render() {
    var source = this.props.problemsJson;
    return (
      <div>
      <div id="footer" className="footer-wrapper">
        <div className="footer-component">
          <h2 className="footer-title">{source.footer.title}</h2>
          <h3>{source.footer.text}</h3>
          <div className="footer-job-categories">
            <ul>
              <li className="job-category">{source.footer.roles[0].text}</li>
              <li className="footer-link"><btn className="work-with-us-button"><a href={source.footer.roles[0].link} target="blank" data-target="tech-ux-roles">{source.footer.roles[0].title}</a></btn></li>
            </ul>
            <ul>
              <li className="job-category">{source.footer.roles[1].text}</li>
              <li className="footer-link"><btn className="work-with-us-button"><a href={source.footer.roles[1].link} target="blank" data-target="tech-developer-roles">{source.footer.roles[1].title}</a></btn></li>
            </ul>
            <ul>
              <li className="job-category">{source.footer.roles[2].text}</li>
              <li className="footer-link"><btn className="work-with-us-button"><a href={source.footer.roles[2].link} target="blank" data-target="tech-product-roles">{source.footer.roles[2].title}</a></btn></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright" dangerouslySetInnerHTML={this.createMarkup(source.footer.copyright)}></div>
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;
