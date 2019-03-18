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
	      	labels:[]
	      },
	     lineData:{
	      	datasets:[{
	      		data:[],
	      		label:'Force over night',
	  			backgroundColor: 'rgba(255,99,132,0.2)',
      			borderColor: 'rgba(255,99,132,1)',
      			pointBackgroundColor: 'rgba(255,99,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(255,99,132,1)'	  		
	      	},
	      	{
	      		data:[],
	      		label:'Force over night',
	  			backgroundColor: 'rgba(255,99,132,0.2)',
      			borderColor: 'rgba(255,99,132,1)',
      			pointBackgroundColor: 'rgba(255,99,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(255,99,132,1)'	
	      	}],
	      	labels:['Left Molar','Right Molar','Left Fangs','Right Fangs','P5','P6','P7','P8']
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
			dataAvg[1]+=data[i].P2;
			dataAvg[2]+=data[i].P3;
			dataAvg[3]+=data[i].P4;
			dataAvg[4]+=data[i].P5;
			dataAvg[5]+=data[i].P6;
			dataAvg[6]+=data[i].P7;
			dataAvg[7]+=data[i].P8;
		}

		//get average of each ionic skin
		for (let i=0; i<dataAvg.length; i++){
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
			labels:['Left Molar','Right Molar','Left Fangs','Right Fangs','P5','P6','P7','P8']
			},

		})

		var P1_dataArray=[0,0,0,0,0,0,0];
		var P2_dataArray=[0,0,0,0,0,0,0];
		var P3_dataArray=[0,0,0,0,0,0,0];
		var P4_dataArray=[0,0,0,0,0,0,0];
		var timeArray=["adsasd","asd","asd"];
		for (let i=0;i<data.length;i++){
			P1_dataArray[i]=data[i].P1;
			P2_dataArray[i]=data[i].P2;
			P3_dataArray[i]=data[i].P3;
			P4_dataArray[i]=data[i].P4;
			//timeArray=[i]="data"
		}


		//update line data set
		this.setState({
			lineData: {
			datasets:[{
				data: P1_dataArray,
				label:'P1 Force',
				backgroundColor: 'rgba(255,99,132,0.2)',
      			borderColor: 'rgba(255,99,132,1)',
      			pointBackgroundColor: 'rgba(255,99,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(255,99,132,1)'
				},
				{
				data: P2_dataArray,
				label:'P2 Force',
				backgroundColor: 'rgba(99,255,132,0.2)',
      			borderColor: 'rgba(99,255,132,1)',
      			pointBackgroundColor: 'rgba(99,255,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(99,255,132,1)'
      			},
      			{
      			data: P3_dataArray,
				label:'P3 Force',
				backgroundColor: 'rgba(6,15,68,0.2)',
      			borderColor: 'rgba(6,15,68,1)',
      			pointBackgroundColor: 'rgba(99,255,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(99,255,132,1)'},
      			{
      			data: P4_dataArray,
				label:'P4 Force',
				backgroundColor: 'rgba(120,5,16,0.2)',
      			borderColor: 'rgba(120,5,16,1)',
      			pointBackgroundColor: 'rgba(99,255,132,1)',
      			pointBorderColor: '#fff',
      			pointHoverBackgroundColor: '#fff',
      			pointHoverBorderColor: 'rgba(99,255,132,1)'}],
			labels:["12","12325","asdf","sdfgg","w234","234wet"]
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

					//save for later
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
				<div id="submit">
					<Button type="submit" variant="outline-info" onClick={k=>this.handleSubmit(k)}> Process Raw Data </Button>
				</div>
				<Analysis 
					processed = {this.state.processed}
					radarData={this.state.radarData}
					lineData={this.state.lineData}
				/>			
			</div>
		);
	}

}

export default DataTable;