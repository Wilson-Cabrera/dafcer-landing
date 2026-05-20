// DAFCER Landing Page Scripts

document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Configuración de la Secuencia de Canvas y Precarga Inteligente
    const canvas = document.getElementById("hero-canvas");
    const context = canvas.getContext("2d");

    const frameCount = 96; // Del 00 al 95 son 96 fotogramas
    const currentFrame = index => (
        `assets/img/sequence/frame_${index.toString().padStart(2, '0')}.jpg`
    );

    const images = [];
    const seq = { frame: 0 };
    let loadedImagesCount = 0;

    const loaderPercentage = document.getElementById("loader-percentage");
    const loaderBar = document.getElementById("loader-bar");

    // Estado inicial de las revelaciones
    gsap.set(".reveal", { opacity: 0, y: 50 });
    gsap.set("#loader-content", { opacity: 1 }); // Logo visible durante la carga

    const startApp = () => {
        const tl = gsap.timeline();
        tl.to("#preloader", {
            y: "-100%",
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        })
        .to(".reveal", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            startAt: { y: 50, opacity: 0 }
        }, "-=0.5");
    };

    const updateLoadingProgress = () => {
        loadedImagesCount++;
        const percentage = Math.round((loadedImagesCount / frameCount) * 100);
        
        // Animamos el ancho de la barra
        gsap.to(loaderBar, {
            width: `${percentage}%`,
            duration: 0.2,
            ease: "power1.out"
        });

        // Actualizamos el porcentaje numérico
        if (loaderPercentage) {
            loaderPercentage.innerText = `${percentage}%`;
        }

        if (loadedImagesCount === frameCount) {
            setTimeout(startApp, 400); // Breve espera para deleite visual
        }
    };

    // Comenzamos la precarga de todas las imágenes
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = () => {
            updateLoadingProgress();
            // Dibujamos el primer fotograma inmediatamente en cuanto cargue
            if (i === 0) {
                renderCanvas();
            }
        };
        img.onerror = () => {
            // Si alguna imagen falla, incrementamos igual para que no se trabe el loader
            updateLoadingProgress();
        };
        img.src = currentFrame(i);
        images.push(img);
    }

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
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    const toggleMenu = (open) => {
        isMenuOpen = open;
        mobileMenu.classList.toggle('active', isMenuOpen);
        
        // Change icon to X
        if (isMenuOpen) {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        } else {
            menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }

        gsap.to(menuToggle, {
            rotate: isMenuOpen ? 180 : 0,
            duration: 0.3
        });
        
        // Prevent scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu(!isMenuOpen));
    if (menuClose) menuClose.addEventListener('click', () => toggleMenu(false));

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // 4. Hero Canvas Scroll Sequence
    // Función para renderizar el fotograma actual manteniendo object-cover (Hoisted)
    function renderCanvas() {
        if(!images[seq.frame] || !images[seq.frame].complete) return;
        
        const img = images[seq.frame];
        
        if(canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    window.addEventListener('resize', renderCanvas);

    // Animación vinculada al scroll
    gsap.to(seq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "+=300%", // La sección estará anclada durante 3 veces el alto de la pantalla
            scrub: 0.5,
            pin: true
        },
        onUpdate: renderCanvas
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

    // Image Reveal with Scale (Robust fromTo animation to override opacity 0)
    gsap.utils.toArray('.reveal-img').forEach(container => {
        const img = container.querySelector('img');

        gsap.fromTo(container, 
            {
                opacity: 0,
                scale: 0.9
            },
            {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                },
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power4.out"
            }
        );

        gsap.fromTo(img, 
            {
                scale: 1.2
            },
            {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                },
                scale: 1,
                duration: 2,
                ease: "power2.out"
            }
        );
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

    // How We Work Section Animations (Cómo Trabajamos)
    gsap.from(".reveal-work-item", {
        scrollTrigger: {
            trigger: "#como-trabajamos",
            start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Animate Stats Badges dynamically on scroll for WOW effect!
    gsap.from("#stat-badge-1", {
        scrollTrigger: {
            trigger: "#como-trabajamos",
            start: "top 65%",
        },
        x: -60,
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from("#stat-badge-2", {
        scrollTrigger: {
            trigger: "#como-trabajamos",
            start: "top 65%",
        },
        x: 60,
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power4.out"
    });

    // ==========================================
    // 5b. Cinematic Video Showcase Section Logic
    // ==========================================

    const videoSection = document.getElementById('vision-vanguardia');
    const video = document.getElementById('vanguardia-video');
    const videoWrapper = document.getElementById('video-wrapper');
    const playBtn = document.getElementById('magnetic-play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const progressBar = document.getElementById('video-progress-bar');
    const videoRevealContainer = document.getElementById('video-reveal-container');

    if (videoSection && video) {
        
        // 1. ScrollTrigger Reveal for the whole section elements (animating to visible state)
        gsap.to(".reveal-video-text", {
            scrollTrigger: {
                trigger: videoSection,
                start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Theater Reveal: expanding and fading in the video container on scroll
        gsap.to(videoRevealContainer, {
            scrollTrigger: {
                trigger: videoSection,
                start: "top 65%",
            },
            opacity: 1,
            scale: 1,
            duration: 1.6,
            ease: "power4.out"
        });

        // 2. Lazy Loading the Video on Scroll (Saves huge bandwidth)
        ScrollTrigger.create({
            trigger: videoSection,
            start: "top 90%",
            onEnter: () => {
                const sources = video.querySelectorAll('source');
                let needsLoad = false;
                
                sources.forEach(source => {
                    if (source.getAttribute('data-src') && !source.getAttribute('src')) {
                        source.setAttribute('src', source.getAttribute('data-src'));
                        needsLoad = true;
                    }
                });

                if (needsLoad) {
                    video.load();
                    // Optional: Autoplay automatically if muted is supported (most browsers)
                    video.play().catch(err => {
                        console.log("Autoplay prevented, waiting for user click.");
                    });
                }
            }
        });

        // 3. Play/Pause toggle on clicking the wrapper
        const togglePlay = () => {
            if (video.paused) {
                video.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                video.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        };

        videoWrapper.addEventListener('click', togglePlay);

        // Update custom bottom minimal progress bar
        video.addEventListener('timeupdate', () => {
            const percentage = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percentage}%`;
        });

        // When video ends, reset progress bar and play icon
        video.addEventListener('ended', () => {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            progressBar.style.width = '0%';
        });

        // 4. Interactive Magnetic Button Hover Effect
        videoWrapper.addEventListener('mousemove', (e) => {
            const rect = videoWrapper.getBoundingClientRect();
            
            // Mouse position relative to the video wrapper
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Animate play button to follow mouse position with inertia
            gsap.to(playBtn, {
                x: mouseX - rect.width / 2,
                y: mouseY - rect.height / 2,
                duration: 0.6,
                ease: "power3.out"
            });
        });

        // Hover States: scale Play button up/down smoothly on enter/leave
        videoWrapper.addEventListener('mouseenter', () => {
            gsap.to(playBtn, {
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.5)"
            });
        });

        videoWrapper.addEventListener('mouseleave', () => {
            // Smoothly snap play button back to center when mouse leaves
            gsap.to(playBtn, {
                x: 0,
                y: 0,
                scale: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        });
    }

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

    // 8. Project Modal Logic

    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalContent = document.getElementById('modal-content');
        const modalCloseBtn = document.getElementById('modal-close');
        const hotspotsWrapper = document.getElementById('hotspots-wrapper');

        const mTitle = document.getElementById('modal-title');
        const mCategory = document.getElementById('modal-category');
        const mLocation = document.getElementById('modal-location');
        const mSurface = document.getElementById('modal-surface');
        const mYear = document.getElementById('modal-year');
        const mImage = document.getElementById('modal-image');
        const mDesc = document.getElementById('modal-description');

        const openModal = (projectId) => {
            const data = projectsData[projectId];
            if (!data) return;

            // Populate data
            mTitle.innerText = data.title;
            mCategory.innerText = data.category;
            mLocation.innerText = data.location;
            mSurface.innerText = data.surface;
            mYear.innerText = data.year;
            mImage.src = data.image;
            mDesc.innerText = data.description;

            // Render hotspots
            if (hotspotsWrapper) {
                hotspotsWrapper.innerHTML = '';
                if (data.hotspots && data.hotspots.length > 0) {
                    data.hotspots.forEach(spot => {
                        const spotEl = document.createElement('div');
                        spotEl.className = 'hotspot';
                        spotEl.style.left = `${spot.x}%`;
                        spotEl.style.top = `${spot.y}%`;

                        spotEl.innerHTML = `
                            <div class="hotspot-trigger">
                                <div class="hotspot-trigger-inner"></div>
                            </div>
                            <div class="hotspot-tooltip">${spot.text}</div>
                        `;

                        // Mobile touch support
                        spotEl.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const isActive = spotEl.classList.contains('active');
                            document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
                            if (!isActive) {
                                spotEl.classList.add('active');
                            }
                        });

                        hotspotsWrapper.appendChild(spotEl);
                    });
                }
            }

            // Show modal container
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            modal.style.pointerEvents = 'auto';
            document.body.classList.add('modal-open');

            // GSAP Animation In
            const tl = gsap.timeline();
            tl.to(modalBackdrop, { opacity: 1, duration: 0.4, ease: 'power2.out' })
              .to(modalCloseBtn, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, "-=0.2")
              .to(modalContent, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, "-=0.3")
              .fromTo('.hotspot', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' }, "-=0.2");
        };

        const closeModal = () => {
            // GSAP Animation Out
            const tl = gsap.timeline({
                onComplete: () => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    modal.style.pointerEvents = 'none';
                    document.body.classList.remove('modal-open');
                    if (hotspotsWrapper) hotspotsWrapper.innerHTML = ''; // Clear DOM
                    gsap.set(modalContent, { y: 20 }); // reset position for next time
                }
            });
            
            tl.to('.hotspot', { opacity: 0, scale: 0, duration: 0.2, stagger: 0.05, ease: 'power2.in' })
              .to(modalContent, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' }, "-=0.1")
              .to(modalCloseBtn, { opacity: 0, pointerEvents: 'none', duration: 0.2 }, "-=0.1")
              .to(modalBackdrop, { opacity: 0, duration: 0.4, ease: 'power2.inOut' }, "-=0.1");
        };

        // Attach events to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                if (projectId) openModal(projectId);
            });
        });

        // Close events
        modalCloseBtn.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', closeModal);

        // Close tooltips on content/backdrop click
        modal.addEventListener('click', () => {
            document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
        });
    }

});
