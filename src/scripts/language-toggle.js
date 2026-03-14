(function () {
  const savedLang = localStorage.getItem("language") || "en";
  const htmlLang = document.documentElement.lang || "en";
  const currentLang = savedLang || htmlLang;

  window.setLanguage = function (lang) {
    localStorage.setItem("language", lang);
    location.reload();
  };

  window.getCurrentLanguage = function () {
    return localStorage.getItem("language") || "en";
  };

  window.toggleLanguage = function () {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === "en" ? "es" : "en";
    setLanguage(newLang);
  };
})();
