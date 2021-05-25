import React from 'react';
import SearchMovies from "./components/searchMovie";

export default class App extends React.Component {
  render() {
    return (
        <div className="container">
          <h1 className="title">Movie Search</h1>
          <SearchMovies/>
        </div>
    );
  }
}