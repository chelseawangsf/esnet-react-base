"use strict";

var React = require("react");

/**
 * Links a latitude and longitude to a google page at that location
 */
var LatLongLink = React.createClass({

    getDefaultProps: function() {
        return {
            latitude: 0.0,
            longitude: 0.0,
            title: "Map",
            zoom: 15
        };
    },

    render: function() {
        var url = "https://www.google.com/maps/@";
        url += this.props.latitude + "," + this.props.longitude;
        url += "," + this.props.zoom + "z";
        return (
            <a href={url} target="_blank">{this.props.title}</a>
        );
    }
});

module.exports = LatLongLink;
