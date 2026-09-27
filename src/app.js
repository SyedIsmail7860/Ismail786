/* =========================================================
   ISMAIL | DEVELOPER PORTFOLIO
   src/app.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================
     ELEMENTS
  ========================= */

  const body = document.body;

  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");

  const themeToggle = document.getElementById("themeToggle");

  const scrollProgress =
    document.getElementById("scrollProgress");

  const liveDateTime =
    document.getElementById("liveDateTime");

  const musicButton =
    document.getElementById("musicButton");

  const musicStatus =
    document.getElementById("musicStatus");

  const backgroundMusic =
    document.getElementById("backgroundMusic");

  const backToTop =
    document.getElementById("backToTop");

  const contactForm =
    document.getElementById("contactForm");

  const toast =
    document.getElementById("toast");

  const imageModal =
    document.getElementById("imageModal");

  const modalImage =
    document.getElementById("modalImage");

  const modalClose =
    document.getElementById("modalClose");


  /* =========================
     THEME MODE
  ========================= */

  const savedMode =
    localStorage.getItem("ismail-theme-mode");

  if (savedMode === "light") {
    body.classList.add("light-theme");

    if (themeToggle) {
      themeToggle.textContent = "🌙";
    }
  } else {
    body.classList.remove("light-theme");

    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }
  }


  if (themeToggle) {
    themeToggle.addEventListener("click", () => {

      body.classList.toggle("light-theme");

      const lightMode =
        body.classList.contains("light-theme");

      themeToggle.textContent =
        lightMode ? "🌙" : "☀️";

      themeToggle.setAttribute(
        "aria-label",
        lightMode
          ? "Switch to dark theme"
          : "Switch to light theme"
      );

      localStorage.setItem(
        "ismail-theme-mode",
        lightMode ? "light" : "dark"
      );

    });
  }


  /* =========================
     COLOR THEMES
  ========================= */

  const colorButtons =
    document.querySelectorAll(".color-dot");

  const savedColor =
    localStorage.getItem("ismail-color-theme");

  if (savedColor) {
    body.setAttribute(
      "data-theme",
      savedColor
    );
  } else {
    body.setAttribute(
      "data-theme",
      "blue"
    );
  }


  colorButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const selectedTheme =
        button.dataset.theme;

      if (!selectedTheme) return;

      body.setAttribute(
        "data-theme",
        selectedTheme
      );

      localStorage.setItem(
        "ismail-color-theme",
        selectedTheme
      );

      showToast(
        `${selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)} theme applied`
      );

    });

  });


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

      navLinks.classList.toggle("active");
      menuButton.classList.toggle("active");

      const opened =
        navLinks.classList.contains("active");

      menuButton.setAttribute(
        "aria-expanded",
        String(opened)
      );

      menuButton.setAttribute(
        "aria-label",
        opened
          ? "Close menu"
          : "Open menu"
      );

    });


    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open menu"
        );

      });

    });

  }


  /* =========================
     SMOOTH NAVIGATION
  ========================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight =
          navbar
            ? navbar.offsetHeight
            : 0;

        const position =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight -
          10;

        window.scrollTo({
          top: position,
          behavior: "smooth"
        });

      });

    });


  /* =========================
     LIVE DATE & TIME
  ========================= */

  function updateDateTime() {

    if (!liveDateTime) return;

    const now = new Date();

    const date = now.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    );

    const time = now.toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }
    );

    liveDateTime.textContent =
      `${date} | ${time}`;

  }

  updateDateTime();

  setInterval(
    updateDateTime,
    1000
  );


  /* =========================
     SCROLL PROGRESS
  ========================= */

  function updateScroll() {

    const scrollTop =
      window.scrollY;

    const pageHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      pageHeight > 0
        ? (scrollTop / pageHeight) * 100
        : 0;

    if (scrollProgress) {
      scrollProgress.style.width =
        `${percentage}%`;
    }


    /* Navbar */

    if (navbar) {

      navbar.classList.toggle(
        "scrolled",
        scrollTop > 40
      );

    }


    /* Back to top */

    if (backToTop) {

      backToTop.classList.toggle(
        "show",
        scrollTop > 450
      );

    }


    updateActiveNavigation();

  }


  window.addEventListener(
    "scroll",
    updateScroll,
    { passive: true }
  );

  updateScroll();


  /* =========================
     ACTIVE NAVIGATION
  ========================= */

  function updateActiveNavigation() {

    const sections =
      document.querySelectorAll(
        "section[id]"
      );

    const links =
      document.querySelectorAll(
        ".nav-links a"
      );

    let current =
      "home";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 180;

      if (
        window.scrollY >= sectionTop
      ) {
        current =
          section.id;
      }

    });


    links.forEach((link) => {

      const href =
        link.getAttribute("href");

      link.classList.toggle(
        "active",
        href === `#${current}`
      );

    });

  }


  /* =========================
     REVEAL ANIMATIONS
  ========================= */

  const revealElements =
    document.querySelectorAll(
      ".reveal, .project-card, .gallery-item, " +
      ".gallery-placeholder, .skill, .timeline-item"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach((element) => {

      element.classList.add(
        "reveal"
      );

      revealObserver.observe(
        element
      );

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add(
        "visible"
      );

    });

  }


  /* =========================
     PROFILE 3D EFFECT
  ========================= */

  const heroImage =
    document.querySelector(
      ".hero-image-wrapper"
    );


  if (
    heroImage &&
    window.matchMedia(
      "(pointer: fine)"
    ).matches
  ) {

    heroImage.addEventListener(
      "mousemove",
      (event) => {

        const rect =
          heroImage.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left;

        const y =
          event.clientY -
          rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateX =
          ((y - centerY) /
            centerY) *
          -5;

        const rotateY =
          ((x - centerX) /
            centerX) *
          5;

        heroImage.style.transform =
          `perspective(800px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateZ(8px)`;

      }
    );


    heroImage.addEventListener(
      "mouseleave",
      () => {

        heroImage.style.transform =
          "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";

      }
    );

  }


  /* =========================
     IMAGE GALLERY MODAL
  ========================= */

  const galleryImages =
    document.querySelectorAll(
      ".gallery-item img"
    );


  function openModal(image) {

    if (
      !imageModal ||
      !modalImage
    ) {
      return;
    }

    modalImage.src =
      image.src;

    modalImage.alt =
      image.alt || "Gallery image";

    imageModal.classList.add(
      "active"
    );

    body.classList.add(
      "modal-open"
    );

  }


  function closeModal() {

    if (!imageModal) {
      return;
    }

    imageModal.classList.remove(
      "active"
    );

    body.classList.remove(
      "modal-open"
    );

  }


  galleryImages.forEach((image) => {

    image.addEventListener(
      "click",
      () => {
        openModal(image);
      }
    );

  });


  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }


  if (imageModal) {

    imageModal.addEventListener(
      "click",
      (event) => {

        if (
          event.target === imageModal
        ) {
          closeModal();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape"
      ) {
        closeModal();
      }

    }
  );


  /* =========================
     BACK TO TOP
  ========================= */

  if (backToTop) {

    backToTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =========================
     MUSIC PLAYER
  ========================= */

  if (
    musicButton &&
    backgroundMusic
  ) {

    musicButton.addEventListener(
      "click",
      async () => {

        try {

          if (
            backgroundMusic.paused
          ) {

            await backgroundMusic.play();

            musicButton.textContent =
              "❚❚";

            musicButton.setAttribute(
              "aria-label",
              "Pause music"
            );

            musicButton.setAttribute(
              "title",
              "Pause music"
            );

            if (musicStatus) {
              musicStatus.textContent =
                "Playing";
            }

          } else {

            backgroundMusic.pause();

            musicButton.textContent =
              "▶";

            musicButton.setAttribute(
              "aria-label",
              "Play music"
            );

            musicButton.setAttribute(
              "title",
              "Play music"
            );

            if (musicStatus) {
              musicStatus.textContent =
                "Play";
            }

          }

        } catch (error) {

          showToast(
            "Tap the music button again to start."
          );

        }

      }
    );


    backgroundMusic.addEventListener(
      "ended",
      () => {

        musicButton.textContent =
          "▶";

        if (musicStatus) {
          musicStatus.textContent =
            "Play";
        }

      }
    );

  }


  /* =========================
     CONTACT FORM
  ========================= */

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        const name =
          document.getElementById("name");

        const email =
          document.getElementById("email");

        const message =
          document.getElementById("message");


        if (
          !name ||
          !email ||
          !message
        ) {
          return;
        }


        const nameValue =
          name.value.trim();

        const emailValue =
          email.value.trim();

        const messageValue =
          message.value.trim();


        if (
          !nameValue ||
          !emailValue ||
          !messageValue
        ) {

          showToast(
            "Please fill in all fields."
          );

          return;

        }


        const emailPattern =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
          !emailPattern.test(
            emailValue
          )
        ) {

          showToast(
            "Please enter a valid email."
          );

          email.focus();

          return;

        }


        /*
          This is a front-end form only.
          It does not send an email automatically.
        */

        showToast(
          "Message form submitted successfully!"
        );

        contactForm.reset();

      }
    );

  }


  /* =========================
     TOAST
  ========================= */

  let toastTimer;


  function showToast(message) {

    if (!toast) return;

    toast.textContent =
      message;

    toast.classList.add(
      "show"
    );

    clearTimeout(
      toastTimer
    );

    toastTimer =
      setTimeout(() => {

        toast.classList.remove(
          "show"
        );

      }, 3000);

  }


  /* =========================
     PARTICLES
  ========================= */

  const particlesContainer =
    document.querySelector(
      ".particles"
    );


  if (particlesContainer) {

    const mobile =
      window.innerWidth <= 650;

    const particleCount =
      mobile ? 18 : 35;


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      const particle =
        document.createElement(
          "span"
        );

      particle.className =
        "particle";

      particle.style.left =
        `${Math.random() * 100}%`;

      particle.style.top =
        `${Math.random() * 100}%`;

      particle.style.animationDelay =
        `${Math.random() * 6}s`;

      particle.style.animationDuration =
        `${5 + Math.random() * 6}s`;

      particlesContainer.appendChild(
        particle
      );

    }

  }


  /* =========================
     BUTTON RIPPLE / CLICK
  ========================= */

  const interactiveButtons =
    document.querySelectorAll(
      ".btn, .theme-toggle, .music-button, " +
      ".color-dot, .footer-social a"
    );


  interactiveButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          button.classList.add(
            "clicked"
          );

          setTimeout(() => {

            button.classList.remove(
              "clicked"
            );

          }, 300);

        }
      );

    }
  );


  /* =========================
     PAGE VISIBILITY
  ========================= */

  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.hidden &&
        backgroundMusic &&
        !backgroundMusic.paused
      ) {

        backgroundMusic.pause();

        if (musicButton) {
          musicButton.textContent =
            "▶";
        }

        if (musicStatus) {
          musicStatus.textContent =
            "Play";
        }

      }

    }
  );


  /* =========================
     INITIAL SETTINGS
  ========================= */

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  console.log(
    "🚀 Ismail Developer Portfolio loaded successfully."
  );

});
