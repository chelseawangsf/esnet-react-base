import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, hashHistory } from "react-router";

import "./index.css";

import App from "./App";

import Intro from "./components/Intro";
import NavigationExamples from "./components/NavigationExamples";
import DisplayExamples from "./components/DisplayExamples";
import TimeExamples from "./components/TimeExamples";
import LocationExamples from "./components/LocationExamples";
import SidebarExamples from "./components/SidebarExamples";

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Intro} />
            <Route path="navigation" component={NavigationExamples} />
            <Route path="display" component={DisplayExamples} />
            <Route path="time" component={TimeExamples} />
            <Route path="location" component={LocationExamples} />
            <Route path="sidebar" component={SidebarExamples} />
        </Route>
    </Router>
), document.getElementById("root"));
