import { addMovie, removeMovie, moviesReducer } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songsSlice';
import { configureStore } from '@reduxjs/toolkit';

// Configure the Redux store
const store = configureStore({
  reducer: {
    songs: songsReducer, // Combined reducer function wrapping up smaller reducers like addSong, removeSong
    movies: moviesReducer,
  },
});

// Export the store
export { store };

// Export the action creator
export { addMovie, removeMovie, addSong, removeSong };
