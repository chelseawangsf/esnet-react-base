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
import { SectionLink, Breadcrumb, NavItems, NavItemTabs } from "esnet-react-base";

export default React.createClass({

    render() {

        // bread crumbs
        let breadcrumbs = [];
        breadcrumbs.push({url: "#", name: "Home"});
        breadcrumbs.push({url: "#labs", name: "Labs"});
        breadcrumbs.push({url: "#labs/lbl", name: "Berkeley Lab"});

        // NavItems
        const subSections = {
            summary: {
                label: "Summary",
                url: ("#location/view/" + "280")
            },
            circuits: {
                label: "Circuits",
                url: ("#location/view/" + "280" + "/circuits")
            },
            diagrams: {
                label: "Diagrams",
                url: ("#location/view/" + "280" + "/diagrams")
            }
        };

        return (
            <div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>Navigation examples</h3>
                        Components that allow navigation around the
                        Portal and ESDB in a uniform way.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>SectionLink</h4>
                    Standardized section link within ESDB.

                    <p />

                    <SectionLink link="intro" title="Home" icon="link"/>
                    <SectionLink link="intro" title="Info" icon="link"/>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4>Breadcrumbs</h4>
                    Wraps the bootstrap breadcrumb widget, used at the top
                    of the portal pages. It takes a list of breadcrumbs, each of
                    which supplies the name and link.

                    <p />

                    <Breadcrumb breadcrumbs={breadcrumbs} />

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4> NavItem Examples</h4>
                    Displays a horizontal list of Navigation Items that link to
                    different sub pages in the Portal/ESDB UI.  The current
                    page section that is selected is highlighted.

                    <p />

                    <NavItems
                        active={subSections["circuits"]["label"]}
                        navItems={subSections} />

                    <br />
                    Selection: {subSections["circuits"]["label"]}
                    <br />

                    Url: {subSections["circuits"]["url"]}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4> NavItemTabs Examples</h4>
                    Displays a horizontal list of Navigation Items in a tab
                    format that link to different sub pages in the
                    Portal/ESDB UI.  The current pagesection that is selected
                    is outlined.  Supports the "pullRight" prop.

                    <p />

                    <NavItemTabs
                        active={subSections["circuits"]["label"]}
                        navItemTabs={subSections}
                        pullRight={false} />

                    <br />
                    Selection: {subSections["circuits"]["label"]}
                    <br />
                    Url: {subSections["circuits"]["url"]}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h3>Display examples</h3>
                        Wrapper for specific data types, such as lat/long
                        coordinates to help us display these in a consistent
                        way across the Portal and ESDB.
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
