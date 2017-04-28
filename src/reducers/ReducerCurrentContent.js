import {SHOW_BOOK_LIST} from '../actions/index';

export function ReducerCurrentContent(state = null, action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return 'book_list';
        default:
            return state;
    }
}
