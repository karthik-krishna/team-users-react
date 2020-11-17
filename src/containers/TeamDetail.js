import React, { Component } from 'react';
import Header from "../layout/Header";
import UsersCard from "../components/UsersCard";

import { connect } from 'react-redux';

import * as Actions from '../state/actions';

class TeamDetail extends Component {

  constructor(props) {
    super(props);
    this.state = { search:''};
  }
  
  componentDidMount() {
    const teamId = this.props.match.params.id;
    this.props.getTeamById(teamId);
  }

  renderUsers = (user,i) => {
    const search = this.state.search;
    if(search !=='' && (user.name.first.toLowerCase().indexOf(search.toLowerCase())=== -1) ) {
      return null
     }
    return <div key={i} className="col-md-6">
              <UsersCard data={user}/>
            </div>
  }

  onChange = (e) => {
    this.setState({
      search:e.target.value
    })
  }

  render() {
    const {team,teamLead, usersInThisTeam} = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="container padtop">
            <div className="row padtop">  
              <div className="col-md-12">
                <div className="col-md-6">
                  <h3>
                    {team.name}
                  </h3>
                  <h5>Team Lead : {teamLead.name ? teamLead.name.first : null } {teamLead.name ? teamLead.name.last : null}</h5>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control search" placeholder="Search for Team Members" onChange={this.onChange} />
                </div>
              <div className="col-md-12"> 
                <hr/>
              </div>
            </div>
            <div className="col-md-12">
                {
                  usersInThisTeam.map((item,i) => {
                    return this.renderUsers(item,i)
                  })
                }
            </div>
          </div>
      </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
    team:state.teams.teamById,
    teamLead:state.users.teamLead,
    usersInThisTeam:state.users.usersInThisTeam
})

const mapDispatchToProps = {
  getTeamById: Actions.getTeamById,
  getUserById: Actions.getUserById,
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetail);