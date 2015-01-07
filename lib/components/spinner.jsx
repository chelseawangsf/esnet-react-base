/** @jsx React.DOM */

"use strict";

var React = require("react");
var loader = document.createElement("img");
loader.src = require("./assets/loader.gif");

/**
 * Form control to edit a text field.
 * Set the initial value with 'initialValue' and set a callback for value changed with 'onChange'.
 */
var Spinner = React.createClass({
    render: function() {
        return (
            <div>
                <img className="loader" src={loader.src} />
            </div>
        );
    }
});

module.exports = Spinner;
