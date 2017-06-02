import {SHOW_BOOK_LIST} from '../actions/index';
import {SHOW_BOOK_DETAILS} from '../actions/index';
import {DELETED_BOOK} from '../actions/index';

export function ReducerCurrentContent(state = null, action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return 'book_list';
        case SHOW_BOOK_DETAILS:
            return "book_details";
        case DELETED_BOOK:
            action.payload.deleteResponse
            return "book_list";
        default:
            return state;
    }
}
