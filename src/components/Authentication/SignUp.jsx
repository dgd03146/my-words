import React, { useRef } from 'react';
import styles from './SignUp.module.css';
import { auth } from '../../shared/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../shared/firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  let navigate = useNavigate();
  const id_ref = useRef(null);
  const name_ref = useRef(null);
  const pw_ref = useRef(null);

  const onSignUp = async () => {
    // validation 체크 해줘야함
    // if(id_ref.current.value ===""){
    //   return false;
    // }

    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );

    const user_doc = await addDoc(collection(db, 'users'), {
      user_id: user.user.email,
      name: name_ref.current.value
    }); // 회원가입 끝난 상태에서 firebaseStore에다가 저장
    console.log(user_doc.id);
    // input reset
    id_ref.current.value = '';
    name_ref.current.value = '';
    pw_ref.current.value = '';
  };

  return (
    <div className={styles.signUp}>
      <h1 className={styles.title}>MY WORDS</h1>
      <div className={styles.signUpWrapper}>
        <div className={styles.inputBox}>
          <input type="email" placeholder="아이디(이메일)" ref={id_ref} />
          <input type="text" placeholder="이름" ref={name_ref} />
          <input type="password" placeholder="비밀번호" ref={pw_ref} />
        </div>
        <button className={styles.signUpBtn} onClick={onSignUp}>
          회원가입
        </button>
        <button
          className={styles.loginBtn}
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </button>
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
  );
};

export default SignUp;
