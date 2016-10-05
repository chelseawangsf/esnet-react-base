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
import { ViewRow, Clock, AttributedEventSummary } from "esnet-react-base";

export default React.createClass({

    render() {
        const now = new Date();
        const today = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>Time components</h3>
                        Wrapper for specific data types, such as lat/long
                        coordinates to help us display these in a consistent
                        way across the Portal and ESDB.
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>Timezone aware clock</h4>
                    Displays a simple clock with the current time within a
                    given timezone. The clock updates so that it's always
                    correct.

                    <p />

                    <table>
                        <tbody>
                        <ViewRow name="Timezone" content="america/los_angeles" />
                        <ViewRow name="Local time">
                            <Clock timezone="america/los_angeles"/>
                        </ViewRow>
                        </tbody>
                    </table>

                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>Attributed Event Summary</h4>
                    Displays when an event happened with both relative and
                    absolute times. The relative time updates so that it's
                    always correct.

                    <p />

                    <table>
                        <tbody>
                        <ViewRow name="Last page load">
                            <AttributedEventSummary
                                user="bob"
                                when={now} />
                        </ViewRow>

                        <ViewRow name="Beginning of the day">
                            <AttributedEventSummary
                                user="bob"
                                when={today}
                                preamble="Today created" />
                        </ViewRow>
                        </tbody>
                    </table>

                    </div>
                </div>

            </div>
        );
    }
});
