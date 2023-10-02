import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: { currentPlayer: 'red' },
  reducers: {
    setCurrentPlayer(state) {
      state.currentPlayer === 'red'
        ? (state.currentPlayer = 'yellow')
        : (state.currentPlayer = 'red');
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
