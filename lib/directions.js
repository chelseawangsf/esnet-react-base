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

/**
 * Generates a Google maps directions link given an address object containing:
 * "address_1", "address_2", "city", "country", "state", "zip_code"
 *
 * Props:
 *     * address - the address object
 *     * title - the link text, defaults to "Get directions to this location"
 */
exports["default"] = _react2["default"].createClass({
    displayName: "directions",

    getDefaultProps: function getDefaultProps() {
        return {
            title: "Get directions to this location"
        };
    },

    buildAddressString: function buildAddressString() {
        var address = this.props.address;
        var fields = ["address_1", "address_2", "city", "country", "state", "zip_code"];
        var parts = [];
        _underscore2["default"].each(fields, function (attr) {
            if (_underscore2["default"].isString(address[attr])) {
                parts.push(address[attr].replace(" ", "+"));
            }
        });
        return parts.join("+");
    },

    render: function render() {
        var url = "http://maps.google.com/maps?daddr=" + this.buildAddressString();
        return _react2["default"].createElement(
            "a",
            { target: "_blank", href: url },
            this.props.title
        );
    }
});
module.exports = exports["default"];