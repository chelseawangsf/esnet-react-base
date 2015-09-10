import React from "react";

import Spinner from "../../lib/components/spinner";
import SectionLink from "../../lib/components/sectionlink";
import Breadcrumb from "../../lib/components/breadcrumb";
import Clock from "../../lib/components/clock";
import ViewRow from "../../lib/components/viewrow";
import LatLongLink from "../../lib/components/latlonglink";
import LatLong from "../../lib/components/latlong";
import Directions from "../../lib/components/directions";
import AttributedEventSummary from "../../lib/components/attributedeventsummary";
import NavItems from "../../lib/components/navitems";
import NavItemTabs from "../../lib/components/navitemtabs";;

  	render: function() {

  		//bread crumbs
  		let breadcrumbs = [];
  		breadcrumbs.push({url: "#", name: "Home"});
  		breadcrumbs.push({url: "#labs", name: "Labs"});
  		breadcrumbs.push({url: "#labs/anl", name: "Berkeley Labs"});

  		//Lat long
  		const lat = 38.897474;
  		const long = -77.0368319;
   		const latLong = (
  			<LatLong latitude={lat} longitude={long}/>
  		);
  		const latLongLink = (
  			<LatLongLink title="The White House" latitude={lat} longitude={long} zoom={18}/>
  		);

  		//Clock
  		const tz = "america/los_angeles";
		const clock = (
			<Clock timezone={tz}/>
		);

		//Directions
		const address = {
			"address_1": "1600 Pennsylvania Avenue NW",
			"address_2": "",
			"city": "Washington",
			"state": "DC",
			"country": "USA",
			"zip_code": "20500"
		}

		const d = new Date();
		const attributedEventSummaryNow = (
			<AttributedEventSummary user="bob"
			                        when={d} />
		);

		const today = d.getFullYear() + "-" +  (d.getMonth()+1) + "-" + d.getDate();
		const attributedEventSummaryToday = (
			<AttributedEventSummary user="bob"
			                        when={today}
			                        preamble="Today created" />
		);
		//NavItems
		var subSections = {summary: {label: "Summary", url: ("#location/view/" + "280")},
                        circuits: {label: "Circuits", url: ("#location/view/" + "280" + "/circuits")},
                        diagrams: {label: "Diagrams", url: ("#location/view/" + "280" + "/diagrams")}
                    	};
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

	          	<div className="row">
	              	<div className="col-md-12">
	              	<hr />
	              	<h4>Attributed Event Summary</h4>
					Displays when an event happened with both relative and absolute times.
					The relative time updates so that it's always correct.

					<p />

	              	<table>
	              		<ViewRow name="Last page load" content={attributedEventSummaryNow}/>
	              		<ViewRow name="Beginning of the day" content={attributedEventSummaryToday}/>
	              	</table>

	              	</div>
	          	</div>

                <div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4> NavItem Examples</h4>
                    Displays a horizontal list of Navigation Items that link to different sub pages in the 
                    Portal/ESDB UI.  The current pagesection that is selected is highlighted.

                    <p />

                    <NavItems active={subSections['circuits']['label']} navItems={subSections}/>
                    
                    <br />
                    Selection: {subSections['circuits']['label']}
                    <br />

                    Url: {subSections['circuits']['url']}
                    </div>
                </div>
		    	
		    	<div className="row">
                    <div className="col-md-12">
                    <hr />
                    <h4> NavItemTabs Examples</h4>
                    Displays a horizontal list of Navigation Items in a tab format that link to different sub pages in the 
                    Portal/ESDB UI.  The current pagesection that is selected is outlined.  Supports the "pullRight" prop.

                    <p />

                    <NavItemTabs active={subSections['circuits']['label']} navItemTabs={subSections}/>

                    <br />
                    Selection: {subSections['circuits']['label']}
                    <br />
                    Url: {subSections['circuits']['url']}
                    </div>
                </div>


		    </div>
	    );
  	}
});
