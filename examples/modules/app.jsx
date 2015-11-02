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
import Router from "react-router";
import logoImg from "../img/logo.png";
import "./app.css";

const {RouteHandler, Link} = Router;
const logo = document.createElement("img");
logo.src = logoImg;

export default React.createClass({

    render() {
        const sidebarStyle = {
            borderRightStyle: "solid",
            borderRightColor: "#F2F1F1",
            borderRightWidth: 1
        };

        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <img
                            style={{float: "right"}}
                            className="main-image"
                            src={logo.src}
                            width={80}/>
                    </div>
                    <div className="col-md-10">
                        <h2>ESnet React Base Widget Library</h2>
                    </div>
                </div>

                <hr />

                <div className="row">

                <div className="col-md-2" style={sidebarStyle}>
                    <div className="docs-sidebar">
                        <ul className="docs-sidenav nav">
                            <li><Link to="intro">Introduction</Link></li>
                            <hr />
                            <li><Link to="examples">Examples</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-10">
                    <RouteHandler />
                </div>

              </div>
          </div>
        );
    }
});
