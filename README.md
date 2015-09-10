This repository contains a set of general purpose React components which are used within the Portal and the internal ESDB project. Largely this library exists to enable reuse of standard UI pieces across ESnet Tools Group projects. As a result these may change without notice or provide little value outside of ESnet.

Current components are:

 - Timezone aware clock
 - Easy to use breadcrumbs
 - Given an address, render a directions link, a lat/long link or a Google Map
 - Navigation pills or tabs
 - Section links (used in ESDB)
 - Spinner
 - A view row helper

Getting started
---------------

The charts library is intended to be used with npm and the built into your project with something like webpack.

    npm install @esnet/react-base --save

Once installed, you can import the necessary components from the library:

    import {Clock} from "@esnet/react-base";
    ...
    render() {
        ...
        return (
            <Clock timezone={"america/los_angeles"}/>
        )
    }

See the examples for more information about these props.

Examples
--------

To run the examples you first need to run:

```npm install```

This will install the development dependencies into your node_modules directory.

You can then start up the test server, as well as automatic source building, by doing:

```npm run start-website```

And now, for the magic, point your browser to:

http://localhost:8080/webpack-dev-server/

From now on, if you change the source code, webpack will rebuild the examples bundle and the browser will refresh itself. Errors will also be reported in the browser window.
