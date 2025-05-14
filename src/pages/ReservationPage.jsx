import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/ReservationPage.module.css';
import instargram from '../assets/instargram.jpg';
import facebook from '../assets/facebook.jpg';
import twitter from '../assets/twitter.jpg';

const ReservationPage = () => {
    return (
        <div>
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

            <div className={styles.searchBox}>
                <input type="text" placeholder="목적지" />
                <div className={styles.tag}>5월 1일 - 5월 7일</div>
                <div className={styles.tag}>인원 2명</div>
                <button><img src="#" alt="검색" /></button>
            </div>

            <a href="#" className={styles.backLink}>+ 돌아가기</a>

            <section className={styles.hero}>
                <div className={styles.big}></div>
                <div className={styles.thumb1}></div>
                <div className={styles.thumb2}></div>
                <div className={styles.thumb3}></div>
                <div className={styles.thumb4}>
                    <div className={styles.more}>+124</div>
                </div>
            </section>

            <div className={styles.sectiontTabs}>
                <button className={styles.active}>소개</button>
                <button>객실</button>
                <button>정책</button>   
                <button>리뷰</button>
            </div>

            <div className={styles.hotelInfo}>
                <div className={styles.hotelDetails}>
                    <div className={styles.hotelTitle}>파라다이스 호텔 부산</div>
                    <div className={styles.hotelSubtitle}>Paradise Hotel Busan</div>
                    <div className={styles.stars}><span></span><span></span><span></span><span></span><span></span></div>
                    <div className={styles.facilities}>
                        <div className={styles.facility}>실내 수영장</div>
                        <div className={styles.facility}>사우나</div>
                        <div className={styles.facility}>피트니스</div>
                        <div className={styles.facility}>공항 셔틀</div>
                    </div>
                </div>
                <div className={styles.map}></div>
            </div>

            <div className={styles.sectionHeader}>
                <h2>객실 정보</h2>
                <div className={styles.roomFilters}>
                    <div className={styles.filter}>5월 1일</div>
                    <div className={styles.filter}>5월 7일</div>
                    <div className={styles.filter}>2명</div>
                </div>
            </div>

            <div className={styles.rooms}>
  {[1, 2, 3].map((_, idx) => (
    <div key={idx} className={styles.roomCard}>
      <div className={styles.img}></div>
      <div className={styles.roomContent}>
        <div className={styles.roomName}>
          디럭스 더블룸, 시내 전망 <span>(Main Building)</span>
        </div>
        <div className={styles.roomSpecs}>
          - 32㎡<br />- 더블베드 1개<br />- 2인 투숙 가능<br />- 조식 포함
        </div>
        <div className={styles.roomPrice}>₩{525000 + idx * 50000}</div>
        <button className={styles.reserveBtn}>예약하기</button>
      </div>
    </div>
  ))}
</div>

            <div className={styles.policy}>
                <h3>요금 및 정책</h3>
                <ul>
                    <li>취소 시 취소료: 무료</li>
                    <li>어린이(12세 이하) 무료 투숙</li>
                    <li>반려동물 동반 불가</li>
                    <li>보증금: KRW 150,000 (체크인 시 결제)</li>
                </ul>
            </div>

            <div className={styles.reviews}>
                <div className={styles.reviewsHeader}>
                    <div className={styles.reviewsScore}>9.7<span>/10</span></div>
                    <div className={styles.reviewsSub}>리뷰 수 27개</div>
                </div>
                <div className={styles.review}>
                    <p>10/10 최고예요</p>
                    <div className={styles.reviewMeta}>NickName · 2025/04/23</div>
                </div>
                <button className={styles.btnMore}>더보기</button>
            </div>

            <div className={styles.footerLinks}>
                <a href="#">회사소개</a>
                <a href="#">이용약관</a>
                <a href="#">개인정보처리방침</a>
                <a href="#">고객센터</a>
            </div>

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

export default ReservationPage;