import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {showBookList} from "../actions/index";

class Menu extends Component {

    render() {
        return (
            <div>
                <input type="button" onClick={showBookList} value="Ver lista libros"/>
            </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showBookList}, dispatch)
}

export default connect(mapDispatchToProps)(Menu);
