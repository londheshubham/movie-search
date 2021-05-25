import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./components/searchMovies";

export default class App extends React.Component {
  render() {
    return (
        <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies/>
        </div>
    );
  }
}