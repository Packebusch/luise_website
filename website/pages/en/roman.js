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

const HEADING = 'Worum geht es in "binär"? - Ein fiktives Interview';
const INTERVIEW = [
	{ 
		question: '„Binär“ ist eine Utopie. Wie unterscheidet sich die Gesellschaft in „binär“ von unserer?				',
		answer: 'In „binär“ wird nicht mehr zwischen Mann und Frau unterschieden. Ähnlich wie die Unterteilung in Rassen gilt die Unterteilung in Geschlechter wissenschaftlich gesehen als überholt und als diskriminierend. Alle Charaktere bekommen den Artikel „der“, weil es im Deutschen „der Mensch“ heißt.',
	},
	{ 
		question: 'Das wäre nicht für alle Menschen utopisch...',
		answer: 'Zumindest genießen die Menschen in „binär“ mehr persönliche und rechtliche Freiheiten als wir. Es geht um Toleranz und das Abschaffen von Stereotypen. Natürlich ist diese Gesellschaft nicht ideal. Man sollte sie auf jeden Fall auch kritisch betrachten. Sexismus bekommt eben den gleichen Stellenwert wie Rassismus oder Antisemitismus. Damit kann jede Person, die das Buch liest, machen was sie will. ',
	},
	{ 
		question: 'Wie kam es zur Abschaffung der Geschlechter?',
		answer: 'Viel erfährt man nicht, aber es hat eine Revolution stattgefunden. Die ist allerdings schon so lange her, dass es niemanden mehr gibt, der die Revolution oder Geschlechterdiskriminierung miterlebt hat.',
	},
	{ 
		question: 'Das Buch beginnt mit einer Beschreibung von Tille. Wer ist das? ',
		answer: 'Tille ist Ende zwanzig und arbeitet in einem Fitnessstudio. Nebenbei plant er die Gründung seines eigenen Kampfsportstudios. Er verliebt sich in Lofi, der Mitglied in der „Binären Bewegung“ ist.',
	},
	{ 
		question: 'Was ist die „Binäre Bewegung“?',
		answer: 'Die Binäre Bewegung ist eine Art Untergrundorganisation, die so lebt wie wir, also mit Geschlechtsidentität. Sie ist ziemlich gut organisiert, mit Ferienfreizeiten, Jugendclub, eigenem Verlag, in dem Bücher aus unserer Zeit neu aufgelegt werden und so weiter. ',
	},
	{ 
		question: 'Tille verliebt sich also in einen Menschen, der sich eine Geschlechtsidentität gibt?',
		answer: 'Genau, Lofi bezeichnet sich als Frau.',
	},
	{ 
		question: 'Was macht das mit Tille?',
		answer: 'Zu viel möchte ich nicht verraten, aber Tille ist ganz schön verliebt. Und wenn er Lofi aufgrund seiner Mitgliedschaft in der Binären Bewegung verlassen würde, wäre das Buch ja ziemlich kurz. Es prallen zwei Weltanschauungen aufeinander, was zwangsläufig Konflikte mit sich bringt. ',
	},
	{ 
		question: 'Woran werden diese unterschiedlichen Weltanschauungen noch deutlich?',
		answer: 'In der Sprache, denn das Buch ist hauptsächlich geschlechtsneutral geschrieben. Im Deutschen ist das nicht leicht, weil drei verschiedene Artikel existieren und es zu jeder Berufs-, Verwandtschafts- oder Beziehungsbezeichnung einen männlichen und einen weiblichen Begriff gibt. Ich habe mir darum viele geschlechtsneutrale Wörter ausdenken oder Substantive durch Relativsätze oder Partizipien ergänzen müssen. Das ist etwas gewöhnungsbedürftig, aber es ging für mich nicht anders. Die Mitglieder der Binären Bewegung reden natürlich so wie wir es kennen, in geschlechtsspezifischer Sprache, die aber eigentlich nicht mehr benutzt wird.',
	},
	{ 
		question: 'Ist geschlechtsspezifische Sprache einfach ausgestorben?',
		answer: 'Mehr als das: Wörter wie Mann, Frau, Schwester und so weiter werden als genauso diskriminierend betrachtet wie zum Beispiel das N-Wort. Ein radikales Gedankenexperiment eben.',
	},
];
const BUTTON = {
	url: "leseprobe.html",
	text: 'Leseprobe',
};



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
			<div className="docMainWrapper wrapper">
				<Container padding={["bottom", "top"]}>
					<div style={heading} >
					 {HEADING}
					</div>
					<div className="content"> 
						{INTERVIEW.map(element => (
							<div>
								<div style={question}>
									{element.question}
								</div>
								<div style={answer}>
									{element.answer}
								</div>
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

module.exports = Roman;
