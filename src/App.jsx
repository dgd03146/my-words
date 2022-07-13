import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import { useEffect } from 'react';
import { auth } from './shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './redux/auth-slice';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  // 로그인 체크
  const loginCheck = async (user) => {
    if (user) {
      // user가 있으면 true
      dispatch(authActions.logIn());
    } else {
      dispatch(authActions.logOut());
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {isLoggedIn ? ( // login이 되어있으면 Home으로
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
