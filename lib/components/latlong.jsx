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
