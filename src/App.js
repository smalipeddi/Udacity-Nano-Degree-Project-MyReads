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

  updateBooksHandler = () => {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          'books': allBooks
        }))
      });
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
    console.log("app props", this.props);
   
    return (
         <div className="app">
         {/* Routes to route to books list page anfd the search page*/}
        <Routes>
          <Route path="//*" element={<BooksList updateBooks={this.updateBooksHandler} books={this.state.books} />} />
          <Route path="/search" element={
            <Search books={this.state.books} />
          } />
        </Routes>
      </div>
    )
  }
}

export default App
