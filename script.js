document.addEventListener('DOMContentLoaded', () => {
    
    // Iniciar el set de íconos vectoriales Lucide
    lucide.createIcons();

    const menuToggle = document.getElementById('menuToggle');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const sidebarFooter = document.querySelector('.sidebar-footer');
    const navItems = document.querySelectorAll('.nav-item');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const sections = document.querySelectorAll('.content-section, .hero-cover');

    // --- LÓGICA DE MODO CLARO / OSCURO ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); 
        updateThemeIcon(theme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'light') {
            themeIcon.setAttribute('data-lucide', 'sun');
        } else {
            themeIcon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons(); 
    }
    // ----------------------------------------------------

    // Control de Despliegue en Dispositivos Móviles
    menuToggle.addEventListener('click', () => {
        sidebarNav.classList.toggle('active');
        sidebarFooter.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (sidebarNav.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Colapso automático de navegación al clickear items en móvil
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                sidebarNav.classList.remove('active');
                sidebarFooter.classList.remove('active');
                menuToggle.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });

    // Scroll Watcher - Activa las anclas del menú lateral de forma inteligente
    window.addEventListener('scroll', () => {
        let activeId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 160)) {
                activeId = section.getAttribute('id') || '';
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${activeId}`) {
                item.classList.add('active');
            }
        });

        // Visibilidad dinámica del botón de scroll superior
        if (window.pageYOffset > 450) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});