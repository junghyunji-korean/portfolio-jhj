const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01; // 현재 창 높이의 1%
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

// 페이지 로드 시와 창 크기 변경 시 업데이트
window.addEventListener('resize', setViewportHeight);
window.addEventListener('load', setViewportHeight);
