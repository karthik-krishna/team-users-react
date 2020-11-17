import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {history} from 'react-router-redux'
import Teams from './containers/Teams';
import TeamDetail from './containers/TeamDetail';

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={Teams} />
        <Route path="/team-detail/:id" component={TeamDetail} />
      </Router>
    );
  }
}

export default AppRouter;