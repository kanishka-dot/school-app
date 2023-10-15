import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert} from 'reactstrap';
import Teacherform from './Teacherform';
import DataTable from '../common/DataTable';
import { InputFieldParameter, TabelCol } from './TeacherParaInput.js'
import {validateAllFields} from '../../util/FormValidate'

function Teacher(props) {

    const initState = {
        teacherid: "",
        firstname: "",
        lastname: "",
        contactno: "",
    }

    const [teacherInfo, setTeacherInfo] = useState(initState)
    const [formReset, setFormReset] = useState(false);
    const [formsumbit, setformsumbit] = useState("Save");
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({
        open: false,
        text: "",
        type: ""
    });

    function handelTextChange(e) {
        setTeacherInfo({ ...teacherInfo, [e.target.name]: e.target.value });
    }

    function handleReset(e) {
        setTeacherInfo(initState);
        setFormReset(!formReset)
        setformsumbit("Save")
    }

    function onSubmitForm(e) {
        e.preventDefault();
        if (validateAllFields(InputFieldParameter,teacherInfo)) {
            if (formsumbit === "Save") {
                // createStudent();
            } else {
                // updateSelectedStudentData();
            }
        } else {
            shorAlert("warning", "Please Fill all details")
        }
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
                        <Teacherform formsumbit={formsumbit} handelTextChange={handelTextChange} onSubmitForm={onSubmitForm} handleReset={handleReset}
                            InputFieldParameter={InputFieldParameter} fieldData={teacherInfo} formReset={formReset} />
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

export default Teacher;