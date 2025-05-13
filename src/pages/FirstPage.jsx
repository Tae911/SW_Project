import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper/modules';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ko } from 'date-fns/locale';
import styles from '../css/FirstPage.module.css';
import heroImage from '../assets/firstPage1.jpg';
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import rc1 from '../assets/rc1.jpg';
import rc2 from '../assets/rc2.jpg';
import rc3 from '../assets/rc3.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';

const FirstPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // 로그인 상태 가정
  const [username, setUsername] = useState('홍길동');

  // 예약 관련 상태
  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [guests, setGuests] = useState(1);

  return (
    <div>

      {/* Booking Form */}
      <section className={styles.hero}>
        <div className={styles.heroImage}
        style={{ backgroundImage: `url(${heroImage})` }}>
        <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Stay Manager</Link>
      </div>
      <div className={styles.userLinks}>
        {!isAuthenticated ? (
          <>
            <Link to="/signupPage">회원가입</Link>
            <Link to="/login">로그인</Link>
          </>
        ) : (
          <>
            <span>안녕하세요, {username}님</span>
            <Link to="/myPage">MyPage</Link>
            <Link to="/logout">로그아웃</Link>
          </>
        )}
      </div>
    </header>
    </div>
        <div className={styles.bookingForm}>
          <h2>원하는 숙소를 예약하세요</h2>

          <div className={styles["form-group"]}>
            <label htmlFor="location">목적지</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className={styles.sb}>
            <div className={styles["form-group"]}>
              <label>체크인</label>
              <DatePicker
                selected={checkin}
                onChange={(date) => setCheckin(date)}
                placeholderText="날짜 선택"
                dateFormat="yyyy/MM/dd"   // ✅ 월 표시 강제 지정 (선택)
                popperPlacement="bottom-start"
                showPopperArrow={false}
                locale={ko}
              />
            </div>
            <div className={styles["form-group"]}>
              <label>체크아웃</label>
              <DatePicker
                selected={checkout}
                onChange={(date) => setCheckout(date)}
                placeholderText="날짜 선택"
                dateFormat="yyyy/MM/dd"   // ✅ 월 표시 강제 지정 (선택)
                popperPlacement="bottom-start"
                showPopperArrow={false}
                locale={ko}
              />
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="guests">인원 수</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>

          <button className={styles.searchBtn}>검색</button>
        </div>
      </section>

      {/* AI 컨설팅 */}
      <section className={styles.consulting}>
        <h2>Ai: 나에게 딱 맞는 여행지 컨설팅</h2>
        <Link to="/ai" className={styles.btn}>Ai 컨설팅 받기</Link>
      </section>

      {/* 서비스 카드 */}
      <section className={styles.services}>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg1} style={{ backgroundImage: `url(${rc1})` }}></div>
          <p>휴양</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg2} style={{ backgroundImage: `url(${rc2})` }}></div>
          <p>액티비티</p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceImg3} style={{ backgroundImage: `url(${rc3})` }}></div>
          <p>쇼핑</p>
        </div>
      </section>

      {/* 광고 슬라이더 */}
      <section className={styles.adSlider}>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.${styles.customNext}`,
            prevEl: `.${styles.customPrev}`,
          }}
          loop={true}
          autoplay={{
            delay: 5000,      // 5초마다 자동 전환
            disableOnInteraction: false  // 유저가 클릭해도 자동재생 유지
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className={styles.slideBox}>
              <div style={{ backgroundImage: `url(${event1})` }}></div>
              <div style={{ backgroundImage: `url(${event2})` }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>
              <div style={{ backgroundImage: `url(${event3})` }}></div>
              <div style={{ backgroundImage: `url(${event4})` }}></div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button className={`${styles.sliderBtn} ${styles.customPrev}`}>&lt;</button>
        <button className={`${styles.sliderBtn} ${styles.customNext}`}>&gt;</button>
      </section>

      {/* 추천 여행지 */}
      <section className={styles.recommend}>
        <h3>추천 여행지</h3>
        <div className={styles.destinations}>
          <div className={styles.destItem}>
            <div className={styles.destImg1} style={{ backgroundImage: `url(${r1})` }}></div>
            <h4>전주 한옥마을</h4>
            <p>한옥마을</p>
          </div>
          <div className={styles.destItem}>
            <div className={styles.destImg2} style={{ backgroundImage: `url(${r2})` }}></div>
            <h4>제주도</h4>
            <p>성산일출봉</p>
          </div>
          <div className={styles.destItem}>
            <div className={styles.destImg3} style={{ backgroundImage: `url(${r3})` }}></div>
            <h4>강릉</h4>
            <p>경포해변</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className={styles["footer-top"]}>
          <div className={styles["footer-section"]}>
            <div className={styles.logo}>Stay Manager</div>
            <div className={styles["social-icons"]}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className={styles["footer-section"]}>
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>

          <div className={styles["footer-section"]}>
            <h4>Topic</h4>
            <ul>
              <li>Page</li>
              <li>Page</li>
              <li>Page</li>
            </ul>
          </div>
        </div>

        <div className={styles["footer-bottom"]}>
          <p>© 2025 Site Name. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default FirstPage;