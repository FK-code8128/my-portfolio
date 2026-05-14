(() => {
    'use strict';

    // =========================
    // DOM取得
    // =========================
    const menuToggle = document.getElementById('js__menu__toggle');
    const overlayMenu = document.getElementById('js__menu__overlay');
    const topBtn = document.getElementById('top-btn');
    const body = document.body;

    // =========================
    // メニュー開閉
    // =========================
    const toggleMenu = () => {
        body.classList.toggle('menu-open');
    };

    // =========================
    // メニューを閉じる
    // =========================
    const closeMenu = () => {
        body.classList.remove('menu-open');
    };

    // =========================
    // TOPボタン表示制御
    // =========================
    const handleScroll = () => {
        if (window.scrollY > 100) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    };

    // =========================
    // トップへスクロール
    // =========================
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // =========================
    // イベント登録
    // =========================
    const bindEvents = () => {

        // ハンバーガー開閉
        menuToggle.addEventListener('click', toggleMenu);

        // スクロール
        window.addEventListener('scroll', handleScroll);

        // TOPへ戻る
        topBtn.addEventListener('click', scrollToTop);

        // メニュー内リンククリック時
        overlayMenu.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    };

    bindEvents();

})();