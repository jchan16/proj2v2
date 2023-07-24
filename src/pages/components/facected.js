import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Facted(props) {
    const hide = props.onHide;
    const show = props.show;
    const cater = props.cater;
    const attri = props.attri;
    const [data,setData] = useState("111111111111");
    var checkbox_values = [];

    function initialize_values(str){
      for (var i = 0; i < str.length; i++) {
          if(str.charAt(i) == 1){
            checkbox_values[i] = true;
          }else{
            checkbox_values[i] = false;
          }
      }
    }

   const initData = () => {
    setData(props.status);
   }

    const setCharAt = (str,index) => {
      if(data.charAt(index) == '0'){
        setData((str.substring(0,index) + "1" + str.substring(index+1)));
      }else{
        setData((str.substring(0,index) + "0" + str.substring(index+1)));
      }
    }

  return (
    <Offcanvas show={show} onHide={hide} onShow={initData} onEnter={initialize_values(data)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{cater[0]}</Accordion.Header>
                <Accordion.Body>
                <Form.Check 
                  type= 'checkbox'
                  id={attri[0]}
                  name={attri[0]}
                  label={attri[0]}
                  value={attri[0]}
                  checked={checkbox_values[0]}
                  onClick={() => setCharAt(data,0)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[1]}
                  name={attri[1]}
                  label={attri[1]}
                  value={attri[1]}
                  checked={checkbox_values[1]}
                  onClick={() => setCharAt(data,1)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[2]}
                  name={attri[2]}
                  label={attri[2]}
                  value={attri[2]}
                  checked={checkbox_values[2]}
                  onClick={() => setCharAt(data,2)}
                  isInvalid
                />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>{cater[1]}</Accordion.Header>
                <Accordion.Body>
                <Form.Check 
                  id={attri[3]}
                  name={attri[3]}
                  label={attri[3]}
                  value={attri[3]}
                  checked={checkbox_values[3]}
                  onClick={() => setCharAt(data,3)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[4]}
                  name={attri[4]}
                  label={attri[4]}
                  value={attri[4]}
                  checked={checkbox_values[4]}
                  onClick={() => setCharAt(data,4)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[5]}
                  name={attri[5]}
                  label={attri[5]}
                  value={attri[5]}
                  checked={checkbox_values[5]}
                  onClick={() => setCharAt(data,5)}
                  isInvalid
                />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>{cater[2]}</Accordion.Header>
                <Accordion.Body>
                <Form.Check 
                  id={attri[6]}
                  name={attri[6]}
                  label={attri[6]}
                  value={attri[6]}
                  checked={checkbox_values[6]}
                  onClick={() => setCharAt(data,6)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[7]}
                  name={attri[7]}
                  label={attri[7]}
                  value={attri[7]}
                  checked={checkbox_values[7]}
                  onClick={() => setCharAt(data,7)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[8]}
                  name={attri[8]}
                  label={attri[8]}
                  value={attri[8]}
                  checked={checkbox_values[8]}
                  onClick={() => setCharAt(data,8)}
                  isInvalid
                />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>{cater[3]}</Accordion.Header>
                <Accordion.Body>
                <Form.Check 
                  type= 'checkbox'
                  id={attri[9]}
                  name={attri[9]}
                  label={attri[9]}
                  value={attri[9]}
                  checked={checkbox_values[9]}
                  onClick={() => setCharAt(data,9)}
                  isInvalid
                >
                </Form.Check>

                <Form.Check 
                  type= 'checkbox'
                  id={attri[10]}
                  name={attri[10]}
                  label={attri[10]}
                  value={attri[10]}
                  checked={checkbox_values[10]}
                  onClick={() => setCharAt(data,10)}
                  isInvalid
                />

                <Form.Check 
                  type= 'checkbox'
                  id={attri[11]}
                  name={attri[11]}
                  label={attri[11]}
                  value={attri[11]}
                  checked={checkbox_values[11]}
                  onClick={() => setCharAt(data,11)}
                  isInvalid
                />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <div className="d-flex justify-content-center">
        <Button variant="danger" onClick={(e)=>{
          props.childToParent(data);
        }}>
								Submit
							</Button>
        </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Facted;