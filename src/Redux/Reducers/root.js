import { combineReducers } from 'redux';

import event from './event.js';
import marker from './marker.js';
import tumor from './tumor.js';
import freckle from './freckle.js';
import bodyLocation from './bodyLocation.js';
import logHistory from './logHistory.js';

export default combineReducers({
    event, marker, tumor, freckle, bodyLocation, logHistory
})
