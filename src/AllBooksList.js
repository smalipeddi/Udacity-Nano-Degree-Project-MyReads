import React, { Component } from 'react';
import Book from './Book';

/** This component is responsible for displaying all the books on the search page */
/** It has a Book component as a child */
class AllBooksList extends Component {
  
    render() {
        return(
    		<div className="list-books-content">
                <div className="bookshelf">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                               <Book key={book.id} book={book} />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            )
    }
}

export default AllBooksList;