import React, {Component} from 'react';
import BookList from "./bookList";
import {connect} from "react-redux";

class MainContent extends Component{
    render(){
        let currentComponent = null;

        if (this.props.currentContent === 'book_list') {
            currentComponent = <BookList/>;
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
