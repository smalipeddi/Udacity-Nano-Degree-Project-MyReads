import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class AllBooksList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentlyReadingBooks:[],
            wantToreadBooks:[],
            readBooks: [],
            value: ''
        }
    }

    updateBooks = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
    	return(
    		<div className="list-books-content">
                <div className="bookshelf">
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                            <li key={book.id}>
                               <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                           <select onChange={this.updateBooks} defaultVlue={book.shelf}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
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
            )
    }
}

 export default AllBooksList;