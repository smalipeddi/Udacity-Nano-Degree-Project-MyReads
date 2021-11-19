import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BooksList from './BooksList';

class BooksApp extends React.Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }

  componentDidMount() {
    // get the list of all books and categorize them based on shelf
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          'books': allBooks
        }))
        const curentlyReadingBooks = allBooks.filter(book => (
          book.shelf === 'currentlyReading'
        ));
        this.setState(() => ({
          'currentlyReading': curentlyReadingBooks
        }));
        const wantToReadBooks = allBooks.filter(book => (
          book.shelf === 'wantToRead'
        ));
        this.setState(() => ({
          'wantToRead': wantToReadBooks
        }));
        const readBooks = allBooks.filter(book => (
          book.shelf === 'read'
        ));
        this.setState(() => ({
          'read': readBooks
        }));
      })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<BooksList books={this.state.books} />} />
          <Route path="/search" element={
            <Search books={this.state.books} onClick={this.state.showSearchPage} />
          } />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
