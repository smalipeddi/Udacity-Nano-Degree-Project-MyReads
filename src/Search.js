import React, { Component } from 'react';
import AllBooksList from './AllBooksList';
import { Link } from 'react-router-dom';
import BooksList from './BooksList';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';


/** This search component is responsible for searching the books and adding them to the books shelf based on what shelf teh user selects */
class Search extends Component {

  state = {
    query: '',
    allBooks: []
  }

  componentDidMount() {
    // get the list of all books and categorize them based on shelf - Currently Reading, Want To read or Read
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          'allBooks': allBooks
        }))
      })
  }


  searchedBooks = (query) => {
    this.setState({ query: query });
    if (query === '') {
      this.setState({ allBooks: [] });
    }
    this.setState({ query: query });
    BooksAPI.search(query).then(result => {
      if (result && result.error === 'empty query') {
        //update books array
        this.setState({ allBooks: [] });
      } else if(result === undefined) {
        this.setState({ allBooks: [] });
      } else {
        const results = result.filter(searchedBook => {
          if(!this.props.books.includes(searchedBook)) {
             searchedBook.shelf = 'none';
             return searchedBook;
          } else {
            return searchedBook;
          } 
          
        });
        this.setState({ 'allBooks': results });
      }
    });
  }

  render() {
    const { query, allBooks } = this.state;
    const { books , updateBook } = this.props;

    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" element={<BooksList books={books} />}><button className="close-search" >Close</button></Link>
        <div className="search-books-input-wrapper">
          {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
          <input type="text" value={query} onChange={(event) => this.searchedBooks(event.target.value)} placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
        <div className="list-books-content">
          <AllBooksList updateBook={updateBook} books={allBooks} />
        </div>
      </div>
    </div>)
  }
}

Search.propTypes = {
  query: PropTypes.string,
  allBooks: PropTypes.array
}

export default Search;