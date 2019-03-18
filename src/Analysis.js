import React, { Component } from 'react';
import Moment from 'moment';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import './Table.css';
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import {Radar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';


class Analysis extends Component{
	constructor(props){
		super(props);
		this.state= {}	
	}

	render(){
		if(this.props.processed==='FALSE'){
			return(
				<div></div>
				)
		}
		else{
			return(
				<div id="analysis">
					<div id="analysis-chart">	
						<h1> Average Force </h1>
						<Radar data={this.props.radarData} width={500} height={400}/>
					</div>
					<div id="analysis-chart">
						<h1> Force over time </h1>
						<Line data={this.props.lineData} width={500} height={400}/>
					</div>
				</div>
			)
		}
	}
}

export default Analysis;