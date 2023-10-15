import React, { useEffect, useState } from 'react';
import api from '../../api/Axios'
import DataTable from '../common/DataTable.js';
import { InputFieldParameter, TabelCol } from './StudentParaInputs.js'
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert, Button } from 'reactstrap';
import Studentform from '../student/Studentform';

export default function Student() {

  const initState = {
    studentid: "",
    firstname: "",
    lastname: "",
    contactperson: "",
    contactno: "",
    email: "",
    dob: "",
    age: "",
    classroom: ""
  }

  const [studentInfo, setStudentInfo] = useState(initState)
  const [formReset, setFormReset] = useState(false);
  const [classes, setClasses] = useState([]);
  const [student, setstudent] = useState([]);
  const [formsumbit, setformsumbit] = useState("Save");
  const [alert, setAlert] = useState({
    open: false,
    text: "",
    type: ""
  });

  useEffect(() => {
    getClasseRooms();
    const getData = async () => {
      const studentTableData = await updateStudentDataTable()
      if (studentTableData) setstudent(studentTableData)
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function handelTextChange(e) {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  }

  function handleReset(e) {
    setStudentInfo(initState);
    setFormReset(!formReset)
    setformsumbit("Save")
  }

  async function getClasseRooms() {
    await api.get("/api/Classrooms")
      .then(response => {
        let data = response.data
        console.log(data); 
        setClasses(data);    
        setClasses(data);    
      })
      .catch(error => {
        console.log(error);
      })
  }
  console.log(classes);
  const retriveAllStudentData = async () => {
    try {
      const response = await api.get(`/api/Students/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 

  const getSelectedStudentData = async (e) => {
    try {
      const response = await api.get(`/api/Students/${e.target.id}`);
      if (response.data) {
        const student = response.data;
        const className = await getClassName(student.classroomId);
        setStudentInfo({
          studentid: student.studentId,
          firstname: student.studentFirstName,
          lastname: student.studentLastName,
          contactperson: student.contactPerson,
          contactno: student.contactNo,
          email: student.email,
          dob: formatDate(student.studentDob),
          age: "",
          classroom: className,
        });
        setformsumbit("Update")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const updateSelectedStudentData = async (e) => {
    try {
      const classId = await getClassId(studentInfo.classroom);
      const request = {
        studentId:studentInfo.studentid,
        studentFirstName: studentInfo.firstname,
        studentLastName: studentInfo.lastname,
        contactPerson: studentInfo.contactperson,
        contactNo: studentInfo.contactno,
        email: studentInfo.email,
        studentDob: studentInfo.dob,
        classroomId: classId
      }
      console.log(request);
      let response = await api.put(`/api/Students/${studentInfo.studentid}`, request);
      if (response.status === 204) {
        shorAlert("info", "Student Sucessfully Updated");
        handleReset();
      }
    } catch (error) {
      shorAlert("danger", "Error Updating Student")
    }
  }

  const updateStudentDataTable = async () => {
    const data = await retriveAllStudentData();
    if (data) {
      return data.map((student) => (
        <tr key={student.studentId}>
          <th scope="row">
            {student.studentFirstName}
          </th>
          <td>
            {student.studentLastName}
          </td>
          <td>
            {student.contactPerson}
          </td>
          <td>
            {student.contactNo}
          </td>
          <td>
            <Button color="primary"  id={student.studentId} onClick={getSelectedStudentData} block>Update</Button>
          </td>
        </tr>
      ))
    } else {
      shorAlert("danger", "Student Information Not Available or Connection Error")
    }
  }

  
  function getClassId(className) {
    for (let index = 0; index < classes.length; index++) {
      if (classes[index].classroomName === className) {
        return classes[index].classroomId;
      }
    }
  }

  function getClassName(classId) { 
    console.log("My clsesse-->", classes);
    for (let index = 0; index < classes.length; index++) {
      if (classes[index].classroomId === classId) {
        return classes[index].classroomName;
      }
    }
  }


  async function createStudent() {
    try {
      const classId = await getClassId(studentInfo.classroom);
      const request = {
        studentFirstName: studentInfo.firstname,
        studentLastName: studentInfo.lastname,
        contactPerson: studentInfo.contactperson,
        contactNo: studentInfo.contactno,
        email: studentInfo.email,
        studentDob: studentInfo.dob,
        classroomId: classId
      }
      console.log(request);
      let response = await api.post("/api/Students", request);
      if (response.status === 201) {
        shorAlert("info", "Student Sucessfully Created")
        handleReset()
      }
    } catch (error) {
      shorAlert("danger", "Error creating new student")
    }
  }

  function calculateAge(e) {
    const d = new Date();
    let currentyear = d.getFullYear();
    var birthyear = parseInt(studentInfo.dob.substring(0, 4));
    if (!isNaN(birthyear)) {
      var age = currentyear - birthyear
      setStudentInfo({ ...studentInfo, age: age });
    }
  }

  // update age when typing dob
  useEffect(() => {
    calculateAge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentInfo.dob]);


  function onSubmitForm(e) {
    e.preventDefault();
    if (validateAllFields()) {
      if(formsumbit === "Save"){
        createStudent();
      }else{
        updateSelectedStudentData();
      }  
    } else {
      shorAlert("warning", "Please Fill all details")
    }
  }

  function validateAllFields() { // validate  all required  fields updated
    for (let index = 0; index < InputFieldParameter.length; index++) {
      if (InputFieldParameter[index].required) {
        if (studentInfo[InputFieldParameter[index].name] === "") {
          return false;
        }
      }
    }
    return true;
  }


  return (<div>
    <Alert color={alert.type} isOpen={alert.open} toggle={onDismiss}>
      {alert.text}
    </Alert>
    <UncontrolledAccordion defaultOpen={[
      '1',
      '2'
    ]}
      stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">Student Details</AccordionHeader>
        <AccordionBody accordionId="1">
          <Studentform formsumbit={formsumbit} handelTextChange={handelTextChange} onSubmitForm={onSubmitForm} handleReset={handleReset}
            InputFieldParameter={InputFieldParameter} studentInfo={studentInfo} formReset={formReset} classes={classes} />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">All Student Details</AccordionHeader>
        <AccordionBody accordionId="2">
          <DataTable tableCol={TabelCol} tableData={student} />
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  </div>);
}

