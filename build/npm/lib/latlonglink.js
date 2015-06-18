"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/**
 * Links a latitude and longitude to a google page at that location
 *
 * Props:
 *     * latitude - the latitude
 *     * longitude - the longitude
 *     * title - the text link (default is 'Map')
 *     * zoom - the Google Maps zoom level
 */
exports["default"] = _react2["default"].createClass({
    displayName: "latlonglink",

    getDefaultProps: function getDefaultProps() {
        return {
            latitude: 0,
            longitude: 0,
            title: "Map",
            zoom: 15
        };
    },

    render: function render() {
        var _props$latitude = this.props.latitude;
        var latitude = _props$latitude.latitude;
        var longitude = _props$latitude.longitude;
        var zoom = _props$latitude.zoom;

        var url = "https://www.google.com/maps/@" + latitude + "," + longitude + "," + zoom + "z";
        return _react2["default"].createElement(
            "a",
            { href: url, target: "_blank" },
            this.props.title
        );
    }
});
module.exports = exports["default"];