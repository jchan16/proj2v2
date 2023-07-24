import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardz from "./components/cardz";
import { useState } from 'react';
import Bar from './components/bar';
import Cmodal from "./components/cmodal";
import image1 from "./components/images/coach1.jpg"
import image2 from "./components/images/coach2.jpg"
import image3 from "./components/images/coach3.jpg"
import image4 from "./components/images/coach4.jpg"

const Coaches = () => {
	//figure out how to pass images later 
	const desc1 = "Mirana immigrated to Canada from Tripura at a young age. She rode a bike to school every day during her adolescent years. She would eventually go to Algonquin College to get a degree in business management. She was introduced to soccer when a friend of hers invited her to do intramurals. Mirana continued to play soccer until the end of hor college years then played in the adult league of ASC. She now coaches for some of the little league teams."
	const desc2 =" Mitchel originally was not as fond very fond of soccer. Even to this day, he prefers football. Growing up, Mitchel often accompanied his brother to soccer games. After high school, Mitchel started an apprenticeship to become a car mechanic. Mitchel decided to help his brother coaches his soccer games after work. He's a bit chatty but he's more than willing to strike up a conversation with anybody. Mitchel currently coaches some of the teams in the adolescent league.";
	const desc3 = "Maurice has known how to ride a unicycle since she was ten. Often after school, we would go to the track field and try to ride laps on his unicycle. Maurice came across soccer one day after some people asked him if she wanted to play. Maurice has a degree in electrical engineering but couldn't find a job after graduating so she did volunteer work while looking for a job. She eventually did volunteer coaching for the adolescent league and grew to love it. Now she coaches some of the teams in the adult league. If you ever want to learn how to ride a unicycle, feel free to ask Maurice.";
	const desc4 ="Mike started playing soccer when he was 3 years old. As he grew up he would often watch his father play recreational soccer and at the age of  6 started to also play recreationally. Mike would eventually pursue a degree in Kinesiology at Western University and continued to play intermural soccer during his university days.  Besides his passion for soccer, Mike dabbles in playing video games, photography, and thrifting. Mike can be quite stubborn but he means well and is more than happy to help anybody, no matter their issue. Mike currently coaches some of the teams of the competitive league.";

	const [show, setShow] = useState(false);
	const [name2, setName] = useState("");
	const [league2, setLeague] = useState("");
	const [desc, setDesc] = useState("");
	const[thumb, setImage]= useState();

	const changeName =(input) => setName(input);
	const changeLeague = (input) => setLeague(input);
	const makeImage = (input)=> setImage(input);
	const makeDesc = (input)=> setDesc(input);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	const handleClick = (name, league, image,desc) =>{
		handleShow();
		changeName(name);
		changeLeague(league);
		makeImage(image);
		makeDesc(desc);
	}
	return (
		<div>
			<Bar />
		
		<Container className=" mt-5 justify-content-center">
			<Row className="justify-content-center">
				<Col className="col-6">
				<h4 class="text-center">Meet some of the Coaches at ASC</h4>
				</Col>
			</Row>

			<Row className="mx-auto  justify-content-center mt-5">
				<Col className="d-flex  flex-column align-items-center justify-content-center">
					<Container className="mx-auto w-50 mb-5">
						<Cardz title="Mirana Rao" body="Head coach of Little League"  purpose={()=>{ handleClick("Mirana Rao", "Little League", image1, desc1);}} image = {image1}/>
					</Container>
					
					<Container className="mx-auto w-50">
						<Cardz title="Maurice Adisa" body="Head coach of Adult League" purpose={()=>{ handleClick("Maurice Adisa", "Adult League", image3, desc3)}} image = {image3}/>
					</Container>
				</Col>

				<Col className="d-flex flex-column align-items-center justify-content-space-evenly">
				<Container className="mx-auto w-75 mb-5">
						<Cardz title="Mitchel Waang" body="Head coach of Adolescent League" purpose={()=>{ handleClick("Mitchel Waang", "Adolescent League", image2, desc2)}} image = {image2}/>
					</Container>
					
					<Container className="mx-auto w-75">
						<Cardz title="Mike Brown" body="Head coach of Competitive League" purpose={()=>{ handleClick("Mike Brown", "Competitive League", image4, desc4)}} image = {image4}/>
					</Container>
				</Col>
			</Row>
			<Cmodal show2={show} onHide2={handleClose} name1={name2} league1={league2} image={thumb} desc={desc}/>
		</Container>
	</div>
	);
};

export default Coaches;