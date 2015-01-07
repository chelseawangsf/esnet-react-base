/** @jsx React.DOM */

var React = require('react');
var App = require('./app.jsx');

var Intro = require('./intro.jsx');
var Examples = require('./examples.jsx');

var {DefaultRoute, Route, Routes} = require('react-router');

console.log("Init");

React.renderComponent((
	<Routes>
    	<Route path="/" handler={App}>
            <DefaultRoute name="intro" handler={Intro} />
      		<Route name="examples" handler={Examples} />
    	</Route>
  	</Routes>
), document.getElementById("content"));
