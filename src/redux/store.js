import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contactSlice';
import filterSlice from './slices/filterSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    items: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],

  devTools: process.env.NODE_ENV === 'development',
});

export const { add, remove } = contactsSlice.actions;
export const { filter } = filterSlice.actions;
