import React, { Component } from 'react';

class UsersCard extends Component {
	render() {
		return (
				 <div className="media card" >
				 	<h4>
				 		{this.props.data.name.first} {this.props.data.name.last} 
			        </h4>
				</div>
			)
	}
}
export default UsersCard;