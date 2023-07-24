import React from "react";
	import Container from 'react-bootstrap/Container';
	import Row from 'react-bootstrap/Row';
	import Col from 'react-bootstrap/Col';
	import Form from 'react-bootstrap/Form';
	import Button from 'react-bootstrap/Button';
	import Bar from './components/bar';
	import { useLocation,useNavigate } from 'react-router-dom';

const Rent_P= () => {
		const nav =useNavigate();
		const loc = useLocation();

	
		function getValues(e){
	
			const form = e.currentTarget;
	
			const formData = new FormData(form);
			formData.append("i_name", loc.state.item.name);
			formData.append("cost", loc.state.item.cost)
			const data = Object.fromEntries(formData.entries());
			console.dir(data);
	
			nav("/equip_conf",{state:{data}});
		}
		return (
			<div>
				<Bar/>
			<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
				<Row classname="">
					<Col className="col mt-5">
						<h4 className="text-center">Confirm Equipmentment Rental </h4>
						<h4 className="text-center mt-5">Item: {loc.state.item.name} </h4>
					</Col>
				</Row>
	
				<Row className="">
					<Container>
						<Form onSubmit={(e) => { e.preventDefault(); getValues(e)}}>
							<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
								<Col>
									<Form.Group className="mb-5" controlId="Name">
										<Form.Label>Full Name</Form.Label>
										<Form.Control name="name" type="text" placeholder="ex Bob Robert Chan" required/>
									</Form.Group>
								</Col>
	
								<Col>
									<Form.Group className="mb-5" controlId="Email">
											<Form.Label>Email address</Form.Label>
											<Form.Control name="email" type="email" placeholder="ex brt@gmail.com" />
									</Form.Group>
								</Col>
							</Row>
	
							<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
								<Col>
									<Form.Group className="mb-5 flex-fill" controlId="rentdate">
											<Form.Label>Rental Date </Form.Label>
											<Form.Control name="rdate" type="date" placeholder=""/>
									</Form.Group>
	
								</Col>
	
								<Col>
	
									<Form.Group className="mb-5 flex-fill" controlId="Phone">
											<Form.Label>Phone Number</Form.Label>
											<Form.Control name= "phone" type="tel" placeholder="ex 123-456-7890" />
									</Form.Group>
								</Col>
	
							</Row>
	
	
							<Row >
									<h4 className="text-center"> Cost : $ {loc.state.item.cost} </h4>
							</Row>
	
							<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
								
								<Col>
									<Form.Group className="mb-5" controlId="CredNumber">
										<Form.Label>Credit Card Number</Form.Label>
										<Form.Control name="crednumber" type="text" placeholder="ex 4200450067677" />
									</Form.Group>
	
								</Col>
	
								<Col>
								<Form.Group className="mb-5 flex-fill" controlId="EXPdate">
											<Form.Label>Expriry Date </Form.Label>
											<Form.Control name= "expdate" type="month" placeholder="ex 2018-04"/>
									</Form.Group>
								</Col>
	
								<Col>
									<Form.Group className="mb-5" controlId="CVV">
										<Form.Label>CVV</Form.Label>
										<Form.Control name= "cvv" type="text" placeholder="ex 333" />
									</Form.Group>
								</Col>
							</Row>
	
							<Row className="mt-5 d-flex justify-content-center text-center">
								<Button variant="danger" type="submit" >
									Submit
								</Button>
							</Row>
							
						</Form>
	
					</Container>
	
				</Row>
			</Container>
			</div>
		);
	};
export default Rent_P;