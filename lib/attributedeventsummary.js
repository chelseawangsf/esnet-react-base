/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

/**
 * This component unifies the presentation of attributed
 * events, i.e. Edited by Bob one minutes ago (time).
 *
 * TODO: pretty this up.
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
exports["default"] = _react2["default"].createClass({

    displayName: "AttributedEventSummary",

    getDefaultProps: function getDefaultProps() {
        return {
            timeFormat: "YYYY-MM-DD hh:mm A",
            preamble: "Last modified",
            refreshInterval: 60000
        };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        this.setState({
            timer: setInterval(function () {
                _this.forceUpdate();
            }, this.props.refreshInterval)
        });
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.state.timer);
    },

    render: function render() {
        var user = _underscore2["default"].isNull(this.props.user) ? "Unknown" : this.props.user;
        var preamble = this.props.preamble;
        var t = (0, _momentTimezone2["default"])(this.props.when);
        var absoluteTime = t.format(this.props.timeFormat);
        var relativeTime = t.fromNow();

        return _react2["default"].createElement(
            "div",
            null,
            preamble,
            " by ",
            user,
            " ",
            relativeTime,
            " (",
            absoluteTime,
            ")"
        );
    }
});
module.exports = exports["default"];