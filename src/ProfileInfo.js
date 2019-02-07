import React, { Component } from 'react';
import DataTable from './DataTable';
import UserIcon from './user.png';
import "react-table/react-table.css";

class ProfileInfo extends Component {
	

	render(){	

		if(this.props.LastName==="Doe"){
			return(
				<div>
				</div>
				);
		}
		else{
			return(
				<div>
					<img src={UserIcon} alt="User Icon" height="200" width="200"/>
					<h1> First Name: {this.props.FirstName} </h1>
					<h1> Last Name: {this.props.LastName} </h1>
					<h1> Weight: {this.props.weight} </h1>
					<DataTable/>
				</div>
			)
		}
	};
}

export default ProfileInfo;
