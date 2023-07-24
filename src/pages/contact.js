
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Bar from './components/bar';

const Contact = () => {

	const [show, setShow] = useState(false);
	const [coach, setCoach] = useState();

	const changeShow = () => {setShow(true)};
	const hideShow =() => {setShow(false)};

	function showToast(e){
		setCoach(e.target.coach.value);
		changeShow();
	}

	return (
	<div>
		<Bar />
		<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
			<Row classname="">
				<Col className="col mt-5">
					<h4 class="text-center">Contact Coach</h4>
				</Col>
			</Row>

			<Row className="">
				<Container>
					<Form onSubmit={(e) =>{e.preventDefault();showToast(e)}}>
						<Row className="mt-5 w-100 h-100 d-flex flex-row justify-content-space-evenly">
							<Col>
								<Form.Group className="mb-5" controlId="Name">
									<Form.Label>Full Name</Form.Label>
									<Form.Control type="text" placeholder="ex Johnaton Mitchel Smith" required />
								</Form.Group>
							

								<Form.Group className="mb-5" controlId="Email">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="ex boogy56@gmail.com" required/>
								</Form.Group>

								<Form.Group className="mb-5" controlID="Coach">
									<Form.Label>Coach</Form.Label>
									<Form.Select aria-label="Default select example" name="coach">
										<option value="mrao54@gmail.com">Mirana Rao </option>
										<option value="mwaang68@gmail.com">Mitchel Waang </option>
										<option value="madisa22@gmail.com">Maurice Adisa </option>
										<option value="mbrown56@gmail.com">Mike Brown </option>
									</Form.Select>
								</Form.Group>

								<Form.Group className="mb-5" controlId="Subject">
										<Form.Label>Subject </Form.Label>
										<Form.Control type="text" placeholder="ex Practice Schedule" required/>
								</Form.Group>

								<Form.Group className="mb-5" controlId="Message">
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={3} placeholder="cannot be blank" required/>
								</Form.Group>
								
								<Row className="mt-5 d-flex justify-content-center text-center">
									<Button variant="primary" type="submit" >
										Submit
									</Button>
								</Row>
							</Col>
						</Row>

					</Form>

				</Container>

			</Row>

		<ToastContainer position="top-center" className="p-3" style={{ zIndex: 1 }}>
		<Toast onClose={ hideShow} show={show} delay={4000} autohide>
          <Toast.Header>
            <strong className="me-auto">Message delivered</strong>
          </Toast.Header>
          <Toast.Body>Your message to {coach} has been sent.</Toast.Body>
        </Toast>

		</ToastContainer>

		</Container>
	</div>
	);
};

export default Contact;