import React from 'react';
import styles from './Header.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../shared/firebase';

const Header = () => {
  const logoutHandler = () => {
    signOut(auth);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MY WORDS</h1>
      <div className={styles.rightBox}>
        <p className={styles.usernameBox}>
          <span className={styles.username}>{'username'}</span>님
        </p>
        <button className={styles.logout} onClick={logoutHandler}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
