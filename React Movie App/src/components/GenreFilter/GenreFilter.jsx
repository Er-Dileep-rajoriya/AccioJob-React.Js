import "./GenreFilter.css";

function GenreFilter({ genres, handleClickGenre }) {
  return (
    <div className="genre-section">
      <h2 className="genre-heading">Filter By Genre</h2>
      <div className="flex">
        {genres.map((genre, index) => (
          <span key={index} className="genre">
            <a href="#" onClick={() => handleClickGenre(genre)}>
              {genre}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
