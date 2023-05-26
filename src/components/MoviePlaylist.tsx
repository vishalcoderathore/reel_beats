import { createRandomMovie, Movie } from '../data';

function MoviePlaylist(): JSX.Element {
  const moviePlaylist: Movie[] = [];

  const handleMovieAdd = (movie: Movie): void => {
    // To Do:
    // Add movie to list of movies
  };

  const handleMovieRemove = (movie: Movie): void => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie: Movie) => {
    return (
      <li key={movie.id}>
        {movie.title}
        <button onClick={(): void => handleMovieRemove(movie)} className="button is-danger">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button onClick={(): void => handleMovieAdd(createRandomMovie())} className="button is-link">
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
