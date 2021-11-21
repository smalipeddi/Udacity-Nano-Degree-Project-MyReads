import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {
   
    /** update method is used to update the shelf of the selected book on the search page */
    updateBook = (book,e) => {
        this.props.book.shelf = e.target.value;
        BooksAPI.update(this.props.book,e.target.value).then(result => {
            console.log(result);
        })
    }   
   
    render() {
        return (<div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={this.props.book.shelf} onChange={(e) => (this.updateBook(this.props.book, e))}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
        )
    }
}

export default Book;