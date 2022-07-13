import React from 'react';
import Header from './Layout/Header';
import styles from './Home.module.css';
import Words from './Words';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Words />
      <button className={styles.addBtn}>
        <AddCircleIcon />
      </button>
    </div>
  );
};

export default Home;
