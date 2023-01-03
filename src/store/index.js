import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

/**
* todos: {
*    todos: [],
*    status: null,
*    error: null,
*  }
 */
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
