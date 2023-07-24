import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carde from "./components/carde";
import { useState } from 'react';
import Facted from "./components/facected";
import Button from 'react-bootstrap/Button';
import Bar from "./components/bar";
import Emodal from "./components/emodal";
import { useNavigate } from 'react-router-dom';
import image1 from "./components/images/glove1.jpg"
import image2 from "./components/images/glove2.jpg"
import image3 from "./components/images/glove3.jpg"
import image4 from "./components/images/glove4.jpg"



const Gloves = () => {
	//figure out how to pass images later 
	const catergories = ["Size", "Finger_Spines", "Glove_Cut", "Grip"];
	const values=["Small","Medium","Large","Flexible", "Segmented", "None","Flat","Rolled","Negative","Less","Average","Extra"];
	
	const nav = useNavigate();

	let item1 =  {Size:values[0], Finger_Spines:values[3], Glove_Cut:values[6],
		Grip:values[9], search_string:"100100100100", cost:12, name:"Predator Training Gloves"};
	let item2 = {Size:values[1], Finger_Spines:values[4], Glove_Cut:values[7], 
		Grip:values[10], search_string:"010010010010", cost: 17, name:"Predator Competition Gloves"};
	let item3 = {Size:values[2], Finger_Spines:values[5], Glove_Cut:values[8], 
		Grip:values[11], search_string:"001001001001", cost: 9, name:"Tiro League Fieldplayer Gloves"};
	let item4 = {Size:values[1], Finger_Spines:values[5], Glove_Cut:values[6],
		Grip:values[10], search_string:"010001100010", cost: 14, name:"Tiro League Gloves"};

	const items = [item1,item2,item3,item4];
	var itemvis = [true,true,true,true];

	function filter(criteria){
		for( var i = 0 ; i <items.length; i ++){
			switch(i){
					case 0:
						changeI1vis(isIn(criteria, items[i].search_string));
						break;
				
					case 1:
						changeI2vis(isIn(criteria, items[i].search_string));
						break;

					case 2:
						changeI3vis(isIn(criteria, items[i].search_string));
						break;

					case 3:
						changeI4vis(isIn(criteria, items[i].search_string));
						break;
					
						default:
							break;
				
			}
		}
	}

	function isIn(criteria, compare){
		for(var i = 0 ; i< criteria.length; i++){
			if(criteria.charAt(i) === '1' && compare.charAt(i)==='1'){
				return true;
			}
		}
		return false;
	}

	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [name2, setName] = useState("");
	const[thumb, setImage]= useState();
	const [item, setItem] =useState(item1);
	const [data, setData] = useState("111111111111");

	const [item1vis, setI1vis] = useState(itemvis[0]);
	const [item2vis, setI2vis] = useState(itemvis[1]);
	const [item3vis, setI3vis] = useState(itemvis[2]);
	const [item4vis, setI4vis] = useState(itemvis[3]);

	const childToParent = (childdata) => {
		setData(childdata);
		filter(childdata);
	}

	const changeI1vis = (input) => setI1vis(input);
	const changeI2vis = (input) => setI2vis(input);
	const changeI3vis = (input) => setI3vis(input);
	const changeI4vis = (input) => setI4vis(input);

	const changeName =(input) => setName(input);
	const makeImage = (input)=> setImage(input);
	const changeItem = (input) => setItem(input);
	const reset = ()=> setData("111111111111");
	const clear = ()=> setData("000000000000");

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	  const handleShow2 = () => setShow2(true);
	  const handleClose2 = () => setShow2(false);

	const handleClick2 = (name, image, item) =>{
		handleShow2();
		changeName(name);
		makeImage(image);
		changeItem(item);
	}

	const handleClick = (item)=>{
		nav('/equip_rent',{state:{item}});
	}

	return (
		<div>
			<Bar/>
		<Container className=" mt-5 justify-content-center">
			<Row className="justify-content-center">
				<Col className="col-6">
				<h4 class="text-center">Goalie Gloves for Rental</h4>
				</Col>

			</Row>

			<Row>

			<Col className="mt-4 d-flex justify-content-center">
					<Button variant="danger" onClick={handleShow}>
						Search 
					</Button>
				</Col>

				<Col className="mt-4 d-flex justify-content-center">
					<Button variant="danger" onClick={reset}>
						Reset Search 
					</Button>
				</Col>

				<Col className="mt-4 d-flex justify-content-center">
					<Button variant="danger" onClick={clear}>
						Clear Search 
					</Button>
				</Col>
			</Row>

			<Row className="mx-auto  justify-content-center mt-5">
				<Col className="d-flex  flex-column align-items-center justify-content-center">
					<Container className="mx-auto w-50 mb-5">
						{item1vis && <Carde title="Predator Training Gloves" body={item1.cost} purpose={()=>{ handleClick2("Predator Training Gloves", image1, item1)}} 
						purpose2 = { () => handleClick(item1)} 
						image={image1}/>}
					</Container>
					
					<Container className="mx-auto w-50">
					{item3vis && <Carde title="Tiro League Fieldplayer Gloves" body={item3.cost} purpose={()=>{ handleClick2("Tiro League Fieldplayer Gloves", image3, item3)}} 
						purpose2 = { () => handleClick(item3)} 
						image={image3}/>}
					</Container>
				</Col>

				<Col className="d-flex flex-column align-items-center justify-content-space-evenly">
				<Container className="mx-auto w-75 mb-5">
				{item2vis &&<Carde title="Predator Competition Gloves" body={item2.cost} purpose={()=>{ handleClick2("Predator Competition Gloves", image2, item2)}} 
						purpose2 = { () => handleClick(item2)} 
						image={image2}/>}
					</Container>
					
					<Container className="mx-auto w-75">
					{ item4vis &&<Carde title="Tiro League Gloves" body={item4.cost} purpose={()=>{ handleClick2("Tiro League Gloves", image4, item4)}} 
						purpose2 = { () => handleClick(item4)} 
						image={image4}/>}
					</Container>
				</Col>
				
			</Row>
			<Facted show={show} onHide={handleClose} cater={catergories} attri={values} childToParent={childToParent} status={data}/>
			<Emodal show2={show2} onHide2={handleClose2} name1={name2} image={thumb} cater={catergories} attri={item}/>
		</Container>
		</div>
	);
};

export default Gloves;