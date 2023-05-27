/*
SLICES
1. Define some initial state
2. Combines 'mini-reducers' into a big reducer
3. Created a set of 'action creator' functions
 */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Song } from '../../data';
import { reset } from '../action';

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

export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;
