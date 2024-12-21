import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { text : null, username: null },
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    newTweet: (state, action) => {
      state.value.text = action.payload.text;
      state.value.username = action.payload.username;
    },
   
  },
});

export const { newTweet } = tweetSlice.actions;
export default tweetSlice.reducer;