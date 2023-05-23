import { createRandomSong, Media } from '../data/main';

type Song = Media;

function SongPlaylist(): JSX.Element {
  const songPlaylist: Media[] = [];

  const handleSongAdd = (song: Song): void => {
    // To Do:
    // Add song to list of songs
  };

  const handleSongRemove = (song: Song): void => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song: Song) => {
    return (
      <li key={song.id}>
        {song.title}
        <button onClick={(): void => handleSongRemove(song)} className="button is-danger">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button onClick={(): void => handleSongAdd(createRandomSong())} className="button is-link">
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
