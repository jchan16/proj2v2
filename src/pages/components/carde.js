import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from './images/placeholderC.jpg'

function Carde(props) {
    const title= props.title;
    const body = props.body;
    const purpose = props.purpose;
    const purpose2 = props.purpose2;

  return (
    <Card style={{ width: '18rem' }} bg='dark' text='light'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
            <div className="text-center">
                {title}
            </div>
        </Card.Title>

        <Card.Text>
            <div className="text-center">
                <p> Cost: ${body}</p>
            </div>
        </Card.Text>

        <Row className = "d-flex flex-row justify-content-space-evenly">
            <Col>
                <Button className="d-block mx-auto" variant="danger" onClick={purpose}>Show details</Button>
            </Col>

            <Col>
                <Button className="d-block mx-auto" variant="danger" onClick={purpose2}>Rent</Button>
            </Col>
        </Row>
       
      </Card.Body>
    </Card>
  );
}

export default Carde;