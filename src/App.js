import React from 'react';
import {Routes, Route} from'react-router-dom';
import Student from './components/student/Student';
import Nav from './components/common/NavBar'
import Teacher from './components/teacher/Teacher';
import Home from './components/pages/Home';
import Subject from './components/subject/Subject';
import Classroom from './components/classroom/Classroom';
import AssignSubject from './components/assign/AssignSubject';
import AssignClassroom from './components/assign/AssignClassroom';
import StudentReport from './components/report/StudentReport';
import NotFound from './components/pages/NotFound';

export default function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/model/teacher'  element={<Teacher />}/>
        <Route path='/model/student'  element={<Student />}/>
        <Route path='/model/subject'  element={<Subject />}/>
        <Route path='/model/classroom'  element={<Classroom />}/>
        <Route path='/assign/subject'  element={<AssignSubject />}/>
        <Route path='/assign/classroom'  element={<AssignClassroom />}/>
        <Route path='/report/student'  element={<StudentReport />}/>
        <Route path='*'  element={<NotFound />}/>
      </Routes>
    </>

  )
}