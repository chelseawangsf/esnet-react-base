"use strict";

var React = require("react");
var _ = require("underscore");
var moment = require('moment-timezone');


var AttributedEventSummary = React.createClass({

    displayName: "AttributedEventSummary",

    getDefaultProps: function() {
        return {
            timeFormat: "YYYY-MM-DD hh:mm A",
            preamble: "Last modified",
            refreshInterval: 60000,
        };
    },

    componentDidMount: function() {
        var self = this;
        this.setState(
            { 
                "timer": setInterval(function() { self.forceUpdate(); }, 
                                     this.props.refreshInterval)
             }
        );
    },

    componentWillUnmount: function() {
        clearInterval(this.state.timer);
    },

    render: function() {
        var user = _.isNull(this.props.user) ? "Unknown" : this.props.user;
        var preamble = this.props.preamble;
        var t = moment(this.props.when);
        var absoluteTime = t.format(this.props.timeFormat);
        var relativeTime = t.fromNow();

        return (
            <div>{preamble} by {user} {relativeTime} ({absoluteTime})</div>
        );
    }
});

module.exports = AttributedEventSummary;