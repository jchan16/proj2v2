import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cardz(props) {
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

        <Button className="d-block mx-auto" variant="danger" onClick={purpose}>Learn More </Button>
      </Card.Body>
    </Card>
  );
}

export default Cardz;