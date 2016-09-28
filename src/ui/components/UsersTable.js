import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';

export default class UsersTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: props.params.page,
            users: [{
                id: 1,
                name: 'Fang lin',
                sex: 'male'
            }]
        }
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Sex</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((user) => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.sex}</td>
                                <td><a href={`/user/${user.id}`}>Detail</a></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <h1>{this.state.page}</h1>
            </div>
        );
    }
}