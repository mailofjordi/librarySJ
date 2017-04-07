import React, { Component } from 'react';
import Book from "./book";

class BookList extends Component {

    render() {
        let bookList;

        if (undefined !== this.props.bookList) {
            bookList = this.props.bookList.map((book) => {
                return <Book key={book.id} title={book.title} author={book.author}/>
            });
        }

        return (
            <div>
                {bookList}
            </div>
        );
    }
}

export default BookList;
