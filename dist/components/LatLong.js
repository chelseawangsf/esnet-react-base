"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple display of Latitude and Longitude coordination, for the purpose
 * of being consistent more than anything else.
 *
 * Props:
 *     * latitude - the latitude
 *     * longitude - the longitude
 */
exports.default = _react2.default.createClass({
    displayName: "LatLong",
    render: function render() {
        if (this.props.latitude && this.props.longitude) {
            var text = "Lat: " + this.props.latitude + ", Long: " + this.props.longitude;
            return _react2.default.createElement(
                "div",
                null,
                text
            );
        } else {
            return null;
        }
    }
}); /**
     *  Copyright (c) 2015, The Regents of the University of California,
     *  through Lawrence Berkeley National Laboratory (subject to receipt
     *  of any required approvals from the U.S. Dept. of Energy).
     *  All rights reserved.
     *
     *  This source code is licensed under the BSD-style license found in the
     *  LICENSE file in the root directory of this source tree.
     */