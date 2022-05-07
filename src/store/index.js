import { createSlice, configureStore } from '@reduxjs/toolkit';
import { DUMMY_DATA } from '../data/dummyData';

const initialState = { students: [...DUMMY_DATA] };

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    removeStudent(state, action) {
      state.students.splice(action.payload, 1);
    },
  },
});

export const studentActions = studentSlice.actions;

export const store = configureStore({
  reducer: studentSlice.reducer,
});
