import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MyPage.module.css';
import h1 from '../assets/h1.jpg';
import instargram from '../assets/instargram.jpg';
import facebook from '../assets/facebook.jpg';
import twitter from '../assets/twitter.jpg';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    loginID: '',
    loginPassword: '',
    punNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('수정 정보 제출:', userInfo);
  };

  return (
    <div className={styles.body}>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <Link to="/">🔴 Stay Manager</Link>
        </div>
        <div className="navLinks">
          <a>OOO님</a>
          <a href="/myPage">MyPage</a>
          <a href="/savedPage">찜 목록</a>
          <a href="/">로그아웃</a>
        </div>
      </header>
      {/* Header */}

      <section className={styles.welcome}>
        <h1 className={styles.h1}>MyPage</h1>
        <div className={styles.hello}>
          <h4 className={styles.h4}>OOO님, 환영합니다.</h4>
        </div>
      </section>

      <div className={styles.divider}></div>

      <h2 className={styles.h2}>나의 예약현황</h2>
      <div className={styles.reservationCard}>
        <img style={{ backgroundImage: `url(${h1})` }} />
        <div className={styles.reservationInfo}>
          <div className={styles.sb}>
            <h3>시그니엘 부산</h3>
            <p>예약자 성함 : OOO</p>
          </div>
          <div className={styles.sb}>
            <p style={{ marginBottom: '7rem' }}>해운대</p>
            <p>객실 : 트윈베드 오션뷰 (2인)</p>
          </div>
          <div className={styles.sb}>
            <p>예약일자</p>
            <p>체크인 시간 : 14:00</p>
          </div>
          <div className={styles.sb}>
            <p>5월 1일 ~ 5월 7일</p>
            <p>체크아웃 시간 : 10:00</p>
          </div>
        </div>
      </div>

      <div className={styles.reservationButtons}>
        <button>공유하기</button>
        <button>결제내역</button>
        <button>예약취소</button>
      </div>

      <div className={styles.divider}></div>

      <h2 className={styles.h2}>회원정보</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.halfGroup}>
          <label>이름
            <input type="text" name="name" value={userInfo.name} onChange={handleChange} />
          </label>
        </div>

        <div className={styles.halfGroup}>
          <label>이메일
            <input type="email" name="email" value={userInfo.email} onChange={handleChange} className="full-width" />
          </label>
        </div>

        <div className={styles.halfGroup}>
          <label>아이디
            <input type="text" name="loginID" value={userInfo.loginID} onChange={handleChange} className="full-width" />
          </label>
        </div>

        <div className={styles.halfGroup}>
          <label>비밀번호
            <input type="password" name="loginPassword" value={userInfo.loginPassword} onChange={handleChange} className="full-width" />
          </label>
        </div>

        <div className={styles.halfGroup}>
          <label>전화번호
            <input type="text" name="punNumber" value={userInfo.punNumber} onChange={handleChange} className="full-width" />
          </label>
        </div>

        <div className={styles.reservationButtons}>
          <button type="submit">수정하기</button>
        </div>
      </form>

      {/* Footer */}
      <footer>
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">Stay Manager</div>
          </div>

          <div className="footer-right">
            <div className="footer-section">
              <h4>Topic</h4>
              <ul>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Topic</h4>
              <ul>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-wrapper">
            <div className="social-icon" style={{ backgroundImage: `url(${facebook})` }}></div>
            <div className="social-icon" style={{ backgroundImage: `url(${instargram})` }}></div>
            <div className="social-icon" style={{ backgroundImage: `url(${twitter})` }}></div>
          </div>
          <p>© 2025 Stay Manager. All rights reserved.</p>
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default MyPage;
