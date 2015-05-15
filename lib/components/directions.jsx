"use strict";

require("./sectionlink.css");

var React = require("react");
var _ = require("underscore");

var Directions = React.createClass({

    getDefaultProps: function() {
        return {
            title: "Get directions to this location",
        };
    },

    buildAddressString: function() {
        var address = this.props.address;
        var parts, attr;
        parts = []
        _.each(["address_1", "address_2", "city", "country", "state", "zip_code"], function(attr, i) {
            if(_.isString(address[attr])) {
                parts.push(address[attr].replace(" ", "+"));
            }
        });
        return parts.join("+");
    },

    render: function() {
        var url = "http://maps.google.com/maps?daddr=" + this.buildAddressString();
        return (
            <a target={"_blank"} href={url}>{this.props.title}</a>
        );
    },
});

module.exports = Directions;