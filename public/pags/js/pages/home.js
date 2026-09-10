function generateHomePage() {
    return `
        <!-- 1. SECCIÓN HERO DE ALTA AUTORIDAD B2B -->
        <section class="hero-bg py-20 sm:py-28 text-white relative overflow-hidden fade-in" id="inicio">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                    Control de Plagas & Bioseguridad <br class="hidden sm:inline">
                    <span class="text-accent-orange">Certificada</span> para la Industria y Construcción
                </h1>
                
                <p class="text-lg sm:text-2xl mb-8 font-light max-w-3xl mx-auto text-gray-100 leading-relaxed">
                    Protegemos terminales portuarias, buques, naves industriales, centros logísticos y proyectos de construcción con protocolos técnicos rigurosos y garantías por escrito.
                </p>

                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <a href="#cotizador" onclick="navigateTo('cotizador')" 
                       class="w-full sm:w-auto bg-accent-orange text-primary-blue px-8 py-3.5 rounded-xl font-bold text-base sm:text-lg btn-primary hover:bg-orange-500 pulse-glow focus-visible shadow-lg">
                        ¡Cotizar Servicio en Línea!
                    </a>

                    <a href="#servicios" onclick="navigateTo('servicios')" 
                       class="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary-blue px-8 py-3.5 rounded-xl font-bold text-base sm:text-lg btn-primary focus-visible shadow-lg">
                        Ver Servicios Especializados
                    </a>
                </div>
            </div>
        </section>

        <!-- 2. WIDGET DE CONSULTA RÁPIDA DE CERTIFICADOS DE GARANTÍA -->
        <section class="py-8 bg-gradient-to-b from-gray-100 to-white -mt-6 sm:-mt-10 relative z-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 transform transition">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <div class="flex items-center space-x-2">
                                <span class="text-xl">🔍</span>
                                <h2 class="text-xl sm:text-2xl font-bold text-primary-blue">
                                    Consulta Rápida de Certificados de Garantía
                                </h2>
                            </div>
                            <p class="text-xs sm:text-sm text-gray-500 mt-1">
                                Verifique al instante la vigencia, número de registro MSP y técnico responsable de su tratamiento.
                            </p>
                        </div>
                        <div class="text-left md:text-right">
                            <span class="inline-block bg-blue-50 text-primary-blue text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                                Acceso a Clientes & Auditores
                            </span>
                        </div>
                    </div>

                    <!-- Buscador Integrado -->
                    <form onsubmit="event.preventDefault(); const val = document.getElementById('home-cert-input').value.trim(); if(val){ consultarCertificadoDesdeHome(val); } return false;" 
                          class="flex flex-col sm:flex-row gap-3">
                        <div class="relative flex-1">
                            <input type="text" 
                                   id="home-cert-input" 
                                   placeholder="Ingrese Folio (ej. AST-2025-0482) o RNC de su empresa" 
                                   class="w-full pl-4 pr-10 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-blue focus:outline-none text-sm font-medium text-gray-800 transition" 
                                   required>
                            <span class="absolute right-3 top-3.5 text-gray-400">📄</span>
                        </div>
                        <button type="submit" 
                                class="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3.5 px-7 rounded-xl text-sm btn-primary shadow-md transition duration-300 flex items-center justify-center space-x-2">
                            <span>Verificar Garantía</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </button>
                    </form>

                    <!-- Accesos rápidos con ejemplos reales -->
                    <div class="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        <span class="font-bold text-gray-700">Folios de demostración:</span>
                        <button type="button" onclick="consultarCertificadoDesdeHome('AST-2025-0482')" class="bg-gray-100 hover:bg-blue-50 hover:text-primary-blue text-gray-700 px-2.5 py-1 rounded-md transition font-mono">
                            AST-2025-0482 (Construcción)
                        </button>
                        <button type="button" onclick="consultarCertificadoDesdeHome('AST-2026-0115')" class="bg-gray-100 hover:bg-blue-50 hover:text-primary-blue text-gray-700 px-2.5 py-1 rounded-md transition font-mono">
                            AST-2026-0115 (Portuario NIMF-15)
                        </button>
                        <button type="button" onclick="consultarCertificadoDesdeHome('AST-2025-0920')" class="bg-gray-100 hover:bg-blue-50 hover:text-primary-blue text-gray-700 px-2.5 py-1 rounded-md transition font-mono">
                            AST-2025-0920 (Condominio)
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. REFERENCIA DE CLIENTES CORPORATIVOS -->
        <section class="py-14 bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p class="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary-blue mb-2">
                    Confianza Comprobada en el Mercado Dominicano
                </p>
                <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto">
                    Respaldando a constructoras, operadores logísticos, condominios e instituciones
                </h2>

                <div class="flex flex-wrap justify-center items-center gap-6 md:gap-14">
                    <a href="https://jfortuna.com/" target="_blank" rel="noopener noreferrer" class="group">
                        <img src="imgs/Clientes/jfortunaconstructora-removebg-preview.png" 
                             alt="Constructora JFortuna" 
                             class="h-20 sm:h-24 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                    </a>

                    <a href="https://www.instagram.com/camulogisticservices/" target="_blank" rel="noopener noreferrer" class="group"> 
                        <img src="imgs/Clientes/camulogistics.png" 
                             alt="CAMU Logistics Services" 
                             class="h-20 sm:h-24 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                    </a>

                    <a href="https://condominioaldia.com.do/" target="_blank" rel="noopener noreferrer" class="group"> 
                        <img src="imgs/Clientes/conday-removebg-preview.png" 
                             alt="Condominio Al Día, CONDAY" 
                             class="h-20 sm:h-24 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                    </a>

                    <a href="https://funjemar.org.do/" target="_blank" rel="noopener noreferrer" class="group"> 
                        <img src="imgs/Clientes/funjemar-removebg-preview.png" 
                             alt="Fundación Jesucristo Amor y Rescate" 
                             class="h-20 sm:h-24 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                    </a>

                    <a href="https://www.instagram.com/montessorimanaen/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" class="group"> 
                        <img src="imgs/Clientes/montessorimanaen-removebg-preview.png" 
                             alt="Montessori Manaen" 
                             class="h-20 sm:h-24 opacity-80 group-hover:opacity-100 transition duration-300 transform group-hover:scale-110">
                    </a>
                </div>
            </div>
        </section>

        <!-- 4. SECTORES CLAVE DE ESPECIALIZACIÓN B2B -->
        <section class="py-16 sm:py-20 bg-bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary-green">
                        Cobertura Especializada
                    </span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-primary-blue mt-2">
                        Soluciones Diseñadas para Clientes de Alta Exigencia
                    </h2>
                    <p class="mt-3 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Cada sector posee requerimientos de cumplimiento y riesgos específicos. Diseñamos planes con dosificación precisa y documentación oficial.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Sector 1: Naviero & Portuario -->
                    <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary-blue flex flex-col justify-between">
                        <div>
                            <div class="w-14 h-14 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center text-3xl mb-5">
                                🚢
                            </div>
                            <h3 class="text-xl font-bold text-primary-blue mb-2">Puertos, Navieras & Carga</h3>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Fumigación marítima fitosanitaria NIMF-15 para embalajes de madera, desgasificación de contenedores y control en bodegas de carga para importación/exportación.
                            </p>
                            <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Certificados CIPF / NIMF-15 oficiales</li>
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Intervenciones sin retrasar despachos aduanales</li>
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Monitoreo de gases y desgasificación residual 0 ppm</li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-gray-100">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-primary-blue hover:text-accent-orange transition inline-flex items-center">
                                Conocer protocolos marítimos →
                            </a>
                        </div>
                    </div>

                    <!-- Sector 2: Construcción & Obras Civiles -->
                    <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-accent-orange flex flex-col justify-between">
                        <div>
                            <div class="w-14 h-14 bg-orange-50 text-accent-orange rounded-xl flex items-center justify-center text-3xl mb-5">
                                🏗️
                            </div>
                            <h3 class="text-xl font-bold text-primary-blue mb-2">Constructoras & Obra Civil</h3>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Barreras químicas de suelo pre-vaciado en zapatas contra termitas subterráneas y comejenes con termiticidas no repelentes de alta fijación, garantías de 5, 10 a 15 años y seguimiento continuo.
                            </p>
                            <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li class="flex items-center"><span class="text-accent-orange font-bold mr-2">✓</span> Garantías por escrito de 5, 10 a 15 Años</li>
                                <li class="flex items-center"><span class="text-accent-orange font-bold mr-2">✓</span> Aplicación en zapatas, dados, cimientos y plateas</li>
                                <li class="flex items-center"><span class="text-accent-orange font-bold mr-2">✓</span> Seguimiento continuo e inspecciones de control</li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-gray-100">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-primary-blue hover:text-accent-orange transition inline-flex items-center">
                                Tratamientos para construcción →
                            </a>
                        </div>
                    </div>

                    <!-- Sector 3: Industrias & Zonas Francas -->
                    <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-secondary-green flex flex-col justify-between">
                        <div>
                            <div class="w-14 h-14 bg-emerald-50 text-secondary-green rounded-xl flex items-center justify-center text-3xl mb-5">
                                🏭
                            </div>
                            <h3 class="text-xl font-bold text-primary-blue mb-2">Zonas Francas & Almacenes</h3>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Programas integrales de Manejo Integrado de Plagas (MIP) con cordón sanitario exterior, estaciones cebaderas con código de barras y auditorías de inocuidad.
                            </p>
                            <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Cumplimiento BPM, HACCP e ISO sanitarias</li>
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Reportes de consumo de cebos y tendencias de plagas</li>
                                <li class="flex items-center"><span class="text-emerald-500 font-bold mr-2">✓</span> Facturación electrónica DGII con crédito fiscal B01</li>
                            </ul>
                        </div>
                        <div class="mt-6 pt-4 border-t border-gray-100">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-primary-blue hover:text-accent-orange transition inline-flex items-center">
                                Planes industriales MIP →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. SECCIÓN: POR QUÉ CONFIAR EN AS-TEJE -->
        <section class="py-16 sm:py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <h2 class="text-3xl sm:text-4xl font-bold text-primary-blue">
                        ¿Por Qué Confían las Empresas en AS-Teje Servicios?
                    </h2>
                    <p class="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
                        Estándares técnicos internacionales adaptados al clima tropical de la República Dominicana.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Pilar 1: Expertos Certificados -->
                    <div class="text-center p-6 rounded-2xl bg-bg-light hover:shadow-md transition">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1a3263"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-4xl text-primary-blue z-10 icon-center">📜</span>
                        </div>
                        <h3 class="text-xl font-bold text-primary-blue mb-2">Técnicos & Químicos Certificados</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Personal con licencia fitosanitaria y formulaciones aprobadas por el Ministerio de Salud Pública de Rep. Dominicana.
                        </p>
                    </div>

                    <!-- Pilar 2: Respuesta Inmediata -->
                    <div class="text-center p-6 rounded-2xl bg-bg-light hover:shadow-md transition">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1a3263"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-4xl text-secondary-green z-10 icon-center">⚡</span>
                        </div>
                        <h3 class="text-xl font-bold text-primary-blue mb-2">Atención Operativa 24/7</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Despacho de cuadrillas en horarios nocturnos o fines de semana para evitar interrupciones en su línea de producción o atraque marítimo.
                        </p>
                    </div>

                    <!-- Pilar 3: Garantía Escrita -->
                    <div class="text-center p-6 rounded-2xl bg-bg-light hover:shadow-md transition">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1a3263"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-4xl text-accent-orange z-10 icon-center">🛡️</span>
                        </div>
                        <h3 class="text-xl font-bold text-primary-blue mb-2">Garantía Verificable en Línea</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Póliza documentada por escrito y consultable 24/7 en nuestro portal digital con código único de certificado.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. BANNER DE CONTACTO RÁPIDO & EMERGENCIAS -->
        <section class="py-0 bg-white mb-12 sm:mb-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative w-full overflow-hidden rounded-2xl shadow-xl">
                    <img src="imgs/ContactoFondo.png"
                         alt="Fondo Contacto AS-Teje Servicios" 
                         class="w-full h-40 sm:h-52 md:h-60 object-cover object-center"/> 

                    <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/90 via-primary-blue/70 to-transparent flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-4">
                        <div class="text-center sm:text-left text-white max-w-full sm:max-w-lg mb-3 sm:mb-0">
                            <span class="text-xs uppercase tracking-widest text-secondary-green font-bold">Atención Comercial Inmediata</span>
                            <h3 class="text-xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
                                ¿Desea una Inspección Técnica en su Obra o Empresa?
                            </h3>
                            <p class="text-xs sm:text-sm text-gray-200 mt-1">
                                Comuníquese al <a href="https://wa.me/18092323518" target="_blank" class="text-secondary-green font-bold underline">(809) 232-3518</a> o programe una visita con nuestros ingenieros.
                            </p>
                        </div>

                        <div class="flex items-center space-x-3">
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="bg-accent-orange hover:bg-orange-500 text-primary-blue px-7 py-3 text-sm sm:text-base font-bold rounded-xl shadow-lg transition transform hover:scale-105 inline-block whitespace-nowrap btn-primary">
                                Solicitar Inspección
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}