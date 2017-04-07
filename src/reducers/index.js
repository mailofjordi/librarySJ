import { combineReducers } from 'redux';
import ReducerMenu from './ReducerMenu';

const rootReducer = combineReducers({
    books: ReducerMenu
});

export default rootReducer;
