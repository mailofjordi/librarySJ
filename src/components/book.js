import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <div>Título: {this.props.title}</div>
                <div>Autor: {this.props.author}</div>
            </div>
        );
    }
}

export default Book;
