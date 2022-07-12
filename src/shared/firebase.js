import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1LTRvOhIIVjzmriD9c3O2yCH5ZcmUL8s',
  authDomain: 'my-words-4fd90.firebaseapp.com',
  projectId: 'my-words-4fd90',
  storageBucket: 'my-words-4fd90.appspot.com',
  messagingSenderId: '889363604333',
  appId: '1:889363604333:web:5470f0851b2319d4ddb064',
  measurementId: 'G-VEPCFRXPJG'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
