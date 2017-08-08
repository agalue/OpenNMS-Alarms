# OpenNMS Alarms

This repository contains a very simple application that retrieves all the OpenNMS alarms from the OpenNMS demo server, and then has a page to see the details of a particular alarm.

There are 3 implementations:

* A simple `Angular 4` app called `angular-ui`
* A simple `React` app called `react-ui`
* A `React+Redux` app called `react-redux-ui`

The idea is just compare the 3 technologies. Redux is not technically required on a React application this simple, just wanted to give it a try.

The Angular app is very straight forward and it is easy to follow. As expected, 2 APIs call will be executed, one to retrieve the alarms and one to retrieve a given alarm after changing the route.

The React app uses Redux (applying best practices), and thanks to the Redux store, only one server call is needed, as react-router will just update the page when switching from the alarms list to an alarm page without making a second call. Although, the React+Redux code looks larger than the Angular code, and not easy to follow at the beginning.

The simple React app, is less complex that its Redux sibling and works similar to the Angular version.

## Installation

### Angular UI

```sh
cd angular-ui
npm install
ng serve
```

### React UI

```sh
cd react-redux-ui
yarn
yarn start
```

Or,

```sh
cd react-ui
yarn
yarn start
```
