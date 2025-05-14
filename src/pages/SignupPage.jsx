import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/SignupPage.module.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    loginID: '',
    loginPassword: '',
    passwordConfirm: '',
    punNumber: '',
    email: '',
    birthday: ''
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('회원가입 정보:', formData);
    // TODO: 유효성 검사 및 서버 요청
  };

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">🔴 Stay Manager</Link>
        </div>
        <Link to="/login">로그인</Link>
      </header>

      <div className={styles.container}>
        <h1 className={styles.h1}>회원가입</h1>
        <p className={styles.subtitle}>회원님의 정보를 입력해주세요.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>이름
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <div className={styles.idField}>
            <label>아이디</label>
            <div className={styles.dupCheck}>
              <input
                type="text"
                name="loginID"
                placeholder="아이디 입력 (6~20자)"
                value={formData.loginID}
                onChange={handleChange}
                required
              />
              <button type="button">중복확인</button>
            </div>
            <span className={styles.error}>사용할 수 없는 아이디입니다</span>
          </div>

          <label className={styles.label}>비밀번호
            <input
              type="password"
              name="loginPassword"
              placeholder="비밀번호 입력 (8자 이상)"
              value={formData.loginPassword}
              onChange={handleChange}
              required
            />
            <span className={styles.error}>사용할 수 없는 비밀번호입니다</span>
          </label>

          <label className={styles.label}>비밀번호 확인
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 재입력"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
            <span className={styles.error}>비밀번호가 일치하지 않습니다</span>
          </label>

          <label className={styles.label}>전화번호
            <input
              type="text"
              name="punNumber"
              placeholder="휴대폰 번호 입력 ('-' 제외)"
              value={formData.punNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>이메일
            <input
              type="email"
              name="email"
              placeholder="이메일 주소 입력"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.label}>생일
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </label>

          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <span>개인정보 수집 및 이용에 대해 동의합니다.</span>
          </div>

          <button type="submit" className={`${styles.button} ${styles.submit}`}>가입하기</button>
        </form>
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

export default SignupPage;
