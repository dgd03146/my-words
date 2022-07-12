import React from 'react';
import Header from './Layout/Header';
import styles from './Home.module.css';
import Words from './Words';

const Home = ({ onSignOut }) => {
  return (
    <div className={styles.home}>
      <Header onSignOut={onSignOut} />
      <Words />
    </div>
  );
};

export default Home;
