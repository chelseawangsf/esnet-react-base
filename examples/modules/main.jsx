/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/* eslint max-len:0 */

import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

import App from "./app.jsx";
import Intro from "./intro.jsx";
import Navigation from "./navigation_examples.jsx";
import Display from "./display_examples.jsx";
import Time from "./time_examples.jsx";
import Location from "./location_examples.jsx";

// Hash history with scroll behavior
import createHistory from "history/lib/createHashHistory";
import useScroll from "scroll-behavior/lib/useStandardScroll";
const history = useScroll(createHistory)();

render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Intro}/>
            <Route path="navigation" component={Navigation} />
            <Route path="display" component={Display} />
            <Route path="time" component={Time} />
            <Route path="location" component={Location} />
        </Route>
    </Router>
), document.getElementById("content"));
