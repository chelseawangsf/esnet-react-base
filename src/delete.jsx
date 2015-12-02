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
import { Modal, Button } from "react-bootstrap";

/**
 * A dialog for confirming that you want to delete something,
 * triggered from a trashcan icon.
 *
 * You can pass in a 'warning' which will be displayed to the user.
 * Something like:
 *      "This will delete the whole organization and all the contacts in it"
 *
 * The dialog will follow this up with the text:
 *      "This action can not be undone."
 * though this can be altered with the 'text' prop.
 *
 * TODO: Decide if this should be in this forms library, or somewhere else.
 */
export default React.createClass({

    displayName: "DeleteAction",

    getInitialState() {
        return {showModal: false};
    },

    getDefaultProps() {
        return {
            title: "Confirm delete",
            warning: "Are you sure you want to delete this?",
            text: "This action can not be undone.",
            animate: false
        };
    },

    open() {
        this.setState({showModal: true});
    },

    close() {
        this.setState({showModal: false});
        if (this.props.dismiss) {
            this.props.dismiss();
        }
    },

    action() {
        this.setState({showModal: false});
        if (this.props.action) {
            this.props.action(this.props.id);
        }
    },

    render() {
        const style = {
            color: "#B20C0C",
            cursor: "pointer",
            fontSize: 22,
            padding: 5,
            paddingBottom: 10
        };

        return (
            <div>
                <i className="glyphicon glyphicon-trash" style={style} onClick={this.open} />
                <span>{this.state.msg}</span>
                <Modal show={this.state.showModal} onHide={this.close} animation={false} container={this}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>{this.props.warning}</h4>
                        <p>{this.props.text}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.action} bsStyle="danger">Delete</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        );
    }
});
