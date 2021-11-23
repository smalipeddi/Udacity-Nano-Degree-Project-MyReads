import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

/** This component is responsible for displaying all the books on the search page */
/** It has a Book component as a child */
class AllBooksList extends Component {
 
    render() {
        const { books, updateBook } = this.props;
        return(
    		<div className="list-books-content">
                <div className="bookshelf">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map(book => (
                               <Book updateBook={updateBook} key={book.id} book={book} />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            )
    }
}

AllBooksList.propTypes = {
    books: PropTypes.array,
    updateBook: PropTypes.func
}


export default AllBooksList;