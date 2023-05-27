/*
SLICES
1. Define some initial state
2. Combines 'mini-reducers' into a big reducer
3. Created a set of 'action creator' functions
 */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../data';
import { reset } from '../action';

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

export const moviesReducer = moviesSlice.reducer;
export const { addMovie, removeMovie } = moviesSlice.actions;
