import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert, Row, Col } from 'reactstrap';
import DataTable from '../common/DataTable';
import { InputFieldParameter, TabelCol } from './StudentReportParaInput'
import InputField from '../common/InputField';

function StudentReport(props) {

    const initState = {
        studentid: "",
        name: "",
        lastname: "",
        contactperson: "",
        contactno: "",
        email: "",
        dob: "",
        age: "",
        classroom: ""
    }

    const [studentDetails, setstudentDetails] = useState(initState)
    const [formReset, setFormReset] = useState(false);
    const [formsumbit, setformsumbit] = useState("Save");
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({
        open: false,
        text: "",
        type: ""
    });

    function handelTextChange(e) {
        setstudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
    }

    function handleReset(e) {
        setstudentDetails(initState);
        setFormReset(!formReset)
        setformsumbit("Save")
    }


    const onDismiss = () => setAlert({
        open: false,
        text: "",
        type: ""
    });

    const shorAlert = (type, message) => setAlert({
        open: true,
        text: message,
        type: type
    });
    return (
        <div>
            <Alert color={alert.type} isOpen={alert.open} toggle={onDismiss}>
                {alert.text}
            </Alert>
            <UncontrolledAccordion defaultOpen={[
                '1',
                '2'
            ]}
                stayOpen>
                <AccordionItem>
                    <AccordionHeader targetId="1">Teacher Details</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Row>
                            {InputFieldParameter.map((input) => (
                                <Col md={6} key={input.id}>
                                    <InputField key={input.id} fieldParameter={input} errorMessage={input.errorMessage} fieldValue={studentDetails[input.name]}
                                        handelTextChange={handelTextChange} fieldReset={formReset} />
                                </Col>
                            ))}
                        </Row>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">All Teacher Details</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <DataTable tableCol={TabelCol} tableData={data} />
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </div>
    );
}

export default StudentReport;