import React from 'react';
import { Col, Row, Button, Form} from 'reactstrap';
import InputField from '../common/InputField';


export default function ClassroomForm({formsumbit, handelTextChange, onSubmitForm, handleReset, InputFieldParameter, fieldData, formReset}) {
  return (
      <Form >
        <Row>
          {InputFieldParameter.map((input) => (
            <Col md={6} key={input.id}>
              <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={fieldData[input.name]}
                handelTextChange={handelTextChange} fieldReset={formReset} />
            </Col>
          ))}
        </Row>
        <Row>
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

