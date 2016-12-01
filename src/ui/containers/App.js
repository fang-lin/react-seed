import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Menu from '../components/Menu';
// import {resetErrorMessage} from '../actions';

export class App extends Component {
    // static propTypes = {
    //     // Injected by React Redux
    //     errorMessage: PropTypes.string,
    //     resetErrorMessage: PropTypes.func.isRequired,
    //     inputValue: PropTypes.string.isRequired,
    //     // Injected by React Router
    //     children: PropTypes.node
    // };

    constructor(props) {
        super(props);

    }

    render() {
        const menu = [
            {
                key: 'line-chart',
                value: 'Line Chart'
            },
            {
                key: 'tree-chart',
                value: 'Tree Chart'
            }
        ]
        return (
            <div>
                <Menu menu={menu}/>
                {this.props.children}
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    errorMessage: null,
    inputValue: null
});

// export default connect(mapStateToProps, {
//     resetErrorMessage
// })(App);


export default connect(mapStateToProps)(App);