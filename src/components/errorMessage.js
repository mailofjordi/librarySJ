import React, {Component} from 'react';
import {connect} from 'react-redux';

class ErrorMessage extends Component {
    render () {
        return (
            <div style={{color: 'red'}}>{this.props.errorMessage}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, null)(ErrorMessage);
