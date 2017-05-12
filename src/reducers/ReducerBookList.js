import {SHOW_BOOK_LIST} from '../actions/index';
import {SHOW_BOOK_DETAILS} from '../actions/index';

export function ReducerBookList(state = {}, action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return {"bookList": action.payload.data,"currentBookIndex": null}
        case SHOW_BOOK_DETAILS:
            return {"bookList": state.bookList,"currentBookIndex": action.payload}
        default:
            return state;
    }
}
