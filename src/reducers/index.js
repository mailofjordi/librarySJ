import { combineReducers } from 'redux';
import {ReducerCurrentContent} from './ReducerCurrentContent';
import {ReducerBookList} from './ReducerBookList';

const rootReducer = combineReducers({
    currentContent: ReducerCurrentContent,
    books: ReducerBookList
});

export default rootReducer;
