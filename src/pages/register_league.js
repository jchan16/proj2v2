import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bar from './components/bar';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const nav = useNavigate();

	function getValues(e){
		e.preventDefault();

    	const form = e.currentTarget;

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.dir(data);

		nav("/league_conf",{state:{data}});
	}
	return (
		<div>
			<Bar/>
		<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
			<Row classname="">
				<Col className="col mt-5">
					<h4 class="text-center">Register into a league</h4>
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
								<Form.Group className="mb-5 flex-fill" controlId="Birtdate">
										<Form.Label>Birthday</Form.Label>
										<Form.Control name="bdate" type="date" placeholder=""/>
								</Form.Group>

							</Col>

							<Col>

								<Form.Group className="mb-5 flex-fill" controlId="Phone">
										<Form.Label>Phone Number</Form.Label>
										<Form.Control name= "phone" type="tel" placeholder="123-456-7890" />
								</Form.Group>
							</Col>

						</Row>

						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5" controlID="League">
									<Form.Label>League</Form.Label>
									<Form.Select name="league" aria-label="Default select example">
									<option value="Little League"> Little League</option>
                          			<option value="Adolescent League">Adolescent League </option>
                          			<option value="Adult League"> Adult League</option>
                          			<option value="Competitive League">Competitive League </option>
									</Form.Select>
								</Form.Group>

							</Col>

							<Col>
								<Form.Group className="mb-5" controlID="Division">
									<Form.Label>Division</Form.Label>
									<Form.Select name="div" aria-label="Default select example">
									<option value="Male"> Male </option>
                          			<option value="Female">Female </option>
                          			<option value="Unisex"> Unisex </option>
									</Form.Select>
								</Form.Group>
							</Col>

							<Col>
								<Form.Group className="mb-5" controlID="Team">
									<Form.Label>Team</Form.Label>
									<Form.Select name="team" aria-label="Default select example">
										<option value="Red">Red</option>
										<option value="Blue">Blue</option>
										<option value="Green">Green</option>
										<option value="Yellow">Yellow</option>
										<option value="Gray">Gray</option>
										<option value="Black">Black</option>
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>

						<Row >
								<h4 className="text-center"> Cost : $ 150 </h4>
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

export default Register;