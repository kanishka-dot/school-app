import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert } from 'reactstrap';
import { InputFieldParameter, TabelCol } from './SubjectParaInputs.js'
import {validateAllFields} from '../../util/FormValidate'
import SubjectForm from './SubjectForm.js';
import DataTable from '../common/DataTable.js';

function Subject() {

    const initState = {
        subjectid: "",
        subjectname: "",
    }

    
    const [subjectInfo, setSubjectInfo] = useState(initState)
    const [formReset, setFormReset] = useState(false);
    const [formsumbit, setformsumbit] = useState("Save");
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState({
        open: false,
        text: "",
        type: ""
    });

    
    function handelTextChange(e) {
        setSubjectInfo({ ...subjectInfo, [e.target.name]: e.target.value });
    }

    function handleReset(e) {
        setSubjectInfo(initState);
        setFormReset(!formReset)
        setformsumbit("Save")
    }

    function onSubmitForm(e) {
        e.preventDefault();
        if (validateAllFields(InputFieldParameter,subjectInfo)) {
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
                <AccordionHeader targetId="1">Subject Details</AccordionHeader>
                <AccordionBody accordionId="1">
                    <SubjectForm formsumbit={formsumbit} handelTextChange={handelTextChange} onSubmitForm={onSubmitForm} handleReset={handleReset}
                        InputFieldParameter={InputFieldParameter} fieldData={subjectInfo} formReset={formReset} />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">All Subject Details</AccordionHeader>
                <AccordionBody accordionId="2">
                    <DataTable tableCol={TabelCol} tableData={data} />
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    </div>
    );
}

export default Subject;<h1>Subject</h1>