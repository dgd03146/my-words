import { async } from '@firebase/util';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../shared/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';

export const getWords = createAsyncThunk('words/getWords', async (user_id) => {
  let words;
  const user_docs = await getDocs(
    query(collection(db, 'users'), where('user_id', '==', user_id))
  );
  console.log(user_docs, 'user_docs');
  user_docs.forEach((doc) => {
    words = [...doc.data().words];
  });

  return words;
});

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
      id: 6,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 7,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 8,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 9,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 10,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 11,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 12,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    },
    {
      id: 13,
      term: 'English555',
      pronunciation: '잉글리쉬',
      definition: '영어',
      example: 'English is difficult',
      translation: '영어는 어렵다.'
    }
  ],
  isEdit: false,
  showBtn: true,
  checkusername: ''
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    update(state, action) {},
    add(state, action) {
      state.words = [action.payload, ...state.words];
    },
    remove(state) {},
    isEdit(state) {
      state.isEdit = true;
    },
    notIsEdit(state) {
      state.isEdit = false;
    },
    showAddBtn(state) {
      state.showBtn = true;
    },
    notShowAddBtn(state) {
      state.showBtn = false;
    }
  },
  extraReducers: {
    [getWords.pending]: (state) => {
      state.status = 'loading';
    },
    [getWords.fulfilled]: (state, action) => {
      state.words = action.payload;
      state.status = 'success';
    },
    [getWords.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export const wordsActions = wordsSlice.actions;
export default wordsSlice.reducer;
