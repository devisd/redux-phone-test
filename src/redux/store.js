import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return state.filter(el => el.name.toLowerCase());
    },
  },
});

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],

  devTools: process.env.NODE_ENV === 'development',
});

export const { add, remove } = itemSlice.actions;
export const { filter } = filterSlice.actions;
