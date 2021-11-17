import React, { Component } from 'react';

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
			<div className="list-books-content">
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{this.props.books.map(book => (
								book.shelf === 'currentlyReading' &&
								<li key={book.id}>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
											<div className="book-shelf-changer">
												<select>
													<option value="move" disabled>Move to...</option>
													<option value={book.currentlyReading}>Currently Reading</option>
													<option value={book.wantToRead}>Want to Read</option>
													<option value={book.read}>Read</option>
													<option value={book.none}>None</option>
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

				<div className="list-books-content">

					<div className="bookshelf">
						<h2 className="bookshelf-title">Want To Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books.map(book => (
									book.shelf === 'wantToRead' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select>
														<option value="move" disabled>Move to...</option>
														<option value={book.currentlyReading}>Currently Reading</option>
														<option value={book.wantToRead}>Want to Read</option>
														<option value={book.read}>Read</option>
														<option value={book.none}>None</option>
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
				<div className="list-books-content">
					<div className="bookshelf">
						<h2 className="bookshelf-title">Read</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{this.props.books.map(book => (
									book.shelf === 'read' &&
									<li key={book.id}>
										<div className="book">
											<div className="book-top">
												<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
												<div className="book-shelf-changer">
													<select>
														<option value="move" disabled>Move to...</option>
														<option value={book.currentlyReading}>Currently Reading</option>
														<option value={book.wantToRead}>Want to Read</option>
														<option value={book.read}>Read</option>
														<option value={book.none}>None</option>
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
			</div>
		)
	}
}
export default BooksList;