const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector("#site-search");
const searchInput = document.querySelector("#search-input");
const searchClose = document.querySelector(".search-close");
const searchResults = document.querySelector(".search-results");
const searchableContent = [
  { title: "LGS Hazırlık", text: "Ortaokul öğrencileri için sınava hazırlık programı.", href: "programlar.html" },
  { title: "YKS Hazırlık", text: "Lise öğrencileri için üniversite sınavı hazırlık programı.", href: "programlar.html" },
  { title: "Kişisel Gelişim", text: "Potansiyelini keşfet ve kendine yatırım yap.", href: "programlar.html" },
  { title: "Yaklaşımımız", text: "Kişiye özel plan, güçlü rehberlik ve gerçek takip.", href: "yaklasimimiz.html" },
  { title: "Başarılarımız", text: "2.000+ öğrenci, 12+ yıllık deneyim ve yüzde 94 hedefe ulaşma.", href: "basarilarimiz.html" },
  { title: "İletişim", text: "Ücretsiz görüşme için Pusula Akademi ile iletişime geç.", href: "iletisim.html" },
];

function closeSearch() {
  searchPanel.hidden = true;
  searchToggle?.setAttribute("aria-expanded", "false");
}

function renderResults(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");
  const matches = searchableContent.filter((item) =>
    `${item.title} ${item.text}`.toLocaleLowerCase("tr-TR").includes(normalizedQuery)
  );
  searchResults.innerHTML = matches.length
    ? matches.map((item) => `<a class="search-result" href="${item.href}"><strong>${item.title}</strong><span>${item.text}</span><b>→</b></a>`).join("")
    : "<p class=\"no-results\">Aramanızla eşleşen bir içerik bulunamadı.</p>";
}

searchToggle?.addEventListener("click", () => {
  searchPanel.hidden = !searchPanel.hidden;
  searchToggle.setAttribute("aria-expanded", String(!searchPanel.hidden));
  if (!searchPanel.hidden) {
    renderResults();
    searchInput.focus();
  }
});
searchClose?.addEventListener("click", closeSearch);
searchInput?.addEventListener("input", (event) => renderResults(event.target.value));
searchResults?.addEventListener("click", closeSearch);

const animatedElements = document.querySelectorAll(
  ".program-card, .approach-image, .approach-copy, .results-inner, .testimonial, .contact"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

animatedElements.forEach((element) => revealObserver.observe(element));
