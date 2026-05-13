// DAFCER Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Preloader Animation
    const preloader = () => {
        const tl = gsap.timeline();

        tl.to("#loader-text", {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        })
        .to("#loader-bar", {
            width: "100%",
            duration: 1.5,
            ease: "expo.inOut"
        }, "-=0.5")
        .to("#preloader", {
            y: "-100%",
            duration: 1,
            ease: "expo.inOut"
        })
        .from(".reveal", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.5");
    };

    window.addEventListener('load', preloader);

    // 2. Navigation Scroll Effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active');
        
        // Change icon (simple rotation)
        gsap.to(menuToggle, {
            rotate: isMenuOpen ? 90 : 0,
            duration: 0.3
        });
    });

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            isMenuOpen = false;
            gsap.to(menuToggle, { rotate: 0, duration: 0.3 });
        });
    });

    // 4. Hero Parallax
    gsap.to("#hero-img", {
        scrollTrigger: {
            trigger: "section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200,
        ease: "none"
    });

    // 5. Scroll Animations for Sections
    
    // Section Titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });
    });

    // Project Cards Reveal
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
            },
            y: 80,
            opacity: 0,
            duration: 1.2,
            delay: i % 2 * 0.2,
            ease: "power3.out"
        });
    });

    // Image Reveal with Scale
    gsap.utils.toArray('.reveal-img').forEach(container => {
        const img = container.querySelector('img');
        
        gsap.from(container, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
            },
            scale: 0.9,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });

        gsap.from(img, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
            },
            scale: 1.2,
            duration: 2,
            ease: "power2.out"
        });
    });

    // Benefit Items
    gsap.from(".benefit-item", {
        scrollTrigger: {
            trigger: "#beneficios",
            start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
    });

    // 6. Form Submission (Real via Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            const data = new FormData(contactForm);
            
            btn.innerText = "ENVIANDO...";
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    btn.innerText = "¡ENVIADO!";
                    btn.classList.add('bg-green-600', 'text-white');
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                btn.innerText = "ERROR AL ENVIAR";
                btn.classList.add('bg-red-600', 'text-white');
            }
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                btn.classList.remove('bg-green-600', 'bg-red-600', 'text-white');
            }, 4000);
        });
    }

    // 7. Smooth Scroll for all anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});
