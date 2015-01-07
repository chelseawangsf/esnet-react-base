/** @jsx React.DOM */

"use strict";

var React = require("react");

/**
 * Simple display of Latitude and Longitude coordination, for the purpose
 * of being consistent more than anything else.
 */
var LatLong = React.createClass({
    render: function() {
        if (this.props.latitude && this.props.longitude) {
          return (
              <div>Lat: {this.props.latitude}, Long: {this.props.longitude}</div>
          );
        } else {
          return null;
        }
    }
});

module.exports = LatLong;