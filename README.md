**Warning**: This repository contains a set of general purpose React components which are used within the Portal and the internal ESDB project. Largely this library exists to enable reuse of standard UI pieces across ESnet Software Engineering Group projects. As a result these may change without notice or provide little value outside of ESnet.

---

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

The base library is intended to be used with npm and the built into your project with something like webpack.

    npm install esnet-react-base --save

Once installed, you can import the necessary components from the library:

    import { Clock } from "esnet-react-base";
    ...
    render() {
        ...
        return (
            <Clock timezone={"america/los_angeles"}/>
        )
    }

See the examples for more information.

Examples
--------

To run the examples locally you first need to clone the repo, then from the root of the project, run:

```
> npm link
```

First we want to link react and react-dom:

```
> npm link examples/node_modules/react
> npm link examples/node_modules/react-dom
```

Now change directory down to the examples/ directory and `npm link` to the main project, and `npm install` all the dependencies:

```
> cd examples
> npm link esnet-react-base
> npm install
```

In this way, we can run the examples and references to import from "esnet-react-base" in the example code will resolve up to the parent. The complication here is that the parent project has two peer dependencies that need to be taken into account. That's why we npm linked to react and react-dom, those peer dependencies, out of out examples/ dir. That way we only have one install of React.

You can then start up the test server, as well as automatic source building, by doing:

```
npm run start
```

This should launch a browser window on the localhost:

http://localhost:3000/

From now on, if you change the source code and the examples will rebuild and the browser will refresh itself. Errors will also be reported in the browser window.
