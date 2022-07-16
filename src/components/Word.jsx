import React, { useEffect, useState } from 'react';
import styles from './Word.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wordsActions } from '../redux/words-slice';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../shared/firebase';
import { useSelector } from 'react-redux';

const Word = ({
  term,
  pronunciation,
  definition,
  example,
  translation,
  id
}) => {
  let navigate = useNavigate();

  let words = useSelector((state) => state.words.words);
  let doc_id = useSelector((state) => state.auth.user.doc_id);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck((prevState) => !prevState);
  };

  const goToEdit = () => {
    navigate('/detail/' + id);
    dispatch(wordsActions.isEdit());
  };

  const onDelete = async () => {
    const deletedWords = words.filter((it) => parseInt(it.id) !== parseInt(id));
    console.log(deletedWords, 'deletedWords');
    await updateDoc(doc(db, 'users', doc_id), {
      words: deletedWords
    });
    dispatch(wordsActions.delete(id));
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
          <button onClick={onDelete}>
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
