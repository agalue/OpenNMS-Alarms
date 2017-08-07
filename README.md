# OpenNMS Alarms

This repository contains a very simple application that retrieves all the OpenNMS alarms from the demo server, and then has a page to see the details of a particular alarm.

There are 2 implementations:

* `Angular 4` (through `angular-cli`)
* `React` (using `Redux`, `react-redux` and `react-router-dom` through `create-react-app`).

The idea is just compare the 2 technologies. In terms of content, both applications behave in the same way and show the same content.

The Angular app is very straight forward and it is easy to follow. As expected, 2 APIs call will be executed, one to retrieve the alarms and one to retrieve a given alarm after changing the route.

The React app uses Redux (applying best practices), and thanks to the Redux store, only one server call is needed, as react-router will just update the page when switching from the alarms list to an alarm page without making a second call.

The React code might look larger than the Angular code, but using Redux provides a lot of flexibility while keeping the React components simple.

## Installation

### Angular UI

```sh
cd angular-ui
npm install
ng serve
```

### React UI

```sh
cd react-ui
yarn
yarn start
```
