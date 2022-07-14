import React, { useEffect } from 'react';
import Header from './Layout/Header';
import styles from './Home.module.css';
import Words from './Words';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Routes, Route } from 'react-router-dom';
import WordDetail from './WordDetail';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { wordsActions } from '../redux/words-slice';

const Home = () => {
  let showBtn = useSelector((state) => state.words.showBtn);

  let navigate = useNavigate();

  let dispatch = useDispatch();

  const goToAdd = () => {
    dispatch(wordsActions.notIsEdit());
    navigate('/detail');
  };

  return (
    <div className={styles.home}>
      <Header />
      <Routes>
        <Route path="/words" element={<Words />} />
        <Route path="/detail/*" element={<WordDetail />} />
      </Routes>
      {showBtn && (
        <button className={styles.addBtn} onClick={goToAdd}>
          <AddCircleIcon />
        </button>
      )}
    </div>
  );
};

export default Home;
