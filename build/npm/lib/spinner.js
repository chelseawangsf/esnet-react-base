"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _assetsLoaderGif = require("./assets/loader.gif");

var _assetsLoaderGif2 = _interopRequireDefault(_assetsLoaderGif);

var loader = document.createElement("img");
loader.src = _assetsLoaderGif2["default"];

/**
 * Displays a simple spinner used throughout the Portal and ESDB. Simply include:
 *
 *   <Spinner />
 */
exports["default"] = _react2["default"].createClass({
    displayName: "spinner",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("img", { className: "loader", src: loader.src })
        );
    }
});
module.exports = exports["default"];