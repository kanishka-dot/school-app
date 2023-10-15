import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert } from 'reactstrap';
import DataTable from '../common/DataTable';
import ClassroomForm from './ClassroomForm';
import { validateAllFields } from '../../util/FormValidate';
import { InputFieldParameter, TabelCol } from './ClassroomParaInputs'

function Classroom(props) {
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
                <AccordionHeader targetId="1">Classroom Details</AccordionHeader>
                <AccordionBody accordionId="1">
                    <ClassroomForm formsumbit={formsumbit} handelTextChange={handelTextChange} onSubmitForm={onSubmitForm} handleReset={handleReset}
                        InputFieldParameter={InputFieldParameter} fieldData={subjectInfo} formReset={formReset} />
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">All Classroom Details</AccordionHeader>
                <AccordionBody accordionId="2">
                    <DataTable tableCol={TabelCol} tableData={data} />
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    </div>
        );
}

export default Classroom;<h1>Classroom</h1>