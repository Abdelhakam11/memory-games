import { createSlice } from '@reduxjs/toolkit'
export const movesSlice = createSlice({
  name: 'moves',
  initialState: {
    appearCards:[],
    totalMoves:0,
    badMoves:0,
  },
  
  reducers: {
    
    incrementTotalMoves: (state) => {
        state.totalMoves += 1
    },

    addApperanceCard:(state,action)=>{
      state.appearCards=[...action.payload]
    },

    checkBadMove:(state,action)=>{
      const filterCards=[...state.appearCards].filter((id)=> id===action.payload)
      if(filterCards.length>1){
        state.badMoves++;
      }
    },
    

  },
})
export const {  incrementTotalMoves,addApperanceCard ,checkBadMove} = movesSlice.actions
export default movesSlice.reducer