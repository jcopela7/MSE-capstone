import React, { Component } from 'react';
import UserData from './UserData';
import "react-table/react-table.css";
import './Home.css';

class PageRender extends Component {
	
	render(){
		switch(this.props.page){
			case "Home":
				return(
					<div className="home">
	            		<h1 id="title">Bruxism</h1>     		
	          		</div>
					)
			case "UserData":
				return(
					<UserData/>
					)
			case "DentistData":
				return(
					<h1>Dentist Data</h1>
					)
		}
	};
}

export default PageRender;
