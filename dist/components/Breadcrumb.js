"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wraps the bootstrap breadcrumb widget, used at the top of the portal pages.
 *
 * Props:
 *     * breadcrumbs - an array of 'breadcrumb' objects, each of
 *       which has a name and a URL.
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
    displayName: "Breadcrumb",
    render: function render() {
        var breadcrumbs = _underscore2.default.map(this.props.breadcrumbs, function (breadcrumb, index) {
            return _react2.default.createElement(
                "li",
                { key: index },
                _react2.default.createElement(
                    "a",
                    { href: breadcrumb.url },
                    breadcrumb.name
                )
            );
        });
        return _react2.default.createElement(
            "ul",
            { className: "breadcrumb" },
            breadcrumbs
        );
    }
});