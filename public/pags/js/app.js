// Estado global de la aplicación
let currentPage = 'home';

// Configuración de rutas (blog sustituye alquiler, nosotros independiente)
const routes = {
    'home': generateHomePage,
    'servicios': generateServiciosPage,
    'cotizador': generateCotizadorPage,
    'productos': generateProductosPage,
    'blog': generateBlogPage,
    'alquiler': generateBlogPage, // Alias de compatibilidad hacia Blog & Noticias
    'nosotros': generateNosotrosPage,
    'certificados': generateCertificadosPage,
    'contacto': generateContactoPage
};

// Títulos SEO dinámicos por sección
const pageTitles = {
    'home': 'AS-Teje Servicios | Control de Plagas Especializado',
    'servicios': 'Servicios Especializados B2B | AS-Teje Servicios',
    'cotizador': 'Cotizador en Línea V2.0 | AS-Teje Servicios',
    'productos': 'Venta de Productos e Insumos Industriales | AS-Teje Servicios',
    'blog': 'Blog & Noticias de la Industria | AS-Teje Servicios',
    'alquiler': 'Blog & Noticias de la Industria | AS-Teje Servicios',
    'nosotros': 'Nosotros, Trayectoria y Respaldo Institucional | AS-Teje Servicios',
    'certificados': 'Consulta y Validación de Certificados de Garantía | AS-Teje Servicios',
    'contacto': 'Contacto Directo y Emergencias | AS-Teje Servicios'
};

// Configuración de eventos dinámicos
function attachDynamicEvents() {
    // 1. Cotizador
    if (currentPage === 'cotizador') {
        const calcBtn = document.getElementById('cotizar-btn');
        const areaInput = document.getElementById('area');
        const servicioSelect = document.getElementById('servicio-tipo');
        const frecuenciaSelect = document.getElementById('frecuencia');
        const tipoClienteSelect = document.getElementById('tipo-cliente');

        if (calcBtn) {
            calcBtn.addEventListener('click', calcularCotizacion);
        }
        if (areaInput) {
            areaInput.addEventListener('input', calcularCotizacion);
        }
        if (servicioSelect) {
            servicioSelect.addEventListener('change', calcularCotizacion);
        }
        if (frecuenciaSelect) {
            frecuenciaSelect.addEventListener('change', calcularCotizacion);
        }
        if (tipoClienteSelect) {
            tipoClienteSelect.addEventListener('change', calcularCotizacion);
        }
        setTimeout(calcularCotizacion, 100);
    }


    // 3. Contacto (Envío Asíncrono AJAX para no salir de la SPA)
    if (currentPage === 'contacto') {
        const formContacto = document.querySelector('#contacto-main form');
        if (formContacto) {
            formContacto.addEventListener('submit', handleContactSubmit);
        }
    }

    // 4. Consulta de Certificados de Garantía
    if (currentPage === 'certificados') {
        const certForm = document.getElementById('cert-search-form');
        if (certForm) {
            certForm.addEventListener('submit', function(e) {
                e.preventDefault();
                buscarCertificado();
            });
        }
        if (window._pendingCertQuery) {
            const queryToRun = window._pendingCertQuery;
            window._pendingCertQuery = null;
            setTimeout(() => {
                const input = document.getElementById('cert-query');
                if (input) input.value = queryToRun;
                buscarCertificado(queryToRun);
            }, 60);
        }
    }
}

// Función puente para consultar certificado desde la página de inicio u otras secciones
function consultarCertificadoDesdeHome(codigo) {
    window._pendingCertQuery = codigo;
    navigateTo('certificados');
}

// Manejador del Formulario de Contacto vía AJAX (Formspree)
async function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar Solicitud';
    
    // Contenedor de feedback
    let feedbackDiv = document.getElementById('contacto-feedback');
    if (!feedbackDiv) {
        feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'contacto-feedback';
        feedbackDiv.className = 'mt-4 p-4 rounded-xl text-center font-medium transition duration-300';
        form.appendChild(feedbackDiv);
    }

    // Estado enviando
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando solicitud...';
    }

    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            feedbackDiv.className = 'mt-4 p-4 rounded-xl text-center font-medium bg-green-100 text-green-800 border border-green-300';
            feedbackDiv.innerHTML = '✅ <strong>¡Solicitud enviada con éxito!</strong> Nos comunicaremos con usted en menos de 24 horas.';
            form.reset();
        } else {
            const data = await response.json();
            feedbackDiv.className = 'mt-4 p-4 rounded-xl text-center font-medium bg-red-100 text-red-800 border border-red-300';
            feedbackDiv.innerHTML = `⚠️ Hubo un inconveniente al enviar: ${data?.errors?.[0]?.message || 'Por favor intente nuevamente o contáctenos por WhatsApp.'}`;
        }
    } catch (error) {
        feedbackDiv.className = 'mt-4 p-4 rounded-xl text-center font-medium bg-red-100 text-red-800 border border-red-300';
        feedbackDiv.innerHTML = '⚠️ Error de conexión. Por favor contáctenos directamente al <a href="https://wa.me/18092323518" class="underline font-bold" target="_blank">WhatsApp (809) 232-3518</a>.';
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }
}

// Navegación entre páginas con soporte de Hash / Deep-linking
function navigateTo(page, updateHash = true) {
    // Normalizar alias: alquiler redirige al nuevo blog de la industria
    const targetPage = (page === 'alquiler') ? 'blog' : page;

    if (routes[targetPage]) {
        currentPage = targetPage;
        
        // Actualizar URL sin recargar
        if (updateHash && window.location.hash !== '#' + targetPage) {
            window.location.hash = targetPage;
        }

        renderApp();
    }
}

// Renderizado de la aplicación
function renderApp() {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    
    setActiveNav();

    // Actualizar título dinámico para SEO y UX
    if (pageTitles[currentPage]) {
        document.title = pageTitles[currentPage];
    }

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

    // Establecer activo en barra de escritorio
    const activeLink = document.getElementById('nav-' + currentPage);
    if (activeLink) activeLink.classList.add('active');
    
    // Establecer activo en menú móvil
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        const href = link.getAttribute('href') || '';
        const onclickAttr = link.getAttribute('onclick') || '';
        const isMatch = href === '#' + currentPage || 
                        onclickAttr.includes(`'${currentPage}'`);
        if (isMatch) {
            link.classList.add('bg-gray-200');
        }
    });
    
    // Cerrar menú móvil si está abierto
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// Inicialización de la aplicación
window.onload = function() {
    // Menú móvil
    const menuBtn = document.getElementById('menu-button');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.toggle('hidden');
        });
    }
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.add('hidden');
        });
    });

    // Soporte para botón "Atrás" y "Adelante" del navegador
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '').trim();
        if (hash && routes[hash] && hash !== currentPage) {
            navigateTo(hash, false);
        }
    });

    // Detección de ruta inicial por URL / Hash
    const initialHash = window.location.hash.replace('#', '').trim();
    if (initialHash && routes[initialHash]) {
        currentPage = (initialHash === 'alquiler') ? 'blog' : initialHash;
    } else {
        currentPage = 'home';
    }

    // Iniciar aplicación
    renderApp();
};