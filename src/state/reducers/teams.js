  
const initialState = {
  teamsList:[],
  teamById:{},
  error:''
}
const teams = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAMS':
      return Object.assign({}, state, {teamsList:action.payload});
    case 'FETCH_TEAMS_BY_ID':
      return Object.assign({}, state, {teamById:action.payload});
    case "GET_ERROR":
      return Object.assign({}, state, {error:true});
    default:
      return state
  }
}


export default teams