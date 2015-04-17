/** @jsx React.DOM */

var React = require('react');

var Base = require("../../entry");
var Spinner = Base.Spinner;
var SectionLink = Base.SectionLink;
var Breadcrumb = Base.Breadcrumb;
var Clock = Base.Clock;
var ViewRow = Base.ViewRow;
var LatLongLink = Base.LatLongLink;
var LatLong = Base.LatLong;
var Directions = Base.Directions;

var Examples = React.createClass({

  	render: function() {

  		//bread crumbs
  		var breadcrumbs = [];
  		breadcrumbs.push({url: "#", name: "Home"});
  		breadcrumbs.push({url: "#labs", name: "Labs"});
  		breadcrumbs.push({url: "#labs/anl", name: "Berkeley Labs"});

  		//Lat long
  		var lat = 38.897474;
  		var long = -77.0368319;
   		var latLong = (
  			<LatLong latitude={lat} longitude={long}/>
  		);
  		var latLongLink = (
  			<LatLongLink title="The White House" latitude={lat} longitude={long} zoom={18}/>
  		);

  		//Clock
  		var tz = "america/los_angeles";
		var clock = (
			<Clock timezone={tz}/>
		);

		//Directions
		var address = {
			"address_1": "1600 Pennsylvania Avenue NW",
			"address_2": "",
			"city": "Washington",
			"state": "DC",
			"country": "USA",
			"zip_code": "20500"
		}

	    return (
	    	<div>
	          	<div className="row">
	              	<div className="col-md-12">
	                  	<h3>Examples</h3>
	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<h4>Spinner</h4>
	              	A spinner control used to show that a piece of the page is loading.
	              	This inlines the spinner itself in the bundle.

	              	<p />

	              	<Spinner />

	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>SectionLink</h4>
	              	Standardized section link within ESDB.

	              	<p />

	              	<SectionLink link="intro" title="Home" icon="link"/>
	              	<SectionLink link="intro" title="Info" icon="link"/>

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
					The clock updates so that it's always correct.

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
	              	<h4>Location</h4>
	              	Components to link to a location on a Google Map given the latitude and longitude. Also, a
	              	component to display a lat/long pair in a consistent way.
	              	<p/>

	              	<table>
	              		<ViewRow name="Location" content={latLongLink} />
	              		<ViewRow name="Coordinates" content={latLong} />
	              	</table>
	              	</div>
	          	</div>

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Directions to an Address</h4>
					Displays directions to an address.

					<p />

	              	<Directions address={address} title="Get directions to the White House!"/>
	              	</div>
	          	</div>

		    </div>
	    );
  	}
});

module.exports = Examples;