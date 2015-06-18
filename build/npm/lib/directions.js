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
 * Generates a Google maps directions link given an address object containing:
 * "address_1", "address_2", "city", "country", "state", "zip_code"
 *
 * Props:
 *     * address - the address object
 *     * title - the link text, defaults to "Get directions to this location"
 */
exports["default"] = _react2["default"].createClass({
    displayName: "directions",

    getDefaultProps: function getDefaultProps() {
        return {
            title: "Get directions to this location"
        };
    },

    buildAddressString: function buildAddressString() {
        var address = this.props.address;
        var parts = [];
        _underscore2["default"].each(["address_1", "address_2", "city", "country", "state", "zip_code"], function (attr, i) {
            if (_underscore2["default"].isString(address[attr])) {
                parts.push(address[attr].replace(" ", "+"));
            }
        });
        return parts.join("+");
    },

    render: function render() {
        var url = "http://maps.google.com/maps?daddr=" + this.buildAddressString();
        return _react2["default"].createElement(
            "a",
            { target: "_blank", href: url },
            this.props.title
        );
    }
});
module.exports = exports["default"];