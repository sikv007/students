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
      const { sort, order } = action.payload;
      if (sort === 'first' && order === 'desc') {
        state.students.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
      } else if (sort === 'first' && order === 'asc') {
        state.students.sort((a, b) => (a.first_name < b.first_name ? 1 : -1));
      } else if (sort === 'last' && order === 'desc') {
        state.students.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
      } else if (sort === 'last' && order === 'asc') {
        state.students.sort((a, b) => (a.last_name < b.last_name ? 1 : -1));
      } else if (sort === 'address' && order === 'desc') {
        state.students.sort((a, b) => (a.address > b.address ? 1 : -1));
      } else if (sort === 'address' && order === 'asc') {
        state.students.sort((a, b) => (a.address < b.address ? 1 : -1));
      } else if (sort === 'postal' && order === 'desc') {
        state.students.sort((a, b) => +a.postal_code - +b.postal_code);
      } else if (sort === 'postal' && order === 'asc') {
        state.students.sort((a, b) => +b.postal_code - +a.postal_code);
      }
    },
  },
});

export const studentActions = studentSlice.actions;

export const store = configureStore({
  reducer: studentSlice.reducer,
});
