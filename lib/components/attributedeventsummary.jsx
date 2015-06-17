import React from "react";
import _ from "underscore";
import moment from "moment-timezone";

/**
 * This component unifies the presentation of attributed
 * events, i.e. Edited by Bob one minutes ago (time).
 *
 * TODO: pretty this up.
 *
 * Props:
 *     * user - the user that is attributed with the event
 *     * when - when the event happened (a Date object)
 *     * preamble - what the user did (e.g. "Edited" or "Created", default is "Last modified")
 *     * refreshInterval - how often to update the time display in ms (default is 60000)
 *     * timeFormat - format to display the absolute time (default is YYYY-MM-DD hh:mm A)
 */
export default React.createClass({

    displayName: "AttributedEventSummary",

    getDefaultProps: function() {
        return {
            timeFormat: "YYYY-MM-DD hh:mm A",
            preamble: "Last modified",
            refreshInterval: 60000,
        };
    },

    componentDidMount: function() {
        this.setState({
            "timer": setInterval(() => { this.forceUpdate(); },
                                 this.props.refreshInterval)
        });
    },

    componentWillUnmount: function() {
        clearInterval(this.state.timer);
    },

    render: function() {
        const user = _.isNull(this.props.user) ? "Unknown" : this.props.user;
        const preamble = this.props.preamble;
        const t = moment(this.props.when);
        const absoluteTime = t.format(this.props.timeFormat);
        const relativeTime = t.fromNow();

        return (
            <div>{preamble} by {user} {relativeTime} ({absoluteTime})</div>
        );
    }
});
