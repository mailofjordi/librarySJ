import React, { Component } from 'react';

class BookDetails extends Component {
    render() {
        return (
            <div>
                <div>Titulo: <input type="text" value=this.props.title/></div>
                <div>Autor: <input type="text" value=this.props.author/></div>
            </div>
        );
    }
}