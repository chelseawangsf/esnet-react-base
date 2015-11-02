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

require("./sectionlink.css");

/**
 * A link within the current page. This will be an icon (one of
 * bootstraps icons) as well as the link.
 *
 * Props:
 *     * link - the actual link to navigate to (the hash part of
 *              the destination URL)
 *     * title - the text used as the link
 *     * icon - the bootstrap icon name (e.g. 'briefcase')
 */
exports["default"] = _react2["default"].createClass({
    displayName: "sectionlink",

    render: function render() {
        var url = "#" + this.props.link;
        var className = "glyphicon glyphicon-" + this.props.icon + " sectionlink-icon";
        return _react2["default"].createElement(
            "div",
            { className: "sectionlink-container" },
            _react2["default"].createElement(
                "a",
                { href: url },
                _react2["default"].createElement(
                    "span",
                    null,
                    _react2["default"].createElement("i", { className: className })
                ),
                _react2["default"].createElement(
                    "span",
                    { className: "sectionlink-title" },
                    this.props.title
                )
            )
        );
    }
});
module.exports = exports["default"];