/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + doc;
  }

  render() {
    return (
      <footer className="row" id="footer">
        <section className="sitemap">
          <div style= {{
            margin: "1rem"
          }}>
            <a href={this.pageUrl('impressum.html', this.props.language)}>
              Impressum
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
