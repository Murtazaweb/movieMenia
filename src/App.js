import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"



import Navbar from "./components/navbar"
import TopMovies from "./components/listmovies/topmovies";
import ShowMovie from "./components/showmovies/singlemovie";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={TopMovies} />
          <Route path="/onlymovie/:id" component={ShowMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
