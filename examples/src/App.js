import React, { Component } from "react";
import { Link } from "react-router";

import "./App.css";

import esnetLogo from "./img/logo.png";
import githubLogo from "./img/github.png";

class App extends Component {
    render() {
        return (
          <div className="App">
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    ESnet React Base
                  </a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="http://www.es.net">
                        <img src={esnetLogo} alt="ESnet" width="32px" height="32px" /></a>
                    </li>
                    <li>
                      <a href="https://github.com/esnet/esnet-react-base/">
                        <img src={githubLogo}  alt="Github" width="32px" height="32px" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="row">
              <div className="col-sm-3 col-md-2 sidebar">
                  <p />

                  <ul className="nav nav-sidebar">
                      <li><Link to="/">Introduction</Link></li>
                  </ul>

                  <div className="sidebar-heading">Components</div>

                  <ul className="nav nav-sidebar">
                    <li><Link to="navigation" activeClassName="active">Navigation</Link></li>
                    <li><Link to="display" activeClassName="active">Display</Link></li>
                    <li><Link to="time" activeClassName="active">Time</Link></li>
                    <li><Link to="location" activeClassName="active">Location</Link></li>
                    <li><Link to="sidebar" activeClassName="active">Sidebar</Link></li>
                  </ul>

                  <div className="sidebar-heading">Links</div>

                  <ul className="nav nav-sidebar">
                      <li><a href="https://github.com/esnet/esnet-react-base">GitHub</a></li>
                      <li><a href="https://www.es.net/">ESnet</a></li>
                      <li><a href="http://software.es.net/">Open Source</a></li>
                  </ul>
              </div>

              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  {this.props.children}
              </div>
          </div>
        </div>
      );
    }
}

export default App;
