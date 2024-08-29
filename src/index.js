import "./scss/styles.scss";
import "./gsap-animations";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  function applyColorScheme(scheme) {
    if (scheme === "dark") {
      document.documentElement.style.setProperty("--background-color", "#333");
      document.documentElement.style.setProperty("--border-color", "#dcdcdc");
      document.documentElement.style.setProperty(
        "--hero-gradient",
        "linear-gradient(80deg, #343435 0%, rgba(#343435, 0.25) 50%, #a661b5 100%)"
      );
    } else {
      document.documentElement.style.setProperty("--background-color", "#fff");
      document.documentElement.style.setProperty("--border-color", "#343435");
    }
  }

  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  applyColorScheme(colorScheme);

  const themeSwitch = document.getElementById("theme-switch");
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const currentTheme = localStorage.getItem("theme");
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  function applyColorScheme(scheme) {
    if (scheme === "dark") {
      document.documentElement.style.setProperty("--background-color", "#333");
      document.documentElement.style.setProperty("--color", "#f0f0f0");
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#f0f0f0"
      );
      document.documentElement.style.setProperty("--color", "#333");
    }
  }

  if (currentTheme === "dark" || (currentTheme === null && prefersDarkScheme)) {
    document.body.classList.add("dark-mode");
    themeSwitch.checked = true;
    applyColorScheme("dark");
    darkIcon.style.transform = "translateX(0)";
    darkIcon.style.opacity = "1";
    lightIcon.style.transform = "translateX(-30px)";
    lightIcon.style.opacity = "0";
  } else {
    document.body.classList.add("light-mode");
    themeSwitch.checked = false;
    applyColorScheme("light");
    darkIcon.style.transform = "translateX(-30px)";
    darkIcon.style.opacity = "0";
    lightIcon.style.transform = "translateX(0)";
    lightIcon.style.opacity = "1";
  }

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      darkIcon.style.transform = "translateX(0)";
      darkIcon.style.opacity = "1";
      lightIcon.style.transform = "translateX(-30px)";
      lightIcon.style.opacity = "0";
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      darkIcon.style.transform = "translateX(-30px)";
      darkIcon.style.opacity = "0";
      lightIcon.style.transform = "translateX(0)";
      lightIcon.style.opacity = "1";
    }
  });
});

