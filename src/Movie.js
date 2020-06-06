import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h1>{this.props.match.params.movieId}</h1>
      </div>
    );
  }
}

export default Movie;
