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
import { ViewRow, LatLong, LatLongLink, Directions } from "esnet-react-base";

export default React.createClass({

    render() {
        // Lat long
        const lat = 38.897474;
        const long = -77.0368319;

        // Directions
        const address = {
            address_1: "1600 Pennsylvania Avenue NW",
            address_2: "",
            city: "Washington",
            state: "DC",
            country: "USA",
            zip_code: "20500"
        };

        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>Location components</h3>
                        Wrapper for specific data types, such as lat/long
                        coordinates to help us display these in a consistent
                        way across the Portal and ESDB.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>Location</h4>
                    Components to link to a location on a Google Map given the
                    latitude and longitude. Also, a component to display a
                    lat/long pair in a consistent way.
                    <p/>

                    <table>
                        <tbody>
                        <ViewRow name="Location">
                            <LatLongLink
                                title="The White House"
                                latitude={lat}
                                longitude={long}
                                zoom={18}/>
                        </ViewRow>
                        <ViewRow name="Coordinates">
                            <LatLong latitude={lat} longitude={long}/>
                        </ViewRow>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>Directions to an Address</h4>
                    Displays directions to an address.

                    <p />

                    <table>
                        <tbody>
                        <ViewRow name="Directions">
                            <Directions
                                address={address}
                                title="Get directions to the White House!" />
                        </ViewRow>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="row">
                    <div style={{height: 200}} className="col-md-12">
                    </div>
                </div>
            </div>
        );
    }
});
