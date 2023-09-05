import { createSlice } from '@reduxjs/toolkit';

export const workersSlice = createSlice({
  name: 'workers',
  initialState: {
    workersArr: [],
  },
  reducers: {
    addValue: (state, action) => {
      state.workersArr = [...state.workersArr, action.payload];
    },
    modifyValue: (state, action) => {
      const { index, newContinent } = action.payload;
      state.workersArr[index].departament = newContinent;
    },
    deleteValue: (state, action) => {
      const { name, lastName, phone } = action.payload;
      state.workersArr = state.workersArr.filter(
        (value) =>
          value.name.first !== name &&
          value.name.last !== lastName &&
          value.name.cell !== phone
      );
    },
  },
});

export const departmentsSlice = createSlice({
  name: 'departament',
  initialState: {
    departaments: [
      'África (Sales)',
      'África (Organization)',
      'África (Technical Support)',
      'África (Research & Development)',
      'América (Sales)',
      'América (Organization)',
      'América (Commercial)',
      'América (Finance)',
      'América (Product Management)',
      'América (Human Resources)',
      'Asia (Sales)',
      'Asia (Marketing)',
      'Asia (Research & Development)',
      'Asia (Technical Support)',
      'Asia (IT Solutions)',
      'Europe (Sales)',
      'Europe (Marketing)',
      'Europe (Finance)',
      'Europe (Organization)',
      'Europe (Logistics)',
      'Oceania (Sales)',
      'Oceania (Customer Service)',
      'Oceania (Research & Development)',
      'Oceania (Technical Support)',
    ],
  },
  reducers: {},
});

export const { addValue } = workersSlice.actions;
export const { modifyValue } = workersSlice.actions;
export const { deleteValue } = workersSlice.actions;
