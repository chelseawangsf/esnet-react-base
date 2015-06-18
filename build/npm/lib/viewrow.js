"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./viewrow.css");

/**
 * When we display name/content pairs within the Portal/ESDB UI, we use a standard table
 * row to do this. So this is a simple helper to clean up that code. It takes a
 * name and a content as it's primary props. In addition you can also pass in a class
 * for the row and an optional width for the name cell (it defaults to 200px).
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
        return _react2["default"].createElement(
            "tr",
            { className: this.props.rowClass },
            _react2["default"].createElement(
                "td",
                { className: "esnet-viewrow-label", width: this.props.valueWidth },
                this.props.name
            ),
            _react2["default"].createElement(
                "td",
                { className: "esnet-viewrow-content" },
                this.props.content
            )
        );
    }
});
module.exports = exports["default"];