import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import Bar from './components/bar';

const RL_conf= () => {
    const loc = useLocation();
    console.dir(loc);

	return (
		<div>
            <Bar />
			<Container className="w-75 h-75 d-flex justify-content-center d-flex flex-column">
            <Row>
                <Col className="col mt-5">
                    <h4 class="text-center">Your Registration has been confirmed.</h4>
                    <p class="text-center"> Here are the details of your Registration:</p>
                </Col>
            </Row >

            <Row>
                <Container>
                            <Row className="row mt-5  d-flex flex-row justify-content-space-evenly">
                                <Col>
                                    <p><strong> Full name: </strong> {loc.state.data.name}</p>
                                </Col>
                                
                                <Col >
                                    <p> <strong>Email: </strong>{loc.state.data.email}</p>
                                </Col>

                                <Row  className="row mt-5  d-flex flex-row justify-content-space-evenly">
                                    <Col>
                                        <p><strong> Birthday:</strong> {loc.state.data.bdate}</p>
                                    </Col>
                                    
                                    <Col >
                                        <p> <strong>Phone Number:</strong> {loc.state.data.phone}</p>
                                    </Col>

                                </Row>
                            </Row>

                            <Row className=" mt-5 d-flex flex-row justify-content-space-evenly">
                                <Col>
                                    <p> <strong>League: </strong>{loc.state.data.league}</p>
                                </Col>
                                
                                <Col >
                                    <p><strong>Division: </strong>{loc.state.data.div}</p>
                                </Col>

                                <Col >
                                    <p><strong>Team: </strong>{loc.state.data.team}</p>
                                </Col>
                                <Row className=" mt-5 d-flex flex-row justify-content-space-center">
                                    <Col>
                                        <div className = "text-center">
                                            <p><strong>Cost: </strong> $ 150</p>
                                        </div>
                                    </Col>
                                </Row> 
                            </Row>


                            <Row className="row mt-5  d-flex flex-row justify-content-space-evenly">
                                <Col>
                                    <p> <strong>Credit Card Number: </strong>{loc.state.data.crednumber}</p>
                                </Col>
                                
                                <Col >
                                    <p><strong>Expirary Date : </strong>{loc.state.data.expdate}</p>
                                </Col>

                                <Col >
                                    <p><strong>CVV : </strong>{loc.state.data.cvv}</p>
                                </Col>
                            </Row>
                </Container>
            </Row>
                
        </Container>
        </div>
	);
};

export default RL_conf;