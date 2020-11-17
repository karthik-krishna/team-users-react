  
import axios from 'axios';
import * as UserActions from './usersAction';
import {FETCH_TEAMS, FETCH_TEAMS_BY_ID, GOT_ERROR} from '../types/interfaces';
import base_url from '../base_url.js';

export const fetchTeams = (teams) => {
  return {
    type: FETCH_TEAMS,
    payload:teams
  }
};

export const fetchTeambyId = (team) => {
  return {
    type: FETCH_TEAMS_BY_ID,
    payload: team
  }
};

export const gotoError = () => {
  return {
    type: GOT_ERROR
  }
}

export const getTeams = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(base_url.tempo_base_url + 'teams');
      dispatch(fetchTeams(response.data));
    }
    catch (error) {
      dispatch(gotoError());
      throw (error);
    }
  };
};

export const getTeamById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(base_url.tempo_base_url + 'teams/' + id );
      dispatch(fetchTeambyId(response.data));
      dispatch(UserActions.clearUsers());
      dispatch(UserActions.getUsers(id,response.data.teamLead));
    }
    catch (error) {
      dispatch(gotoError());
      throw (error);
    }
  };
};