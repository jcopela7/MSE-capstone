import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToothIcon from './tooth.png';

class PageRender extends Component {
	
	render(){
		if(this.props.page==="UserData"){
			return(
				<h1>Hello World</h1>
				)	
		}
		else{
			return(
				<h1>sup</h1>
				)
		}
	};
}

export default PageRender;
