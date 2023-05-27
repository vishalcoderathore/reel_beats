import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { useDispatch } from 'react-redux';
import { ReactElement } from 'react';
import { reset } from './store';
import './App.css';

function App(): ReactElement {
  const dispatch = useDispatch();

  const handleResetClick = (): void => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={(): void => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;
