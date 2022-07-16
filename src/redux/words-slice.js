import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../shared/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';

export const getWords = createAsyncThunk('words/getWords', async (user_id) => {
  let loadedwords;
  const user_docs = await getDocs(
    query(collection(db, 'users'), where('user_id', '==', user_id))
  );
  console.log(user_docs, 'user_docs');
  user_docs.forEach((doc) => {
    loadedwords = [...doc.data().words];
  });
  return loadedwords;
});

const initialState = {
  words: [],
  isEdit: false,
  showBtn: true,
  checkusername: '',
  status: 'loading'
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    add(state, action) {
      state.words = [action.payload, ...state.words];
    },
    edit(state, action) {
      state.words = state.words.map((it) =>
        parseInt(it.id) === parseInt(action.payload.id)
          ? (it = { ...action.payload })
          : it
      );
    },
    delete(state, action) {
      state.words = state.words.filter(
        (it) => parseInt(it.id) !== parseInt(action.payload)
      );
    },
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
