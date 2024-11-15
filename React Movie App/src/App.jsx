import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList/MovieList.jsx";
import GenreFilter from "./components/GenreFilter/GenreFilter.jsx";
import { MOVIES } from "./DATA.js";

function App() {
  const [movies, setMovies] = useState(MOVIES);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [genres, setGenres] = useState([
    "Drama",
    "Crime",
    "Action",
    "Fantasy",
    "Western",
    "Science Fiction",
    "Thriller",
    "War",
    "Animation",
  ]);

  function handleClickGenre(gen) {
    console.log("Filtering by", gen);

    // additional Functionality
    // const filteredMovies = movies.filter(
    //   (movie) => movie.genre.toLowerCase() === gen.toLowerCase()
    // );
    // setFilteredMovies(filteredMovies);
  }

  return (
    <div className="app">
      <h1 className="heading">Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} handleClickGenre={handleClickGenre} />
      <MovieList movies={movies} filteredMovies={filteredMovies} />
    </div>
  );
}

export default App;
