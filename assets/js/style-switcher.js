// Select the button
const dayNight = document.querySelector(".label");
// Check for dark or light mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
// Get logo elements
var desktopLogo = document.getElementById('logo-desktop');
var mobileLogo = document.getElementById('logo-mobile');
var githubLogo = document.getElementById('logo-github');
var linkedinLogo = document.getElementById('logo-linkedin');
 
// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem("theme");
// If the user's preference in localStorage is dark...
if (currentTheme == "dark") {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle("dark-mode");
  darkDiv();
// Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == "light") {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle("light-mode");
  lightDiv();
} else {
  if (prefersDarkScheme.matches) {
    // ...let's toggle the .dark-theme class on the body
    document.body.classList.toggle("dark-mode");
    darkDiv();
  // Otherwise, if the user's preference in localStorage is light...
  } else if (prefersLightScheme.matches) {
    // ...let's toggle the .light-theme class on the body
    document.body.classList.toggle("light-mode");
    lightDiv();
  } else {
    document.body.classList.toggle("dark-mode");
    darkDiv();
  }
}
 
// Listen for a click on the button
dayNight.addEventListener("click", function() {
  // If the user's OS setting is dark and matches our .dark-mode class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    darkDiv();
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    lightDiv();
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);

  // Load correct image source
  if (document.body.classList.contains("dark-mode")) {
    desktopLogo.src = "/images/logo/logo-dark.svg";
    mobileLogo.src = "/images/logo/logo-mobile-dark.svg";
    githubLogo.src = "/images/social/github-dark.svg";
    linkedinLogo.src = "/images/social/linkedin-dark.svg";
    darkDiv();
  } else if (document.body.classList.contains("light-mode")) {
    desktopLogo.src = "/images/logo/logo.svg";
    mobileLogo.src = "/images/logo/logo-mobile.svg";
    githubLogo.src = "/images/social/github.svg";
    linkedinLogo.src = "/images/social/linkedin.svg";
    lightDiv();
  } else {
    desktopLogo.src = "/images/logo/logo-dark.svg";
    mobileLogo.src = "/images/logo/logo-mobile-dark.svg";
    githubLogo.src = "/images/social/github-dark.svg";
    linkedinLogo.src = "/images/social/linkedin-dark.svg";
    darkDiv();
  }
});

// Load correct image source
if (document.body.classList.contains("dark-mode")) {
  desktopLogo.src = "/images/logo/logo-dark.svg";
  mobileLogo.src = "/images/logo/logo-mobile-dark.svg";
  githubLogo.src = "/images/social/github-dark.svg";
  linkedinLogo.src = "/images/social/linkedin-dark.svg";
  darkDiv();
} else if (document.body.classList.contains("light-mode")) {
  desktopLogo.src = "/images/logo/logo.svg";
  mobileLogo.src = "/images/logo/logo-mobile.svg";
  githubLogo.src = "/images/social/github.svg";
  linkedinLogo.src = "/images/social/linkedin.svg";
  lightDiv();
} else {
  desktopLogo.src = "/images/logo/logo-dark.svg";
  mobileLogo.src = "/images/logo/logo-mobile-dark.svg";
  githubLogo.src = "/images/social/github-dark.svg";
  linkedinLogo.src = "/images/social/linkedin-dark.svg";
  darkDiv();
}

function darkDiv() {
  var ball = document.getElementById('ball_id');
  ball.style.position = "absolute";
  ball.style.left = '32px';
}

function lightDiv() {
  var ball = document.getElementById('ball_id');
  ball.style.position = "absolute";
  ball.style.left = '3px';
}

// Page transitions
window.onload = () => {
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 0);
}
