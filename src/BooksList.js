import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

import Search from './Search';

class BooksList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentlyReadingBooks: [],
			wantToreadBooks: [],
			readBooks: []
		}
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Currently Reading</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books.map(book => (
									book.shelf === 'currentlyReading' &&
									<CurrentlyReading key={book.id} book={book} />
								))}
							</ol>
						</div>
					</div>
					<div className="list-books-content">
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want To Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.props.books.map(book => (
										book.shelf === 'wantToRead' &&
										<WantToRead key={book.id} book={book} />
									))}
								</ol>
							</div>
						</div>
					</div>
					<div className="list-books-content">
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.props.books.map(book => (
										book.shelf === 'read' &&
										<Read key={book.id} book={book} />
									))}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>/<button>Add a book</button></Link>
				</div>

				<Routes>
					<Route path="/search" element={
						<Search books={this.state.books} onClick={this.state.showSearchPage} />
					} />
				</Routes>
			</div>


		)
	}
}
export default BooksList;