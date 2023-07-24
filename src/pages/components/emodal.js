import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from "react-router-dom";

 
function Emodal(props) {
    const name = props.name1;
    const show = props.show2;
    const hide = props.onHide2;
    const cater = props.cater;
    const attri = props.attri;
    
    const style = {
      color: "white",
      backgroundColor: "Black",
    }

  return (
    <Modal show={show} onHide={hide} className="">
        <Modal.Dialog>
        <Modal.Header closeButton style={style}>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row className=" d-flex  flex-row justify-content-center ">
              <Col className="col d-flex  flex-column align-items-center justify-content-center">
                <img src={props.image} class="d-block img-fluid mb-5" alt="..."/>
              </Col>

              <Col className="d-flex justify-content-center align-items-center">
              <ListGroup className="list-group-flush d-flex">
                  <ListGroup.Item className="text-center"> <strong>Attributes: </strong></ListGroup.Item>
                  <ListGroup.Item className="text-center">{cater[0]}: {attri[cater[0]]} </ListGroup.Item>
                  <ListGroup.Item className="text-center">{cater[1]}: {attri[cater[1]]} </ListGroup.Item>
                  <ListGroup.Item className="text-center">{cater[2]}: {attri[cater[2]]} </ListGroup.Item>
                  <ListGroup.Item className="text-center">{cater[3]}: {attri[cater[3]]} </ListGroup.Item>
                  <ListGroup.Item className="text-center">Cost: {attri.cost} </ListGroup.Item>
            </ListGroup>
              </Col>
            </Row>
          </Container>

        </Modal.Body>

        <Modal.Footer style={style}>
          <Button variant="danger" onClick={hide}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    
  );
}

export default Emodal;