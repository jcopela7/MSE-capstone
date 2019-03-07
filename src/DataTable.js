import React, { Component } from 'react';

//js libraries
import Moment from 'moment';
import _ from 'lodash';

//React libraries
import ReactTable from 'react-table'
import Button from 'react-bootstrap/Button';

//CSS
import "react-table/react-table.css";
import './Table.css';

//Child Components
import Analysis from './Analysis.js';


class DataTable extends Component{
	constructor(props){
		super(props);
		this.state= {
	      radarData:{
	      	datasets:[{
	      		data:[],
	      		label:'Average Force',
	  			backgroundColor: 'rgba(255,99,132,0.2)',
      			borderColor: 'rgba(255,99,132,1)',
      			pointBackgroundColor: 'rgba(255,99,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(255,99,132,1)'	  		
	      	}],
	      	labels:['P1','P2','P3','P4','P5','P6','P7','P8']
	      },
	      processed: 'FALSE'
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
		this.setState({
			processed: 'TRUE',
			radarData: {
			datasets:[{
				data:dataAvg,
				label:'Average Force',
				backgroundColor: 'rgba(255,99,132,0.2)',
      			borderColor: 'rgba(255,99,132,1)',
      			pointBackgroundColor: 'rgba(255,99,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(255,99,132,1)'
				}],
			labels:['P1','P2','P3','P4','P5','P6','P7','P8']
			},

		})
   		 event.preventDefault();		
	}

	render(){
		const data =this.props.data;
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
			{
				Header: "Pressure",
				columns: [
				{
					Header:'Bottom Two',
					accessor: "P1",
						aggregate: vals => _.sum(vals),
					width:100,
					filterable: false
				},
				{
					Header:'Top Two',
					id: 'P2',
					accessor: d => {
							return(d.P2)
					},
					width:100,
					filterable: false
				},
				{
					Header:'Front Left',
					id: 'P3',
					accessor: d => {
							return(d.P3)
					},
					width:100,
					filterable: false
				},
				{
					Header:'Front Right',
					id: 'P4',
					accessor: d => {
							return(d.P4)
					},
					width:100,
					filterable: false
				},
				{
					Header:'Fangs Left',
					id: 'P5',
					accessor: d => {
							return(d.P5)
					
					},
					width:100,
					filterable: false
				},
				{
					Header:'Fangs Right',
					id: 'P6',
					accessor: d => {
							return(d.P6)
					
					},
					width:100,
					filterable: false
				},
				{
					Header:'Molars Left',
					id: 'P7',
					accessor: d => {
							return(d.P7)
					
					},
					width:100,
					filterable: false
				},
				{
					Header:'Molars Right',
					id: 'P8',
					accessor: d => {
							return(d.P8)
					
					},
					// Footer:(
					// 	<span>
					// 	<strong> Total: </strong> {sum[2]}
					// 	</span>
					// 	),
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
				<Analysis 
					processed = {this.state.processed}
					radarData={this.state.radarData}
				/>			
			</div>
		);
	}

}

export default DataTable;