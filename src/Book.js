import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
    const { book, updateBook } = props;
    return (<div className="book">
        <div className="book-top">
            <div>
                {(book.imageLinks && book.imageLinks.smallThumbnail) ? (
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                ) : (
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: "" }}></div>
                
                )}
            </div>
            <div className="book-shelf-changer">
                <select defaultValue={book.shelf} onChange={(e) => (updateBook(book, e))}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div>
            {book.authors ? (
                <div className="book-authors">{book.authors}</div>
            ) : (
                <div className="book-authors"></div>
            )}
        </div>

    </div>
    )
}

Book.propTypes = {
    book: PropTypes.object,
    updateBook: PropTypes.func
}

export default Book;