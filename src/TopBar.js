import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import PageRender from './PageRender';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToothIcon from './tooth.png';

class TopBar extends Component {
  	constructor(props){
  		super(props);
		this.state={page:1};
		this.handleSelect=this.handleSelect.bind(this);
	}


  handleSelect(eventKey){
  	this.setState({page:eventKey});
  }


  render() {
    return (
        <div>
		    <link
		          rel="stylesheet"
		          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
		          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
		          crossorigin="anonymous"
		    />
			<Navbar variant="dark" activeKey="1" onSelect={k => this.handleSelect(k)}>
				<img src={ToothIcon} alt="Capstone Icon" height="50" width="50"/>
			    <Navbar.Brand eventKey="1" href="#home">Capstone</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link eventKey="Home" href="#home">Home</Nav.Link>
			      <Nav.Link eventKey="UserData" href="#UserData">User Data</Nav.Link>
			      <Nav.Link eventKey="DentistData" href="#DentistData">Dentist Data</Nav.Link>
			    </Nav>
			    <Form inline>
			      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
			      <Button variant="outline-info">Search</Button>
			    </Form>
			  </Navbar>
			<div className="home">
            	<h1 id="title">Bruxism</h1>
            	<h1>{this.state.page}</h1>
            	<PageRender page={this.state.page}/>
          	</div>
		</div>

    );
  }



}

export default TopBar;
