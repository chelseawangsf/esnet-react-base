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
import spinner from "./loader.gif";

const loader = document.createElement("img");
loader.src = spinner;

/**
 * Displays a simple spinner used throughout the Portal
 * and ESDB. Simply include:
 *
 *   <Spinner />
 */
export default React.createClass({
    render() {
        return (
            <div>
                <img className="loader" src={loader.src} />
            </div>
        );
    }
});
