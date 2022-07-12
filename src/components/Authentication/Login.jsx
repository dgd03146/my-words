import React, { useRef } from 'react';
import styles from './Login.module.css';
import { auth } from '../../shared/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, where, query, collection } from 'firebase/firestore';
import { db } from '../../shared/firebase';

const Login = () => {
  const id_ref = useRef(null);
  const pw_ref = useRef(null);

  const onLogin = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );

    console.log(user);

    const user_docs = await getDocs(
      query(collection(db, 'users'), where('user_id', '==', user.user.email))
    );

    user_docs.forEach((u) => {
      console.log(u.data()); // user 정보 가지고 옴. state에 넣어서 이름 얻을 수 있다.
    });
  };

  return (
    <div>
      <div className={styles.login}>
        <h1 className={styles.title}>MY WORDS</h1>
        <div className={styles.loginWrapper}>
          <div className={styles.inputBox}>
            <input type="email" placeholder="아이디(이메일)" ref={id_ref} />
            <input type="password" placeholder="비밀번호" ref={pw_ref} />
          </div>
          <button className={styles.loginBtn} onClick={onLogin}>
            로그인
          </button>
          <p>
            <span className={styles.signUpBtn}>회원가입</span>
          </p>
        </div>
        <hr />
        <p className={styles.description}>
          SNS 계정으로 간편하게 회원가입/로그인 하세요.
        </p>
        <div className={styles.snsLogin}>
          <button>
            <img src="../../assets/google.png" alt="google" />
          </button>
          <button>
            <img src="../../assets/facebook2.png" alt="facebook" />
          </button>
          <button>
            <img src="../../assets/github2.png" alt="github" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;