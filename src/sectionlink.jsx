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
import "./sectionlink.css";

/**
 * A link within the current page. This will be an icon (one of
 * bootstraps icons) as well as the link.
 *
 * Props:
 *     * link - the actual link to navigate to (the hash part of
 *              the destination URL)
 *     * title - the text used as the link
 *     * icon - the bootstrap icon name (e.g. 'briefcase')
 */
export default React.createClass({

    getDefaultProps() {
        const containerStyle = {
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            width: 220,
            height: 40,
            borderColor: "#E2E2E2",
            background: "#F8F8F8",
            fontSize: 26,
            margin: 10
        };
        const titleStyle = {
            marginLeft: 16
        };
        return {
            containerStyle,
            titleStyle
        };

    },

    render() {
        const url = `#${this.props.link}`;
        const className =
            `glyphicon glyphicon-${this.props.icon} sectionlink-icon`;
        return (
            <div style={this.props.containerStyle}>
                <a href={url}>
                    <span>
                        <i className={className}></i>
                    </span>
                    <span style={this.props.titleStyle}>
                        {this.props.title}
                    </span>
                </a>
            </div>
        );
    }
});
