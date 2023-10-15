import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function NavBar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">School</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Model
                </DropdownToggle>
                <DropdownMenu end>
                  <Link to="/model/student" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Student
                  </DropdownItem>
                  </Link>
                  <Link to="/model/teacher" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Teacher
                  </DropdownItem>
                  </Link>
                  <Link to="/model/subject" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Subject
                  </DropdownItem>
                  </Link>
                  <Link to="/model/classroom" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Class
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Assign
                </DropdownToggle>
                <DropdownMenu end>
                  <Link to="/assign/subject" style={{ textDecoration: 'none' }}>
                  <DropdownItem >
                    Subject
                  </DropdownItem>
                  </Link>
                  <Link to="/assign/classroom" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Class
                  </DropdownItem>
                  </Link>  
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Report
                </DropdownToggle>
                <DropdownMenu end>
                  <Link to="/report/student" style={{ textDecoration: 'none' }}>
                  <DropdownItem>
                    Student Report
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>                                                        
    );
}

export default NavBar;