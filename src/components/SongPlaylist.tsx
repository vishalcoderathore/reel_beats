import { useDispatch, useSelector } from 'react-redux';
import { createRandomSong, Song } from '../data';
import { addSong, removeSong } from '../store';

function SongPlaylist(): JSX.Element {
  const dispatch = useDispatch();

  const songPlaylist: Song[] = useSelector((store: { songs: Song[] }): Song[] => {
    return store.songs;
  });

  const handleSongAdd = (song: Song): void => {
    /* Action Object
    {
      payload : {
        id: string,
        title: string
      },
      type: "song/addSong"
    }
    */
    // Need to dispatch action object
    dispatch(addSong(song));
  };

  const handleSongRemove = (song: Song): void => {
    dispatch(removeSong(song));
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
        {songPlaylist.length > 0 && <p>Total Songs : {songPlaylist.length}</p>}
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
