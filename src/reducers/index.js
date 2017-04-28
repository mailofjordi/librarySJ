import { combineReducers } from 'redux';
import {ReducerCurrentContent} from './ReducerCurrentContent';
import {ReducerBookList} from './ReducerBookList';

const rootReducer = combineReducers({
    currentContent: ReducerCurrentContent,
    bookList: ReducerBookList
});

export default rootReducer;
