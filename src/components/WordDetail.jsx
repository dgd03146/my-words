import React, { useEffect, useRef, useState } from 'react';
import styles from './WordDetail.module.css';
import CloseIcon from '@mui/icons-material/Close';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { wordsActions } from '../redux/words-slice';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../shared/firebase';
import { useParams } from 'react-router-dom';

const WordDetail = ({ user_id }) => {
  let navigate = useNavigate();
  let isEdit = useSelector((state) => state.words.isEdit);

  const dispatch = useDispatch();

  let doc_id = useSelector((state) => state.auth.user.doc_id);
  let words = useSelector((state) => state.words.words);

  let params = useParams();
  let id = params['*'];

  const [originWord, setOriginWord] = useState();

  useEffect(() => {
    dispatch(wordsActions.notShowAddBtn());
  }, []);

  useEffect(() => {
    if (id && words.length >= 1) {
      const targetWord = words.find((it) => parseInt(it.id) == parseInt(id));
      setOriginWord(targetWord);
    }
  }, [id, words]);

  const formRef = useRef();
  const termRef = useRef();
  const defineRef = useRef();
  const pronounceRef = useRef();
  const exampleRef = useRef();
  const translateRef = useRef();

  const onChange = (e) => {
    setOriginWord({
      ...originWord,
      [e.target.name]: e.target.value
    });
  };

  const onUpdate = async (event) => {
    event.preventDefault();
    if (originWord && id) {
      // edit 할경우
      const editedWords = words.map((it) =>
        parseInt(it.id) === parseInt(originWord.id)
          ? (it = { ...originWord })
          : it
      );
      await updateDoc(doc(db, 'users', doc_id), {
        words: editedWords
      });
      dispatch(wordsActions.edit(originWord));

      navigate(-1);
      return;
    }

    // 추가하는 경우
    if (
      termRef.current.value === '' ||
      pronounceRef.current.value === '' ||
      pronounceRef.current.value === '' ||
      exampleRef.current.value === '' ||
      translateRef.current.value === ''
    ) {
      alert('아직 입력하지 않은 항목이 있습니다.');
      return;
    }

    const word = {
      id: Date.now(),
      term: termRef.current.value,
      pronunciation: pronounceRef.current.value,
      definition: defineRef.current.value,
      example: exampleRef.current.value,
      translation: translateRef.current.value
    };

    const updatedwords = [...words];
    updatedwords.unshift(word);
    console.log(updatedwords, 'updatedwords');
    await updateDoc(doc(db, 'users', doc_id), {
      words: updatedwords
    });
    dispatch(wordsActions.add(word));

    formRef.current.reset();
    navigate(-1);
  };

  return (
    <div className={styles.WordDetail}>
      <form className={styles.container} ref={formRef}>
        <div className={styles.topBox}>
          <button
            onClick={() => {
              navigate('/words');
            }}
          >
            <CloseIcon />
          </button>
          <h1>
            단어 <span>{isEdit ? '수정' : '추가'}</span>하기
          </h1>
          <button onClick={onUpdate}>
            <SaveAsIcon />
          </button>
        </div>
        <h2>단어</h2>
        <input
          type="text"
          ref={termRef}
          name="term"
          onChange={onChange}
          value={(originWord && originWord.term) || ''}
        />
        <h2>의미</h2>
        <input
          type="text"
          name="definition"
          ref={defineRef}
          onChange={onChange}
          value={(originWord && originWord.definition) || ''}
        />
        <h2>발음</h2>
        <input
          type="text"
          ref={pronounceRef}
          name="pronunciation"
          onChange={onChange}
          value={(originWord && originWord.pronunciation) || ''}
        />
        <h2>예문</h2>
        <input
          type="text"
          ref={exampleRef}
          name="example"
          onChange={onChange}
          value={(originWord && originWord.example) || ''}
        />
        <h2>해석</h2>
        <input
          type="text"
          ref={translateRef}
          name="translation"
          onChange={onChange}
          value={(originWord && originWord.translation) || ''}
        />
      </form>
    </div>
  );
};

export default WordDetail;
