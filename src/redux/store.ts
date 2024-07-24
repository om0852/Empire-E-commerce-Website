import { configureStore } from '@reduxjs/toolkit'
import cardReducer from "@/redux/features/cartSlice"
import productReducer from "@/redux/features/productSlice"
import loadingReducer from "@/redux/features/loadingSlice"
export const store = configureStore({
  reducer: {
    cardReducer,
    productReducer,
    loadingReducer
  
}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch