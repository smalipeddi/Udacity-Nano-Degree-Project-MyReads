import React, { Component } from 'react';

class WantToRead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WantToRead: [],
            selectValue: 'wantToRead'
        }
    }

    handleChange = (e) => {
        this.setState({ selectValue: e.target.value });
    }

    render() {
        console.log("want to read", this.props);
        return (<li key={this.props.book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select defaultValue={'wantToRead'} onChange={this.handleChange} >
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
            <p>{this.state.selectValue}</p>
        </li>

        )
    }

}

export default WantToRead;