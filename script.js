/**
 * Barmagia Landing Page - Advanced Frontend Architect JS
 * Modules pattern, State Management via LocalStorage, No Backend.
 */

const App = (function() {
    // 1. DEFAULT DATA CONFIGURATION (JSON Structure)
    const defaultData = {
        meta: {
            phone: "01020281736",
            email: "info@barmagia.com",
            address: "مدينة السادس من أكتوبر - مصر",
            social: {
                facebook: "#", linkedin: "#", github: "#"
            }
        },
        hero: {
            title: "نبني حلولاً رقمية تصنع المستقبل",
            typedWords: ["تطوير المواقع", "تطبيقات الجوال", "الذكاء الاصطناعي", "أنظمة ERP", "أنظمة المدارس", "الحلول البرمجية"]
        },
        about: [
            { icon: "fa-eye", title: "رؤيتنا", desc: "الريادة في تقديم حلول برمجية مبتكرة تنافس عالمياً." },
            { icon: "fa-bullseye", title: "رسالتنا", desc: "تمكين الشركات والمؤسسات من التحول الرقمي بأحدث التقنيات." },
            { icon: "fa-gem", title: "قيمنا", desc: "الجودة، الابتكار، الشفافية، ورضا العملاء." }
        ],
        services: [
            { icon: "fa-laptop-code", title: "تطوير مواقع الويب", desc: "تصميم وبرمجة مواقع سريعة ومتجاوبة." },
            { icon: "fa-mobile-screen", title: "تطبيقات الجوال", desc: "تطبيقات Android و iOS بأداء عالٍ." },
            { icon: "fa-server", title: "أنظمة ERP", desc: "إدارة موارد المؤسسات باحترافية." },
            { icon: "fa-school", title: "أنظمة المدارس", desc: "إدارة تعليمية متكاملة لمدارس المستقبل." },
            { icon: "fa-robot", title: "الذكاء الاصطناعي", desc: "دمج الذكاء الاصطناعي لتحليل البيانات." },
            { icon: "fa-shield-halved", title: "Cyber Security", desc: "حماية الأنظمة والبيانات من الاختراقات." }
        ],
        stats: [
            { id: "stat-1", number: 100, suffix: "+", label: "مشروع مكتمل" },
            { id: "stat-2", number: 50, suffix: "+", label: "عميل سعيد" },
            { id: "stat-3", number: 10, suffix: "+", label: "سنوات خبرة" },
            { id: "stat-4", number: 95, suffix: "%", label: "رضا العملاء" }
        ],
        timeline: [
            { step: "١", title: "تحليل", desc: "دراسة متطلبات المشروع بدقة." },
            { step: "٢", title: "تصميم", desc: "تصميم واجهات المستخدم (UI/UX)." },
            { step: "٣", title: "برمجة", desc: "كتابة كود نظيف وقابل للتطوير." },
            { step: "٤", title: "اختبار", desc: "ضمان الجودة وخلو النظام من الأخطاء." },
            { step: "٥", title: "إطلاق", desc: "نشر المشروع على السيرفرات." },
            { step: "٦", title: "دعم فني", desc: "متابعة وصيانة مستمرة." }
        ],
        portfolio: [
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80", title: "School Admin System", category: "School System", tech: ["PHP", "MySQL", "Bootstrap"] },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80", title: "مستشاري الطبي", category: "Medical System", tech: ["Flutter", "Node.js"] },
            { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80", title: "نظام نقاط البيع POS", category: "POS", tech: ["React", "Firebase"] }
        ],
        techIcons: [
            "fa-brands fa-php", "fa-brands fa-laravel", "fa-brands fa-node",
            "fa-brands fa-python", "fa-brands fa-react", "fa-brands fa-bootstrap",
            "fa-brands fa-github", "fa-brands fa-docker", "fa-solid fa-database"
        ],
        faq: [
            { q: "ما هي تكلفة إنشاء موقع إلكتروني؟", a: "تختلف التكلفة حسب المتطلبات والميزات المطلوبة. تواصل معنا لعرض سعر دقيق." },
            { q: "هل تقدمون خدمات الدعم الفني؟", a: "نعم، نقدم دعماً فنياً متكاملاً بعد تسليم المشروع لضمان استقرار النظام." },
            { q: "كم يستغرق تطوير تطبيق جوال؟", a: "يعتمد على حجم التطبيق، عادة من شهر إلى 3 أشهر للتطبيقات المتوسطة." }
        ],
        testimonials: [
            { text: "أفضل شركة تعاملت معها في تصميم نظام إدارة المدرسة الخاص بنا.", author: "مدير مدارس الخليل لغات" },
            { text: "احترافية عالية وتسليم في الموعد المحدد. أنصح بالتعامل معهم بشدة.", author: "مؤسس شركة ناشئة" }
        ]
    };

    // 2. STATE MANAGEMENT
    let state = JSON.parse(localStorage.getItem('barmagia_data')) || defaultData;

    function saveState() {
        localStorage.setItem('barmagia_data', JSON.stringify(state));
        renderDOM();
        initLibraries(); // Re-init animations
    }

    // 3. RENDER FUNCTIONS (Data Binding)
    function renderDOM() {
        // Hero & Meta
        document.getElementById('hero-title').innerText = state.hero.title;
        document.getElementById('info-phone').innerText = state.meta.phone;
        document.getElementById('info-email').innerText = state.meta.email;
        document.getElementById('info-address').innerText = state.meta.address;
        
        // Social
        document.getElementById('social-links-container').innerHTML = `
            <a href="${state.meta.facebook}" class="glass-btn"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="${state.meta.linkedin}" class="glass-btn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="${state.meta.github}" class="glass-btn"><i class="fa-brands fa-github"></i></a>
        `;

        // About
        const aboutHTML = state.about.map((item, i) => `
            <div class="col-md-4" data-aos="fade-up" data-aos-delay="${i*100}">
                <div class="glass-card p-4 text-center tilt-card h-100">
                    <i class="fa-solid ${item.icon} fs-1 text-primary mb-3"></i>
                    <h4 class="mb-3">${item.title}</h4>
                    <p class="text-muted">${item.desc}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('about-grid').innerHTML = aboutHTML;

        // Services
        const servicesHTML = state.services.map((srv, i) => `
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${i*50}">
                <div class="glass-card p-4 h-100 tilt-card text-center">
                    <i class="fa-solid ${srv.icon} service-icon"></i>
                    <h4 class="mb-3">${srv.title}</h4>
                    <p class="text-muted text-sm">${srv.desc}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('services-grid').innerHTML = servicesHTML;

        // Stats
        const statsHTML = state.stats.map(st => `
            <div class="col-md-3 col-6">
                <h2 class="display-4 fw-black text-white"><span id="${st.id}">0</span>${st.suffix}</h2>
                <p class="text-muted">${st.label}</p>
            </div>
        `).join('');
        document.getElementById('stats-grid').innerHTML = statsHTML;

        // Timeline
        const timelineHTML = state.timeline.map((step, i) => `
            <div class="timeline-item" data-aos="${i%2===0 ? 'fade-left' : 'fade-right'}">
                <div class="timeline-dot"></div>
                <div class="glass-card p-4 tilt-card">
                    <h5 class="accent-text mb-2">مرحلة ${step.step}</h5>
                    <h4 class="text-white">${step.title}</h4>
                    <p class="text-muted mb-0">${step.desc}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('timeline-grid').innerHTML = timelineHTML;

        // Portfolio
        const portfolioHTML = state.portfolio.map((port, i) => `
            <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="${i*100}">
                <div class="glass-card tilt-card pb-3">
                    <img src="${port.img}" alt="${port.title}" class="portfolio-img mb-3" loading="lazy">
                    <div class="px-3">
                        <span class="text-muted text-sm d-block mb-1">${port.category}</span>
                        <h5 class="text-white mb-2">${port.title}</h5>
                        <div class="mb-3">${port.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
                        <a href="#" class="btn btn-sm btn-outline-glass w-100">معاينة المشروع</a>
                    </div>
                </div>
            </div>
        `).join('');
        document.getElementById('portfolio-grid').innerHTML = portfolioHTML;

        // Tech Track
        const techHTML = state.techIcons.map(icon => `<i class="${icon} tech-icon"></i>`).join('');
        // Duplicate for seamless infinite marquee
        document.getElementById('tech-track').innerHTML = techHTML + techHTML;

        // Testimonials
        const testiHTML = state.testimonials.map(t => `
            <div class="swiper-slide">
                <div class="glass-card p-4 text-center mx-auto" style="max-width: 600px;">
                    <i class="fa-solid fa-quote-right fs-1 text-primary mb-3 opacity-50"></i>
                    <p class="lead text-white mb-4">"${t.text}"</p>
                    <h6 class="accent-text">- ${t.author}</h6>
                </div>
            </div>
        `).join('');
        document.getElementById('testimonials-wrapper').innerHTML = testiHTML;

        // FAQ
        const faqHTML = state.faq.map((f, i) => `
            <div class="accordion-item bg-transparent border-bottom border-secondary mb-3 pb-2" data-aos="fade-up">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed bg-transparent text-white fw-bold shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">
                        ${f.q}
                    </button>
                </h2>
                <div id="faq${i}" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body text-muted">${f.a}</div>
                </div>
            </div>
        `).join('');
        document.getElementById('faq-accordion').innerHTML = faqHTML;
    }

    // 4. LIBRARIES INITIALIZATION
    let typedInstance = null;
    function initLibraries() {
        // AOS
        AOS.init({ duration: 800, once: true, offset: 100 });

        // Typed.js
        if (typedInstance) typedInstance.destroy();
        typedInstance = new Typed('#typed-text', {
            strings: state.hero.typedWords,
            typeSpeed: 50, backSpeed: 30, loop: true
        });

        // Vanilla Tilt
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), { max: 15, speed: 400, glare: true, "max-glare": 0.2 });

        // Swiper
        new Swiper('.testimonials-slider', {
            loop: true, autoplay: { delay: 3000 },
            pagination: { el: '.swiper-pagination', clickable: true }
        });

        // CountUp via Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    state.stats.forEach(st => {
                        let countAnim = new countUp.CountUp(st.id, st.number, { duration: 2.5 });
                        if (!countAnim.error) countAnim.start();
                    });
                    observer.disconnect();
                }
            });
        });
        const statsSection = document.getElementById('stats');
        if (statsSection) observer.observe(statsSection);

        // GSAP ScrollTrigger for Navbar
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'scrolled', targets: '.glass-navbar' }
        });
    }

    // 5. CUSTOM UI EFFECTS
    function initCustomEffects() {
        // Custom Cursor Tracking
        const cursor = document.querySelector('.cursor-glow');
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Particles.js (Hero Background)
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#0057FF' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#1E90FF', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        // Lightweight Three.js Background (Starfield effect)
        initThreeJS();
    }

    function initThreeJS() {
        const canvas = document.getElementById('three-canvas');
        if (!canvas) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for ( let i = 0; i < 1000; i ++ ) {
            vertices.push( THREE.MathUtils.randFloatSpread( 2000 ) ); // x
            vertices.push( THREE.MathUtils.randFloatSpread( 2000 ) ); // y
            vertices.push( THREE.MathUtils.randFloatSpread( 2000 ) ); // z
        }
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        const material = new THREE.PointsMaterial( { color: 0x1E90FF, size: 2, transparent: true, opacity: 0.3 } );
        const points = new THREE.Points( geometry, material );
        scene.add( points );

        camera.position.z = 500;

        function animate() {
            requestAnimationFrame( animate );
            points.rotation.x += 0.0005;
            points.rotation.y += 0.0005;
            renderer.render( scene, camera );
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // 6. CONTACT FORM LOGIC (WhatsApp & EmailJS)
    function initContactForm() {
        // Initialize EmailJS (Replace with actual public key if using)
        emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); 

        document.getElementById('quote-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('c_name').value;
            const phone = document.getElementById('c_phone').value;
            const email = document.getElementById('c_email').value;
            const service = document.getElementById('c_service').value;
            const desc = document.getElementById('c_desc').value;
            const method = document.querySelector('input[name="contact_method"]:checked').value;

            if(method === 'whatsapp') {
                const message = `مرحباً برمجيا،\nالاسم: ${name}\nالهاتف: ${phone}\nالبريد: ${email}\nالخدمة: ${service}\nالتفاصيل: ${desc}`;
                const waUrl = `https://wa.me/201020281736?text=${encodeURIComponent(message)}`;
                window.open(waUrl, '_blank');
            } else {
                // EmailJS logic
                const templateParams = { from_name: name, phone: phone, email: email, service: service, message: desc };
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                    .then(() => alert("تم إرسال رسالتك بنجاح!"))
                    .catch(() => alert("حدث خطأ، يرجى المحاولة عبر الواتساب."));
            }
        });
    }

    // 7. ADMIN PANEL LOGIC (Hidden feature)
    function initAdminPanel() {
        const pass = "239198300@Mss";
        const btnTrigger = document.getElementById('admin-trigger');
        const loginOverlay = document.getElementById('admin-login-overlay');
        const dashOverlay = document.getElementById('admin-dashboard-overlay');
        
        btnTrigger.addEventListener('click', () => loginOverlay.classList.add('active'));
        document.getElementById('btn-close-login').addEventListener('click', () => loginOverlay.classList.remove('active'));
        document.getElementById('btn-close-admin').addEventListener('click', () => dashOverlay.classList.remove('active'));

        document.getElementById('btn-login').addEventListener('click', () => {
            if(document.getElementById('admin-password').value === pass) {
                loginOverlay.classList.remove('active');
                dashOverlay.classList.add('active');
                document.getElementById('admin-password').value = "";
                populateAdminForm();
            } else {
                alert("كلمة المرور خاطئة!");
            }
        });

        // Save
        document.getElementById('admin-save').addEventListener('click', () => {
            state.hero.title = document.getElementById('admin-hero-title').value;
            state.hero.typedWords = document.getElementById('admin-typed-words').value.split(',').map(s=>s.trim());
            state.meta.phone = document.getElementById('admin-phone').value;
            state.meta.email = document.getElementById('admin-email').value;
            saveState();
            alert("تم الحفظ بنجاح وتحديث الصفحة!");
        });

        // Reset
        document.getElementById('admin-reset').addEventListener('click', () => {
            if(confirm("هل أنت متأكد من استعادة الافتراضي؟")) {
                state = JSON.parse(JSON.stringify(defaultData));
                saveState();
                populateAdminForm();
            }
        });

        // Export JSON
        document.getElementById('admin-export').addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const dlAnchorElem = document.createElement('a');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "barmagia_data.json");
            dlAnchorElem.click();
        });

        // Import JSON
        document.getElementById('import-file').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        state = JSON.parse(event.target.result);
                        saveState();
                        populateAdminForm();
                        alert("تم استيراد البيانات بنجاح!");
                    } catch(err) {
                        alert("ملف JSON غير صالح");
                    }
                };
                reader.readAsText(file);
            }
        });

        function populateAdminForm() {
            document.getElementById('admin-hero-title').value = state.hero.title;
            document.getElementById('admin-typed-words').value = state.hero.typedWords.join(', ');
            document.getElementById('admin-phone').value = state.meta.phone;
            document.getElementById('admin-email').value = state.meta.email;
        }
    }

    // 8. THEME TOGGLE (Dark/Light)
    function initThemeToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('barmagia_theme') || 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        toggleBtn.innerHTML = currentTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

        toggleBtn.addEventListener('click', () => {
            let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('barmagia_theme', newTheme);
            toggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });
    }

    // Initialize all
    return {
        init: function() {
            renderDOM();
            initLibraries();
            initCustomEffects();
            initContactForm();
            initAdminPanel();
            initThemeToggle();
        }
    };
})();

// Boot the App
document.addEventListener('DOMContentLoaded', App.init);