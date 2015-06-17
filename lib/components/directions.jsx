import React from "react";
import _ from "underscore";

/**
 * Generates a Google maps directions link given an address object containing:
 * "address_1", "address_2", "city", "country", "state", "zip_code"
 *
 * Props:
 *     * address - the address object
 *     * title - the link text, defaults to "Get directions to this location"
 */
export default React.createClass({

    getDefaultProps: function() {
        return {
            title: "Get directions to this location",
        };
    },

    buildAddressString: function() {
        const address = this.props.address;
        let parts = []
        _.each(["address_1", "address_2", "city", "country", "state", "zip_code"], (attr, i) => {
            if (_.isString(address[attr])) {
                parts.push(address[attr].replace(" ", "+"));
            }
        });
        return parts.join("+");
    },

    render: function() {
        const url = `http://maps.google.com/maps?daddr=${this.buildAddressString()}`;
        return (
            <a target={"_blank"} href={url}>{this.props.title}</a>
        );
    },
});
