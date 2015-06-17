import React from "react";
import _ from "underscore";

import "./sectionlink.css";

/**
 * A link within the current page. This will be an icon (one of bootstraps icons)
 * as well as the link.
 *
 * Props:
 *     * link - the actual link to navigate to (the hash part of the destination URL)
 *     * title - the text used as the link
 *     * icon - the bootstrap icon name (e.g. 'briefcase')
 */
export default React.createClass({
    render: function() {
        const url = `#${this.props.link}`;
        const classes = `glyphicon glyphicon-${this.props.icon} sectionlink-icon`;
        return (
            <div className="sectionlink-container">
                <a href={url}>
                    <span>
                        <i className={classes}></i>
                    </span>
                    <span className="sectionlink-title">
                        {this.props.title}
                    </span>
                </a>
            </div>
        );
    }
});
