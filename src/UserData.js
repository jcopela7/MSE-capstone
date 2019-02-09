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
			data:[{
			FirstName: "Jon", LastName: "Doe",
			weight: 210,
			age: 21,
			gender: "M"
		}], 
		user: "name"
		
	};
	this.handleUser=this.handleUser.bind(this);

	}

	handleUser(event){
		const userEntry=event.target.value;
		
		this.setState({user:userEntry})
	}

	handleSubmit(event){
		alert("Hello");
		fetch("/User")
      		.then(res => res.json())
      		.then((data) => {
        		this.setState({
          		data: data
        	});
      	});
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
