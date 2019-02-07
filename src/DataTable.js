import React, { Component } from 'react';
import Moment from 'moment';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './Table.css';

class DataTable extends Component{
	constructor(props){
		super(props);
		this.state= {
	        data: [{
	        date: "01-12-2019",
	        P1: 100,
	        P2: 32,
	        P3: 34,
	        P4: 23,
	        P5: 53
	      },
	      {
	        date: "01-13-2019",
	        P1: 100,
	        P2: 32,
	        P3: 34,
	        P4: 65,
	        P5: 45
	      },
	      {
	        date: "01-14-2019",
	        P1: 100,
	        P2: 32,
	        P3: 34,
	        P4: 45,
	        P5: 75
	      }]
    	};
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
				}

			},
			{
				Header:'Pressure 1',
				id: 'P1',
				accessor: d => {
					if (d.P1===-1){
						return("R.C")
					}
					else{
						return(d.P1)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[0]}
					</span>
					)
			},
			{
				Header:'Pressure 2',
				id: 'P2',
				accessor: d => {
					if (d.P2===-1){
						return("R.C")
					}
					else{
						return(d.P2)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[1]}
					</span>
					)
			},
			{
				Header:'Pressure 3',
				id: 'P3',
				accessor: d => {
					if (d.P3===-1){
						return("R.C")
					}
					else{
						return(d.P3)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					)
			},
			{
				Header:'Pressure 4',
				id: 'P4',
				accessor: d => {
					if (d.P4===-1){
						return("R.C")
					}
					else{
						return(d.P4)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					)
			},
						{
				Header:'Pressure 5',
				id: 'P5',
				accessor: d => {
					if (d.P5===-1){
						return("R.C")
					}
					else{
						return(d.P5)
					}
				},
				Footer:(
					<span>
					<strong> Total: </strong> {sum[2]}
					</span>
					)
			}
			]}
			defaultPageSize={10}
			className="-striped -highlight"
			showPagination={false}
			/>
			
			</div>
		);
	}

}

export default DataTable;