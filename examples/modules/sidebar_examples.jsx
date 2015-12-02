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
import DeleteAction from "../../src/delete";

export default React.createClass({

    getInitialState() {
        return {deleteMessage: ""};
    },

    handleDelete(id) {
        this.setState({deleteMessage: `Deleted ${id}!`});
    },

    handleDismiss() {
        this.setState({deleteMessage: `Didn't delete`});
    },

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Sidebar components</h3>
                        Our UI often has a sidebar that contains actions
                        for the current view, along with filtering type
                        controls if a list is being displayed.
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <h4>Delete confirmation</h4>
                        A delete button which asks to confirm your actions
                        <p />
                        <DeleteAction
                            id={22}
                            title="Delete Organization"
                            warning="This will delete the whole organization and all associated data"
                            dismiss={this.handleDismiss}
                            action={this.handleDelete} />
                        <span>{this.state.deleteMessage}</span>
                    </div>
                </div>
            </div>
        );
    }
});
