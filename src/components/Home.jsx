import React from 'react';
import Header from './Layout/Header';
import styles from './Home.module.css';
import Words from './Words';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Routes, Route } from 'react-router-dom';
import WordDetail from './WordDetail';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Routes>
        <Route path="/words" element={<Words />} />
        <Route path="/detail" element={<WordDetail />} />
      </Routes>
      <button className={styles.addBtn}>
        <AddCircleIcon />
      </button>
    </div>
  );
};

export default Home;
