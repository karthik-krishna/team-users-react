  
import axios from 'axios';
import base_url from '../base_url.js';
import {FETCH_USERS, FETCH_USER_BY_ID, GET_TEAM_LEAD, GOT_ERROR, CLEAR_USERS_IN_DETAIL} from '../types/interfaces';

export const fetchUsers = (teams) => {
  return {
    type: FETCH_USERS,
    payload:teams
  }
};

export const fetchUserbyId = (team) => {
  return {
    type: FETCH_USER_BY_ID,
    payload: team
  }
};

export const getTeamLead = (teamLead) => {
  return {
    type: GET_TEAM_LEAD,
    payload: teamLead
  }
}

export const gotoError = () => {
  return {
    type: GOT_ERROR
  }
}

export const getUsers = (id,teamLead) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(base_url.tempo_base_url + 'users');
      dispatch(fetchUsers(response.data));
      dispatch(mapUserToTeam(response.data,id,teamLead))
    }
    catch (error) {
      dispatch(gotoError());
      throw (error);
    }
  };
};

export const mapUserToTeam = (users,id,teamLead) => {
  return dispatch => {
    const _usersInThisTeam = users.map((user) =>{
        if (user.teamId===id) {
          return user;
        }
      });
    const usersInThisTeamLegit = _usersInThisTeam.filter(user => user !== undefined);
    usersInThisTeamLegit.map((user) => {
      dispatch(getUserById(user.userId,teamLead));
    })
  };
}

export const getUserById = (id,teamLead) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(base_url.tempo_base_url + 'users/' + id );
      dispatch(fetchUserbyId(response.data));
      if (response.data.id===teamLead) {
        dispatch(getTeamLead(response.data))
      }
      
    }
    catch (error) {
      dispatch(gotoError());
      throw (error);
    }
  };
};

export const clearUsers = () => {
  return {
    type: CLEAR_USERS_IN_DETAIL
  }
};

