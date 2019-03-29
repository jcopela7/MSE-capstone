import React, { Component } from 'react';
import UserData from './UserData';
import Dentist from './Dentist';
import "react-table/react-table.css";
import './Home.css';

import Bridget from './Bridget.JPG';
import Ryan from './Ryan.JPG';
import Eric from './Eric.JPG';
import Jon from './Jon.JPG';


class About extends Component {
	
	render(){
		return(
			<div id ="about">
				<div id = "about-container">
					<div>
						<h1> Contributors </h1>
					</div>
					<div id="contributors">
						<div id="contributor-photo">
						<h2> Bridget Hall </h2>
							<img src={Bridget} height= "200" width ="200"/>
						</div>
						<div id="contributor-photo">
							<h2> Ryan Baxter </h2>
							<img src={Ryan} height= "200" width ="200"/>
						</div>
						<div id="contributor-photo">
							<h2> Eric O'Brian</h2>
							<img src={Eric} height= "200" width ="200"/>
						</div>
						<div id="contributor-photo">
							<h2> Jon Copeland</h2>
							<img src={Jon} height= "200" width ="200"/>
						</div>
					</div>
					<div>
						<h2> Who are we?</h2>
						<div id = "paragraph">
							<p> We are a group of university students who have set out to build a mouthguard that can detect and track when people grind thier teeth. This data is available online through this website for the user and doctor to interpret. </p>
						</div>
					</div>
					<div>
						<h2> Smart Mouthguard</h2>
						<div id = "paragraph">
							<p> We are a group of university students who have set out to build a mouthguard that can detect and track when people grind thier teeth. This data is available online through this website for the user and doctor to interpret. </p>
						</div>
					</div>
					<div>
						<h2> Ionic Skin</h2>
						<div id = "paragraph">
							<p> We are a group of university students who have set out to build a mouthguard that can detect and track when people grind thier teeth. This data is available online through this website for the user and doctor to interpret. </p>
						</div>
					</div>
					<div>
						<h2> Shape Memory Alloy</h2>
						<div id = "paragraph">
							<p> We are a group of university students who have set out to build a mouthguard that can detect and track when people grind thier teeth. This data is available online through this website for the user and doctor to interpret. </p>
						</div>
					</div>
				</div>
			</div>

			)
	};
}

export default About;
