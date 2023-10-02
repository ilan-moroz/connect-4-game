// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './playerSlice';

// Combining all the reducers in the application
const reducers = {
  currentPlayer: playerSlice,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
