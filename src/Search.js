import React, { Component } from 'react';
import AllBooksList from './AllBooksList';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';

/** This search component is responsible for searching the books and adding them to the books list */
class Search extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query });
  }

  render() {
    const { query } = this.state
    const { books } = this.props

    const searchedBooks =  books.filter(book => {
      if (book.title.toLowerCase().includes(query.toLowerCase()))
        return book;
    });

    /** get all the books if query is empty else get searched books */
    const showingBooks = (query === '') ? books : searchedBooks;

    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" element={<BooksList currentlyReadingBooks={this.state.currentlyReading} wantToReadBooks={this.state.wantToRead} readBooks={this.state.read} books={this.state.books} /> }><button className="close-search" >Close</button></Link>
        <div className="search-books-input-wrapper">
          {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
          <input type="text" value={query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        <div className="list-books-content">
          <AllBooksList books={showingBooks} />
        </div>
      </div>
    </div>)
  }
}

export default Search;