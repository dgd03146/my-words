import React from 'react';
import styles from './Words.module.css';
import { useSelector } from 'react-redux';
import Word from './Word';

const Words = () => {
  const words = useSelector((state) => state.words.words);
  return (
    <div className={styles.words}>
      <ul className={styles.container}>
        {words.map((it) => (
          <Word key={it.id} {...it} />
        ))}
      </ul>
    </div>
  );
};

export default Words;
