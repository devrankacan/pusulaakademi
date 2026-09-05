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
        <a class="nav-cta" href="iletisim.html">Ücretsiz görüşme <span>↗</span></a>
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
          <div class="social-links"><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Youtube">▶</a></div>
        </div>
        <div class="footer-column"><h3>Keşfet</h3><a href="programlar.html">Programlar</a><a href="yaklasimimiz.html">Yaklaşımımız</a><a href="basarilarimiz.html">Başarılarımız</a></div>
        <div class="footer-column"><h3>İletişim</h3><a href="tel:+905072602525">0507 260 25 25</a><a href="mailto:merhaba@pusulaakademi.com">merhaba@pusulaakademi.com</a><span>Ömer Nasuhi Bilmen Mah.<br>Yakutiye / Erzurum</span></div>
        <div class="footer-column footer-action"><p>Çocuğunuzun rotasını birlikte çizelim.</p><a href="iletisim.html" class="footer-arrow">Görüşme planla <span>↗</span></a></div>
      </div>
      <div class="section-shell copyright"><span>© 2024 Pusula Akademi</span><span>Geleceğine yön ver.</span></div>
    </footer>`
};

document.querySelector("header")?.replaceWith(document.createRange().createContextualFragment(pageChrome.header));
document.querySelector("footer")?.replaceWith(document.createRange().createContextualFragment(pageChrome.footer));
