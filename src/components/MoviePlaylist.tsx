import { useDispatch, useSelector } from 'react-redux';
import { createRandomMovie, Movie } from '../data';
import { addMovie, removeMovie } from '../store';

function MoviePlaylist(): JSX.Element {
  const dispatch = useDispatch();
  const moviePlaylist: Movie[] = useSelector((store: { movies: Movie[] }): Movie[] => {
    return store.movies;
  });

  const handleMovieAdd = (movie: Movie): void => {
    dispatch(addMovie(movie));
  };

  const handleMovieRemove = (movie: Movie): void => {
    dispatch(removeMovie(movie));
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
        {moviePlaylist.length > 0 && <p>Total Movies : {moviePlaylist.length}</p>}
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
