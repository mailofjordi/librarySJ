import React, {Component} from 'react';
import BookList from "./bookList";

class MainContent extends Component{
    render(){
        let currentComponent = null;

        if (this.props.currentComponent === 'book_list') {
            currentComponent = <BookList/>;
        }

        return (currentComponent);
    }
}

export default MainContent;
