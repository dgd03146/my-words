const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // 구독 함수
  const latestState = store.getState(); // 최신 상태 snapshot 제공
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' }); // dispatch action을 발송하는 함수
store.dispatch({ type: 'decrement' });

// import { createStore } from 'redux';

// const initialState = {
//   counter: 0
// };

// const countReducer = (state = initialState, action) => {
//   if (action.type === 'Increment') {
//     return {
//       counter: state.counter + 1
//     };
//   }
//   if (action.type === 'Decrement') {
//     return {
//       counter: state.counter - 1
//     };
//   }
//   return state;
// };

// const store = createStore(countReducer);

// export default store;
