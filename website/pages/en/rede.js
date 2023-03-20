/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

//  CONTENT ===> CHANGE ONLY HERE, LUISE!

const HEADING = '"Gemahlin kommt nun mal nicht von Malen" Ungehaltene Rede';

const COPYRIGHT = 'Autorin: Luise Kamisek. Alle Rechte vorbehalten.';
const BUTTON = {
	url: 'kurzgeschichten.html',
	text: 'Zurück',
};

class Rede extends React.Component {
	render() {
		const {siteConfig} = this.props;
		const pageUrl = (page) =>
			this.props.config.baseUrl +
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
			<div className="mainContainer">
				<Container padding={["bottom", "top"]}>
					<div className="heading">
           				{HEADING}
					</div>
					<div className="content"> 
            <a style={{
				color: 'blue', 
				textDecoration: 'underline'
				}} href={'https://www.youtube.com/watch?v=gwvi2-HA9Uc'}>Link zum Video</a>
						<p style={{
                marginTop: "1rem",
                fontStyle: "italic"
            }}>
              {COPYRIGHT}
            </p>
            <Button href={pageUrl(BUTTON.url)}>
							{BUTTON.text}
						</Button>
					</div>
					
				</Container>
			</div>
		);
	}
}

module.exports = Rede;
