import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cardl(props) {
    const title= props.title;
    const body = props.body;
    const purpose = props.purpose;


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
                {body}
            </div>
        </Card.Text>

        <Row className = "d-flex flex-row justify-content-space-evenly">
            <Col>
                <Button className="d-block mx-auto" variant="danger" onClick={purpose}>Show League Details</Button>
            </Col>
        </Row>
       
      </Card.Body>
    </Card>
  );
}

export default Cardl;