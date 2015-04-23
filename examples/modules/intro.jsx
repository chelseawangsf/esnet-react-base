/** @jsx React.DOM */

var React = require("react/addons");

var Intro = React.createClass({

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Introduction</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    The ESnet portal and internal ESDB website uses many small react components
                    that together help us quickly build new pages. This library is a growing collection
                    of those components.
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Intro;