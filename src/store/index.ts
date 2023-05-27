import { configureStore, createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { Movie, Song } from '../data';

// Reset is a common action type observed by both the Movie and Song slices
export const reset = createAction('app/reset');

/*
SLICES
1. Define some initial state
2. Combines 'mini-reducers' into a big reducer
3. Created a set of 'action creator' functions
 */

// Running a dispatch runs a reducer
// There could be multiple reducers, so an action type is needed. We would have to create all actions manually
// Traditionally a reducer would have a switch to check what action type is provided
// Slices saves us from having to write out all the boilerplate
// We can think of each slice reducer function like addSong, removeSong as case statements in larger switch statement
// Each reducer function (action creator) creates an action object for us

// Create a slice for songs
const songsSlice = createSlice({
  name: 'song',
  initialState: [] as Song[], // Initial state as an empty array of Song objects
  reducers: {
    addSong(state, action: PayloadAction<Song>) {
      // Reducer for adding a song to the state
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<Song>) {
      const songId = action.payload.id;
      const index = state.findIndex(song => song.id === songId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    resetSong() {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

// Create a slice for movies
const moviesSlice = createSlice({
  name: 'movie',
  initialState: [] as Movie[], // Initial state as an empty array of Song objects
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      // Reducer for adding a song to the state
      state.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<Movie>) {
      const movieId = action.payload.id;
      const index = state.findIndex(movie => movie.id === movieId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

// Configure the Redux store
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer, // Combined reducer function wrapping up smaller reducers like addSong, removeSong
    movies: moviesSlice.reducer,
  },
});

// Export the store
export { store };

// Export the action creator
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
