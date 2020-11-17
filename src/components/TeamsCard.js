import React, { Component } from 'react';
import { Link } from "react-router-dom";


class TeamsCard extends Component {
	render() {
		return (
				 <Link to={"/team-detail/" + this.props.data.id}>
				 	<div className="media card" >
			           <h4>
			           	{this.props.data.name}
			           </h4>
					</div>
				</Link>
			)
	}
}
export default TeamsCard;