/* ============================================
   SCAR RPG - JavaScript Principal
   ============================================ */

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize WOW animations (if available)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
});

// Toggle category accordion
function toggleCategory(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('open');
    }
}

// Galeria de Personagens - Filtro por natureza
document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.galeria-filtro');
    const cards = document.querySelectorAll('.galeria-card');

    if (filtros.length === 0) return;

    filtros.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const filtro = this.getAttribute('data-filtro');

            // Atualiza botão ativo
            filtros.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');

            // Filtra cards
            var delay = 0;
            cards.forEach(function(card) {
                var natureza = card.getAttribute('data-natureza');
                if (filtro === 'todos' || natureza === filtro) {
                    card.style.display = '';
                    card.classList.remove('galeria-fadeIn');
                    // Force reflow para reiniciar animação
                    void card.offsetWidth;
                    card.style.animationDelay = delay + 'ms';
                    card.classList.add('galeria-fadeIn');
                    delay += 50;
                } else {
                    card.style.display = 'none';
                    card.classList.remove('galeria-fadeIn');
                }
            });
        });
    });
});
