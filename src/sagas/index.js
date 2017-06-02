import {DELETE_BOOK, DELETE_BOOK_FAILS, DELETED_BOOK} from '../actions';
import {put, takeLatest, fork } from 'redux-saga/effects';
import axios from 'axios';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';

function * deleteBook(action) {
    let deleteResponse = axios.delete(`${API_URI}book/` + action.payload.bookId);

    deleteResponse.then(function * (result) {
        yield put({
            type: DELETED_BOOK,
            bookIndex: action.payload.bookIndex
        });
    }).catch( function * (result) {
        yield put({
            type: DELETE_BOOK_FAILS,
            bookIndex: error
        });
    });
}

function * watchFetchData () {
    yield takeLatest(DELETE_BOOK, deleteBook)
}

export default function * () {
    yield [
        fork(watchFetchData)
    ]
}
