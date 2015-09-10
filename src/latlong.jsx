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

/**
 * Simple display of Latitude and Longitude coordination, for the purpose
 * of being consistent more than anything else.
 *
 * Props:
 *     * latitude - the latitude
 *     * longitude - the longitude
 */
export default React.createClass({
    render() {
        if (this.props.latitude && this.props.longitude) {
            const text =
                `Lat: ${this.props.latitude}, Long: ${this.props.longitude}`;
            return (
                <div>{text}</div>
            );
        } else {
            return null;
        }
    }
});
