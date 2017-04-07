import SHOW_BOOK_LIST from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case SHOW_BOOK_LIST:
            return action.payload.data;
            break;
        default:
            return state;
    }
}
