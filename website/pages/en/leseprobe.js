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

const HEADING = 'Ausschnitt aus Kapitel 4';
const CONTENT = 'Nachdem sie sich angezogen und noch etwas zu trinken geholt hatten, holte Lofi tief Luft und begann zu erzählen: „Hast du schon einmal etwas von der Binären Bewegung gehört?“ Tille schüttelte den Kopf. „Die Binäre Bewegung kämpft dafür, dass es wieder ein Zweigeschlechtersystem gibt, also zwischen Frauen und Männern unterschieden wird.“ „Wie vor der Regenbogen-Revolution.“ „Genau. Ich bin dort Mitglied. Und meine besten Bezugsmenschen auch.“ „Und was heißt das genau?“ „Das heißt, dass ich selber wie vor der Revolution leben möchte. Ich sehe mich als Frau, es gehört zu meiner Identität. Wir, also die Binäre Bewegung, ist der Überzeugung, dass die Revolution diesen wichtigen Teil unserer Identität ausgelöscht hat. Nur als „Mensch“ wahrgenommen zu werden, das reicht uns nicht. Ich möchte, dass die Menschen um mich herum mich als Frau sehen. Weil ich eine Frau BIN. Ich möchte, dass man über mich als „sie“ spricht, weil es „die Frau“ heißt und nicht als „er“ wegen „der Mensch“. Und ich möchte eine Familie gründen und meine Kinder mit diesen Werten erziehen.“ Tille schwieg. Sein Gehirn war gleichzeitlich leer und voll. „Du musst dazu jetzt nichts sagen. Ich bitte dich nur, das erstmal nicht zu bewerten. Wenn du möchtest, erzähle ich dir mehr über die Beweggründe und Ziele der Binären Bewegung. Aber wenn dir das heute zu viel ist, dann ist es vielleicht besser, wenn du heute Nacht bei dir schläfst und wir an einem anderen Tag darüber reden. Ich bin kurz im Bad.“ Lofi stand auf und berührte im Vorbeigehen mit seiner Hand Tilles Schulter. Jetzt war Tille allein in dieser großen, fremden Wohnung von diesem Menschen, dem er kurz vorher „ich liebe dich“ ins Ohr geflüstert hatte. Wenn er mir gebeichtet hätte, er beginge Auftragsmorde, könnte ich besser damit umgehen, dachte er. Darüber weiß man wenigstens was. Aber über die Binäre Bewegung wusste er nichts. Er wusste auch über das Zweigeschlechtersystem nur das, was er in der Schule gelernt hatte. Er wusste, dass es Menschen gab, die sich die Gesellschaft vor der Revolution zurückwünschten. Aber diese Menschen hatte er immer als nostalgisch abgetan. Niemals hätte er gedacht, dass sie sich organisierten! Und niemals hatte er gedacht, dass er jemanden kennenlernen würde, geschweige denn, dass er jemanden LIEBEN würde, der die Erfolge der Regenbogen-Revolution ablehnte. Tille schossen dutzende Fragen durch den Kopf: Warum Lofi? Wie fühlt man sich als Frau oder Mann? Warum erzählte er es ihm gerade heute? Es war kurz vor Mitternacht! Sollte er aufstehen und gehen? Machte es Lofi zu einem anderen Menschen?';
const COPYRIGHT = 'Autorin: Luise Scholz. Alle Rechte vorbehalten.';
const BUTTON = {
	url: "roman.html",
	text: 'Zurück',
}


class Leseprobe extends React.Component {
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
                        {CONTENT}
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

module.exports = Leseprobe;
