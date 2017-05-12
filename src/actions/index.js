import axios from 'axios';

const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const SHOW_BOOK_LIST = 'SHOW_BOOK_LIST';
export const SHOW_BOOK_DETAILS = 'SHOW_BOOK_DETAILS';

export function showBookList() {
    let books = axios.get(`${API_URI}books`);
    return {
        type: SHOW_BOOK_LIST,
        payload: books
    }
}


export function showBookDetails(currentBookIndex) {
    return {
        type: SHOW_BOOK_DETAILS,
        payload: currentBookIndex
    }
}
