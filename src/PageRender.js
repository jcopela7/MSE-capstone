import React, { Component } from 'react';
import UserData from './UserData';
import Dentist from './Dentist';
import About from './About';
import "react-table/react-table.css";
import './Home.css';

class PageRender extends Component {
	
	render(){
		switch(this.props.page){
			case "Home":
				return(
					<div className="home">
	            		<div>
	            			<h1 id="title">Bruxism</h1> 
	            		</div>
	            		<div id="description">
	            			<p> A smart mouthguard to detect bruxism and responds to </p>
	            			<p> events by acutating the jaw to move forward. </p>    		
	          			</div>
	          		</div>
					)
			case "UserData":
				return(
					<UserData/>
					)
			case "DentistData":
				return(
					<Dentist/>
					)
			case "About":
				return(
					<About/>
					)
		}
	};
}

export default PageRender;
