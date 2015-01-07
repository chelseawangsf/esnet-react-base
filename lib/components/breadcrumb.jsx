/** @jsx React.DOM */

"use strict";

var React = require("react");
var _     = require("underscore");

/**
 * Wraps the bootstrap breadcrumb widget, used at the top of the portal pages.
 *
 * Props:
 *     * breadcrumbs - an array of 'breadcrumb' objects, each of which has a name and a URL.
 */
var Breadcrumb = React.createClass({
    render: function() {
        var breadcrumbs = _.map(this.props.breadcrumbs, function(breadcrumb, index) {
            return (
                <li key={index}><a href={breadcrumb.url}>{breadcrumb.name}</a></li>
            );
        });
        return (
            <ul className="breadcrumb">
                {breadcrumbs}
            </ul>
        );
    }
});

module.exports = Breadcrumb;