import React from "react";
import "./Books.css";
import {bookDtls} from '../../constant/constant';

class Books extends React.Component {
  state = {
    header: (
      <thead id="header">
        <tr>
          <th scope="col">UIN</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Rack No.</th>

        </tr>
      </thead>
    ),
    books: [],
  };

  componentDidMount(){

    this.setState({
        books:bookDtls
    });

  }

  render() {
    return (
      <div id="books">
        <span id="heading">AVAILABLE BOOKS</span>
        <div>
            <input type="text" onChange= ""/>
        </div>
        <table id="results" className="table text-center table-hover">
          {this.state.header}
          <tbody>
          {this.state.books.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.UIN}</td>
              <td>{listValue.title}</td>
              <td>{listValue.category}</td>
              <td>{listValue.author}</td>
              <td>{listValue.rackNo}</td>
            </tr>
          );
        })}
    </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
