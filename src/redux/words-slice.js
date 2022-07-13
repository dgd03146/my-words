import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  words: [
    {
      id: 1,
      term: 'English',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 2,
      term: 'English222',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 3,
      term: 'English333',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 4,
      term: 'English444',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 5,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
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
