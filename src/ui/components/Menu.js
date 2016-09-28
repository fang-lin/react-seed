import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';

export default class Menu extends React.Component {
    render() {
        return (
            <nav>
                <a href="/users">Users</a>
                <span> | </span>
                <a href="/articles">Articles</a>
                <span> | </span>
                <a href="">{this.props.testStatus}</a>
                <span> | </span>
                <a href="">{this.props.realStatus}</a>
                <span> | </span>
                <a href="">{this.props.realStatus2}</a>
            </nav>
        );
    }
}