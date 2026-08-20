// Estado global de la aplicación
let currentPage = 'home';

// Configuración de rutas
const routes = {
    'home': generateHomePage,
    'servicios': generateServiciosPage,
    'cotizador': generateCotizadorPage,
    'productos': generateProductosPage,
    'alquiler': generateAlquilerPage,
    'blog': generateBlogPage,
    'contacto': generateContactoPage
};

// Configuración de eventos dinámicos
function attachDynamicEvents() {
    // Cotizador
    if (currentPage === 'cotizador') {
        const calcBtn = document.getElementById('cotizar-btn');
        if (calcBtn) {
            calcBtn.addEventListener('click', calcularCotizacion);
        }
        setTimeout(calcularCotizacion, 100);
    }

    // Alquiler
    if (currentPage === 'alquiler') {
        const diasInput = document.getElementById('dias');
        const tecnicoSelect = document.getElementById('con-tecnico');
        
        if (diasInput && tecnicoSelect) {
            diasInput.addEventListener('input', calcularAlquiler);
            tecnicoSelect.addEventListener('change', calcularAlquiler);
            calcularAlquiler();
        }
    }
}

// Navegación entre páginas
function navigateTo(page) {
    if (routes[page]) {
        currentPage = page;
        renderApp();
    }
}

// Renderizado de la aplicación
function renderApp() {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    
    setActiveNav();

    const contentHTML = routes[currentPage] ? routes[currentPage]() : generateHomePage();
    appContainer.innerHTML = contentHTML;
    
    attachDynamicEvents();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navegación activa
function setActiveNav() {
    // Limpiar estados activos
    document.querySelectorAll('#desktop-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.classList.remove('bg-gray-200');
    });

    // Establecer activo
    const activeLink = document.getElementById('nav-' + currentPage);
    if (activeLink) activeLink.classList.add('active');
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        const page = link.getAttribute('onclick').match(/navigateTo\('([^']+)'/);
        if (page && page[1] === currentPage) {
            link.classList.add('bg-gray-200');
        }
    });
    
    // Cerrar menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// Inicialización de la aplicación
window.onload = function() {
    // Menú móvil
    document.getElementById('menu-button').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
    });

    // Iniciar aplicación
    renderApp();
};