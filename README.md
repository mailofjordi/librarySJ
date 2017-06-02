Per on anem:

We've added a Saga middleware, this middleware  reacts to DELETE_BOOK, making an API call. If this API cal fails, this middleware will launch DELETE_BOOK_FAILS action, if it works middleware will launch DELETED_BOOK.

Now we have to test this. After that: we have to make reducers to react to DELETE_BOOK_FAILS (show a message) and DELETED_BOOK (delete this book from books list and go to book list (may be throught saga)).




# librarySJ
Sebas&amp;Jordi library mannager made with react/redux
