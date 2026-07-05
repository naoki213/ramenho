// 言語切り替えロジック
(function() {
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'ja';

    const t = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] === undefined) return;
      if (el.getAttribute('data-i18n-html') !== null) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    // トグルボタン表示更新
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'ja' ? 'EN' : 'JP';
      btn.setAttribute('data-current', lang);
    });
  }

  function toggleLang() {
    const btn = document.querySelector('.lang-toggle');
    const current = btn ? btn.getAttribute('data-current') || 'ja' : 'ja';
    setLang(current === 'ja' ? 'en' : 'ja');
  }

  function initLang() {
    const saved = localStorage.getItem('lang') || 'ja';
    setLang(saved);
  }

  // グローバルに公開
  window.setLang   = setLang;
  window.toggleLang = toggleLang;
  window.initLang  = initLang;

  // DOM読み込み完了後に初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }
})();
