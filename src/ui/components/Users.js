import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';
import UsersTable from './UsersTable';

export default class Users extends React.Component {
    render() {
        return (
            <div id="users">
                {this.props.children}
            </div>
        );
    }
}