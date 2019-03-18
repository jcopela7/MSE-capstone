import React, { Component } from 'react';
import "react-table/react-table.css";
import DataTable from './DataTable';
import Button from 'react-bootstrap/Button';
import './Home.css';

class Dentist extends Component {
	constructor(props){
		super(props);
		this.state = {data:[]}

	}


	handleSubmit(event)
	{
		fetch("/alldata/")
      		.then(res => res.json())
      		.then((data) => {
        		this.setState({
          		data: data
        	});
      	});	
	}

	render(){
		return(
		<div>	
			<div id="submit">
				<Button type="submit" variant="outline-info" onClick={k=>this.handleSubmit(k)}> Generate Report </Button>
			</div>
			<DataTable data={this.state.data}/>
		</div>
		)
	};
}

export default Dentist;
