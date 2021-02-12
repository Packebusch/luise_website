/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${doc}`;
    const pageUrl = page => baseUrl + page;
    
    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper">{props.children}</div>
        </div>
      </div>
    );

    
    const Image = props => (
      <div className="pluginRowBlock imageWrapper">
        <a href={props.href}>
          <img title={props.title} className="image" src={props.src} height="300"></img>
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div style={{marginTop:"5%"}}className="row">
          <Image title="Roman" href={pageUrl('roman.html')} style={{marginRight:100, marginTop: -100}} src={siteConfig.pictures.roman}/>
          <Image title="Über mich" href={pageUrl('about.html')} style={{marginLeft:-100, marginTop: -50}} src={siteConfig.pictures.about}/>
        </div>
        <div className="row">
          <Image title="Kurzgeschichten" href={pageUrl('kurzgeschichten.html')} src={siteConfig.pictures.shortStories}/>
          <Image title="Kontakt" href={pageUrl('contact.html')} style={{marginLeft:100, marginTop: 50}} src={siteConfig.pictures.contact}/>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    return (
      <div id="foo" style={{
        height: "100vh",
        flex: 1
      }}>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = Index;
