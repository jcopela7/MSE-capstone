import React, { Component } from 'react';
import ProfileInfo from './ProfileInfo';
import "react-table/react-table.css";
import './Home.css';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UserData extends Component {
	constructor(props){
	super(props)
		this.state={
			FirstName: "Jon", LastName: "Doe",
			weight: 210,
			age: 21,
			gender: "M"
		
	};
	this.handleUser=this.handleUser.bind(this);

	}

	handleUser(event){
		const user=event.target.value;
	
		if(user==="Jonathan"){
			this.setState({
				FirstName:"Jonathan",LastName: "Copeland",
				weight: 180,
				age:22,
				gender:"M"
			});
		}
		else{
			this.setState({
				FirstName:"Bridget",LastName: "Hall",
				weight: 400,
				age:17,
				gender:"Unknown"
			});
		}
	}

	handleSubmit(event){
		event.preventDefault();
	}

	render(){
		return(
			<div>
				<Form className="Login" onSubmit={k=>this.handleSubmit(k)}>
					<Form.Group>
						<Form.Label> Username </Form.Label>
						<Form.Control type="text" placeholder="Login" className="mr-sm-2" onChange={this.handleUser}/>
					</Form.Group>
					<Form.Group>
						<Form.Label> Password</Form.Label>
						<Form.Control type="text" placeholder="Password" className="mr-sm-2" />
					</Form.Group>
					<Button type="submit" variant="outline-info">Enter</Button>
		        </Form>
				<ProfileInfo
					FirstName={this.state.FirstName}
					LastName={this.state.LastName}
					weight={this.state.weight}/>
				
			</div>
		)
	};
}

export default UserData;
