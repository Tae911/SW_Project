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
        <div className={styles["hero-image"]}>
        <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Stay Manager</Link>
      </div>
      <div className={styles["user-links"]}>
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
        <div className={styles["booking-form"]}>
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

          <button className={styles["search-btn"]}>검색</button>
        </div>
      </section>

      {/* AI 컨설팅 */}
      <section className={styles.consulting}>
        <h2>Ai: 나에게 딱 맞는 여행지 컨설팅</h2>
        <Link to="/ai" className={styles.btn}>Ai 컨설팅 받기</Link>
      </section>

      {/* 서비스 카드 */}
      <section className={styles.services}>
        <div className={styles["service-item"]}>
          <div className={styles["service-img1"]}></div>
          <p>휴양</p>
        </div>
        <div className={styles["service-item"]}>
          <div className={styles["service-img2"]}></div>
          <p>액티비티</p>
        </div>
        <div className={styles["service-item"]}>
          <div className={styles["service-img3"]}></div>
          <p>쇼핑</p>
        </div>
      </section>

      {/* 광고 슬라이더 */}
      <section className={styles["ad-slider"]}>
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
              <div style={{ backgroundImage: 'url(/images/event1.jpg)' }}></div>
              <div style={{ backgroundImage: 'url(/images/event2.jpg)' }}></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideBox}>
              <div style={{ backgroundImage: 'url(/images/event3.jpg)' }}></div>
              <div style={{ backgroundImage: 'url(/images/event4.jpg)' }}></div>
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
          <div className={styles["dest-item"]}>
            <div className={styles["dest-img1"]}></div>
            <h4>전주 한옥마을</h4>
            <p>한옥마을</p>
          </div>
          <div className={styles["dest-item"]}>
            <div className={styles["dest-img2"]}></div>
            <h4>제주도</h4>
            <p>성산일출봉</p>
          </div>
          <div className={styles["dest-item"]}>
            <div className={styles["dest-img3"]}></div>
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