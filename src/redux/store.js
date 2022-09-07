// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer); // initValue and enhancers (middleware) vd: redux thunk

//  export default store;


import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/filterSlice'
import todoListSlice from '../components/TodoList/todoSlice'

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch