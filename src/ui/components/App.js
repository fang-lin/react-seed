import React from 'react';
import TapEventPlugin from 'react/lib/TapEventPlugin';
import EventPluginHub from 'react/lib/EventPluginHub';
import _ from 'lodash';
import classnames from 'classnames';
import Menu from './Menu';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        
        this.renderCount = 0;
        this.renderCount = 0;

        this.testStatus = 123;

        this.state = {
            realStatus: 'yyy',
            realStatus2: 789
        }
    }

    componentDidMount() {


    }

    render() {

        this.renderCount++
        return (
            <div>
                <Menu
                    testStatus={this.testStatus}
                    realStatus={this.state.realStatus}
                    realStatus2={this.state.realStatus2}
                />
                {this.props.children}
            </div>
        );
    }
}