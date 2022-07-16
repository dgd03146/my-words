import React, { useEffect } from 'react';
import styles from './Words.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Word from './Word';

import { getWords } from '../redux/words-slice';

const Words = () => {
  let dispatch = useDispatch();
  let user_id = useSelector((state) => state.auth.user.user_id);

  const words = useSelector((state) => state.words.words);

  useEffect(() => {
    dispatch(getWords(user_id));
  }, [user_id, dispatch]);

  return (
    <div className={styles.words}>
      <ul className={styles.container}>
        {words.map((it) => (
          <Word key={it.id} {...it} user_id={user_id} />
        ))}
      </ul>
    </div>
  );
};

export default Words;
