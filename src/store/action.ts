import { createAction } from '@reduxjs/toolkit';

// Reset is a common action type observed by both the Movie and Song slices
export const reset = createAction('app/reset');
