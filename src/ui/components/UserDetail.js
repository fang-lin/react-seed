import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';

export default class UserDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: '1',
                name: 'Fang lin',
                sex: 'male'
            }
        }
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                <a onClick={() => {this.props.history.goBack()}}>Back</a>
                <ul id="user-detail">
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.sex}</li>
                </ul>
            </div>
        );
    }
}