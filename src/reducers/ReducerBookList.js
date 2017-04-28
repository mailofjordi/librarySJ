import {SHOW_BOOK_LIST} from '../actions/index';

export function ReducerBookList(state = [], action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return action.payload.data;
        default:
            return state;
    }
}
