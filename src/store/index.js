import { createSlice, configureStore } from '@reduxjs/toolkit';
import { DUMMY_DATA } from '../data/dummyData';

const initialState = { students: [...DUMMY_DATA] };

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
});

export const studentActions = studentSlice.actions;

export const store = configureStore({
  reducer: studentSlice.reducer,
});