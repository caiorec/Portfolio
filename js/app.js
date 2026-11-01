(function () {
  var S = window.SITE, D = window.I18N;

  // ---------- idioma ----------
  function detectLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    try { var s = localStorage.getItem("lang"); if (s === "pt" || s === "en") return s; } catch (e) {}
    return (navigator.language || "pt").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  }
  var lang = detectLang();
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    render();
  }
  function t(k) { return (D[lang] && D[lang][k]) || k; }

  // ---------- util ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function hue(id) { var h = 0; for (var i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) % 360; return h; }
  function thumbStyle(w) {
    if (w.thumb) return "background-image:url('" + w.thumb + "')";
    var h = hue(w.id);
    return "background-image:linear-gradient(135deg,hsl(" + h + " 45% 22%),hsl(" + ((h + 50) % 360) + " 55% 12%))";
  }
  function catName(id) {
    if (!id) return "";
    var c = S.categories.filter(function (x) { return x.id === id; })[0];
    return c ? c[lang] : id;
  }
  function wTitle(w) { return w.title[lang]; }
  function wUrl(w) { return "project.html?id=" + encodeURIComponent(w.id); }
  function sample(w) { return w.placeholder ? el("span", { class: "sample", text: t("sample") }) : null; }

  // ---------- peças comuns ----------
  function renderHeader() {
    var h = document.getElementById("site-header");
    h.innerHTML = "";
    var nav = el("nav", { class: "nav", id: "nav", "aria-label": "main" }, [
      el("a", { href: "work.html", text: t("nav.work") }),
      el("a", { href: "index.html#about", text: t("nav.about") }),
      el("a", { href: "index.html#contact", text: t("nav.contact") })
    ]);
    var langs = el("div", { class: "lang", role: "group", "aria-label": "language" }, ["pt", "en"].map(function (l) {
      return el("button", { type: "button", class: l === lang ? "on" : "", "aria-pressed": String(l === lang), text: l.toUpperCase(), onclick: function () { setLang(l); } });
    }));
    var menu = el("button", { class: "menu-btn", type: "button", "aria-expanded": "false", "aria-controls": "nav", text: "+ " + t("nav.menu"),
      onclick: function () {
        var open = document.body.classList.toggle("nav-open");
        menu.setAttribute("aria-expanded", String(open));
        menu.textContent = (open ? "× " + t("nav.close") : "+ " + t("nav.menu"));
      } });
    h.appendChild(el("a", { class: "logo", href: "index.html", text: S.name }));
    h.appendChild(nav);
    h.appendChild(langs);
    h.appendChild(menu);
  }

  function renderFooter() {
    var f = document.getElementById("site-footer");
    f.innerHTML = "";
    f.appendChild(el("span", { text: "© " + new Date().getFullYear() + " " + S.name + ". " + t("footer.rights") }));
    f.appendChild(el("span", { class: "social" }, [
      el("a", { href: S.instagram, target: "_blank", rel: "noopener", text: "Instagram" }),
      el("a", { href: S.youtube, target: "_blank", rel: "noopener", text: "YouTube" })
    ]));
  }

  function applyStatic() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
  }

  // ---------- home ----------
  function renderHome() {
    var feat = document.getElementById("featured");
    feat.innerHTML = "";
    S.works.filter(function (w) { return w.featured; }).slice(0, 6).forEach(function (w) {
      feat.appendChild(el("a", { class: "card", href: wUrl(w) }, [
        el("div", { class: "thumb", style: thumbStyle(w) }),
        el("div", { class: "card-meta" }, [
          el("strong", { text: w.brand }),
          el("span", { text: wTitle(w) }),
          el("small", { text: [catName(w.cat), w.year].filter(Boolean).join(" · ") })
        ]),
        sample(w)
      ]));
    });
    var b = document.getElementById("brands");
    b.innerHTML = "";
    S.brands.forEach(function (br) {
      b.appendChild(el("li", {}, [br.logo ? el("img", { src: br.logo, alt: br.name, loading: "lazy" }) : el("span", { text: br.name })]));
    });
    var mail = document.getElementById("mail");
    if (S.email) { mail.href = "mailto:" + S.email; mail.textContent = S.email; }
    else { mail.href = S.instagram; mail.target = "_blank"; mail.rel = "noopener"; mail.textContent = "@" + S.instagram.replace(/\/$/, "").split("/").pop(); }
  }

  // ---------- lista de trabalhos ----------
  var activeCat = "all";
  function renderWork() {
    var tabs = document.getElementById("tabs");
    tabs.innerHTML = "";
    [{ id: "all", label: t("work.all") }].concat(S.categories.map(function (c) { return { id: c.id, label: c[lang] }; })).forEach(function (c) {
      tabs.appendChild(el("button", { type: "button", class: c.id === activeCat ? "on" : "", text: c.label,
        onclick: function () { activeCat = c.id; renderWork(); } }));
    });
    var list = S.works.filter(function (w) { return activeCat === "all" || w.cat === activeCat; });
    document.getElementById("count").textContent = "(" + list.length + ") " + t("work.count");
    var ul = document.getElementById("worklist");
    ul.innerHTML = "";
    var preview = document.getElementById("preview");
    list.forEach(function (w, i) {
      var a = el("a", { href: wUrl(w) }, [
        el("span", { class: "brand", text: w.brand }),
        el("span", { class: "ttl", text: wTitle(w) }),
        el("span", { class: "cat", text: [catName(w.cat), w.year].filter(Boolean).join(" · ") }),
        sample(w),
        el("span", { class: "inline-thumb", style: thumbStyle(w), "aria-hidden": "true" })
      ]);
      a.addEventListener("mouseenter", function () { preview.style.cssText = thumbStyle(w); preview.classList.add("show"); });
      a.addEventListener("mouseleave", function () { preview.classList.remove("show"); });
      a.addEventListener("focus", function () { preview.style.cssText = thumbStyle(w); preview.classList.add("show"); });
      a.addEventListener("blur", function () { preview.classList.remove("show"); });
      ul.appendChild(el("li", { class: i % 2 ? "right" : "left" }, [a]));
    });
  }
  document.addEventListener("mousemove", function (e) {
    var p = document.getElementById("preview");
    if (!p) return;
    // a prévia aparece na metade oposta à do cursor, para nunca cobrir o texto
    var onLeft = e.clientX < window.innerWidth / 2;
    p.style.left = (onLeft ? window.innerWidth * 0.75 - 160 : window.innerWidth * 0.25 - 160) + "px";
    p.style.top = Math.min(e.clientY - 90, window.innerHeight - 220) + "px";
  });

  // ---------- projeto ----------
  function renderProject() {
    var id = new URLSearchParams(location.search).get("id");
    var idx = -1;
    S.works.forEach(function (w, i) { if (w.id === id) idx = i; });
    var root = document.getElementById("project");
    root.innerHTML = "";
    if (idx < 0) { location.replace("work.html"); return; }
    var w = S.works[idx], next = S.works[(idx + 1) % S.works.length];
    document.title = w.brand + " — " + wTitle(w) + " · " + S.name;

    var stage = el("div", { class: "stage" });
    var v = w.video || {};
    if (v.type === "youtube" && v.src) {
      stage.appendChild(el("iframe", { src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.src), title: wTitle(w),
        allow: "accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen", allowfullscreen: "", loading: "lazy" }));
    } else if (v.type === "file" && v.src) {
      stage.appendChild(el("video", { src: v.src, controls: "", playsinline: "", preload: "metadata", poster: w.thumb || "" }));
    } else if (v.type === "instagram" && v.src) {
      stage.className += " ig";
      stage.appendChild(el("iframe", { src: v.src.replace(/\/?$/, "/") + "embed", title: wTitle(w), loading: "lazy", allowfullscreen: "", scrolling: "no" }));
    } else {
      stage.className += " poster"; stage.setAttribute("style", thumbStyle(w));
      stage.appendChild(el("p", { class: "soon", text: t("project.empty") }));
    }

    root.appendChild(el("a", { class: "back", href: "work.html", text: "← " + t("project.back") }));
    root.appendChild(stage);
    if (v.type === "instagram" && v.src) root.appendChild(el("p", { class: "igfallback" }, [el("a", { href: v.src, target: "_blank", rel: "noopener", text: t("project.watch.instagram") + " ↗" })]));
    root.appendChild(el("div", { class: "pmeta" }, [
      el("div", {}, [el("p", { class: "brand", text: w.brand }), el("h1", { text: wTitle(w) }), sample(w)]),
      el("div", {}, [el("p", { text: w.desc[lang] }), el("p", { class: "cat", text: [catName(w.cat), w.year].filter(Boolean).join(" · ") })])
    ]));
    root.appendChild(el("a", { class: "next", href: wUrl(next) }, [
      el("small", { text: t("project.next") }), el("strong", { text: next.brand + " — " + wTitle(next) + " →" })
    ]));
  }

  // ---------- boot ----------
  function render() {
    renderHeader(); renderFooter(); applyStatic();
    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    if (page === "work") renderWork();
    if (page === "project") renderProject();
  }
  document.addEventListener("DOMContentLoaded", render);
})();
