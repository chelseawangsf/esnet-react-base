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
import { TextFilter, SearchBox, OptionList } from "esnet-react-base";

const itemList = [
    {name: "apple", type: 1},
    {name: "banana", type: 1},
    {name: "cat", type: 2},
    {name: "dog", type: 2},
    {name: "donkey", type: 2},
    {name: "donut", type: 1},
    {name: "elephant", type: 2},
    {name: "egg", type: 1},
    {name: "fish", type: 2}
];

const filterOptions = {
    0: "All",
    1: "Food",
    2: "Animal"
};

export default React.createClass({

    getInitialState() {
        return {
            deleteMessage: "",
            filter: "",
            search: "",
            type: 0
        };
    },

    handleDelete(id) {
        this.setState({deleteMessage: `Deleted ${id}!`});
    },

    handleDismiss() {
        this.setState({deleteMessage: `Didn't delete`});
    },

    render() {
        const listStyle = {
            listStyleType: "none",
            background: "#F4F4F4",
            padding: 10,
            borderRadius: 3
        };
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
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4>Text filter</h4>
                        A filter text input.
                        <p />
                        <div className="row">
                            <div className="col-md-3">
                                <TextFilter onChange={filter => this.setState({filter})}/>
                                <br />
                                Filter: {this.state.filter}
                            </div>
                            <div className="col-md-3" style={{height: 200}}>
                                <ul style={listStyle}>
                                    {itemList
                                        .filter(item => item.name.startsWith(this.state.filter))
                                        .map(item => <li key={item.name}>{item.name}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4>Search field</h4>
                        A search text input.
                        <p />
                        <div className="row">
                            <div className="col-md-3">
                                <SearchBox onSubmit={search => this.setState({search})}/>
                                <br />
                                Search: {this.state.search}
                            </div>
                            <div className="col-md-3" style={{height: 200}}>
                                <ul style={listStyle}>
                                    {itemList
                                        .filter(item => item.name.startsWith(this.state.search) &&
                                                        this.state.search.length > 0)
                                        .map(item => <li key={item.name}>{item.name}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4>Options</h4>
                        A list of filter options
                        <p />
                        <div className="row">
                            <div className="col-md-3">
                                <OptionList
                                    attr="filter"
                                    choice={this.state.type}
                                    options={filterOptions}
                                    onChange={(attr, type) => this.setState({type})} />
                                <br />
                                Filter: {this.state.type}
                            </div>
                            <div className="col-md-3" style={{height: 200}}>
                                <ul style={listStyle}>
                                    {itemList
                                        .filter(item => item.type === this.state.type || !this.state.type)
                                        .map(item => <li key={item.name}>{item.name}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
