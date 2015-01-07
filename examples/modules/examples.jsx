/** @jsx React.DOM */

var React = require('react');

var Base = require("../../entry");
var Spinner = Base.Spinner;
var Link = Base.Link;
var Breadcrumb = Base.Breadcrumb;
var Clock = Base.Clock;
var ViewRow = Base.ViewRow;
var LatLongLink = Base.LatLongLink;

var Examples = React.createClass({

  	render: function() {

  		//bread crumbs
  		var breadcrumbs = [];
  		breadcrumbs.push({url: "#", name: "Home"});
  		breadcrumbs.push({url: "#labs", name: "Labs"});
  		breadcrumbs.push({url: "#labs/anl", name: "Berkeley Labs"});

  		//Lat long
  		var lat = 31.2243489;
  		var long = 121.4767528;
  		var latLongLink = (
  			<LatLongLink title="Shanghai" latitude={lat} longitude={long} zoom={10}/>
  		);

  		//Clock
  		var tz = "america/los_angeles";
		var clock = (
			<Clock timezone={tz}/>
		);

	    return (
	    	<div>
	          	<div className="row">
	              	<div className="col-md-12">
	                  	<h3>Examples</h3>
	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<h4>Spinner control</h4>
	              	A spinner control used to show that a piece of the page is loading.
	              	This inlines the spinner itself in the bundle.

	              	<p />

	              	<Spinner />

	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Link control</h4>
	              	Standardized section link within ESDB.

	              	<p />

	              	<Link link="intro" title="Back" icon="link"/>

	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Breadcrumbs</h4>
	              	Wraps the bootstrap breadcrumb widget, used at the top of the portal pages. It
	              	takes a list of breadcrumbs, each of which supplies the name and link.

	              	<p />

	              	<Breadcrumb breadcrumbs={breadcrumbs}/>

	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>View rows</h4>
					When we display name/content pairs within the Portal/ESDB UI, we use a standard table
					row to do this. So this is a simple helper to clean up that code. It takes a
					name and a content as it's primary props. In addition you can also pass in a class
					for the row and an optional width for the name cell (it defaults to 200px).

					<p />

	              	<table>
	              		<ViewRow name="Name" content="Bob"/>
	              		<ViewRow name="Birthday" content="October 21, 1964"/>
	              	</table>
	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Timezone aware clock</h4>
					Displays a simple clock with the current time within a given timezone.

					<p />

	              	<table>
	              		<ViewRow name="Timezone" content="america/los_angeles"/>
	              		<ViewRow name="Local time" content={clock}/>
	              	</table>

	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Mapping</h4>
	              	Links a latitude and longitude to a google page at that location. Optionally
	              	you can specify a title and a zoom level.

	              	<p/>

	              	<table>
	              		<ViewRow name="Location" content={latLongLink}/>
	              	</table>
	              	</div>
	          	</div>

		    </div>
	    );
  	}
});

module.exports = Examples;