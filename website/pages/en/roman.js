/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Roman extends React.Component {
	render() {
		const {siteConfig} = this.props;
		const pageUrl = (page) =>
			this.props.config.baseUrl +
			page;
		
		const heading = {
			textAlign: "center", 
			fontSize: 24, 
			marginBottom: "2rem"
		};
		const subHeading = {
			textAlign: "left", 
			fontSize: 20,
			marginBottom: "1rem"
		};
		const interview = {
			marginLeft: "20%",
			marginRight: "20%",
			textAlign: "left", 
			fontSize: 16
		};
		const question = {
			fontWeight: "bold", 
		};
		const answer = {
			fontWeight: "regular", 

		};
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
					 Interview über den Roman "binär"
					</div>
					<div style={interview}> 
						<div style={question}>
							„Binär“ ist eine Utopie. Wie unterscheidet sich die Gesellschaft in „binär“ von unserer?				
						</div>
						<div style={answer}>
							In „binär“ wird nicht mehr zwischen Mann und Frau unterschieden. Ähnlich wie die Unterteilung in Rassen gilt die Unterteilung in Geschlechter wissenschaftlich gesehen als überholt und als diskriminierend. Alle Charaktere bekommen den Artikel „der“, weil es im Deutschen „der Mensch“ heißt.
						</div>
						<div style={question}>
							Das wäre nicht für alle Menschen utopisch...
						</div>
						<div style={answer}>
							Zumindest genießen die Menschen in „binär“ mehr persönliche und rechtliche Freiheiten als wir. Es geht um Toleranz und das Abschaffen von Stereotypen. Natürlich ist diese Gesellschaft nicht ideal. Man sollte sie auf jeden Fall auch kritisch betrachten. Sexismus bekommt eben den gleichen Stellenwert wie Rassismus oder Antisemitismus. Damit kann jede Person, die das Buch liest, machen was sie will. 
						</div>
						<div style={question}>
							Wie kam es zur Abschaffung der Geschlechter?
						</div>
						<div style={answer}>
							Viel erfährt man nicht, aber es hat eine Revolution stattgefunden. Die ist allerdings schon so lange her, dass es niemanden mehr gibt, der die Revolution oder Geschlechterdiskriminierung miterlebt hat.
						</div>
						<div style={question}>
							Das Buch beginnt mit einer Beschreibung von Tille. Wer ist das? 
						</div>
						<div style={answer}>
							Tille ist Ende zwanzig und arbeitet in einem Fitnessstudio. Nebenbei plant er die Gründung seines eigenen Kampfsportstudios. Er verliebt sich in Lofi, der Mitglied in der „Binären Bewegung“ ist.
						</div>
						<div style={question}>
							Was ist die „Binäre Bewegung“?
						</div>
						<div style={answer}>
							Die Binäre Bewegung ist eine Art Untergrundorganisation, die so lebt wie wir, also mit Geschlechtsidentität. Sie ist ziemlich gut organisiert, mit Ferienfreizeiten, Jugendclub, eigenem Verlag, in dem Bücher aus unserer Zeit neu aufgelegt werden und so weiter. 
						</div>
						<div style={question}>
							Tille verliebt sich also in einen Menschen, der sich eine Geschlechtsidentität gibt?
						</div>
						<div style={answer}>
							Genau, Lofi bezeichnet sich als Frau.
						</div>
						<div style={question}>
							Was macht das mit Tille?
						</div>
						<div style={answer}>
							Zu viel möchte ich nicht verraten, aber Tille ist ganz schön verliebt. Und wenn er Lofi aufgrund seiner Mitgliedschaft in der Binären Bewegung verlassen würde, wäre das Buch ja ziemlich kurz. Es prallen zwei Weltanschauungen aufeinander, was zwangsläufig Konflikte mit sich bringt. 
						</div>
						<div style={question}>
							Woran werden diese unterschiedlichen Weltanschauungen noch deutlich?
						</div>
						<div style={answer}>
							In der Sprache, denn das Buch ist hauptsächlich geschlechtsneutral geschrieben. Im Deutschen ist das nicht leicht, weil drei verschiedene Artikel existieren und es zu jeder Berufs-, Verwandtschafts- oder Beziehungsbezeichnung einen männlichen und einen weiblichen Begriff gibt. Ich habe mir darum viele geschlechtsneutrale Wörter ausdenken oder Substantive durch Relativsätze oder Partizipien ergänzen müssen. Das ist etwas gewöhnungsbedürftig, aber es ging für mich nicht anders. Die Mitglieder der Binären Bewegung reden natürlich so wie wir es kennen, in geschlechtsspezifischer Sprache, die aber eigentlich nicht mehr benutzt wird.
						</div>
						<div style={question}>	
							Ist geschlechtsspezifische Sprache einfach ausgestorben?
						</div>
						<div style={answer}>
							Mehr als das: Wörter wie Mann, Frau, Schwester und so weiter werden als genauso diskriminierend betrachtet wie zum Beispiel das N-Wort. Ein radikales Gedankenexperiment eben.
						</div>
						<Button href={pageUrl("leseprobe.html")}>
							Leseprobe
						</Button>
					</div>
					
				</Container>
			</div>
		);
	}
}

module.exports = Roman;
