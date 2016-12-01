"use strict";

import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import {App} from './containers/App';
import {LineChartContainer} from './containers/LineChartContainer';
import {TreeChartContainer} from './containers/TreeChartContainer';

export default <Route name="app" component={App}>
    <Redirect from="/" to="/line-chart"/>
    <Route path="line-chart" name="line-chart" component={LineChartContainer}/>
    <Route path="tree-chart" name="tree-chart" component={TreeChartContainer}/>
</Route>;