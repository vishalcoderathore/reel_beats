import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, Movie } from '../data';

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
      // Reducer for removing a song from the state
      // Implement the logic to remove a song
    },
  },
});

// Configure the Redux store
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer, // Mega reducer function wrapping up smaller reducers like addSong, removeSong
  },
});

// Export the store
export { store };

// Export the action creator
export const { addSong, removeSong } = songsSlice.actions;
