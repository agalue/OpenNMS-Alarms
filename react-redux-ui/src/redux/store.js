import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { alarmsReducer } from './modules/alarms';
import { alarmReducer } from './modules/alarm';

export default createStore(
  combineReducers({
    alarms: alarmsReducer,
    alarm: alarmReducer
  }),
  applyMiddleware(
    logger,
    promise()
  )
);
