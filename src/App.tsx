import MoviePlaylist from './components/MoviePlaylist';
import SongPlaylist from './components/SongPlaylist';
import { ReactElement, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App(): ReactElement {
  const handleResetClick = (): void => {
    //
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
