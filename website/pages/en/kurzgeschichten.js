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

const HEADING = 'Kurzgeschichten';
const KURZGESCHICHTEN = [
	{
		name: 'Im Café',
		link: 'cafe.html',
	},
	{
		name: 'Matilda',
		link: 'matilda.html',
	},
	{
		name: 'Tribadie',
		link: 'tribadie.html',
	},
];
const BUTTON = {
	text: 'Zurück',
	url: 'index.html'
};


class Kurzgeschichten extends React.Component {
	render() {
		const {siteConfig} = this.props;
		const pageUrl = (page) =>
			this.props.config.baseUrl +
			page;
		
		const Link = props => (
			<a className="link" href={props.href}>
				{props.children}
			</a>
		)
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
						{KURZGESCHICHTEN.map(element => (
							<div style={{marginBottom:5, fontSize:20}}>
								<Link href={pageUrl(element.link)}>
									{element.name}
								</Link>
							</div>
						))}
                        <Button href={pageUrl(BUTTON.url)}>
							{BUTTON.text}
						</Button>
					</div>
					
				</Container>
			</div>
		);
	}
}

module.exports = Kurzgeschichten;
