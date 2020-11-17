  
const initialState = {
  usersList:[],
  usersInThisTeam:[],
  teamLead:{},
  error:''
}
const teams = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return Object.assign({}, state, {usersList:action.payload});
    case 'FETCH_USER_BY_ID':
      return {
        ...state,
        usersInThisTeam: state.usersInThisTeam.concat(action.payload)
      }
    case 'CLEAR_USERS_IN_DETAIL':
      return Object.assign({}, state, {usersInThisTeam:[], teamLead: {} });
    case 'GET_TEAM_LEAD':
      return Object.assign({}, state, {teamLead:action.payload});
    case "GET_ERROR":
      return Object.assign({}, state, {error:true});
    default:
      return state
  }
}


export default teams