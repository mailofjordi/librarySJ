import React, {Component} from 'react';
import {connect} from "react-redux";
import BookList from "./bookList";
import BookDetails from "./bookDetails";

class MainContent extends Component{
    render(){
        let currentComponent = null;

        if (this.props.currentContent === 'book_list') {
            currentComponent = <BookList/>;
        } else if (this.props.currentContent === 'book_details') {
            currentComponent = <BookDetails/>;
        }

        return (currentComponent);
    }
}

function mapStateToProps(state) {
    return {
        currentContent: state.currentContent
    }
}

export default connect(mapStateToProps)(MainContent);
