"use strict";

var React = require("react/addons");
var _ = require("underscore");

var {Nav,
     NavItem} = require("react-bootstrap");

var NavItemTabs = React.createClass({
    
    displayName: "NavItemTabs",

    getInitialState: function() {
        return {"active": this.props.active};
    },

    handleSelect: function(key) {
        if (this.props.onChange) {
            this.props.onChange(key)
        }
    },

    render: function() {
        var self = this;

        var navElements = _.map(this.props.navItemTabs, function(tab) {
            var label = tab["label"];
            if (_.has(tab, "url")) {
                var url = tab["url"];
                return (
                    <NavItem eventKey={label} href={url}>{label}</NavItem>
                );

            } else {
                return (
                    <NavItem eventKey={label} onSelect={self.handleSelect}>{label}</NavItem>
                );
            };             
        });        
        if (this.props.pullRight) {
            return (
                <div>
                    <Nav bsStyle='tabs' activeKey={this.props.active} pullRight='true'>
                        {navElements}
                    </Nav>
                </div>
            );
        } else {
            return (
                <div>
                    <Nav bsStyle='tabs' activeKey={this.props.active} >
                        {navElements}
                    </Nav>
                </div>
            );
        };
    },
});

module.exports = NavItemTabs;