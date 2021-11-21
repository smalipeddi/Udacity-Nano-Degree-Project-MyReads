import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BooksList from './BooksList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /** UpdateBook method is used to update the shelf of the selected book when the user changes the shelf */
  updateBookHandler = (bookToUpdate, e) => {
    BooksAPI.update(bookToUpdate, e.target.value).then(result => {
      // get copy of books  
      let books = [...this.state.books];
      // find the idex of the book to update shelf
      let index = books.findIndex(el => el.id === bookToUpdate.id);
      // if the books is not already in shelf, then add a new book to the shelf other wise update the shelf 
      if(index !== -1) {
        books[index] = { ...books[index], shelf: e.target.value };
        this.setState({ books });
      } else {
        // add shelf to a new book and then add to main page
        bookToUpdate.shelf = e.target.value
        let books = [...this.state.books];
        books.push(bookToUpdate);
        this.setState({books});
      }
    })
  }

  componentDidMount() {
    // get the list of all books and categorize them based on shelf - Currently Reading, Want To read and Read
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          'books': allBooks
        }))
      })
  }

  render() {
    
    return (
      <div className="app">
        {/* Routes to route to books list page anfd the search page*/}
        <Routes>
          <Route path="//*" element={<BooksList updateBook={this.updateBookHandler} books={this.state.books} />} />
          <Route path="/search" element={
            <Search searchedBooks = {this.searchedBooksHandler} updateBook={this.updateBookHandler} books={this.state.books} />
          } />
        </Routes>
      </div>
    )
  }
}

export default App
