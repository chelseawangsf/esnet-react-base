"use strict";

var React = require("react");
var moment = require('moment-timezone');

/**
 * Displays a simple clock with the current time within a given timezone
 */
var Clock = React.createClass({

    render: function() {
        if (this.props.timezone) {
            return (
                <span>{this.state.date}</span>
            );
        } else {
            return (
                <div>Unknown time</div>
            );
        }
    },

    getTime: function() {
        return moment.tz(this.props.timezone).format("h:mm A, dddd");
    },

    getInitialState: function() {
        return {
            date: this.getTime()
        }
    },

    componentDidMount: function() {
        var self = this;
        this.state.timer = setInterval(function() {
            self.setState({date: self.getTime()});
        }, 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.state.timer);
    }
});

module.exports = Clock;