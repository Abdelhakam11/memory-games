import { configureStore,  } from '@reduxjs/toolkit'
import movesSlice from './movesSlice'

const myStore= configureStore({
  reducer: {
    movesSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default myStore