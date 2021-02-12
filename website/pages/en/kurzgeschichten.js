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
			marginBottom: "2rem"
		};
		const content = {
			marginLeft: "20%",
			marginRight: "20%",
			textAlign: "justify", 
			fontSize: 16
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
           Im Café
					</div>
					<div style={content}> 

Der kleine Mann trägt einen dunkelblauen, gut sitzenden Anzug und ein weißes gestärktes Hemd. Seine wenigen hellgrauen Haare verraten sein Alter ebenso wie der Bauchansatz und die Falten rund um die Augen, die dank der randlosen Brille gut sichtbar sind.
Geübt hilft der Mann der Frau die Treppenstufen hoch; er scheint genau zu wissen, wo er sie an ihrem zierlichen Körper anfassen kann, ohne ihr dabei wehzutun.
Die Frau hat ihre nicht mehr vorhandenen Augenbrauen schwarz nachgezogen. Auch die Augen wurden mit dunklem Kajal umrandet. Der himbeerfarbene Lippenstift ist auf das Rot der Fingernägel abgestimmt, die weißblonden, dünnen Haare zu einem Dutt frisiert. Unter ihrem beigefarbenen Trenchcoat  
trägt sie eine zeitlose weiße Bluse sowie einen langen schwarzen Rock. Obwohl sie wackelig auf den Beinen ist, läuft sie auf schwarzen Absatzschuhen. Das einzige, was nicht so recht zu ihrer alternden Eleganz passen will, ist der dicke blaue Verband um ihren linken Daumen. 
Als sie die zwei Stufen geschafft haben, blickt die Frau hoch und sieht sich um.
„Ach, das ist aber schön hier.“<br/>
„Siehst du, Mama, und das bei dir direkt um die Ecke. Wo willst du dich denn hinsetzen?“<br/>
Die Frau entscheidet sich für den kleinen Nierentisch mit den gemütlichen Sesseln in der Ecke. Der Mann hilft der Frau aus ihrem beigen Trenchcoat und hängt ihn am Eingang an die Garderobe.
„So, Mama. Ich bestell uns jetzt erstmal was. Bleib du nur sitzen.“<br/>
Der Mann geht zum Tresen und liest sich mithilfe seines Zeigefingers die große Menütafel durch, die hinter der Theke angebracht ist.<br/>
„Guten Morgen. Also für die Mama nehme ich bitte...,“ er zögert einen Moment, „...einen Kakao....oder...was ist denn der Unterschied zu einer Trinkschokolade?“
„Die Trinkschokolade ist nicht so süß und dickflüssiger“, erklärt die Bedienung.<br/>
„Ah, das ist gut. Für die Mama lieber nicht so süß. Dann nehme ich eine Trinkschokolade, aber mit laktosefreier Milch. Die Mama verträgt Laktose nicht so. Und für mich...ach, was ist denn das Leckeres?“<br/>
Der Mann schaut dem Tablett hinterher, das eine andere Cafémitarbeiterin gerade herausbringt.<br/>
„Das ist ein Eiskaffee Latte und ein Vanillequark.“<br/>
„Oh ja, das nehme ich beides auch. Aber den Eiskaffee bitte auch mit laktosefreier Milch.“<br/>
„Wir haben auch Hafermilch“, schlägt die Bedienung vor.<br/>
„Hafermilch? Ach, das hab ich noch nie getrunken.“<br/>
„Dann probieren sie es doch mal.“<br/>
„Wissen Sie was? Das mach ich!“, sagt der Mann abenteuerlustig.<br/>
Er bezahlt und geht zurück zur Frau.<br/>
„Mama, willst du nochmal auf die Toilette gehen?“, fragt der Mann sie. Die Frau nickt und ineinander gehakt machen sie sich auf Richtung Toilette.<br/>
„Schau, Mama, du brauchst nicht abzuschließen. Ich pass auf, dass niemand reinkommt“, sagt der kleine Mann, während er ihr die Tür aufhält. <br/>
Als sie zurück zu ihrem Tisch kommen, steht ihre Bestellung bereits dort.<br/>
„Ach, das siehst aber lecker aus“, ruft die Frau entzückt.<br/>
„Was hast du dir denn bestellt?“<br/>
„Das ist ein Eiskaffee und ein Vanillequark mit Heidelbeeren.“<br/>
„Oh, Heidelbeeren! Die würde ich jetzt auch gerne essen!“<br/>
Also steht der kleine Mann auf, geht vor zum Tresen und sagt:<br/>
„Entschuldigen Sie, hätten Sie noch ein paar Beerchen für die Mama?“<br/>
„Ein paar was?“ Die Bedienung versteht nicht.<br/>
„Ein paar Beerchen. Heidelbeerchen. Für die Mama.“<br/>
„Ja, ich bring sie Ihnen gerne“, sagt die Bedienung mit einem Lächeln.<br/>
Als die Frau die Schale mit den Heidelbeeren sieht, strahlt sie. Auf ihren künstlichen Zähnen hat sich etwas himbeerfarbener Lippenstift abgesetzt. Sie nimmt vorsichtig eine Beere zwischen ihre knochigen Finger und schiebt sie genüsslich in den Mund.<br/>
„Hmm! Die schmecken aber gut!“ <br/>
Die Frau lehnt sich zurück und schließt die Augen.<br/>
Schweigend trinken sie ihren Kaffee und ihre Schokolade, essen ihren Quark und ihre Beeren. Nur einmal sagt der kleine Mann:<br/>
„Mama, schau, du hast etwas gekleckert.“ <br/>
Er befeuchtet seine Serviette mit Speichel und tupft der Frau etwas Schokoladenmilch von der Bluse.<br/>
Als sie fertig sind, steht der Mann auf.<br/>
„Mama, ich geh noch eben die Beerchen bezahlen. Bleib du nur sitzen, ich helfe dir gleich.“ <br/>
Die Frau wischt sich langsam mit ihrer Serviette den Mund ab. Dann faltet sie sie sorgfältig zweimal, Kante auf Kante, legt sie auf die Untertasse und ihre Hände in den Schoß.<br/>
Der Mann steht wieder am Tresen.<br/>
„Wie viel bekommen Sie denn für die Beerchen?“, möchte er von der Bedienung wissen.<br/>
„Die gehen aufs Haus. Aber hier ist unsere Tinkgeldkasse“, sagt die Bedienung mit einem Lächeln.<br/>
Der Mann zückt einen Fünf-Euro-Schein aus seinem Portmonee. <br/>
„Können Sie den vielleicht...ach was.“ Er faltet den Schein, sodass er in den Schlitz der Blechdose passt und steckt ihn etwas umständlich hinein.<br/>
„Vielen Dank. Wie hat Ihnen denn die Hafermilch geschmeckt?“, möchte die Bedienung wissen.<br/>
„Ach, die war köstlich! Wissen Sie, ich vertrag ja auch nicht so gut Laktose, wie die Mama. Aber mit dem Vanillequark...ab und zu muss ich mal eine Ausnahme machen. Können Sie der Mama das nächste Mal die Schokolade auch mit Hafermilch machen?“<br/>
„Aber klar!“<br/>
„Das ist ja toll! Wissen Sie, die Mama wohnt gleich um die Ecke, aber sie war noch nie in diesem schönen Café hier. Wir sind den Weg jetzt zusammen abgelaufen, ich hab ihr genau gesagt, wo sie lang muss, damit sie auch mal alleine hierher kann. Achso und könnte ich vielleicht noch ein kleines Glas Leitungswasser bekommen? Die Mama muss ihre Tabletten nehmen.“<br/>
„Natürlich.“ Die Bedienung schenkt ihm ein Glas ein.<br/>
„Wollen Sie auch eins?“<br/>
„Oh ja, wenn Sie schon so nett fragen.“<br/>
„Zitronenscheibe? Eiswürfel?“<br/>
„Ach, beides für mich. Für die Mama ohne alles.“<br/>
„Bitte schön.“<br/>
„Vielen Dank. Auf Wiedersehen.“<br/>
Der kleine Mann trinkt das Glas noch am Tresen aus, winkt und geht zurück zum Nierentisch, wo die Frau mit geschlossenen Augen auf ihn wartet.<br/>
„Hier, Mama. Etwas Wasser für deine Tabletten.“<br/>
Langsam schluckt die Frau die Tabletten, während der Mann zur Garderobe geht. Dann hilft er ihr in den Mantel, nimmt sie an die unversehrte Hand und geht mit ihr ruhig Richtung Ausgang.<br/>
„So, Mama. Jetzt laufen wir den Weg nochmal gemeinsam ab. Schau, hier ist die Fichtestraße...“<br/>
Auf dem Wasserglas und der Schokoladentasse hat der himbeerfarbene Lippenstift einen Abdruck hinterlassen.<br/>
<br/>
Die Bedienung steht am anderen Ende des Cafés mit dem Vanillequark in der einen, dem Eiskaffee in der anderen Hand.<br/>
„Hey ihr zwei. Lange nicht gesehen. Wer von euch bekommt denn den Quark?“<br/>
„Ich. Und den Eiskaffee nehme ich auch.“ <br/>
Die Bedienung stellt beides vor Carmen ab. Sie trägt wie immer schwarze Jeans und schwarzes T-Shirt, doch anders als sonst hat sie ihre kastanienbraun gefärbten Haare zu einem Zopf gebunden. Vereinzelt sind graue Strähnen zu sehen. Durch die neue große, rechteckige Brille wirken ihre Augen  größer als sie sind.<br/>
„Lass es dir schmecken. Das Bananenbrot ist noch im Toaster, Rüdiger. Ich bring‘s dir gleich.“<br/>
Rüdiger nickt. Er war schon vor Carmen da und hat einen Platz ausgesucht. Sein schwarzer Americano mit doppeltem Espresso ist bereits zur Hälfte leer getrunken. Als die Bedienung beide allein lässt, lehnt er sich, die Arme vor der Brust verschränkt, auf der Couch zurück.<br/>
Carmen sitzt ihm vornübergebeugt im Sessel gegenüber und vermischt langsam die Heidelbeeren mit dem Quark, ohne davon zu kosten. Rüdiger schaut sie an. Irgendwann sagt er:<br/>
„Wenn du mir nicht bald mal sagst, warum du mich hierher bestellt hast, geh ich gleich wieder. In einer halben Stunde hab ich einen Termin im Fitnessstudio.“<br/>
Carmen schaut auf.<br/>
„Wir wollen über unser Kind reden und du hast nur eine halbe Stunde Zeit? Das ist so typisch.“ Ihre normalerweise feste, laute Stimme wackelt.<br/>
„Du willst über das Kind reden und schweigst mich hier minutenlang an.“ Rüdigers Stimme ist lauter.<br/>
Carmen stellt den Vanillequark auf den Tisch.<br/>
„Also schön. Wir müssen eure gemeinsamen Zeiten ändern. Es reicht, wenn Matze alle zwei Wochen für ein Wochenende bei dir ist.“<br/>
Rüdiger hat seine Augenbrauen jetzt so zusammengezogen, dass auf der Stirn tiefe Furchen entstehen.<br/>
Die Bedienung kommt mit dem warmen Bananenbrot zurück, aber Rüdiger sieht nicht hin. Sie erschrickt so vor seinem Blick, den er Carmen zuwirft, dass sie ohne „Guten Appetit“ zu wünschen schnell wieder hinterm Tresen verschwindet. <br/>
„Alle zwei Wochen? Was soll denn jetzt der Scheiß? Glaubst du, nur weil du die Kindsmutter bist, hast du das Recht ihn noch öfter zu sehen als ich?“<br/>
„Es geht nicht um mich. Matze will nicht zu dir. Jedesmal, bevor du ihn abholst, quengelt er rum. Er hat keine Lust auf dich.“<br/>
Rüdiger hat sich jetzt nach vorne gebeugt, seine Arme sind auf seinen Knien abgestützt, der auffällige Bizeps so angespannt, dass das weiße T-Shirt an den Ärmelnähten zu reißen droht. Auf seinen Fäusten treten die Fingerknöchel hervor. Carmen lehnt sich zurück in den Sessel, als müsse sie einen Mindestabstand wahren. <br/>
Ein kleiner Mann geht ineinander gehakt mit einer alten Frau an beiden vorbei Richtung Toilette. <br/>
„Schau, Mama“, sagt er, während er ihr die Tür aufhält, „du brauchst nicht abzuschließen. Ich pass auf, dass niemand reinkommt.“ Die Frau verschwindet in der Toilette, während der Mann davor auf sie wartet.<br/>
Carmen schaut zu dem Mann, nur Rüdiger hat sich nicht ablenken lassen.<br/>
„Keine Lust, sagst du? Ich denke mir jede Woche irgendwas anderes aus, was wir zusammen machen können! Alles blockt er ab! Das Einzige, was Matze machen will, ist Computer zocken.   Wenn er schon so oft bei dir ist, dann geh zumindest deinen mütterlichen Pflichten nach und verbiete ihm das stundenlange Ballerspielen.“<br/>
Carmen kramt ein Taschentuch aus ihrer Brusttasche und schnäuzt sich die Nase. <br/>
„Klar, jetzt bin ich wieder Schuld, dass er keine Zeit mit dir verbringen will. An allem bin ich Schuld.“<br/>
„Wohnt er bei dir oder bei mir?“<br/>
Carmen schweigt und schluchzt. Rüdiger beobachtet sie, wie sie mit verschleiertem Blick aus der großen Fensterfront schaut. Draußen läuft eine Frau mit ihrem Terrier vorbei. Der Terrier kläfft einen Rauhaardackel an, bevor er um die Ecke verschwindet. Carmen hat sich etwas beruhigt, darum kann sie jetzt wieder reden.<br/>
„Letztens hast du ihn drei Stunden im Büro des Fitnessstudios allein gelassen. Glaubst du, das macht einem Elfjährigen Spaß? Er hat sich total gelangweilt.“<br/>
Rüdiger verdreht die Augen.<br/>
„Jetzt komm mal runter. Ich musste einspringen, weil mein Kollege krank geworden ist. Dann konnte Matze zumindest Hausaufgaben machen.“<br/>
„Und dann diese Aktion mit dem Pizza essen, obwohl du weißt, dass er kein Weizen verträgt. Schön kurz bevor ich ihn abhole. Damit ich mich darum kümmern kann, dass Matze mit Bauchkrämpfen im Bett liegt. Ich muss das wieder...“ <br/>
Rüdiger schneidet ihr laut das Wort ab.<br/>
„Das war eine Dinkelpizza.“<br/>
Carmen schüttelt verständnislos den Kopf.<br/>
„Und du wunderst dich, dass er nicht zu dir will. Dinkel ist auch Weizen.“<br/>
Rüdiger beißt ein großes Stück vom Bananenbrot ab und spült es mit dem Rest seines Kaffees herunter. Dann lehnt er sich wieder zurück, die Arme hinter seinem Kopf verschränkt, die Knie breit auseinander. Rüdiger schweigt, Carmen weint, die alte Frau kommt aus der Toilette zurück.<br/>
„Alles gut, Mama?“, fragt der Mann sie. Die Frau nickt. Als sie sieht, dass Carmen weint, lächelt sie sie vorsichtig an, doch Carmen kann das Lächeln nicht erwidern. Nein, ihr steigen noch mehr Tränen in die Augen. <br/>
Langsam machen sich der Mann und die Frau auf Richtung Nierentisch. Als sich Carmen etwas beruhigt hat, sagt sie:<br/>
„Außerdem mag er Vanessa nicht.“<br/>
Zum ersten Mal grinst Rüdiger. Er streicht sich mit der Hand langsam über seine Glatze.<br/>
„Ach, darum geht‘s! Hätte ich mir denken können.“<br/>
„Sie ist immer dabei. Matze möchte aber was mit dir alleine machen.“<br/>
„Du bist eifersüchtig. Hat dich dein neuer Macker schon wieder verlassen?“<br/>
Carmen verdreht die Augen.<br/>
„Das geht dich nichts an. Du willst es nicht verstehen, oder? Es geht nicht um mich. Matze hat das Gefühl, dass er nur Anhang ist, wenn Vanessa dabei ist.“<br/>
„Wenn das so ist, kann er mir das selbst sagen.“<br/>
„Er ist elf! Er will dich nicht verletzen.“ <br/>
„Er will mich nicht verletzen und er hat angeblich keine Lust auf mich. Sag mal, merkst du, dass du dir selbst widersprichst?“<br/>
Rüdiger tippt sich mit dem Zeigefinger auf die Stirn.<br/>
„Du bist echt so krank“, sagt er kopfschüttelnd und leise.<br/>
„Verschwörst dich mit Matze gegen mich. Du brauchst echt ne Therapie.“<br/>
Carmen schweigt. Der Vanillequark und der Eiskaffee stehen wie zur Dekoration auf dem Tisch.<br/>
Irgendwann schaut Rüdiger auf seine Armbanduhr.<br/>
„Ich muss los. Ich hol ihn am Freitag von der Schule ab. So wie wir es schriftlich festgehalten haben.“<br/>
Er streckt seine Arme nochmal lang nach oben, bevor er aufsteht. Alles an ihm ist groß. Zwei Meter Körperlänge, große Turnschuhe, lange Beine, breites Kreuz. Er schiebt sich den Rest vom Bananenbrot in den Mund, legt kommentarlos fünf Euro auf den Tresen und stiefelt mit großen Schritten aus dem Café.<br/>
						<p style={{
                            marginTop: "1rem",
                            fontStyle: "italic"
                        }}>
                            Autorin: Luise Scholz. Alle Rechte vorbehalten.
                        </p>
                        <Button href={pageUrl('roman.html')}>
							Zurück
						</Button>
					</div>
					
				</Container>
			</div>
		);
	}
}

module.exports = Kurzgeschichten;
