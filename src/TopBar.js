import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToothIcon from './tooth.png';

class TopBar extends Component {
  render() {
    return (
    <div>
	    <link
	          rel="stylesheet"
	          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
	          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
	          crossorigin="anonymous"
	    />
		<Navbar variant="dark">
			<img src={ToothIcon} alt="Capstone Icon" height="50" width="50"/>
		    <Navbar.Brand href="#home">Capstone</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#features">User Data</Nav.Link>
		      <Nav.Link href="#pricing">Dentist Data</Nav.Link>
		    </Nav>
		    <Form inline>
		      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-info">Search</Button>
		    </Form>
		  </Navbar>
	</div>

	
    );
  }
}

export default TopBar;
