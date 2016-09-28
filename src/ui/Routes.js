"use strict";

import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import Users from './components/Users';
import UsersTable from './components/UsersTable';
import User from './components/User';
import UserDetail from './components/UserDetail';
import UserEditor from './components/UserEditor';
import Articles from './components/Articles';
import ArticlesTable from './components/ArticlesTable';

export default <Route name="app" component={App}>
    <Redirect from="/" to="/users"/>

    <Redirect from="/users" to="/users/0"/>
    <Route path="users" component={Users}>
        <Route path=":page" name="users-table" component={UsersTable}/>
    </Route>

    <Redirect from="/user" to="/user/0"/>
    <Route path="user" name="user" component={User}>
        <Route path=":id" name="user-detail" component={UserDetail}/>
        <Route path=":id/editor" name="user-editor" component={UserEditor}/>
    </Route>

    <Redirect from="/articles" to="/articles/0"/>
    <Router path="articles" name="articles" component={Articles}>
        <Route path=":page" name="articles-table" component={ArticlesTable}/>
    </Router>
</Route>;