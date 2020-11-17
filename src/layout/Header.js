import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  render() {

    const route = this.props.location.pathname;
    return (
      <header >
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button aria-pressed="false" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand" > Tempo App</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav"></ul>
              <ul className="nav navbar-nav">
                <li className={route === '/' ? 'active' : ''}><Link to="/">Teams</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);