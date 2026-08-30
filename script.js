/**
 * V Manglik & Co. — minimal vanilla JavaScript
 * Applies site-config.js, mobile nav, active section state.
 * No external libraries. Works with file:// and static hosting.
 */

(function () {
  "use strict";

  /* ---------- Apply site-config.js (contact / SEO) ---------- */
  function isFilled(value) {
    return typeof value === "string" && value.length > 0 && value.charAt(0) !== "[";
  }

  function applySiteConfig() {
    var cfg = window.SITE_CONFIG;
    if (!cfg) return;

    document.querySelectorAll("[data-config-text]").forEach(function (el) {
      var key = el.getAttribute("data-config-text");
      var value = cfg[key];
      if (isFilled(value) || (key === "copyrightYear" && value)) {
        el.textContent = value;
        el.classList.remove("contact-placeholder");
      }
    });

    document.querySelectorAll('[data-config="phone-link"]').forEach(function (el) {
      if (isFilled(cfg.phone)) {
        el.setAttribute("href", "tel:" + cfg.phone.replace(/\s+/g, ""));
      }
    });

    document.querySelectorAll('[data-config="email-link"]').forEach(function (el) {
      if (isFilled(cfg.email)) {
        el.setAttribute("href", "mailto:" + cfg.email);
      }
    });

    var actions = document.getElementById("contact-actions");
    var pendingNote = document.getElementById("contact-pending-note");
    var callBtn = document.getElementById("cta-call");
    var emailBtn = document.getElementById("cta-email");
    var showActions = false;

    if (callBtn && isFilled(cfg.phone)) {
      callBtn.setAttribute("href", "tel:" + cfg.phone.replace(/\s+/g, ""));
      callBtn.hidden = false;
      showActions = true;
    } else if (callBtn) {
      callBtn.hidden = true;
    }

    if (emailBtn && isFilled(cfg.email)) {
      emailBtn.setAttribute("href", "mailto:" + cfg.email);
      emailBtn.hidden = false;
      showActions = true;
    } else if (emailBtn) {
      emailBtn.hidden = true;
    }

    if (actions) {
      actions.hidden = !showActions;
      actions.classList.toggle("is-pending", !showActions);
    }
    if (pendingNote) {
      pendingNote.hidden = showActions;
    }

    if (isFilled(cfg.domain)) {
      var origin = "https://" + cfg.domain.replace(/^https?:\/\//, "").replace(/\/$/, "");
      var canonical = document.querySelector('link[rel="canonical"]');
      var ogUrl = document.querySelector('meta[property="og:url"]');
      if (canonical) canonical.setAttribute("href", origin + "/");
      if (ogUrl) ogUrl.setAttribute("content", origin + "/");

      var ld = document.querySelector('script[type="application/ld+json"]');
      if (ld) {
        try {
          var data = JSON.parse(ld.textContent);
          data.url = origin + "/";
          ld.textContent = JSON.stringify(data);
        } catch (e) {
          /* ignore malformed JSON-LD */
        }
      }
    }

    if (isFilled(cfg.metaDescription)) {
      var meta = document.querySelector('meta[name="description"]');
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (meta) meta.setAttribute("content", cfg.metaDescription);
      if (ogDesc) ogDesc.setAttribute("content", cfg.metaDescription);
    }
  }

  applySiteConfig();

  /* ---------- Mobile navigation ---------- */
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");
  var navLinks = document.querySelectorAll(".primary-nav .nav-link, .primary-nav .btn-nav");

  function setMenuOpen(isOpen) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", isOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!header.contains(event.target) && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
    });
  }

  /* ---------- Compact header on scroll ---------- */
  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ---------- Active navigation state ---------- */
  var sections = ["home", "about", "services", "contact"]
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  var sectionLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    if (!sections.length) return;

    var scrollPos = window.scrollY + 120;
    var currentId = sections[0].id;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    sectionLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      var isActive = href === "#" + currentId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
})();
