import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IUser } from '../types/types';

interface IInitialState {
  activeUsers: IUser[];
}

const initialState: IInitialState = {
  activeUsers: [],
};

const activeSlice = createSlice({
  name: 'activeUsers',
  initialState,
  reducers: {
    addUsers(state, action: PayloadAction<IUser[]>) {
      state.activeUsers = action.payload;
    },
    addActive(state, action: PayloadAction<IUser>) {
      state.activeUsers.push(action.payload);
    },
    deleteActive(state, action: PayloadAction<IUser>) {
      state.activeUsers = state.activeUsers.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addActive, deleteActive, addUsers } = activeSlice.actions;
export default activeSlice.reducer;
