import React, { Component } from 'react';

//images
import UserIcon from './user.png';

//css
import "react-table/react-table.css";

//Child componenets
import DataTable from './DataTable';

class ProfileInfo extends Component {
	constructor(props){
		super(props)
		this.state={}
	}

	render(){	
		if(this.props.FirstName==="Null"){
			return(
				<div>
				</div>
				);
		}
		else{
			return(
				<div>
					<div id="profile-data">
						<div id="user-icon">
							<h1> User Photo </h1>
							<img src={UserIcon} alt="User Icon" height="200" width="200"/>
						</div>
						<div id="user-info">
							<h3> First Name: {this.props.FirstName} </h3>
							<h3> Last Name: {this.props.LastName} </h3>
							<h3> Weight: {this.props.weight} Kg </h3>
							<h3> Age: {this.props.age} </h3>
							<h3> Gender: {this.props.gender} </h3>
						</div>
					</div>
					<DataTable data={this.props.data}/>
					
				</div>
			)
		}
	};
}

export default ProfileInfo;
