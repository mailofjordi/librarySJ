import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteBook} from "../actions/index";
import ErrorMessage from "./errorMessage";

class BookDetails extends Component {
    render() {
        return (
            <div>
                <ErrorMessage/>
                <form>
                    <div>Título: <input type="text" defaultValue={this.props.book.title} readOnly/></div>
                    <div>Autor: <input type="text" defaultValue={this.props.book.author} readOnly/></div>
                    <input type="button" value='Eliminar' onClick={() => this.props.deleteBook(this.props.bookIndex, this.props.book.id)}/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.books.bookList[state.books.currentBookIndex],
        bookIndex: state.books.currentBookIndex
    }
}

export default connect(mapStateToProps, {deleteBook})(BookDetails);
