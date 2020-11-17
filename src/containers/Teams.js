import React, { Component } from 'react';
import Header from "../layout/Header";
import TeamsCard from "../components/TeamsCard";

import { connect } from 'react-redux';

import * as Actions from '../state/actions';

class Teams extends Component {

  constructor(props) {
    super(props);
    this.state = {search:''};
  }
  
  componentDidMount() {
    this.props.getTeams()
  }

  renderTeams = (team) => {
    const search = this.state.search;
    if(search !=='' && team.name.toLowerCase().indexOf(search.toLowerCase())=== -1 ) {
      return null
     }
    return <div key={team.id} className="col-md-6">
              <TeamsCard data={team}/>
            </div>
  }

  onChange = (e) => {
    this.setState({
      search:e.target.value
    })
  }


  render() {
    const {teamsList} = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="container padtop">
          <div className="row padtop">
            <div className="col-md-12">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <input type="text" className="form-control search" placeholder="Search for Teams" onChange={this.onChange} />
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="col-md-12 padtop">
              {teamsList.length ? teamsList.map((team) =>{
                return this.renderTeams(team)
              } ) : null}
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}


const mapStateToProps = state => ({
    teamsList:state.teams.teamsList
})

const mapDispatchToProps = {
  getTeams: Actions.getTeams
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);