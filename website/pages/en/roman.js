/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const MarkdownBlock = require('docusaurus/lib/core/MarkdownBlock.js');
const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;



//  CONTENT ===> CHANGE ONLY HERE, LUISE!

const HEADING = 'Worum geht es in "binär"? - Ein fiktives Interview';
const SUMMARY = ` 
Als Tille sich in Lofi verliebt, weiß Tille nichts von Lofis Geheimnis: Lofi ist Teil der »Binären Bewegung«, einer Untergrundorganisation, die nach dem Zweigeschlechtersystem lebt. 
Lofi definiert sich als »Frau«. Lofi benutzt ausgestorbene Wörter, liest andere Bücher, schaut alte Filme und kann Tille davon überzeugen, ein »Mann« zu sein.
Was für Tille als Experiment startet, wird schon bald zu einem Lebensentwurf mit tiefgreifenden Folgen.

Ein hochaktuelles Debüt über Identitäten, Diskriminierung und die Grenzen persönlicher Freiheit.
`

const BUTTON = {
	url: "leseprobe.html",
	text: 'Zur Leseprobe',
};
const Image = props => (
	<div className="blockElement twoByGridBlock blockImage">
	  <a href={props.href}>
		<img alt={props.title} title={props.title} className="image" src={props.src} height="360"></img>
	  </a>
	</div>
	
);	  



class Roman extends React.Component {
	render() {
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
			<div className="docMainWrapper wrapper">
				<Container padding={["bottom", "top"]}>
					<div style={{display:'flex', padding:'5%'}}> 						
						<div style={{
							display:'block',
							width: '100%',
							align: 'right',
						}}>
							<Image title="Roman" src={'/img/binaerbook.png'}/>
							<i style={{marginTop:20, fontSize:12}}>
								{'Covergestaltung: Julika Prantner-Weber'}
								</i>
						</div>

						<div style={{
							display:'block',
							width: '100%',
						}}>
							<div>
								<h3>
								{'Eine Gesellschaft ohne binäre Geschlechterordnung – Utopie oder Chaos?'}
								</h3>
								<MarkdownBlock>{SUMMARY}</MarkdownBlock>
								
							</div>
							<div>
								<p style={{marginTop:20}}>
								{'Ab 28.4.23 erhältlich auf '}
								<a style={{
									color: 'blue', 
									textDecoration: 'underline'
									}} href={'https://www.bod.de/buchshop/'}>https://www.bod.de/buchshop/</a>
									{' oder per '}
									<a style={{
										color: 'blue', 
										textDecoration: 'underline'
									}} href={'mailto:luisekamisek@posteo.de'}>Email</a>
									{' zzgl. Versandkosten bestellbar.'}
								</p>
							</div>
							<div>
								<Button href={pageUrl(BUTTON.url)}>
									{BUTTON.text}
								</Button>
							</div>
						</div>
					</div>
					
					
					
				</Container>
			</div>
		);
	}
}

module.exports = Roman;
