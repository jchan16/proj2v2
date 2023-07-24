import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Tmodal(props) {
    var show = props.show2;
    const hide = props.onHide2;

    const style = {
      color: "white",
      backgroundColor: "Black",
    }

    const[year, setYear] = useState("2022");
    const [league, setLeague] = useState("Little League");
    const [div, setDiv] = useState("Male");
    const [data, setData] = useState([]);

    const changeLeague = (input) => {setLeague(input);}
    const changeDiv = (input) => {setDiv(input);}
    const changeData = (input) => {setData(input);}
    const changeYear = (input) => {setYear(input);}

  function createScore(year, league, div){
    var game =1;
    var array= [];

    var result = year + " "+league+ " " + div + " Match History";
    array.push(result);

    const teams = ["Red", "Blue", "Green","Yellow", "Gray", "Black"];
    var pointer = Math.floor(Math.random() * 6)

    var counter = 0;
    while(counter < teams.length){
      var j = (pointer + 1) % teams.length;
      for( var i = 0; i < teams.length -1; i ++){
         var match = "Game "+ game + ": "+ teams[pointer]+ ": "+ Math.floor(Math.random() * 10) + " points vs "+ teams[j]+": "+  Math.floor(Math.random() * 10) + " points";
          array.push(match);
          game++;
          j = (j + 1) % teams.length;
      }
      pointer = (pointer + 1) % teams.length;
      counter++;
    }
    return array;
    }




  return (
    <Modal show={show} onHide={hide} className="modal-lg">
        <Modal.Dialog>
        <Modal.Header closeButton style={style}>
          <Modal.Title >League Score History</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
          {/* add  year input later */}
              <Form onSubmit={ (e) =>{
                e.preventDefault();
                changeData(createScore(year, league, div));}}>
                <Row className=" d-flex flex-row justify-content-space-evenly">

                <Col>
                      <Form.Group className="" controlID="Year" onChange={(e)=>changeYear(e.target.value)} >
                        <Form.Label>League</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="2022"> 2022</option>
                          <option value="2021">2021 </option>
                          <option value="2020"> 2020 </option>
                          <option value="2019"> 2019 </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="" controlID="League" onChange={(e)=>changeLeague(e.target.value)} >
                        <Form.Label>League</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="Little League"> Little League</option>
                          <option value="Adolescent League">Adolescent League </option>
                          <option value="Adult League"> Adult League</option>
                          <option value="Competitive League">Competitive League </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                      
                    <Col>
                      <Form.Group className="" controlID="Division" onChange={(e)=>changeDiv(e.target.value)}>
                        <Form.Label>Division</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="Male"> Male </option>
                          <option value="Female">Female </option>
                          <option value="Unisex"> Unisex </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col className="align-self-end">
                      <Button variant="danger" type="submit" >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>

              <Col className=" mt-4 d-flex justify-content-center align-items-center">
                <ListGroup className= "text-center"> {data.map(item => <ListGroup.Item>{item}</ListGroup.Item>)} </ListGroup>
              </Col>

          </Container>
        </Modal.Body>

        <Modal.Footer style={style}>
          <Button variant="danger" onClick={hide} >Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    
  );
}

export default Tmodal;