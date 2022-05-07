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
    emptyStudentList(state) {
      state.students = [];
    },
    sortStudents(state, action) {
      if (action.payload === 'first_asc') {
        state.students.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      } else if (action.payload === 'first_desc') {
        state.students.sort((a, b) => (a.first_name < b.first_name ? 1 : -1));
      } else if (action.payload === 'last_asc') {
        state.students.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
      } else if (action.payload === 'last_desc') {
        state.students.sort((a, b) => (a.last_name < b.last_name ? 1 : -1));
      }
    },
  },
});

export const studentActions = studentSlice.actions;

export const store = configureStore({
  reducer: studentSlice.reducer,
});
