import React, { Component } from 'react';
import {showBookDetails} from "../actions/index";
import {connect} from "react-redux";

class Book extends Component {
    render() {
        return (
            <div>
                <div>Título: {this.props.book.title}</div>
                <div>Autor: {this.props.book.author}</div>
                <input type="button" onClick={() => this.props.showBookDetails(this.props.bookIndex)} value="Editar"/>
            </div>
        );
    }
}

export default connect(null, {showBookDetails})(Book);
