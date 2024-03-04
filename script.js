!(function () {
  var e = {
      972: function () {
        new Swiper(".about-us__slider", {
          slidesPerView: 1.5,
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2 },
            600: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
          },
        });
      },
      409: function () {
        new Swiper(".certificates__slider", {
          slidesPerView: 1.4,
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2 },
            650: { slidesPerView: 3 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            991: { slidesPerView: 3 },
          },
        });
      },
      642: function () {
        const e = document.querySelector(".header__burger"),
          t = document.querySelector(".header__nav");
        e.addEventListener("click", () => {
          t.classList.toggle("open"),
            t.classList.contains("open")
              ? (e.src = "./img/close.svg")
              : (e.src = "./img/burger.svg");
        });
      },
      221: function () {
        const e = document.querySelector(".modal-overlay"),
          t = document.querySelector(".modal__close"),
          n = document.querySelector(".hero__request-btn"),
          r = document.querySelector(".modal"),
          o = document.querySelector(".modal__form-item");
        n.addEventListener("click", (t) => {
          t.preventDefault(), e.classList.add("d-block");
        }),
          t.addEventListener("click", () => {
            e.classList.remove("d-block");
          }),
          e.addEventListener("click", (t) => {
            t.target === r
              ? t.stopPropagation()
              : e.classList.remove("d-block");
          }),
          o.addEventListener("click", (e) => {
            e.stopPropagation();
          }),
          document.addEventListener("keydown", (t) => {
            "Escape" === t.key &&
              e.classList.contains("d-block") &&
              e.classList.remove("d-block");
          }),
          document.addEventListener("DOMContentLoaded", function () {
            const e = document.querySelectorAll(".item"),
              t = document.querySelector(".modal-overlay-second"),
              n = document.querySelector(".modal__form-service span"),
              r = document.querySelector(".modal__close-second");
            function o() {
              t.style.display = "none";
            }
            e.forEach((e) => {
              e.addEventListener("click", function () {
                if (innerWidth <= 991) {
                  const r = e.querySelector(".item__name").innerText;
                  n.innerText.includes(r) ||
                    (n.innerText && (n.innerText += " + "), (n.innerText += r)),
                    (t.style.display = "flex");
                }
              });
            }),
              r.addEventListener("click", o),
              t.addEventListener("click", function (e) {
                e.target === t && o();
              });
          });
      },
      420: function () {
        new Swiper(".order__price-row", {
          slidesPerView: 1.5,
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2 },
            725: { slidesPerView: 3 },
            1400: { slidesPerView: 3, spaceBetween: 20 },
          },
        });
        const e = document.querySelectorAll(".item"),
          t = document.querySelector(".order__form-service span"),
          n = [];
        e.forEach((e) => {
          e.addEventListener("click", () => {
            const r = e.querySelector(".item__name").textContent;
            if (n.includes(r)) {
              const e = n.indexOf(r);
              -1 !== e && n.splice(e, 1);
            } else n.push(r);
            t.textContent = n.join(" + ");
          });
        });
        const r = document.querySelector(".order__form-btn"),
          o = document.querySelector(".order__form-num");
        r.addEventListener("click", function () {
          (r.style.display = "none"), (o.style.display = "flex");
        });
        const s = document.querySelector(".modal__form-btn"),
          i = document.querySelector(".modal__form-num");
        s.addEventListener("click", function () {
          (s.style.display = "none"), (i.style.display = "flex");
        });
      },
      2: function () {
        var e;
        function t() {
          e = new Swiper(".process__bottom", {
            navigation: {
              prevEl: ".process__bottom-arr-prev",
              nextEl: ".process__bottom-arr-next",
            },
            slidesPerView: 1.3,
            spaceBetween: 20,
            centerInsufficientSlides: !0,
            breakpoints: {
              991: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
            },
          });
        }
        function n() {
          e && (e.destroy(), (e = null));
        }
        function r() {
          window.innerWidth <= 991 ? n() : t();
        }
        new Swiper(".process__top", {
          slidesPerView: 1.5,
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            991: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 6 },
          },
        }),
          document.addEventListener("DOMContentLoaded", () => {
            const e = document.querySelectorAll(".process__top-item"),
              o = document.querySelectorAll(".process__bottom-wrap");
            e.forEach((r, s) => {
              r.addEventListener("click", () => {
                e.forEach((e) => {
                  e.classList.remove("active");
                }),
                  r.classList.add("active"),
                  o.forEach((e) => {
                    e.classList.remove("d-block");
                  }),
                  o[s].classList.add("d-block"),
                  window.innerWidth <= 991 ? n() : t();
              });
            }),
              window.addEventListener("resize", function () {
                r();
              }),
              r();
          });
      },
      239: function () {
        const e = document.querySelectorAll(".service"),
          t = document.querySelector(".sale__form-service");
        e.forEach((n) => {
          n.addEventListener("click", () => {
            e.forEach((e) => e.classList.remove("active-service")),
              n.classList.add("active-service");
            const r = Array.from(n.querySelectorAll(".service__bottom-text"))
              .map((e) => e.innerText)
              .join(" ");
            t.innerText = r;
          });
        });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      n(642), n(972), n(2), n(420), n(409), n(239), n(221);
    })();
})();
