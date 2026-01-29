document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn_select");

  function loadLanguage(lang) {
    fetch(`./lang/${lang}.json`)
      .then((res) => res.json())
      .then((translations) => {
        // обычный текст
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const keys = el.getAttribute("data-i18n").split(".");
          let text = translations;

          keys.forEach((key) => {
            text = text?.[key];
          });

          if (text) el.innerHTML = text;
        });

        // placeholder (input, textarea)
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
          const keys = el.getAttribute("data-i18n-placeholder").split(".");
          let text = translations;

          keys.forEach((key) => {
            text = text?.[key];
          });

          if (text) el.placeholder = text;
        });
      })
      .catch((err) => {
        console.error("Language load error:", err);
      });
  }

  // клики по кнопкам
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang); // сохраняем язык
      loadLanguage(lang);
    });
  });

  // загружаем сохранённый язык или EN по умолчанию
  const savedLang = localStorage.getItem("lang") || "en";
  loadLanguage(savedLang);
});
