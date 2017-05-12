import React, { Component } from 'react';
import Book from "./book";
import {connect} from "react-redux";

class BookList extends Component {

    render() {

        let bookList;

        if (undefined !== this.props.bookList) {
            bookList = this.props.bookList.map((book) => {
                return <Book key={book.id} book={book} />
            });
        }

        return (
            <div>
                {bookList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.books.bookList
    }
}

export default connect(mapStateToProps)(BookList);
