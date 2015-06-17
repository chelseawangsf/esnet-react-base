import React from "react";
import Router from "react-router";

import App from "./app.jsx";
import Intro from "./intro.jsx";
import Examples from "./examples.jsx";

const {Route, DefaultRoute, RouteHandler, Link} = Router;

const routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="intro" handler={Intro} />
        <Route name="examples" handler={Examples} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("content"));
});
