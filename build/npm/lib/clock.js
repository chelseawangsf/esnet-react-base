"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = require("moment-timezone");

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

/**
 * Displays a simple clock with the current time within a given timezone.
 *
 * Props:
 *     * timezone - the timezone to display the current time in
 */
exports["default"] = _react2["default"].createClass({
    displayName: "clock",

    render: function render() {
        if (this.props.timezone) {
            return _react2["default"].createElement(
                "span",
                null,
                this.state.date
            );
        } else {
            return _react2["default"].createElement(
                "div",
                null,
                "Unknown time"
            );
        }
    },

    getTime: function getTime() {
        return _momentTimezone2["default"].tz(this.props.timezone).format("h:mm A, dddd");
    },

    getInitialState: function getInitialState() {
        return {
            date: this.getTime()
        };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        this.state.timer = setInterval(function () {
            _this.setState({ date: _this.getTime() });
        }, 1000);
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.state.timer);
    }
});
module.exports = exports["default"];