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

var _reactBootstrap = require("react-bootstrap");

exports["default"] = _react2["default"].createClass({

    displayName: "NavItemTabs",

    getInitialState: function getInitialState() {
        return {
            active: this.props.active
        };
    },

    handleSelect: function handleSelect(key) {
        if (this.props.onChange) {
            this.props.onChange(key);
        }
    },

    render: function render() {
        var _this = this;

        var navElements = _underscore2["default"].map(this.props.navItemTabs, function (tab, key) {
            var label = tab["label"];
            if (_underscore2["default"].has(tab, "url")) {
                var url = tab["url"];
                return _react2["default"].createElement(
                    _reactBootstrap.NavItem,
                    {
                        key: key,
                        eventKey: label,
                        href: url },
                    label
                );
            } else {
                return _react2["default"].createElement(
                    _reactBootstrap.NavItem,
                    {
                        key: key,
                        eventKey: label,
                        onSelect: _this.handleSelect },
                    label
                );
            }
        });
        if (this.props.pullRight) {
            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    _reactBootstrap.Nav,
                    {
                        bsStyle: "tabs",
                        activeKey: this.props.active,
                        pullRight: "true" },
                    navElements
                )
            );
        } else {
            return _react2["default"].createElement(
                "div",
                null,
                _react2["default"].createElement(
                    _reactBootstrap.Nav,
                    {
                        bsStyle: "tabs",
                        activeKey: this.props.active },
                    navElements
                )
            );
        }
    }
});
module.exports = exports["default"];