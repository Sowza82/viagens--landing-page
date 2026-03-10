document.addEventListener('DOMContentLoaded', () => {
    // ==========================
    // Menu hamburguer toggle
    // ==========================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // ==========================
    // Scroll suave para todos os links internos
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Fecha menu mobile ao clicar
            if(navLinks.classList.contains('active')){
                navLinks.classList.remove('active');
            }
        });
    });

    // ==========================
    // Botões "Voltar ao topo"
    // ==========================
    const topButtons = document.querySelectorAll('.top-btn');

    topButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Mostrar botão topo apenas após rolar
    const showTopBtn = () => {
        topButtons.forEach(btn => {
            if(window.scrollY > 300){
                btn.style.opacity = 1;
                btn.style.pointerEvents = 'auto';
            } else {
                btn.style.opacity = 0;
                btn.style.pointerEvents = 'none';
            }
        });
    };

    window.addEventListener('scroll', showTopBtn);
    showTopBtn();

    // ==========================
    // Fade-in das seções e cards
    // ==========================
    const faders = document.querySelectorAll('.section-content, .card');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.classList.add('fade');
        appearOnScroll.observe(fader);
    });

    // ==========================
    // Animação do botão do banner
    // ==========================
    const bannerBtn = document.querySelector('.banner .btn');

    if(bannerBtn){
        bannerBtn.addEventListener('mouseenter', () => {
            bannerBtn.style.transform = 'scale(1.1) rotate(-2deg)';
        });
        bannerBtn.addEventListener('mouseleave', () => {
            bannerBtn.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});
