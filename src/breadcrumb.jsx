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
 * Wraps the bootstrap breadcrumb widget, used at the top of the portal pages.
 *
 * Props:
 *     * breadcrumbs - an array of 'breadcrumb' objects, each of
 *       which has a name and a URL.
 */
export default React.createClass({

    render() {
        const breadcrumbs =
            _.map(this.props.breadcrumbs, (breadcrumb, index) => {
                return (
                    <li key={index}>
                        <a href={breadcrumb.url}>{breadcrumb.name}</a>
                    </li>
                );
            });
        return (
            <ul className="breadcrumb">
                {breadcrumbs}
            </ul>
        );
    }
});
