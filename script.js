/* ============================================
   AVENGERS CLEANING — OFFICE LANDING PAGE
   Interactions & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky Navbar Shadow ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ---- Accordion ---- */
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const body    = item.querySelector('.accordion-body');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      accordionItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-body').style.maxHeight = '0';
      });
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ---- Scroll Reveal (Intersection Observer) ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---- GSAP Animations (if available) ---- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero handled by CSS animations — no GSAP override needed

    // USP cards stagger
    gsap.from('.usp-card', {
      scrollTrigger: {
        trigger: '#usps',
        start: 'top 70%'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });

    // Why Avengers big text
    gsap.from('.why-line', {
      scrollTrigger: {
        trigger: '#why-avengers',
        start: 'top 65%'
      },
      x: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Testimonial quote word split effect
    gsap.from('.testimonial-quote', {
      scrollTrigger: {
        trigger: '#testimonial',
        start: 'top 70%'
      },
      y: 60,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    // Service area tags cascade
    gsap.from('.area-tag', {
      scrollTrigger: {
        trigger: '#service-areas',
        start: 'top 70%'
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      stagger: 0.04,
      ease: 'back.out(1.2)'
    });

    // Final CTA
    gsap.from('#final-cta .cta-content', {
      scrollTrigger: {
        trigger: '#final-cta',
        start: 'top 75%'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  /* ---- Marquee duplicate for seamless loop ---- */
  const track = document.querySelector('.marquee-track');
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;
  }

  /* ---- Mobile menu toggle (if needed) ---- */
  // Minimal nav has no menu to toggle — all links visible

});
