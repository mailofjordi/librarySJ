import {SHOW_BOOK_LIST} from '../actions/index';
import {SHOW_BOOK_DETAILS} from '../actions/index';

export function ReducerCurrentContent(state = null, action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return 'book_list';
        case SHOW_BOOK_DETAILS:
            return "book_details";
        default:
            return state;
    }
}
