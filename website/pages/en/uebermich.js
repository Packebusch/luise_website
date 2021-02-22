/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


const ABOUT = `
Nein, ich wollte nicht schon immer Schriftstellerin werden. Meeresbiologin, Frontfrau einer Indierock-Band, Naturschützerin. Die Idee für den Roman kam mir im Halbschlaf, und wer würde das Buch denn schreiben, wenn nicht ich selbst? Ich schob das Vorhaben vor mich her: Erstmal Master machen, dann eine Anstellung finden. Nach zwei Jahren erfolglosem Bewerben hatte ich genug. 
Ich suchte mir einen Teilzeitjob, der mich geistig und körperlich nicht erschöpfte und mir genug Zeit fürs Schreiben ließ. Ich schrieb auf Reisen, in Cafés, auf meinem Balkon, am See. Drei Jahre, in denen ich so sehr Gefallen am kreativen Schreiben fand, dass der nächste Roman in Planung ist.
Wenn ich nicht an neuen Texten sitze, verkaufe ich Kaffee und Kuchen im tollsten Café Leipzigs. Alternativ findet man mich auf der Matte im besten Kampfsportgym der Stadt.
`;

const BUTTON = `
  <div style="margin-top:10vh" class="pluginWrapper buttonWrapper"><a class="button" href="luisescholz.de">Zurück</a></div>
`;


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

    const SplashContainer = props => (
      <div style={{alignSelf:'flex-start', borderWidth:1}} className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper" style={{alignItems:'flex-start'}}>{props.children}</div>
        </div>
      </div>
    );

    const Block = props => (
        <GridBlock
          className="smallH2"
          align="justify"
          contents={props.children}
          layout={props.layout}
        />
    );

    return (
      <SplashContainer>
        <div
          className="marginTop"
          style={{textAlign: 'justify', marginTop:"5%"}}>
          <Block>
            {[
              {
                content: ABOUT + BUTTON,
                image: `/img/luise.png`,
                imageAlign: 'left',
                title: '',
              },
            ]}
          </Block>
        </div>
      </SplashContainer>
    );
  }
}


class About extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

module.exports = About;
