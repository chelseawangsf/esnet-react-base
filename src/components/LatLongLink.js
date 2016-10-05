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
 * Links a latitude and longitude to a google page at that location
 *
 * Props:
 *     * latitude - the latitude
 *     * longitude - the longitude
 *     * title - the text link (default is 'Map')
 *     * zoom - the Google Maps zoom level
 */
export default React.createClass({

    getDefaultProps() {
        return {
            latitude: 0.0,
            longitude: 0.0,
            title: "Map",
            zoom: 15
        };
    },

    render() {
        const {latitude, longitude, zoom} = this.props.latitude;
        const url =
            `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`;
        return (
            <a href={url} target="_blank">{this.props.title}</a>
        );
    }
});

