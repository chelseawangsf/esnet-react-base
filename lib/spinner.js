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

var _loaderGif = require("./loader.gif");

var _loaderGif2 = _interopRequireDefault(_loaderGif);

var loader = document.createElement("img");
loader.src = _loaderGif2["default"];

/**
 * Displays a simple spinner used throughout the Portal
 * and ESDB. Simply include:
 *
 *   <Spinner />
 */
exports["default"] = _react2["default"].createClass({
    displayName: "spinner",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("img", { className: "loader", src: loader.src })
        );
    }
});
module.exports = exports["default"];