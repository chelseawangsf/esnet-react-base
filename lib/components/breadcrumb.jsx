import React from "react";
import _ from "underscore";

/**
 * Wraps the bootstrap breadcrumb widget, used at the top of the portal pages.
 *
 * Props:
 *     * breadcrumbs - an array of 'breadcrumb' objects, each of which has a name and a URL.
 */
export default React.createClass({

    render: function() {
        const breadcrumbs = _.map(this.props.breadcrumbs, (breadcrumb, index) => {
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
