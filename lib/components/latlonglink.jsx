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

    getDefaultProps: function() {
        return {
            latitude: 0.0,
            longitude: 0.0,
            title: "Map",
            zoom: 15
        };
    },

    render: function() {
        const {latitude, longitude, zoom} = this.props.latitude;
        const url = `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`;
        return (
            <a href={url} target="_blank">{this.props.title}</a>
        );
    }
});

