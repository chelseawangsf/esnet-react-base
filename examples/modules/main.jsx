/** @jsx React.DOM */

var React = require("react/addons");
var Router = require("react-router");

var {Route,
     DefaultRoute,
     RouteHandler,
     Link} = Router;

var App = require('./app.jsx');
var Intro = require('./intro.jsx');
var Examples = require('./examples.jsx');

var routes = (
    <Route path="/" handler={App}>
        <DefaultRoute name="intro" handler={Intro} />
        <Route name="examples" handler={Examples} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("content"));
});