import React from "react";
import spinner from "./assets/loader.gif";

const loader = document.createElement("img");
loader.src = spinner;

/**
 * Displays a simple spinner used throughout the Portal and ESDB. Simply include:
 *
 *   <Spinner />
 */
export default React.createClass({
    render: function() {
        return (
            <div>
                <img className="loader" src={loader.src} />
            </div>
        );
    }
});
