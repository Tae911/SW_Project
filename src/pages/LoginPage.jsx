import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/LoginPage.module.css';

const LoginPage = () => {
  const [loginID, setLoginID] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', { loginID, loginPassword });
    // 여기에 로그인 API 연동 가능
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>🔴 Site Name</div>
      </header>

      <div className={styles["login-container"]}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              id="userId"
              name="loginID"
              placeholder="아이디 입력 (6~20자)"
              required
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
            />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="loginPassword"
              placeholder="비밀번호 입력 (8자리 이상)"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <button type="submit">로그인</button>
        </form>

        <div className={styles.links}>
          <Link to="/signupPage">회원가입</Link> /
          <a href="#">아이디 찾기</a> /
          <a href="#">비밀번호 찾기</a>
        </div>
      </div>

      <footer>
        <div className={styles["footer-section"]}>
          <div>Site name</div>
          <div className={styles["social-icons"]}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className={styles["footer-section"]}>
          <div>Topic</div>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
        </div>
        <div className={styles["footer-section"]}>
          <div>Topic</div>
          <div>Page</div>
          <div>Page</div>
          <div>Page</div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;