import React, { useEffect } from 'react';
import styles from './Header.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../shared/firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/auth-slice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth);
    dispatch(authActions.logOut());
    navigate('/login');
  };

  let username = useSelector((state) => state.auth.user.userName); // username redux에서 가져오기. // 이름을 가져오는데 시간이 걸린다.. 바로 가져오게???

  let showBtn = useSelector((state) => state.words.showBtn);

  return (
    <header className={`${styles.header} ${!showBtn && styles.notSticky}`}>
      <h1 className={styles.title}>MY WORDS</h1>
      <div className={styles.rightBox}>
        <p className={styles.usernameBox}>
          <span className={styles.username}>{username}</span>님
        </p>
        <button className={styles.logout} onClick={logoutHandler}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
