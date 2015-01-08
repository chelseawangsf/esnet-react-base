/** @jsx React.DOM */

"use strict";

require("./sectionlink.css");

var React = require("react");

/**
 * A link within the current page. This will as an icon (one of bootstraps icons)
 * as well as the link.
 *
 * Props:
 *     * link - the actual link to navigate to (the hash part of the destination URL)
 *     * title - the text used as the link
 *     * icon - the bootstrap icon name (e.g. 'briefcase')
 */
var SectionLink = React.createClass({
    render: function() {
        var url = "#" + this.props.link;
        var classString = "glyphicon glyphicon-" + this.props.icon + " sectionlink-icon";
        return (
            <div className="sectionlink-container">
                <a href={url}>
                    <span>
                        <i className={classString}></i>
                    </span>
                    <span className="sectionlink-title">
                        {this.props.title}
                    </span>
                </a>
            </div>
        );
    }
});

module.exports = SectionLink;