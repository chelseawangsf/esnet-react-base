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
import moment from "moment-timezone";

/**
 * Displays a simple clock with the current time within a given timezone.
 *
 * Props:
 *     * timezone - the timezone to display the current time in
 */
export default React.createClass({

    getInitialState() {
        return {
            date: this.getTime()
        };
    },

    componentDidMount() {
        this.state.timer = setInterval(() => {
            this.setState({date: this.getTime()});
        }, 1000);
    },

    componentWillUnmount() {
        clearInterval(this.state.timer);
    },

    getTime() {
        return moment.tz(this.props.timezone).format("h:mm A, dddd");
    },

    render() {
        if (this.props.timezone) {
            return (
                <span>{this.state.date}</span>
            );
        } else {
            return (
                <div>Unknown time</div>
            );
        }
    }
});
