import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/CounterSlice'
import userReducer from './redux/usersSlices'
import commentReducer from './redux/CommentSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    newSubscriber:userReducer,
    newComments:commentReducer
    
  },
})