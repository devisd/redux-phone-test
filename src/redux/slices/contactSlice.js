import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.includes(action.payload.name.toLowerCase())
        ? alert(`${state.name} is already in contacts`)
        : state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export default contactsSlice;
