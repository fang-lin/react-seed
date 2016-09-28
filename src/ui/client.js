"use strict";

import React from 'react';
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import Routes from './Routes'

render(<Router history={browserHistory}>{Routes}</Router>, document.getElementById('body'));