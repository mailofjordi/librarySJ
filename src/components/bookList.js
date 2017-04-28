import React, { Component } from 'react';
import Book from "./book";
import {connect} from "react-redux";

class BookList extends Component {

    render() {

        console.log('booklist');
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

function mapStateToProps(state) {
    return {
        bookList: state.bookList
    }
}

export default connect(mapStateToProps)(BookList);
