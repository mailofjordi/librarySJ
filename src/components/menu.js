import React, {Component} from 'react';
import {connect} from "react-redux";
import {showBookList} from "../actions/index";

class Menu extends Component {

    render() {
        return (
            <div>
                <input type="button" onClick={this.props.showBookList} value="Ver lista libros"/>
            </div>);
    }
}

export default connect(null, {showBookList})(Menu);
