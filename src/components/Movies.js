import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movies, index) => {
      return <div key={index}>
        <h3>Name: {movies.title}</h3>
        <p>Time: {movies.time}</p>
        Genres: <ul>
          {movies.genres.map((genre, index)=>{
            return <li key={index}>{genre}</li>
          })}
        </ul>
      </div>
    })}
  </div>;
}

export default Movies;
