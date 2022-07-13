import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [
    {
      id: 1,
      word: 'English',
      발음: '잉글리쉬',
      의미: '영어',
      예문: 'English is difficult',
      해석: '영어는 어렵다.'
    },
    {
      id: 2,
      word: 'English2',
      발음: '잉글리쉬',
      의미: '영어',
      예문: 'English is difficult',
      해석: '영어는 어렵다.'
    },
    {
      id: 3,
      word: 'English3',
      발음: '잉글리쉬',
      의미: '영어',
      예문: 'English is difficult',
      해석: '영어는 어렵다.'
    },
    {
      id: 4,
      word: 'English4',
      발음: '잉글리쉬',
      의미: '영어',
      예문: 'English is difficult',
      해석: '영어는 어렵다.'
    },
    {
      id: 5,
      word: 'English5',
      발음: '잉글리쉬',
      의미: '영어',
      예문: 'English is difficult',
      해석: '영어는 어렵다.'
    }
  ]
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add(state) {},
    remove(state) {},
    edit(state) {}
  }
});

export const wordsActions = wordsSlice.actions;
export default wordsSlice.reducer;
