"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/**
 * Simple display of Latitude and Longitude coordination, for the purpose
 * of being consistent more than anything else.
 *
 * Props:
 *     * latitude - the latitude
 *     * longitude - the longitude
 */
exports["default"] = _react2["default"].createClass({
    displayName: "latlong",

    render: function render() {
        if (this.props.latitude && this.props.longitude) {
            return _react2["default"].createElement(
                "div",
                null,
                "Lat: ",
                this.props.latitude,
                ", Long: ",
                this.props.longitude
            );
        } else {
            return null;
        }
    }
});
module.exports = exports["default"];