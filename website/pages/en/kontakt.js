/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Kontakt(props) {

  const pageUrl = (page) =>
			props.config.baseUrl +
			page;
  const Button = props => (
    <div style={{
      marginTop: "10vh"
    }} className="pluginWrapper buttonWrapper">
      <a className="button" href={props.href} target={props.target}>
      {props.children}
      </a>
    </div>
    );
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Kontakt</h1>
          </header>
          <p>Sie sind Literaturagent*in oder arbeiten in einem Verlag? Ich freue mich über über Angebote, denn noch ist das Buch nicht veröffentlicht.</p>
          <p>Email: luisescholz@posteo.de</p>
        </div>
        <Button href={pageUrl("index.html")}>
          Zurück
        </Button>
      </Container>
    </div>
  );
}

module.exports = Kontakt;
