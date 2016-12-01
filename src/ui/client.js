"use strict";

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Root from './containers/Root/Root';
import configureStore from './store/configureStore'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Root history={history} store={store}/>,
    document.getElementById('body')
);