"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

require("./sectionlink.css");

/**
 * A link within the current page. This will be an icon (one of bootstraps icons)
 * as well as the link.
 *
 * Props:
 *     * link - the actual link to navigate to (the hash part of the destination URL)
 *     * title - the text used as the link
 *     * icon - the bootstrap icon name (e.g. 'briefcase')
 */
exports["default"] = _react2["default"].createClass({
    displayName: "sectionlink",

    render: function render() {
        var url = "#" + this.props.link;
        var classes = "glyphicon glyphicon-" + this.props.icon + " sectionlink-icon";
        return _react2["default"].createElement(
            "div",
            { className: "sectionlink-container" },
            _react2["default"].createElement(
                "a",
                { href: url },
                _react2["default"].createElement(
                    "span",
                    null,
                    _react2["default"].createElement("i", { className: classes })
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