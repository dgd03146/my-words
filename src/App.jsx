import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import { useEffect, useState } from 'react';
import { auth } from './shared/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './components/Home';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 체크

  const loginCheck = async (user) => {
    if (user) {
      // user가 있으면 true
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const onSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        {isLogin ? ( // login이 되어있으면 Home으로
          <Route path="/" element={<Home onSignOut={onSignOut} />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
