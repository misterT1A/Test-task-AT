import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IUser } from '../types/types';

interface IInitialState {
  archiveUsers: IUser[];
}

const initialState: IInitialState = {
  archiveUsers: [],
};

const archiveSlice = createSlice({
  name: 'archiveUsers',
  initialState,
  reducers: {
    addArchive(state, action: PayloadAction<IUser>) {
      state.archiveUsers.push(action.payload);
    },
    deleteArchive(state, action: PayloadAction<IUser>) {
      state.archiveUsers = state.archiveUsers.filter((user) => user.id !== action.payload.id);
    },
    deleteAllArchives(state) {
      state.archiveUsers = [];
    },
  },
});

export const { addArchive, deleteArchive, deleteAllArchives } = archiveSlice.actions;
export default archiveSlice.reducer;
