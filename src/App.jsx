import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import { useEffect } from 'react';
import { auth } from './shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let navigate = useNavigate();

  // 로그인 체크
  const loginCheck = async (user) => {
    if (user) {
      // user가 있으면
      navigate('/words');
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
