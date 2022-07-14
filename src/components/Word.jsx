import React, { useEffect, useState } from 'react';
import styles from './Word.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wordsActions } from '../redux/words-slice';

const Word = ({
  term,
  pronunciation,
  definition,
  example,
  translation,
  id
}) => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck((prevState) => !prevState);
  };

  const goToEdit = () => {
    navigate('/detail/' + id);
    dispatch(wordsActions.isEdit());
  };

  useEffect(() => {
    dispatch(wordsActions.showAddBtn());
  }, []);

  return (
    <li className={`${styles.word} ${check && styles.check}`}>
      <div className={styles.upBox}>
        <h1 className={styles.term}>{term}</h1>
        <div className={styles.buttonBox}>
          <button onClick={checkHandler}>
            <CheckCircleIcon />
          </button>
          <button onClick={goToEdit}>
            <EditIcon />
          </button>
          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
      <p className={styles.pronunciation}>[{pronunciation}]</p>
      <p className={styles.definition}>{definition}</p>
      <p className={styles.example}>{example}</p>
      <p className={styles.translation}>{translation}</p>
    </li>
  );
};

export default Word;
