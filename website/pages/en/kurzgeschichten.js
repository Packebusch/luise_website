/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Kurzgeschichten extends React.Component {
	render() {
		const {siteConfig} = this.props;
		const pageUrl = (page) =>
			this.props.config.baseUrl +
			page;
		
		const heading = {
			textAlign: "center", 
			fontSize: 24,   
			marginBottom: "5rem"
		};
		const content = {
			marginLeft: "20%",
			marginRight: "20%",
			textAlign: "justify", 
			fontSize: 16
		};
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
					<div style={heading} >
           				Kurzgeschichten
					</div>
					<div style={content}> 
						<div style={{marginBottom:5, fontSize:20}}>
							<Link href={pageUrl('cafe.html')}>
								Im Café
							</Link>
						</div>
						<div style={{marginBottom:5, fontSize:20}}>
							<Link href={pageUrl('matilda.html')}>
								Matilda
							</Link>
						</div>
						<div style={{marginBottom:5, fontSize:20}}>
							<Link href={pageUrl('tribadie.html')}>
								Tribadie
							</Link>
						</div>
                        <Button href={pageUrl('index.html')}>
							Zurück
						</Button>
					</div>
					
				</Container>
			</div>
		);
	}
}

module.exports = Kurzgeschichten;
