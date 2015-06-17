import React from "react";
import moment from "moment-timezone";

/**
 * Displays a simple clock with the current time within a given timezone.
 *
 * Props:
 *     * timezone - the timezone to display the current time in
 */
export default React.createClass({

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
        this.state.timer = setInterval(() => {
            this.setState({date: this.getTime()});
        }, 1000);
    },

    componentWillUnmount: function() {
        clearInterval(this.state.timer);
    }
});
