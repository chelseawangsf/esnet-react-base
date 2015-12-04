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

require("./options.css");

exports["default"] = _react2["default"].createClass({

    displayName: "OptionList",

    getInitialState: function getInitialState() {
        return { value: this.props.choice };
    },

    handleChange: function handleChange(e) {
        var value = e.target.value;

        // State changes
        this.setState({ value: value });

        // Callbacks
        if (this.props.onChange) {
            this.props.onChange(this.props.attr, e.target.value);
        }
    },

    render: function render() {
        var _this = this;

        var className = "list-group";

        if (!this.props.options) {
            throw new Error("No initial choice list supplied for attr '" + this.props.attr + "'");
        }

        var listElements = _underscore2["default"].map(this.props.options, function (option, i) {
            if (_this.props.choice === Number(i)) {
                return _react2["default"].createElement(
                    "li",
                    { className: "list-group-item active",
                        key: i,
                        value: i,
                        onClick: _this.handleChange },
                    option
                );
            } else {
                return _react2["default"].createElement(
                    "li",
                    { className: "list-group-item",
                        key: i,
                        value: i,
                        onClick: _this.handleChange },
                    option
                );
            }
        });

        var style = this.props.width ? { width: this.props.width } : {};

        // Key based on the choice list
        var choiceList = _underscore2["default"].map(this.props.options, function (choice) {
            return choice;
        });
        var list = choiceList.join("-");

        return _react2["default"].createElement(
            "ul",
            { className: className, style: style, key: list },
            listElements
        );
    }
});
module.exports = exports["default"];