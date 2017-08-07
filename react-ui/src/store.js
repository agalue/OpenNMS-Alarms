import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import alarmsReducer from './reducers/alarms';
import alarmReducer from './reducers/alarm';

export default createStore(
  combineReducers({
    alarmsReducer,
    alarmReducer
  }),
  applyMiddleware(
    logger,
    promise()
  )
);
