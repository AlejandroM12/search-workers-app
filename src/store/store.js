import { configureStore } from '@reduxjs/toolkit';
import { workersSlice, departmentsSlice } from './slice';

export default configureStore({
  reducer: {
    workers: workersSlice.reducer,
    departament: departmentsSlice.reducer,
  },
});
