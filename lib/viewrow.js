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

require("./viewrow.css");

/**
 * When we display name/content pairs within the Portal/ESDB UI, we use a
 * standard table row to do this. So this is a simple helper to clean up that
 * code. It takes a name and a content as it's primary props. In addition you
 * can also pass in a class for the row and an optional width for the name cell
 * (it defaults to 200px).
 */
exports["default"] = _react2["default"].createClass({
    displayName: "viewrow",

    getDefaultProps: function getDefaultProps() {
        return {
            name: "",
            content: "",
            rowClass: "",
            valueWidth: 200
        };
    },

    render: function render() {
        if (this.props.content) {
            return _react2["default"].createElement(
                "tr",
                { className: this.props.rowClass },
                _react2["default"].createElement(
                    "td",
                    { className: "esnet-viewrow-label",
                        style: { verticalAlign: "top" },
                        width: this.props.valueWidth },
                    this.props.name
                ),
                _react2["default"].createElement(
                    "td",
                    { className: "esnet-viewrow-content" },
                    this.props.content
                )
            );
        } else {
            var child = _react2["default"].Children.only(this.props.children);
            return _react2["default"].createElement(
                "tr",
                { className: this.props.rowClass },
                _react2["default"].createElement(
                    "td",
                    { className: "esnet-viewrow-label",
                        style: { verticalAlign: "top" },
                        width: this.props.valueWidth },
                    this.props.name
                ),
                _react2["default"].createElement(
                    "td",
                    { className: "esnet-viewrow-content" },
                    child
                )
            );
        }
    }
});
module.exports = exports["default"];