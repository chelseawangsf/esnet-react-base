"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

/**
 * Wraps the bootstrap breadcrumb widget, used at the top of the portal pages.
 *
 * Props:
 *     * breadcrumbs - an array of 'breadcrumb' objects, each of which has a name and a URL.
 */
exports["default"] = _react2["default"].createClass({
    displayName: "breadcrumb",

    render: function render() {
        var breadcrumbs = _underscore2["default"].map(this.props.breadcrumbs, function (breadcrumb, index) {
            return _react2["default"].createElement(
                "li",
                { key: index },
                _react2["default"].createElement(
                    "a",
                    { href: breadcrumb.url },
                    breadcrumb.name
                )
            );
        });
        return _react2["default"].createElement(
            "ul",
            { className: "breadcrumb" },
            breadcrumbs
        );
    }

});
module.exports = exports["default"];