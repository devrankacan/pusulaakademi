const pageChrome = {
  header: `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Pusula Akademi ana sayfa">
        <span class="brand-mark" aria-hidden="true">✦</span>
        <span><strong>PUSULA</strong><small>AKADEMİ</small></span>
      </a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span><span class="sr-only">Menüyü aç</span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Ana menü">
        <a href="programlar.html">Programlar</a>
        <a href="yaklasimimiz.html">Yaklaşımımız</a>
        <a href="basarilarimiz.html">Başarılarımız</a>
        <a href="iletisim.html">İletişim</a>
        <button class="search-toggle" type="button" aria-expanded="false" aria-controls="site-search"><span aria-hidden="true">⌕</span> Ara</button>
        <a class="nav-cta" href="iletisim.html">
          <svg class="nav-cta-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.2 3.5 4.8 4.6c-.8.4-1.2 1.3-.9 2.1 1.9 6.1 5.8 10 11.9 11.9.8.3 1.7-.1 2.1-.9l1.1-2.4c.3-.7.1-1.5-.5-1.9l-2.3-1.6c-.6-.4-1.4-.3-1.9.2l-1 1c-1.8-.9-3.2-2.3-4.1-4.1l1-1c.5-.5.6-1.3.2-1.9L9.1 4c-.4-.6-1.2-.8-1.9-.5Z"></path>
          </svg>
          <span>Ücretsiz görüşme</span><b>↗</b>
        </a>
      </nav>
    </header>
    <div id="site-search" class="search-panel" hidden>
      <form class="search-form" role="search">
        <label class="sr-only" for="search-input">Sitede ara</label>
        <span aria-hidden="true">⌕</span>
        <input id="search-input" type="search" placeholder="Program, hedef veya bilgi ara..." autocomplete="off" />
        <button type="button" class="search-close" aria-label="Aramayı kapat">×</button>
      </form>
      <div class="search-results" aria-live="polite"></div>
    </div>`,
  footer: `
    <footer class="site-footer">
      <div class="section-shell footer-inner">
        <div class="footer-brand-column">
          <a class="brand brand-footer" href="index.html"><span class="brand-mark">✦</span><span><strong>PUSULA</strong><small>AKADEMİ</small></span></a>
          <p>Doğru yöne atılan ilk adım. Yakutiye / Erzurum.</p>
          <div class="social-links">
            <a href="https://www.instagram.com/pusulaakademi25/" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.8v8"></path></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 2.6 12 26 26 0 0 0 3 15.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-3.8 26 26 0 0 0-.4-3.8Z"></path><path class="social-play" d="m10 9 5 3-5 3V9Z"></path></svg>
            </a>
          </div>
        </div>
        <div class="footer-column"><h3>Keşfet</h3><a href="programlar.html">Programlar</a><a href="yaklasimimiz.html">Yaklaşımımız</a><a href="basarilarimiz.html">Başarılarımız</a></div>
        <div class="footer-column"><h3>İletişim</h3><a href="tel:+905072602525">0507 260 25 25</a><a href="mailto:merhaba@pusulaakademi.com">merhaba@pusulaakademi.com</a><span>Ömer Nasuhi Bilmen Mah.<br>Yakutiye / Erzurum</span></div>
        <div class="footer-column footer-action"><p>Çocuğunuzun rotasını birlikte çizelim.</p><a href="iletisim.html" class="footer-arrow">Görüşme planla <span>↗</span></a></div>
      </div>
      <div class="section-shell copyright"><span>© 2024 Pusula Akademi</span><span>Geleceğine yön ver.</span></div>
    </footer>`,
  contactFloat: `
    <div class="contact-float">
      <div class="contact-float-links" aria-hidden="true">
        <a class="float-link instagram-link" href="https://www.instagram.com/pusulaakademi25/" target="_blank" rel="noopener" aria-label="Instagram">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg></span><b>Instagram</b>
        </a>
        <a class="float-link whatsapp-link" href="https://wa.me/905072602525?text=Merhaba%20Pusula%20Akademi%2C%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.2a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.4-4.2A8.5 8.5 0 1 1 20.5 11.2Z"></path><path d="M8.7 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.6 1.1 1.5 1.9 2.6 2.4l.6-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.3.3.3.5-.1 1-.7 1.5-1.5 1.6-2.3.1-6.2-3.5-6.6-6.3-.1-.5.1-.9.6-1.2Z"></path></svg></span><b>WhatsApp</b>
        </a>
        <a class="float-link phone-link" href="tel:+905072602525" aria-label="Telefonla ara">
          <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 4.8 4.6c-.8.4-1.2 1.3-.9 2.1 1.9 6.1 5.8 10 11.9 11.9.8.3 1.7-.1 2.1-.9l1.1-2.4c.3-.7.1-1.5-.5-1.9l-2.3-1.6c-.6-.4-1.4-.3-1.9.2l-1 1c-1.8-.9-3.2-2.3-4.1-4.1l1-1c.5-.5.6-1.3.2-1.9L9.1 4c-.4-.6-1.2-.8-1.9-.5Z"></path></svg></span><b>Ara</b>
        </a>
      </div>
      <button class="contact-float-toggle" type="button" aria-expanded="false" aria-label="İletişim seçeneklerini aç">
        <span class="float-icon float-chat"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.4a7.8 7.8 0 0 1-8 7.6 8.3 8.3 0 0 1-3.3-.7L4 20l1.4-3.7A7.4 7.4 0 0 1 4 11.4a7.8 7.8 0 0 1 8-7.4 7.8 7.8 0 0 1 8 7.4Z"></path><path d="M8 11.5h.1M12 11.5h.1M16 11.5h.1"></path></svg></span><span class="float-icon float-close">×</span>
        <i>İletişim</i>
      </button>
    </div>`
};

document.querySelector("header")?.replaceWith(document.createRange().createContextualFragment(pageChrome.header));
document.querySelector("footer")?.replaceWith(document.createRange().createContextualFragment(pageChrome.footer));
document.body.insertAdjacentHTML("beforeend", pageChrome.contactFloat);
