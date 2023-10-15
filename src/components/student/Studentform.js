import React from 'react';
import { Col, Row, Button, Form} from 'reactstrap';
import InputField from '../common/InputField';


export default function Studentform({formsumbit, handelTextChange, onSubmitForm, handleReset, InputFieldParameter, studentInfo, formReset, classes}) {
  return (
      <Form >
        <Row>
          {InputFieldParameter.map((input) => (
            <Col md={6} key={input.id}>
              <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={studentInfo[input.name]}
                handelTextChange={handelTextChange} fieldReset={formReset} selectFieldValues={classes}/>
            </Col>
          ))}
        </Row>
        <Row >
          <Col md={4}>
            <Button color="success" onClick={onSubmitForm} block>{formsumbit}</Button>
          </Col>
          <Col md={4}>
            <Button color="warning" onClick={handleReset} block>Reset</Button>
          </Col>
          <Col md={4}>
            <Button color="danger" block>Delete</Button>
          </Col>
        </Row>
      </Form>);
}

