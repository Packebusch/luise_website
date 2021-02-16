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
        
        <div className="blockElement twoByGridBlock blockImage">
          <a href={props.href}>
            <img title={props.title} className="image" src={props.src} height="360"></img>
          </a>
        </div>
        
    );

    return (
        <div style={{marginTop:"2%"}} className="gridBlock center">
          <Image title="Roman" href={pageUrl('roman.html')}  src={siteConfig.pictures.roman}/>
          <Image title="Über mich" href={pageUrl('uebermich.html')} src={siteConfig.pictures.about}/>
          <Image title="Kurzgeschichten" href={pageUrl('kurzgeschichten.html')} src={siteConfig.pictures.shortStories}/>
          <Image title="Kontakt" href={pageUrl('kontakt.html')} src={siteConfig.pictures.contact}/>
        </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    return (
      <HomeSplash siteConfig={siteConfig} language={language} />
    );
  }
}

module.exports = Index;
