/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

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

    getDefaultProps() {
        return {
            title: "Get directions to this location"
        };
    },

    buildAddressString() {
        const address = this.props.address;
        const fields = ["address_1", "address_2", "city",
                        "country", "state", "zip_code"];
        let parts = [];
        _.each(fields, (attr) => {
            if (_.isString(address[attr])) {
                parts.push(address[attr].replace(" ", "+"));
            }
        });
        return parts.join("+");
    },

    render() {
        const url =
            `http://maps.google.com/maps?daddr=${this.buildAddressString()}`;
        return (
            <a target={"_blank"} href={url}>{this.props.title}</a>
        );
    }
});
