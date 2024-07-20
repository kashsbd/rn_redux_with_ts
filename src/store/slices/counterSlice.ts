import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CounterState = {
  counter: number;
};

const initialState: CounterState = {counter: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementBy: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

export const {incrementBy, decrementBy} = counterSlice.actions;
export default counterSlice.reducer;
