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
        <div className={styles.logo}>
          <Link to="/">🔴 Stay Manager</Link>
        </div>
      </header>

      <div className={styles.loginContainer}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="userId" className={styles.label}>아이디</label>
            <input className={styles.input}
              type="text"
              id="userId"
              name="loginID"
              placeholder="아이디 입력 (6~20자)"
              required
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>비밀번호</label>
            <input className={styles.input}
              type="password"
              id="password"
              name="loginPassword"
              placeholder="비밀번호 입력 (8자리 이상)"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.button}>로그인</button>
        </form>

        <div className={styles.links}>
          <Link to="/signupPage">회원가입</Link> /
          <a href="#">아이디 찾기</a> /
          <a href="#">비밀번호 찾기</a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className={"footer-top"}>
          <div className={"footer-section"}>
            <div className={"footer-logo"}>Stay Manager</div>
            <div className={"social-icons"}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className={"footer-section"}>
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>

          <div className={"footer-section"}>
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
        </div>

        <div className={"footer-bottom"}>
          <p>© 2025 Site Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;