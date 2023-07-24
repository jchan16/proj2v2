import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bar from './components/bar';

const Location = () => {
	return (
		<div>
		<Bar />
		<Container className = "w-75 h-50 mt-5 justify-content-space-evenlyborder border border-dark">
			
			<Row>
				<Col className="d-flex px-0">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22448.559700197704!2d-75.92942827249193!3d45.30701232793426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdff82a7d3e173%3A0xd02aadc038419c3b!2sKanata%20Recreation%20Complex!5e0!3m2!1sen!2sca!4v1688286878875!5m2!1sen!2sca" className="flex-fill" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</Col>

				<Col className="text-center d-flex align-items-center flex-column">
					<Row className="justify-content-center">
					<h4> <strong> Location </strong> </h4>
                            <p> 100 Charlie Rogers PL <br/> Stittsville, ON <br/> K2V 1A2</p>
					</Row>

					<Row className="justify-content-center">
						<Col className="m-4">
						<h4> <strong>Opening Hours </strong></h4>
                            <p> 
                                <u> Weekdays(Monday to Friday) </u>
                                <br/>
                                <time>08:00</time>-<time>19:30</time>
                                <br/><br/>
                                <u> Weekends(Saturday to Sunday) </u>
                                <br/>
                                <time>08:00</time>-<time>20:00</time>
                                <br/><br/>
                                <u> Holidays </u>
                                <br/>
                                <time>08:00</time>-<time>13:00</time>
                            </p>
						</Col>
					</Row>

					<Row className="justify-content-center">
						<Col classname="m-4">
						<h4> <strong>Contact Information</strong></h4>
                            <p> 
                                <em>Email: </em>ASC@gmail.com
                                <br/>
                                <em>Phone-Number: </em>(613) 420-8008

                            </p>
						</Col>
					</Row>

				</Col>
			</Row>

		</Container>
		</div>
	);
};

export default Location;
