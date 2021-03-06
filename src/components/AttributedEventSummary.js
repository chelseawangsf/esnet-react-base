/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from "react";
import _ from "underscore";
import moment from "moment-timezone";

/**
 * This component unifies the presentation of attributed
 * events, i.e. Edited by Bob one minutes ago (time).
 *
 * Props:
 *     * user - the user that is attributed with the event
 *     * when - when the event happened (a Date object)
 *     * preamble - what the user did (e.g. "Edited" or "Created", default is
 *       "Last modified")
 *     * refreshInterval - how often to update the time display in ms
 *       (default is 60000)
 *     * timeFormat - format to display the absolute time (default is
 *       YYYY-MM-DD hh:mm A)
 */
export default React.createClass({

    displayName: "AttributedEventSummary",

    getDefaultProps() {
        return {
            timeFormat: "MMM DD YYYY hh:mm A",
            preamble: "Last modified",
            refreshInterval: 60000
        };
    },

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.forceUpdate();
            }, this.props.refreshInterval)
        });
    },

    componentWillUnmount() {
        clearInterval(this.state.timer);
    },

    render() {
        const preambleStyle = {
            fontSize: 11,
            textTransform: "uppercase"
        };

        const relativeStyle = {
            fontWeight: 200
        };

        const absoluteStyle = {
            fontWeight: 200,
            fontSize: 10
        };

        const user = _.isNull(this.props.user) ? "Unknown" : this.props.user;
        const preamble = this.props.preamble;
        const t = moment(this.props.when);
        const absoluteTime = t.format(this.props.timeFormat);
        const relativeTime = t.fromNow();

        return (
            <table>
                <tbody>
                    <tr><td>
                        <span style={preambleStyle}>{preamble}</span>
                    </td></tr>
                    <tr><td>
                        <span style={relativeStyle}>
                            {relativeTime} by {user}
                        </span>
                    </td></tr>
                    <tr><td>
                        <span style={absoluteStyle}>{absoluteTime}</span>
                    </td></tr>
                </tbody>
            </table>
        );
    }
});
