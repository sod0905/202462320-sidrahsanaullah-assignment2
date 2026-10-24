/* =========================================================
   Sidrah Sanaullah 
   Features:
   1. Greeting based on the time of day
   2. Dark / light theme toggle (remembered in localStorage)
   3. Mobile menu open + close
   4. Contact form validation (no backend)
   5. Footer year
   ========================================================= */

/*1. Greeting by time of day */
function setGreeting() {
  const hour = new Date().getHours();
  let text;

  if (hour < 12) {
    text = "Good morning";
  } else if (hour < 18) {
    text = "Good afternoon";
  } else {
    text = "Good evening";
  }

  document.getElementById("greeting").textContent = text + "! Welcome to my portfolio :)";
}

/* 2. Theme toggle */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Button always shows the theme you would switch TO
  themeToggle.textContent = theme === "light" ? "Dark mode" : "Light mode";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "light" ? "dark" : "light");
});

// Load the theme the visitor chose last time, default to dark
applyTheme(localStorage.getItem("theme") || "dark");

/* 3. Mobile menu  */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is tapped on mobile
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* 4. Contact form validation */
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

// Simple check: some characters, an @, more characters, a dot, more characters
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let valid = true;

  // Clear previous errors
  showError("nameError", "");
  showError("emailError", "");
  showError("messageError", "");
  status.textContent = "";

  if (name === "") {
    showError("nameError", "Enter your name.");
    valid = false;
  }

  if (!emailPattern.test(email)) {
    showError("emailError", "Enter a valid email address.");
    valid = false;
  }

  if (message.length < 10) {
    showError("messageError", "Write at least 10 characters.");
    valid = false;
  }

  if (valid) {
    status.textContent = "Thank you!" + name + " — your message has been recorded.";
    form.reset();
  }
});

/* 5. Footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Run the greeting once everything above is set up */
setGreeting();

/* Live project search */
(function () {
  const input = document.getElementById("projectSearch");
  const clearBtn = document.getElementById("clearSearch");
  const countEl = document.getElementById("searchCount");
  const emptyEl = document.getElementById("emptyState");
  const cards = Array.from(document.querySelectorAll("#projects .project"));

  // If the markup is missing, stop quietly so the rest of the site still works
  if (!input || !cards.length) return;

  //
  const searchText = cards.map((card) => card.textContent.toLowerCase());

  function updateResults() {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card, i) => {
      const match = query === "" || searchText[i].includes(query);
      card.hidden = !match;
      if (match) visible++;
    });

    emptyEl.hidden = visible !== 0;
    clearBtn.hidden = query === "";

    if (query === "") {
      countEl.textContent = "";
    } else if (visible > 0) {
      countEl.textContent = "Showing " + visible + " of " + cards.length + " projects.";
    } else {
      countEl.textContent = "0 projects match \"" + input.value.trim() + "\".";
    }
  }

  input.addEventListener("input", updateResults);

  clearBtn.addEventListener("click", function () {
    input.value = "";
    updateResults();
    input.focus();
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      input.value = "";
      updateResults();
    }
  });
})();

/* ---------- Fade-in on scroll ---------- */
(function () {
  // Older browsers: skip the effect so content is never hidden
  if (!("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(".section__title, .project, .skills li, .form");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    el.classList.add("reveal"); // added by JS, so no-JS visitors still see everything
    observer.observe(el);
  });
})();