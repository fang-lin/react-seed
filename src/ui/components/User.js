import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';

export default class User extends React.Component {
    render() {
        return (
            <div id="user">
                {this.props.children}
            </div>
        );
    }
}