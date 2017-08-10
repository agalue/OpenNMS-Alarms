# OpenNMS Alarms

This repository contains a very simple application that retrieves all the OpenNMS alarms from the OpenNMS demo server, and then has a page to see the details of a particular alarm.

There are 3 implementations:

* A simple `Angular 4` app called `angular-ui`
* A simple `React` app called `react-ui`
* A `React+Redux` app called `react-redux-ui`

The idea is just compare the 3 technologies. Redux is not technically required on a React application this simple, I just wanted to give it a try.

The Angular app is very straight forward and it is easy to follow. As expected, you'll see 2 APIs call executed, one to retrieve the alarms and one to retrieve a given alarm after changing the route.

The two React versions behave the same. One uses Redux and the other doesn't. The main difference is that all the state is handled on the App component for the simple version, whereas the state is handled by the Redux store on the other version. In both cases, only a single call to the API is generated.

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
