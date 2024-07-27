import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.set('#logo', { opacity: 0 });
    gsap.set('#trait-left', { width: '0%', x: -70 });
    gsap.set('#trait-right', { width: '0%', x: 70 });
    gsap.set('#first-name', { opacity: 0, x: 0});
    gsap.set('#last-name', { opacity: 0, x: 0});
    // gsap.set('#slogan', { opacity: 0 });
    //gsap.set('#job-title', { border: "10px solid transparent"})
  
    gsap.to('#logo', { duration: 3, opacity: 1 });
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
    // gsap.to('#slogan', { duration: 4, opacity: 1 });
    gsap.to('h1#job-title', { duration: 1, delay: 1.4,
      autoAlpha: 1,
      y: 0,
    },"-=4")
    gsap.to('.flowers', {autoAlpha: 1, duration: 3});
    gsap.from('#flower-left', {x: 100, duration: 1.8});
    gsap.from('#flower-right', {x: -100, duration: 1.8});
    gsap.to('#btn-demo', { autoAlpha: 1, y: "16px", duration: 1, delay: 1})
  
  
    const isSmallScreen = window.innerWidth < 768;
  
    const triggerOptions = {
      trigger: '#section-bottom',
      start: 'top 80%', // Point de départ du déclencheur
      end: 'top 20%', // Point de fin du déclencheur
      scrub: true,
      markers: true
    };
  
  });