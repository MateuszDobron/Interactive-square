import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  head: [5, 5]
};

export const moveSlice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    moveUp: (state) => {
      if(state.head[1]>0) {
        state.head[1]+=-1;
      }
    },
    moveDown: (state) => {
      if(state.head[1]<10) {
        state.head[1]+=1;
      }
    },
    moveLeft: (state) => {
      if(state.head[0]>0) {
        state.head[0]-=1;
      }
    },
    moveRight: (state) => {
      if(state.head[0]<10){
        state.head[0]+=1;
      }
    },
  },
});

export const { moveUp, moveDown, moveLeft, moveRight } = moveSlice.actions;

export default moveSlice.reducer;