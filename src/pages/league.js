import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardl from "./components/cardl";
import { useState } from 'react';
import Lmodal from "./components/lmodal";
import Tmodal from "./components/tmodal";
import Bar from './components/bar';
import image1 from "./components/images/toddler.jpg"
import image2 from "./components/images/adolescent.jpg"
import image3 from "./components/images/adult.jpg"
import image4 from "./components/images/competitive.jpg"
import { Button } from "react-bootstrap";

const League = () => {
	const desc1 = "For players born in 2014 to 2018.  This program is ideal for players who, at this time, are interested in improving their soccer skills through fun activities and small-sided games.  Sessions are one and a half (note that the training duration of the session will not exceed 45 minutes), once a week and squads are led by a volunteer coach.  Emphasis will be on developing a player’s ABC’s (agility, balance, and coordination) and the development of specific soccer skills, especially dribbling. Sessions will end with a small-sided game."
	const desc2 ="For players born in 2005 to 2016. For our recreational league, players will be placed on a team by a volunteer Age Group Convener (AGC) and a volunteer will coach the team. There is a maximum of 21 players per team. Games are played on a full field. There is an end of season tournaments teams can choose to particpate in.";
	const desc3 = "For those born in 2004 or earlier. Teams play one (1) game per week and there is an end of season tournament. Gather your friends to form a complete team or register as a group and play on the same team.Home games will be played within the selected playing Region. Away games will be played in the other Regions. All teams will receive a set of uniforms from the club and a set of team equipment consisting of Practice balls, Game ball, corner flags, first aid kit and net pegs.";
	const desc4 ="For those born in 2004 or earlier. This league is ideal for those players looking to play at a highcompetitive caliber. Assessments for these teams will occur in February. Home games will be played in the West end. Your away games will be played in the Ottawa-Carleton region. Equipment will be handled by the your coaches. Interested players are invited to attend Player Assessments. Assessment schedules will be posted in Decemeber and should end an email to their coach around then as well.";
	//figure out how to pass images later 
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
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

	const handleShow2 = () => setShow2(true);
	const handleClose2 = () => setShow2(false);
		
	


	const handleClick = (name, league,image,desc) =>{
		handleShow();
		changeName(name);
		changeLeague(league);
		makeImage(image);
		makeDesc(desc);
	}

	const handleClick2 = () =>{
		handleShow2();
	}
	return (
		<div>
			<Bar />
		
		<Container className=" mt-5 justify-content-center">
			<Row className="justify-content-center">
				<Col className="col-6">
				<h4 class="text-center">Leagues at ASC</h4>
				</Col>

				<Row className= "mt-4">
				<Col className="mt-4 d-flex justify-content-center">
					<Button variant="danger" onClick={handleClick2}>
						Show League Score 
					</Button>
				</Col>
				</Row>
			</Row>

			<Row className="mx-auto  justify-content-center mt-5">
				<Col className="d-flex  flex-column align-items-center justify-content-center">
					<Container className="mx-auto w-50 mb-5">
						<Cardl title="Little League" body="Recreational league for players aged 3 to 7"  purpose={()=>{ handleClick("Little League", "League 1", image1, desc1)}} 
						image={image1}/>
					</Container>
					
					<Container className="mx-auto w-50">
						<Cardl title="Adult League" body="Recreational league for players aged 18-30" purpose={()=>{ handleClick("Adult League", "League 3", image3,desc3)}}
						image={image3}/>
					</Container>
				</Col>

				<Col className="d-flex flex-column align-items-center justify-content-space-evenly">
				<Container className="mx-auto w-75 mb-5">
						<Cardl title="Adolescent League" body="Recreational league for players aged 8-17" purpose={()=>{ handleClick("Adolescent League", "League 2", image2,desc2)}}
						image={image2}/>
					</Container>
					
					<Container className="mx-auto w-75">
						<Cardl title="Competitive League" body="Competitive league for players 18-30" purpose={()=>{ handleClick("Competitive League", "League 4", image4,desc4)}} 
						image={image4}/>
					</Container>
				</Col>
			</Row>
			<Lmodal show2={show} onHide2={handleClose} name1={name2} league1={league2} image={thumb} desc={desc}/>
			<Tmodal show2={show2} onHide2={handleClose2}/>
		</Container>
		</div>
	);
};

export default League;