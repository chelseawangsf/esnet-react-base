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
import "./viewrow.css";

/**
 * When we display name/content pairs within the Portal/ESDB UI, we use a
 * standard table row to do this. So this is a simple helper to clean up that
 * code. It takes a name and a content as it's primary props. In addition you
 * can also pass in a class for the row and an optional width for the name cell
 * (it defaults to 200px).
 */
export default React.createClass({

    getDefaultProps() {
        return {
            name: "",
            content: "",
            rowClass: "",
            valueWidth: 200
        };
    },

    render() {
        return (
            <tr className={this.props.rowClass}>
                <td className="esnet-viewrow-label"
                    width={this.props.valueWidth}>
                    {this.props.name}
                </td>
                <td className="esnet-viewrow-content">{this.props.content}</td>
            </tr>
        );
    }
});
