import React, { useState } from 'react';
import { Alert, FormGroup } from 'reactstrap';
import { Col, Row, Button, Form, Label, Input } from 'reactstrap';
import InputField from '../common/InputField';
import { InputFieldParameter, TabelCol } from './FormPara.js'
import DataTable from '../common/DataTable';

function AssignClassroom() {

    const initState = {
        classroomname: "",
        teachername: "",
    }

    const [classAsign, setclassAsign] = useState(initState)
    const [alert, setAlert] = useState({
        open: false,
        text: "",
        type: ""
    });

    function handelTextChange(e) {
        setclassAsign({ ...classAsign, [e.target.name]: e.target.value });
    }

    // function handleReset(e) {

    // }

    function onSubmitForm(e) {
        e.preventDefault();
        // if (validateAllFields(InputFieldParameter,teacherInfo)) {
        //     if (formsumbit === "Save") {
        //         // createStudent();
        //     } else {
        //         // updateSelectedStudentData();
        //     }
        // } else {
        //     shorAlert("warning", "Please Fill all details")
        // }
    }


    const onDismiss = () => setAlert({
        open: false,
        text: "",
        type: ""
    });

    // const shorAlert = (type, message) => setAlert({
    //     open: true,
    //     text: message,
    //     type: type
    // });

    // {InputFieldParameter.filter((field) => field.id === 1)
    //     .map((input) => (
    //         <Col md={6} key={input.id}>

    //         </Col>
    //     ))}



    return (
        <>
            <Alert color={alert.type} isOpen={alert.open} toggle={onDismiss}>
                {alert.text}
            </Alert>
            <Form>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={1}
                    >
                        Teacher
                    </Label>
                    <Col sm={3}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="select"
                        />
                    </Col>
                    <Col sm={3}>
                        <Button color="success" block>Save</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={1}
                    >
                        Classroom
                    </Label>
                    <Col sm={3}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="select"
                        />
                    </Col>
                    <Col sm={3}>
                        <Button color="success" block>Save</Button>
                    </Col>
                </FormGroup>

                <DataTable tableCol={TabelCol} />
            </Form>
        </>
    );
}

export default AssignClassroom;