import React, { Component } from 'react';

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

    handleChange = (e) => {
        console.log(e.target.value);
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
                                           <select onChange={this.handleChange} value={book.shelf}>
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
            )
    }
}

 export default AllBooksList;