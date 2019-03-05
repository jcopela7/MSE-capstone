import React, { Component } from 'react';
import Moment from 'moment';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './Table.css';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import {Radar} from 'react-chartjs-2';


class DataTable extends Component{
	constructor(props){
		super(props);
		this.state= {
	      radarData:{
	      	datasets:[{
	      		data:[23,12,42]
	      	}],
	      	labels:['P1','P2','P3','P4','P5','P6','P7','P8']
	      }
    	};

	}

	handleSubmit(event){
		const data=this.props.data;
		var dataAvg=[0,0,0,0,0,0,0,0];

		//get sum of all pressure data
		for (let i=0;i<data.length;i++){
			dataAvg[0]+=data[i].P1;
			dataAvg[1]+=data[i].P1;
			dataAvg[2]+=data[i].P2;
			dataAvg[3]+=data[i].P3;
			dataAvg[4]+=data[i].P4;
			dataAvg[5]+=data[i].P5;
			dataAvg[6]+=data[i].P6;
			dataAvg[7]+=data[i].P7;
			dataAvg[8]+=data[i].P8;
		}

		//get average of each ionic skin
		for (let i=0; i<dataAvg.length-1; i++){
			dataAvg[i]=dataAvg[i]/data.length;
		}

		//update radarData set
		alert(dataAvg[0]);

    event.preventDefault();		
	}

	render(){
		const data =this.props.data;
		
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
			<Button type="submit" variant="outline-info" onClick={k=>this.handleSubmit(k)}> Process Raw Data </Button>
			<Radar data={this.state.radarData}/>
			</div>
		);
	}

}

export default DataTable;