import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Search from './Search';
import PropTypes from 'prop-types';

class BooksList extends Component {

  	render() {
        const { books , updateBook } = this.props;
		
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
								{books.map(book => (book.shelf === 'currentlyReading' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => updateBook(book, e)} >
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
								{books.map(book => (book.shelf === 'wantToRead' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => updateBook(book, e)} >
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
								{books.map(book => (book.shelf === 'read' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select defaultValue={book.shelf} onChange={(e) => updateBook(book, e)} >
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
						<Search books={books} />
					} />
				</Routes>
			</div>


		)
	}
}

BooksList.propTypes = {
	books: PropTypes.array,
	updateBook: PropTypes.func
}
export default BooksList;