document.addEventListener("mousemove", (e) => {
  if (isPlaying) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Positionne l'élément en fonction de la position de la souris
  // Change the color based on mouse position
  const red = Math.min(
    255,
    Math.max(0, Math.floor((mouseX / window.innerWidth) * 255))
  );
  const green = Math.min(
    255,
    Math.max(0, Math.floor((mouseY / window.innerHeight) * 255))
  );
  const blue = 100; // constant blue value

  slogan.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.14)`;

  const depth = 0.16; // Plus la valeur est grande, plus le mouvement est lent (plus loin)

  const xOffset = (mouseX / windowWidth - 0.5) * 100 * depth * 1;
  const yOffset = (mouseY / windowHeight - 0.5) * 100 * depth * 1;

  flowerLeft.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  flowerRight.style.transform = `translate(${xOffset * 1}px, ${
    yOffset * -1.15
  }px)`;
});

const flowerLeft = document.querySelector("#flower-left");
const flowerRight = document.querySelector("#flower-right");
const slogan = document.querySelector("h1#job-title");
const heroSection = document.querySelector("#hero-section");
const demoVid = document.querySelector("#demo-vid");
const demoBtn = document.querySelector("#btn-demo");
const demoVidContainer = document.querySelector(".video-container");
const closeBtn = document.getElementById('close-demo-btn');

let isPlaying = false;

demoBtn.addEventListener("click", () => {
  gsap.to(slogan, { autoAlpha: 0, y: -85, duration: 1.35 });
  setInterval(() => {
    demoVidContainer.style.display = "block";
  }, 300);
  document.body.classList.add("no-scroll");
  gsap.to(demoVidContainer, { autoAlpha: 1, duration: 1.8, y: 0 }, "-=1");

  demoVid.style.display = "block";
  gsap.to(demoVid, {
    autoAlpha: 1,
    y: 0,
    delay: 0.5,
  });
  gsap.to(".flowers", { y: "24px", filter: "grayscale(80%)", duration: 1 });
  demoVid.play();
  isPlaying = true;
  demoVidContainer.classList.remove("d-none");
  heroSection.classList.add("no-scroll");
  gsap.to(closeBtn, {autoAlpha: 1, duration: 2})

  //Reverse
  gsap.to('#logo', { scale: 0.92, autoAlpha: 0 });
    gsap.to('#trait-left', { width: '0%', x: -70, duration: 2 });
    gsap.to('#trait-right', { width: '0%', x: 70, duration: 2 });
    gsap.to('#first-name', { opacity: 0, x: 0, duration: 1});
    gsap.to('#last-name', { opacity: 0, x: 0, duration: 1});
});

demoVid.addEventListener("ended", () => {
  isPlaying = false;
  gsap.to(demoVid, {
    autoAlpha: 0,
    delay: 0.5,
  });
  demoVid.style.display = "none";
  demoVidContainer.classList.add("d-none");
  gsap.to(".flowers", { y: 0, filter: "grayscale(0)", duration: 1 });
  gsap.to(slogan, { autoAlpha: 1, y: 0, duration: 0.55 });
  document.body.classList.remove("no-scroll");
    heroSection.classList.add("no-scroll");
    gsap.to('#logo', { duration: 3, autoAlpha: 1, scale: 1, width: 90 });
    gsap.to('#trait-left', { duration: 2.6, width: '137px', x: -70 }, '-=3.2');
    gsap.to('#trait-right', { duration: 2.6, width: '137px', x: 70 }, "-=3.2");
    gsap.to('#first-name', { duration: 1, opacity: 1, x: -42 });
    gsap.to('#last-name', { duration: 1, opacity: 1, x: 42 });
    gsap.to("#border", {
      duration: 1,
      clipPath: "polygon(0 100%, 0 0, 18% 0, 48% 0, 73% 0, 100% 0, 100% 10%, 100% 65%, 100% 100%, 89% 100%, 65% 100%, 0 100%)",
      borderWidth: "8px",
      borderColor: "var(--border-color)",
      ease: "power2.inOut"
    }, "-=3");

});

// Show close button when video starts playing
demoVid.addEventListener('play', () => {
  closeBtn.style.display = 'inline-block';
});

// Hide close button when video ends
demoVid.addEventListener('ended', () => {
  closeBtn.style.display = 'none';
});

// Hide close button and pause video when close button is clicked
closeBtn.addEventListener('click', () => {
isPlaying = false;
gsap.to(demoVid, {
  autoAlpha: 0,
  delay: 0.5,
});
demoVid.pause();
gsap.to(closeBtn, {autoAlpha: 0, y: 8, duration: 1})
demoVid.style.display = "none";
demoVidContainer.classList.add("d-none");
gsap.to(".flowers", { y: 0, filter: "grayscale(0)", duration: 1 });
gsap.to(slogan, { autoAlpha: 1, y: 0, duration: 0.55 });
document.body.classList.remove("no-scroll");
heroSection.classList.add("no-scroll");
gsap.to('#logo', { duration: 3, autoAlpha: 1, width: 90, scale: 1, });
    gsap.to('#trait-left', { duration: 2.6, width: '137px', x: -70 }, '-=3.2');
    gsap.to('#trait-right', { duration: 2.6, width: '137px', x: 70 }, "-=3.2");
    gsap.to('#first-name', { duration: 1, opacity: 1, x: -42 });
    gsap.to('#last-name', { duration: 1, opacity: 1, x: 42 });
    gsap.to("#border", {
      duration: 1,
      clipPath: "polygon(0 100%, 0 0, 18% 0, 48% 0, 73% 0, 100% 0, 100% 10%, 100% 65%, 100% 100%, 89% 100%, 65% 100%, 0 100%)",
      borderWidth: "8px",
      borderColor: "var(--border-color)",
      ease: "power2.inOut"
    }, "-=3");
    demoBtn.innerHTML = "Revoir";
});