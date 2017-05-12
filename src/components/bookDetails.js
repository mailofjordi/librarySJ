import React, { Component } from 'react';
import {connect} from "react-redux";

class BookDetails extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>Título: <input type="text" defaultValue={this.props.book.title} readOnly/></div>
                    <div>Autor: <input type="text" defaultValue={this.props.book.author} readOnly/></div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.books.bookList[state.books.currentBookIndex]
    }
}

export default connect(mapStateToProps, null)(BookDetails);
