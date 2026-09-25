document.addEventListener('DOMContentLoaded', () => {
    
    // --- Typed Text Effect ---
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".typed-cursor");
    
    const textArray = ["Pengembang Media Pembelajaran", "Pendidik Geografi", "Kreator Konten Edukasi"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }
    
    function erase() {
      if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } 
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
    
    if(textArray.length) setTimeout(type, newTextDelay + 250);


    // --- Custom Cursor Glow ---
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Enlarge glow on clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .skill-card');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.style.width = '600px';
            cursorGlow.style.height = '600px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)';
        });
        el.addEventListener('mouseleave', () => {
            cursorGlow.style.width = '400px';
            cursorGlow.style.height = '400px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)';
        });
    });


    // --- Navigation & Mobile Menu ---
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


    // --- Scroll Reveal Animations ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 100;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          }
        }
    }
      
    window.addEventListener("scroll", reveal);
    reveal(); // Trigger on load


    // --- Numbers Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasCounted = false;

    function countUp() {
        if (hasCounted) return;

        const statsSection = document.querySelector('.about-stats');
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos) {
            statNumbers.forEach(num => {
                const target = +num.getAttribute('data-count');
                const suffix = num.getAttribute('data-suffix') || '';
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        num.innerText = Math.ceil(current) + suffix;
                        requestAnimationFrame(updateCount);
                    } else {
                        num.innerText = target + suffix;
                    }
                };
                updateCount();
            });
            hasCounted = true;
        }
    }

    window.addEventListener('scroll', countUp);


    // --- Skill Level Animation ---
    function animateSkills() {
        const skillFills = document.querySelectorAll('.skill-level-fill');
        const skillsSection = document.querySelector('#skills');
        
        if (!skillsSection) return;

        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos - 100) {
            skillFills.forEach(fill => {
                const level = fill.style.getPropertyValue('--level');
                fill.style.width = level;
            });
            window.removeEventListener('scroll', animateSkills);
        }
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Trigger on load if already in view

});
