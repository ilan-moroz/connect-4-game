// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';

// Combining all the reducers in the application
const reducers = {
  player: playerSlice,
};

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
