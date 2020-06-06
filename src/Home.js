import React, { Component } from "react";
import axios from "axios";
import config from "./config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    /* TODO: Get own api key at themoviedb.org
    const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
    const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
    const imageUrl = "http://image.tmdb.org/t/p/w300"; */

    const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlayingUrl).then((response) => {
      // console.log(response.data);
      const movieData = response.data.results;
      this.setState({
        movieList: movieData,
      });
    });
  }

  render() {
    console.log(this.state.movieList);
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
