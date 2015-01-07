/** @jsx React.DOM */

"use strict";

var React = require("react");

require("./viewrow.css");

/**
 * When we display name/content pairs within the Portal/ESDB UI, we use a standard table
 * row to do this. So this is a simple helper to clean up that code. It takes a
 * name and a content as it's primary props. In addition you can also pass in a class
 * for the row and an optional width for the name cell (it defaults to 200px).
 */
var ViewRow = React.createClass({

    getDefaultProps: function() {
        return {
            name: "",
            content: "",
            rowClass: "",
            valueWidth: 200
        };
    },

    render: function() {
        return (
            <tr className={this.props.rowClass}>
                <td className="esnet-viewrow-label" width={this.props.valueWidth}>{this.props.name}</td>
                <td className="esnet-viewrow-content">{this.props.content}</td>
            </tr>
        );
    }
});

module.exports = ViewRow;