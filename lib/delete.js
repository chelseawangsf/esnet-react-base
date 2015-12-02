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

var _reactBootstrap = require("react-bootstrap");

/**
 * A dialog for confirming that you want to delete something,
 * triggered from a trashcan icon.
 *
 * You can pass in a 'warning' which will be displayed to the user.
 * Something like:
 *      "This will delete the whole organization and all the contacts in it"
 *
 * The dialog will follow this up with the text:
 *      "This action can not be undone."
 * though this can be altered with the 'text' prop.
 *
 * TODO: Decide if this should be in this forms library, or somewhere else.
 */
exports["default"] = _react2["default"].createClass({

    displayName: "DeleteAction",

    getInitialState: function getInitialState() {
        return { showModal: false };
    },

    getDefaultProps: function getDefaultProps() {
        return {
            title: "Confirm delete",
            warning: "Are you sure you want to delete this?",
            text: "This action can not be undone."
        };
    },

    open: function open() {
        this.setState({ showModal: true });
    },

    close: function close() {
        this.setState({ showModal: false });
        if (this.props.dismiss) {
            this.props.dismiss();
        }
    },

    action: function action() {
        this.setState({ showModal: false });
        if (this.props.action) {
            this.props.action(this.props.id);
        }
    },

    render: function render() {
        var style = {
            color: "#B20C0C",
            cursor: "pointer",
            fontSize: 22,
            padding: 5,
            paddingBottom: 10
        };

        return _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("i", { className: "glyphicon glyphicon-trash", style: style, onClick: this.open }),
            _react2["default"].createElement(
                "span",
                null,
                this.state.msg
            ),
            _react2["default"].createElement(
                _reactBootstrap.Modal,
                { show: this.state.showModal, onHide: this.close },
                _react2["default"].createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2["default"].createElement(
                        _reactBootstrap.Modal.Title,
                        null,
                        this.props.title
                    )
                ),
                _react2["default"].createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2["default"].createElement(
                        "h4",
                        null,
                        this.props.warning
                    ),
                    _react2["default"].createElement(
                        "p",
                        null,
                        this.props.text
                    )
                ),
                _react2["default"].createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2["default"].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.close },
                        "Close"
                    ),
                    _react2["default"].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.action, bsStyle: "danger" },
                        "Delete"
                    )
                )
            )
        );
    }
});
module.exports = exports["default"];