import React from 'react';
import styles from './Header.module.css';

const Header = ({ onSignOut }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>MY WORDS</h1>
      <div className={styles.rightBox}>
        <p className={styles.usernameBox}>
          <span className={styles.username}>{'username'}</span>님
        </p>
        <button className={styles.logout} onClick={onSignOut}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
