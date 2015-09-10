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

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

/**
 * Displays a simple clock with the current time within a given timezone.
 *
 * Props:
 *     * timezone - the timezone to display the current time in
 */
exports["default"] = _react2["default"].createClass({
    displayName: "clock",

    getInitialState: function getInitialState() {
        return {
            date: this.getTime()
        };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        this.state.timer = setInterval(function () {
            _this.setState({ date: _this.getTime() });
        }, 1000);
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.state.timer);
    },

    getTime: function getTime() {
        return _momentTimezone2["default"].tz(this.props.timezone).format("h:mm A, dddd");
    },

    render: function render() {
        if (this.props.timezone) {
            return _react2["default"].createElement(
                "span",
                null,
                this.state.date
            );
        } else {
            return _react2["default"].createElement(
                "div",
                null,
                "Unknown time"
            );
        }
    }
});
module.exports = exports["default"];