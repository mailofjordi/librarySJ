import axios from 'axios';

const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const SHOW_BOOK_LIST = 'SHOW_BOOK_LIST';
export const SHOW_BOOK_DETAILS = 'SHOW_BOOK_DETAILS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const DELETE_BOOK_FAILS = 'DELETE_BOOK_FAILS';
export const DELETED_BOOK = 'DELETED_BOOK';

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

export function deleteBook(bookIndex, bookId) {
    return {
        type: DELETE_BOOK,
        payload: {'bookIndex': bookIndex, 'bookId': bookId}
    }
}
