import React, { Component } from "react";
import config from "./config";
import axios from "axios";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const mid = this.props.match.params.movieId;
    const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`;
    axios.get(singleMovieUrl).then((response) => {
      console.log(response.data);
      this.setState({
        movie: response.data,
      });
    });
  }

  render() {
    // console.log(this.props.match);
    if (this.state.movie.title === undefined) {
      return <h3>Loading...</h3>;
    }
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
    return (
      <div className="container">
        <h2>{movie.title}</h2>
        <p>
          {" "}
          <strong>{movie.tagline}</strong>{" "}
        </p>
        <img src={imageUrl} alt="" />
        <p>Budget: USD {movie.budget}</p>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default Movie;
