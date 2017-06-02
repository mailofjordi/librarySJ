import { combineReducers } from 'redux';
import {ReducerCurrentContent} from './ReducerCurrentContent';
import {ReducerBookList} from './ReducerBookList';
import {ReducerErrorMessage} from "./ReducerErrorMessage";

const rootReducer = combineReducers({
    currentContent: ReducerCurrentContent,
    books: ReducerBookList,
    errorMessage: ReducerErrorMessage
});

export default rootReducer;
