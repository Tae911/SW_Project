import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/SavedPage.module.css';
import instargram from '../assets/instargram.jpg';
import facebook from '../assets/facebook.jpg';
import twitter from '../assets/twitter.jpg';

const SavedPage = () => {
    const [savedItems, setSavedItems] = useState([
        {
            id: 1,
            hotel: '파라다이스 호텔 부산',
            location: '해운대',
            rating: '9.7',
            discount: '14%',
            pricePerNight: '₩125,000',
            total: '₩875,000',
            liked: true,
            selected: false,
        },
        {
            id: 2,
            hotel: '시그니엘 부산',
            location: '해운대',
            rating: '9.5',
            discount: '8%',
            pricePerNight: '₩137,000',
            total: '₩1,050,000',
            liked: true,
            selected: false,
        },
        {
            id: 3,
            hotel: '그랜드 조선 부산',
            location: '해운대',
            rating: '9.3',
            discount: '18%',
            pricePerNight: '₩155,000',
            total: '₩920,000',
            liked: true,
            selected: false,
        },
    ]);

    const toggleLike = (id) => {
        setSavedItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, liked: !item.liked } : item
            )
        );
    };

    const toggleSelect = (id) => {
        setSavedItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const deleteSelected = () => {
        setSavedItems(prev => prev.filter(item => !item.selected));
    };

    const deleteAll = () => {
    setSavedItems([]);  // 저장된 모든 아이템 제거
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

            {/* Main */}
            <div className={styles.container}>
                <div className={styles.pageHeader}>
                    <div className={styles.title}>
                        <span className={styles.icon}>▶</span>
                        <span>찜한 목록</span>
                    </div>
                    <button className={styles.filterBtn}>필터링 : 지역 - 부산</button>
                </div>

                <div className={styles.divider}></div>

                {savedItems.map(item => (
                    <div key={item.id} className={styles.cardWrapper}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={item.selected}
                            onChange={() => toggleSelect(item.id)}
                        />
                        <div className={styles.card}>
                            <img
                                className={styles.cardImg}
                                src="https://via.placeholder.com/260x150"
                                alt="호텔 이미지"
                            />
                            <div className={styles.cardInfo}>
                                <div className={styles.cardTop}>
                                    <h3 className={styles.hotelName}>{item.hotel}</h3>
                                    <button
                                        className={styles.btnSchedule}
                                        style={{ backgroundColor: item.liked ? '#40c9c9' : '#ccc' }}
                                        onClick={() => toggleLike(item.id)}
                                    >
                                        {item.liked ? '찜해제' : '찜하기'}
                                    </button>
                                </div>
                                <div className={styles.cardMiddle}>
                                    <p className={styles.location}>{item.location}</p>
                                    <div className={styles.facilities}>
                                        <span>호텔</span>
                                        <span>수영장</span>
                                        <span>조식 제공</span>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.rating}>★ {item.rating}</div>
                                    <div className={styles.priceInfo}>
                                        <span className={styles.badgeDiscount}>{item.discount} 할인</span>
                                        <p className={styles.perNight}>1박 요금 {item.pricePerNight}</p>
                                        <p className={styles.total}>{item.total}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.actions}>
                    <button onClick={deleteSelected}>선택 삭제</button>
                    <button onClick={deleteAll}>전체 삭제</button>
                </div>
            </div>

            {/* Footer */}
            < footer >
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

export default SavedPage;