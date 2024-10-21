(function init100vh(){
    function setHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
})();

document.addEventListener("DOMContentLoaded", function() {
    function isIOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function isMacOS() {
        return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
    }

    let bannerTitleTop = document.querySelector('.banner__title-top');

    if (!isIOS() && !isMacOS() && bannerTitleTop) {
        bannerTitleTop.classList.add('mar-pad');
    }
});