/**
 *  Copyright (c) 2015, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

const text = require("raw!../../../README.md");

import React from "react";
import Highlighter from "./Highlighter";
import Markdown from "react-markdown";
import logo from "../img/base.png";

export default React.createClass({

    mixins: [Highlighter],

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={logo} alt="ESnet" width={120} height={120}/>
                    </div>
                    <div className="col-md-9">
                        <h2>ESnet React Base</h2>
                        <hr />
                        <Markdown source={text}/>
                    </div>
                </div>
            </div>
        );
    }
});
