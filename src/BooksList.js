import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Search from './Search';

class BooksList extends Component {

    /** UpdateBooks method is used to update the shelf of the selected book when the user changes the shelf */
	updateBooks = (bookToUpdate, e) => {
		BooksAPI.update(bookToUpdate, e.target.value).then(result => {
			this.props.books.map(book => {
				if (book.id === bookToUpdate.id) {
					book.shelf = e.target.value
					console.log(book);
				}
			});
		})
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
								{this.props.books.map(book => (book.shelf === 'currentlyReading' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => this.updateBooks(book, e)} >
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading" >Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>

												</div>
											</div>
											<div className="book-title">{book.title}</div>
											<div className="book-authors">{book.authors}</div>
										</div>

									</li>
								))}
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Want To Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books.map(book => (book.shelf === 'wantToRead' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => this.updateBooks(book, e)} >
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading" >Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>

												</div>
											</div>
											<div className="book-title">{book.title}</div>
											<div className="book-authors">{book.authors}</div>
										</div>

									</li>
								))}
							</ol>
						</div>
					</div>
					<div className="bookshelf">
						<h2 className="bookshelf-title">Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books.map(book => (book.shelf === 'read' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => this.updateBooks(book, e)} >
														<option value="move" disabled>Move to...</option>
														<option value="currentlyReading" >Currently Reading</option>
														<option value="wantToRead">Want to Read</option>
														<option value="read">Read</option>
														<option value="none">None</option>
													</select>

												</div>
											</div>
											<div className="book-title">{book.title}</div>
											<div className="book-authors">{book.authors}</div>
										</div>

									</li>
								))}
							</ol>
						</div>

					</div>
				</div>
				<div className="open-search">
					<Link to="/search">/<button>Add a book</button></Link>
				</div>

				<Routes>
					<Route path="/search" element={
						<Search books={this.props.books} />
					} />
				</Routes>
			</div>


		)
	}
}
export default BooksList;