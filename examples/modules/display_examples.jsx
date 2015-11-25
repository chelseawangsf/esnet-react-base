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
import ViewRow from "../../src/viewrow";
import Spinner from "../../src/spinner";

export default React.createClass({

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Display components</h3>
                        Wrapper for specific data types, such as lat/long
                        coordinates to help us display these in a consistent
                        way across the Portal and ESDB.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <h4>Spinner</h4>
                    A spinner control used to show that a piece of the
                    page is loading. This inlines the spinner itself in
                    the bundle.

                    <p />
                    <table>
                        <tbody>
                            <ViewRow name="Loading"><Spinner /></ViewRow>
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>View rows</h4>
                    When we display name/content pairs within the Portal/ESDB
                    UI, we use a standard table row to do this. So this is a
                    simple helper to clean up that code. It can be used in two
                    forms: Either it takes a name and a content props or you
                    can specify a name and provide a child.

                    In addition you can also pass
                    in a class for the row and an optional width for the name
                    cell (it defaults to 200px).

                    <p />

                    <table>
                        <tbody>
                            <ViewRow name="Name" content="Bob"/>
                            <ViewRow name="Birthday" content="October 21, 1964"/>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
});
