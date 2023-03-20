/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const MarkdownBlock = require('docusaurus/lib/core/MarkdownBlock.js');

//  CONTENT ===> CHANGE ONLY HERE, LUISE!

const HEADING = 'Erstes Kapitel';
const CONTENT = `
Tilles Gang war typisch für Menschen, die exzessiv Kampfsport betrieben. Tille lief stets breitbeinig, der Oberkörper rotierte auffällig mit jedem Schritt. Wenn Tille stand, war der rechte Fuß leicht vor, der linke hinter Tilles Körper – Tille kämpfte in der Rechtsauslage. Das breite Kreuz steckte meistens in engen, einfachen T-Shirts, die schlanken Waden am liebsten in bunten Leggings. Die wachsamen braunen Augen, das Schmunzeln auf den Lippen und die gepflegten Finger waren das sensible Gegenstück zu Tilles definiertem Körper und den kurz geschorenen Haaren, die momentan wasserstoffblond gefärbt waren und dadurch einen charmanten Kontrast zu Tilles Hautfarbe darstellten. \ 
An der linken Augenbraue erinnerte eine auffällige Narbe an einen Kickboxkampf vor fünf Jahren. Tille hatte ihn mit einem Knock-out gewonnen, aber der Cut hatte genäht werden müssen. Seitdem wuchsen an dieser Stelle keine dunklen Haare mehr. Nach einem anderen Kampf war das Nasenbein nur noch halbwegs gerade zusammengewachsen und verlieh den sonst gleichmäßigen Gesichtszügen etwas Asymmetrisches. \ 
Tille arbeitete in einem Fitnessstudio. Dort war es eher Regel statt Ausnahme, dass mit Tille geflirtet wurde und Tille machte es Spaß, darauf einzugehen. Dass Tille eine gewisse Kühle entgegengebracht wurde, passierte selten. Und Tilles erste Begegnung mit Lofi war so distanziert, dass es Tille fast ein wenig verunsicherte. \ 
Tille hatte gerade Tresen-Schicht, als Lofi sich im Fitnessstudio anmelden wollte. Sofort bemerkte Tille, dass an Lofi irgendwas anders als bei anderen Menschen war. \ 
Lofi schien nicht unbedingt schlechte Laune zu haben – zu einem Lächeln konnte Tille Lofi das ganze Gespräch über trotzdem nicht bewegen. Es hatte den Anschein, als gäbe es Lofis Lächeln nicht einfach so; es musste verdient werden. Und offensichtlich war Lofi der Meinung, dass Tille es (noch) nicht verdient hatte. \ 
Tille wollte Lofi einen Faustgruß über den Tresen geben, doch dann befürchtete Tille, dass die Geste unerwidert bleiben würde und entschied sich dagegen.  \ 
»Hey, ich bin Tille und wer bist du?« \ 
»Lofi.« \ 
»Hast du bei uns schon mal ein Probetraining gemacht?« \ 
»Ich brauche kein Probetraining, sondern möchte mich direkt anmelden. Ich hab nur zwei Fragen.« \ 
»Klar, schieß los.« Tille gab sich lässig wie immer, während Lofi weiterhin kühl vorm Tresen stand. \ 
»Gibt es Einzelkabinen in der Umkleide und in den Duschen?« \ 
»Ähm … ja, jeweils zwei.« \ 
»Kann man sich die Menschen, die einen massieren, selbst aussuchen oder werden sie zugeteilt?« \ 
»Nein, du kannst selbstverständlich aussuchen, wer dich massiert.« \ 
»Okay. Dann möchte ich, dass die Jahresmitgliedschaft ab heute gültig ist.«  \ 
Tille reichte Lofi das Formular zum Ausfüllen. \ 
»Außerdem brauch ich ein Foto von dir. Das können wir auch gleich machen. Wenn du sofort anfangen möchtest zu trainieren, mach ich währenddessen deinen Ausweis fertig. Den kannst du nach dem Training abholen. Möchtest du einen Willkommens-Eiweiß-Shake? Gibts in Erdbeere, Himbeere …«  \ 
Lofi verneinte und gab Tille mit einem Blick zu verstehen, dass Tille still sein sollte, damit Lofi in Ruhe das Formular ausfüllen konnte. Dann gingen sie in den Besprechungsraum, um das Foto zu machen. Tilles Bauchgefühl sagte, Lofi zum Lächeln zu animieren würde nicht nur sinnlos, sondern auch unangenehm werden, darum schwieg Tille. \ 
»Bist du zufrieden mit dem Foto?« Tille zeigte Lofi das Bild auf der Kamera, aber Lofi schaute nicht hin. \ 
»Ihr sollt mich doch darauf identifizieren, oder nicht?« \ 
»Ähm, ja. Gut, also nehmen wir das.« \ 
»Na dann.« Lofi stand auf. \ 
»Wo sind die Umkleiden?« \ 
»Ähm … gleich am Eingang links.« Lofi ließ Tille im Raum stehen.  \ 
Warum die Frage nach Einzelkabinen? Eine so selbstbewusst wirkende Person hatte doch sicher kein Problem damit, sich vor anderen Menschen umzuziehen oder zu duschen? Tille betrachtete Lofis Foto. Vielleicht hatte Lofi peinliche Tattoos aus der Jugend? \ 
Dann überflog Tille das ausgefüllte Formular: Lofi war drei Jahre älter als Tille. Lofi hatte nicht nach den Gebühren gefragt. Spielte Geld keine Rolle?  \ 
Bis zum Feierabend sah Tille Lofi hin und wieder an verschiedenen Geräten. Zuerst dreißig Minuten Laufband. Danach Hanteln und Beinpresse. Tille konnte vom Tresen aus nicht erkennen, welche Gewichte Lofi benutzte, aber Lofi wirkte stark und athletisch. Lofi hatte die ganze Zeit Kopfhörer in den Ohren. \ 
Tille hätte Lofi den Mitgliedsausweis gerne selbst übergeben, doch als Tilles Schicht zu Ende war, war Lofi noch immer nicht fertig. \ 
In den nächsten Wochen begrüßte und verabschiedete Tille Lofi zwar immer, bekam darauf aber lediglich ein dezentes Nicken als Reaktion. An einem Donnerstagnachmittag vier Wochen nach der ersten Begegnung kam Lofi wider Erwarten gleich nach dem Betreten des Studios zu Tille an den Tresen. \ 
»Hi. Ich möchte Privattraining. Für, sagen wir, erstmal drei Monate. Bietet ihr so was an?« \ 
»Ja klar. Das ist allerdings nicht inklusive …« \ 
»Das macht nichts.« \ 
»Okay. Möchtest du dich auf was Bestimmtes vorbereiten?« \ 
»Marathon. Ich möchte zusätzlich zu den Laufeinheiten einen Ernährungsplan und ein Krafttrainingsprogramm, das auf meine Bedürfnisse abgestimmt ist. Mir wäre dienstags und donnerstags ab 17 Uhr am liebsten. Passt dir das?« Tille hatte nun wirklich nicht damit gerechnet, dass Lofi ausgerechnet Tille für das Training haben wollte. Zwei Personen aus dem Kollegium waren bereits einen Marathon gelaufen. Sie wären geeigneter als Tille für das Einzeltraining gewesen. Tille würde sich diesbezüglich gut einlesen müssen. Das hätte Tille laut aussprechen können, tat es jedoch nicht. Es war nicht sonderlich professionell, aber was machte das schon? Lofi zu trainieren, würde eine Herausforderung werden. Diese Unnahbarkeit reizte Tille. Tille schaute auf dem Laptop nach den Uhrzeiten, die Lofi vorgeschlagen – oder besser gesagt vorgegeben – hatte, dabei wusste Tille aus dem Kopf, dass die Fitnesskickboxkurse an anderen Wochentagen stattfanden. \ 
»Also, ich muss noch mit meinem Team absprechen, zu der Uhrzeit nicht für den Tresen eingeteilt zu werden, ansonsten geht das klar.« \ 
»Gut. Dann sehen wir uns Dienstag.« \ 
»Ich freu mich!« Aber Lofi hatte Tille schon den Rücken zugedreht und war in Richtung Umkleide gegangen, ohne Tilles Lächeln zu registrieren. \ 
  \

Normalerweise gab Tille keine Privatstunden. Der Aufwand war groß und die Nachfrage gering, denn es kostete extra. Tille gab stattdessen Einführungskurse an den Geräten, kümmerte sich um An- und Abmeldungen und stand hinterm Tresen, um Getränke und Imbisse vorzubereiten. Einen guten Zuverdienst brachten die Fitness-Kickboxkurse ein, auch wenn sie am wenigsten Spaß machten. \ 
Diese Kurse hatten nichts mit dem Sport gemeinsam, den Tille so sehr liebte. Beim Kickboxen ging es um Technik, um Schnelligkeit. Es ging darum, die andere Person kennenzulernen, ihre Stärken und Schwächen zu nutzen, zu kontern, Lücken in der Deckung zu finden, um Taktik, ums Durchhalten trotz Schmerzen und Luftnot. Dieser Anspruch fehlte den Kursen völlig. Die Menschen, die sie besuchten, wollten sich ein bisschen bewegen, etwas Muskeln auf- und noch mehr Fett abbauen. Für Tille war das kein Kickboxen und Tille akzeptierte es nur widerwillig, die Kurse so nennen zu müssen.  \ 
Tille war von sich selbst überrascht, ausgerechnet Lofi zu erzählen, warum Tille diese Kurse trotzdem gab. Denn während der privaten Trainingseinheiten änderte sich zunächst nichts daran, dass Lofi reserviert und distanziert blieb. Sämtlichen Fragen ging Lofi aus dem Weg, ganz zu schweigen von der Tatsache, dass Lofi Tille nie auch nur eine Frage stellte, die nichts mit dem Training zu tun hatte. Was war so schlimm daran, ein bisschen Small Talk zu halten? War Lofi derart diszipliniert, sich unter keinen Umständen vom Sport ablenken lassen zu wollen? \ 
Nach ein paar fast schon demütigenden Situationen, in denen Tilles Fragen an Lofi abprallten wie ein Squashball an der Wand, gab Tille auf und sagte nur noch das Nötigste. \ 
Wider Erwarten veränderte genau das Lofis Verhalten. \ 
Es war die fünfte oder sechste Trainingseinheit, die Tille für Lofi vorbereitet hatte. Tille hatte einen Raum reserviert, in dem Lofi ungestört trainieren konnte. Lofi sah toll aus in der kurzen engen Shorts und dem pinkfarbenen Top, das die Schultermuskulatur betonte. Die goldblonden Haare waren beim Sport immer zu einem dicken Zopf gebunden, aber wenn Lofi ins Fitnessstudio und aus der Umkleide kam, waren sie meistens offen. Tille wunderte es, dass Lofi nie ungeschminkt war. Im Fitnessstudio trugen die meisten Menschen kein Make-up. Lofi hatte auch stets die Fingernägel lackiert, jede Woche in einer anderen Farbe, passend zum Oberteil. Als Tille Lofi gerade eine Pause gönnte und sie sich gegenübersaßen, beide auf einem Gymnastikball wippend, sagte Lofi: \ 
»Ich hab dich letzte Woche beim Fitness-Kickboxen durch die Glasscheibe gesehen. Es macht dir keinen Spaß, oder?« Lofi hatte Tille also beobachtet! Und Lofi begann von sich aus ein Gespräch? Was war da los? Tille war so perplex, dass ein paar Sekunden verstrichen, ehe Tille antworten konnte: \ 
»Ne, überhaupt nicht. Aber es kommt gut an, darum kann ich nicht einfach damit aufhören.« \ 
»Ist das der einzige Grund, warum du weitermachst?« \ 
»Ehrlich gesagt … brauch ich das Geld.« \ 
»Wofür?« Es war wirklich das allererste Mal, dass Lofi Interesse an Tille zeigte. Genau das hatte Tille doch die ganze Zeit gewollt! Tille wollte Lofi imponieren, darum erzählte Tille von dem Plan. Es war eigentlich ganz einfach. Hinzu kam, dass Lofis Stimme so schön klang und Tille hoffte, dass Lofi noch mehr sagte. Und Tille genoss es dabei zuzusehen, wie eine Schweißperle langsam an Lofis Stirn herunterlief, ohne dass Lofi sie wegwischte. \ 
»Ich werde ein Kampfsport-Gym gründen.« Lofi nahm zwei kurze Schlucke Wasser aus der Glasflasche und wurde wieder pragmatisch: \ 
»Und wie weit bist du mit der Planung?« \ 
»Ich komme gut voran, würde ich sagen. Ich habe einen Business-Plan geschrieben und besuche in der Abendschule einen Buchhaltungskurs. Was mir fehlt, sind die Räumlichkeiten und vor allem die Kohle.« \ 
»Wann willst du das Geld zusammen haben?« \ 
»In etwa vier Jahren. Dann hab ich noch einen Puffer, falls es mehr kosten sollte als geplant.« Lofi nickte, antwortete aber nichts mehr. So sehr Tille auch suchte: An Lofis Gesichtsausdruck konnte Tille nicht erkennen, ob Lofi die Idee hirnrissig, mutig oder beides fand. \ 
»Okay, machen wir weiter?«, fragte Lofi und stand auf. \ 
»Sind jetzt die Waden dran?« Die restliche halbe Stunde war Tille verwirrt, enttäuscht und verletzt. Warum war Lofi so gefühlskalt? Hätte Lofi nicht irgendwas Aufmunterndes sagen können, selbst wenn es nicht so gemeint war? Lofi hatte für einen kurzen Moment Interesse an Tille gezeigt – das war immerhin schon mehr, als sich Tille nach den letzten Wochen erhofft hatte. Aber was brachte es, mit einer Person zu reden, wenn diese nichts von ihren Gedanken preisgab? Tille forderte Lofi mehr als ursprünglich geplant. Aber Lofi ließ sich nicht einmal durch ein Stöhnen anmerken, ob eine körperliche Grenze erreicht war. \ 
»So, das reicht für heute. Du kannst dich noch dehnen, ich muss jetzt den Tresen übernehmen. Wir sehen uns Donnerstag,« beendete Tille abweisend die Einheit. Lofi nickte. Doch als Tille zur Tür rausging, hörte Tille Lofi sagen: \ 
»Das wird bestimmt ein gutes Gym, das du da gründest.« Tille drehte sich um. Lofis Husky-Augen konnten lächeln. \ 
`;
const COPYRIGHT = 'Autorin: Luise Kamisek. Alle Rechte vorbehalten.';
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
					<MarkdownBlock>{CONTENT}</MarkdownBlock>
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
