import React, { Component } from 'react';
import Moment from 'moment';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './Table.css';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';

class DataTable extends Component{
	constructor(props){
		super(props);
		this.state= {
	        data: [{
	        user:"Jon",	
	        date: "01-12-2019",
	        time: "12:01 am",
	        P1: 10,
	        P2: 32,
	        P3: 34,
	        P4: 23,
	        P5: 23,
	        P6: 43,
	        P7: 12,
	        P8: 89
	      }]
    	};

	}

	handleSubmit(event){
		fetch("/data/" + this.props.user)
      		.then(res => res.json())
      		.then((data) => {
        		this.setState({
          		data: data
        	});
      	});
    event.preventDefault();		
	}

	render(){
		const data =this.state.data;
		
		//calculate pull up sum
		let sum=[0,0,0];
		for (let i=0; i<data.length;i++){
			sum[0]+=data[i].P1
			sum[1]+=data[i].P2
			sum[2]+=data[i].P3
		}



		return(
			<div className="Table">
			<ReactTable data={data} columns={[
			{
				Header:'Date',
				id: 'date',
				accessor: d => {
					return Moment(d.date)
						.format('MMMM Do YYYY')
				},
				filterable: true

			},
			{Header: "Pressure",
			columns: [
			{
				Header:'Bottom Two',
				accessor: "P1",
					aggregate: vals => _.sum(vals),
				Footer:(
					<span>
					<strong> Total: </strong> {sum[0]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Top Two',
				id: 'P2',
				accessor: d => {
						return(d.P2)
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[1]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Front Left',
				id: 'P3',
				accessor: d => {
						return(d.P3)
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Front Right',
				id: 'P4',
				accessor: d => {
						return(d.P4)
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Fangs Left',
				id: 'P5',
				accessor: d => {
						return(d.P5)
				
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Fangs Right',
				id: 'P6',
				accessor: d => {
						return(d.P6)
				
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Molars Left',
				id: 'P7',
				accessor: d => {
						return(d.P7)
				
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			{
				Header:'Molars Right',
				id: 'P8',
				accessor: d => {
						return(d.P8)
				
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					),
				width:100,
				filterable: false
			},
			]}
			]}
			defaultPageSize={10}
			className="-striped -highlight"
			showPagination={false}
			filterable
			/>
			<Button type="submit" variant="outline-info" onClick={k=>this.handleSubmit(k)}> Refresh </Button>
			</div>
		);
	}

}

export default DataTable;