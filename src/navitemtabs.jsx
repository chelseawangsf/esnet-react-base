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
import {Nav, NavItem} from "react-bootstrap";

export default React.createClass({

    displayName: "NavItemTabs",

    getInitialState() {
        return {
            active: this.props.active
        };
    },

    handleSelect(key) {
        if (this.props.onChange) {
            this.props.onChange(key);
        }
    },

    render() {
        var navElements = _.map(this.props.navItemTabs, (tab, key) => {
            var label = tab["label"];
            if (_.has(tab, "url")) {
                var url = tab["url"];
                return (
                    <NavItem
                        key={key}
                        eventKey={label}
                        href={url}>
                        {label}
                    </NavItem>
                );

            } else {
                return (
                    <NavItem
                        key={key}
                        eventKey={label}
                        onSelect={this.handleSelect}>
                        {label}
                    </NavItem>
                );
            }
        });
        if (this.props.pullRight) {
            return (
                <div>
                    <Nav
                        bsStyle="tabs"
                        activeKey={this.props.active}
                        pullRight="true">
                        {navElements}
                    </Nav>
                </div>
            );
        } else {
            return (
                <div>
                    <Nav
                        bsStyle="tabs"
                        activeKey={this.props.active} >
                        {navElements}
                    </Nav>
                </div>
            );
        }
    },
});
