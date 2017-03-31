import React from 'react';
import ReactDom from 'react-dom';

import BookList from './components/bookList';

let bookList = [
    {'id': 1, 'title': "title 1", 'author': "author 1"},
    {'id': 2, 'title': "title 2", 'author': "author 2"}
];

ReactDom.render(
    <BookList bookList={bookList}/>,
    document.getElementById('app')
);
