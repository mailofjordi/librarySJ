import {DELETE_BOOK_FAILS} from '../actions/index';

export function ReducerErrorMessage(state = '', action) {
    switch (action.type) {
        case DELETE_BOOK_FAILS:
            return 'Ha petao!!!!';
        default:
            return state;
    }
}
