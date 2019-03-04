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
			FirstName: "Null", 
			lastName: "Doe",
			weight: 210,
			age: 21,
			gender: "M"
		}], 
		user: "Null"
		
	};
	this.handleUser=this.handleUser.bind(this);

	}

	handleUser(event){
		const userEntry=event.target.value;
		
		this.setState({user:userEntry})
	}

	handleSubmit(event){
		fetch("/user/" + this.state.user)
      		.then(res => res.json())
      		.then((data) => {
        		this.setState({
          		data: data
        	});
      	});
    event.preventDefault();
	}


	render(){

		const profile=this.state.data;

		if(profile[profile.length-1].FirstName==="Null"){
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
			     </div>
			)
		}
		else{
			return(
				<ProfileInfo
					FirstName={profile[profile.length-1].FirstName}
					LastName={profile[profile.length-1].LastName}
					weight={profile[profile.length-1].weight}
					user={this.state.user}/>
				)
		}
	};
}

export default UserData;
