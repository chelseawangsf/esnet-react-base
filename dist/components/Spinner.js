"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _loader = require("./loader.gif");

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Displays a simple spinner used throughout the Portal
 * and ESDB. Simply include:
 *
 *   <Spinner />
 */
/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

exports.default = _react2.default.createClass({
    displayName: "Spinner",
    render: function render() {
        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", { className: "loader", src: _loader2.default })
        );
    }
});