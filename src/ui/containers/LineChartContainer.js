import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

const list = [];

export class LineChartContainer extends Component {
    constructor(props) {
        super(props);
        for (let i = 0; i < 10; i++) {
            list.push(i);
        }
    }

    componentWillMount() {
    }

    render() {
        return <div>{
            list.map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }</div>;
    }
}

// export default connect(mapStateToProps, {
//     resetErrorMessage
// })(App)