function generateBlogPage() {
    return `
        <!-- 1. SECCIÓN EXPERIENCIA -->
        <section class="py-16 sm:py-24 bg-white fade-in" id="experiencia">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                <span class="text-lg font-semibold text-secondary-green uppercase">Integridad y Confianza</span>
                <h2 class="text-4xl font-extrabold text-primary-blue">Nuestra Trayectoria Habla Por Nosotros</h2>

                <!-- PRIMER PÁRRAFO (centrado) -->
                <p class="mt-4 text-xl text-gray-600 max-w-5xl mx-auto">
                    Somos una empresa dominicana con trayectoria desde el año 2021, dedicada a ofrecer soluciones integrales de control de plagas para hogares, comercios, industrias y proyectos en desarrollo. 
                </p>

                <!-- CONTENEDOR DE LOS DOS PÁRRAFOS JUSTIFICADOS -->
                <div class="max-w-5xl mx-auto mt-6 space-y-6 text-justify text-gray-600 leading-relaxed">

                    <p>
                        Durante casi media década hemos trabajado con responsabilidad, capacitación constante y métodos certificados, aplicando controles preventivos y correctivos diseñados para cada entorno. Nuestro enfoque combina precisión técnica, productos aprobados y un acompañamiento real para garantizar intervenciones seguras, efectivas y sostenibles en el tiempo.
                    </p>

                    <p>
                        A lo largo de estos años hemos fortalecido un modelo de servicio basado en la evaluación continua, el monitoreo profesional y la implementación de buenas prácticas, incluyendo asesoramiento especializado, manejo de aves, suministros de fumigación y respuestas de emergencia cuando se requiere. Creemos en la transparencia, la responsabilidad y la educación como ejes fundamentales para brindar un servicio confiable. Cada solución que entregamos refleja nuestro compromiso con la calidad y con la tranquilidad de cada cliente.
                    </p>

                    </div>
                </div>


                <!-- SECCIÓN NOSOTROS -->
                <section class="py-20 bg-white border-b border-gray-100" id="nosotros">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <!-- TÍTULO PRINCIPAL -->
                        <div class="text-center mb-12">
                            <h2 class="text-3xl font-bold text-primary-blue">Filosofía Empresarial</h2>
                        </div>

                        <!-- GRID DE MISIÓN - VISIÓN - VALORES -->
                        <div class="grid md:grid-cols-3 gap-10">

                            <!-- MISIÓN -->
                            <div class="bg-bg-light p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 class="text-xl font-bold text-primary-blue mb-4 text-center">Misión</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Crear efectivos sistemas de controles de plagas capaces de ser implementados con precisión, logrando una prevención adecuada y brindando seguimiento profesional para cada caso, dejando una huella de conciencia y educación.
                                </p>
                            </div>

                            <!-- VISIÓN -->
                            <div class="bg-bg-light p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 class="text-xl font-bold text-primary-blue mb-4 text-center">Visión</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Ser líderes en innovación de métodos de controles de plagas, aplicando soluciones flexibles y adaptadas a cada necesidad particular, con enfoque técnico profesional.
                                </p>
                            </div>

                            <!-- VALORES -->
                            <div class="bg-bg-light p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                                <h3 class="text-xl font-bold text-primary-blue mb-4 text-center">Valores</h3>
                                <ul class="text-gray-700 space-y-2 text-lg">
                                    <li>✔ Confianza</li>
                                    <li>✔ Responsabilidad</li>
                                    <li>✔ Integridad</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </section>

                <!-- SECCIÓN SELLOS INSTITUCIONALES -->
                <section id="sellos-institucionales" class="py-14 sm:py-16 bg-white border-t border-b border-gray-100">

                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <!-- Texto institucional -->
                        <div class="text-center mb-10">

                            <span class="text-sm sm:text-base font-semibold text-secondary-green uppercase tracking-wider">
                                Formalidad y Respaldo Institucional
                            </span>

                            <h2 class="mt-2 text-2xl sm:text-3xl font-bold text-primary-blue">
                                Una empresa formal y habilitada para operar
                            </h2>

                            <p class="mt-3 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                                AS-Teje Servicios opera bajo los requisitos establecidos para la
                                prestación formal de sus servicios, brindando a nuestros clientes
                                mayor seguridad, transparencia y confianza en cada relación comercial.
                            </p>

                        </div>


                        <!-- SELLOS -->
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">

                            <!-- SELLO 1: DGII -->
                            <div class="group flex flex-col items-center justify-center
                                        w-full sm:w-72 min-h-40
                                        p-6 rounded-2xl
                                        bg-bg-light border border-gray-100
                                        shadow-sm hover:shadow-md
                                        transition-all duration-300">

                                <img
                                    src="imgs/Icono Facturador.png"
                                    alt="AS-Teje Servicios - Facturador Electrónico autorizado por la DGII"
                                    class="max-w-[220px] max-h-24 w-auto h-auto object-contain
                                        opacity-90 group-hover:opacity-100
                                        group-hover:scale-105
                                        transition-all duration-300">

                                <p class="mt-4 text-sm font-semibold text-primary-blue text-center">
                                    Facturador Electrónico
                                </p>

                                <span class="text-xs text-gray-500 text-center mt-1">
                                    Autorizado por la DGII
                                </span>

                            </div>


                            <!-- SELLO 2: PROVEEDOR DEL ESTADO -->
                            <div class="group flex flex-col items-center justify-center
                                        w-full sm:w-72 min-h-40
                                        p-6 rounded-2xl
                                        bg-bg-light border border-gray-100
                                        shadow-sm hover:shadow-md
                                        transition-all duration-300">

                                <img
                                    src="imgs/logo_dgcp_completo.png"
                                    alt="AS-Teje Servicios - Proveedor del Estado"
                                    class="max-w-[220px] max-h-24 w-auto h-auto object-contain
                                        opacity-90 group-hover:opacity-100
                                        group-hover:scale-105
                                        transition-all duration-300">

                                <p class="mt-4 text-sm font-semibold text-primary-blue text-center">
                                    Proveedor del Estado
                                </p>

                                <span class="text-xs text-gray-500 text-center mt-1">
                                    Empresa habilitada para contratar con el Estado
                                </span>

                            </div>

                        </div>

                    </div>

                </section>

                <!-- Logos de Clientes 
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-10">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=PUERTO+X" alt="Cliente Puerto" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=NAVIERA+ABC" alt="Cliente Naviera" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=AEROPUERTO+INT" alt="Cliente Aeropuerto" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=CONSTRUCTORA+G" alt="Cliente Constructora" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=COLEGIO+PRIV" alt="Cliente Colegio" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                    <img src="https://placehold.co/120x60/e0f2f7/1a3263?text=RESIDENCIAL+VIP" alt="Cliente Residencial" class="h-12 opacity-80 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0">
                </div> -->

                <!-- Estadísticas -->
                <div class="mt-16 grid md:grid-cols-4 gap-8 text-center"> 
                    <div class="p-6">
                        <div class="text-4xl font-bold text-primary-blue mb-2">200+</div>
                        <div class="text-gray-600">Proyectos Completados</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-secondary-green mb-2">4+</div>
                        <div class="text-gray-600">Años de Experiencia</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-accent-orange mb-2">10+</div>
                        <div class="text-gray-600">Clientes Corporativos</div>
                    </div>
                    <div class="p-6">
                        <div class="text-4xl font-bold text-primary-blue mb-2">PLUS +</div>
                        <div class="text-gray-600">Servicio de Emergencia</div>
                    </div>
                </div>
            </div>
        </section>



        <!-- 2. SECCIÓN BLOG & RECURSOS TÉCNICOS -->
        <section class="py-16 sm:py-24 bg-bg-light border-t border-b border-gray-200 fade-in" id="blog-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-14">
                    <span class="text-sm sm:text-base font-semibold text-secondary-green uppercase tracking-wider">Centro de Conocimiento & Cumplimiento</span>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-primary-blue mt-2">Normativas y Criterios Técnicos del Sector</h2>
                    <p class="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">Información especializada para directores de operaciones, administradores de proyectos y contratistas.</p>
                </div>

                <!-- Artículos Técnicos -->
                <div class="grid md:grid-cols-3 gap-8">

                    <!-- Artículo 1: Termitas -->
                    <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="text-xs font-bold text-accent-orange uppercase tracking-wider">Tratamientos Estructurales</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue leading-snug">
                                Prevención de Termitas en Proyectos de Construcción: Barreras Pre y Post Obra
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                                Por qué el tratamiento químico superficial resulta insuficiente y cómo las barreras físicas y químicas en cimientos garantizan la durabilidad estructural por años.
                            </p>
                        </div>
                        <div class="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                            <span class="text-xs text-gray-500">Protocolo Técnico</span>
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tratamientos%20antitermitas%20estructurales."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="text-sm text-primary-blue font-bold hover:text-accent-orange transition">
                                Consultar Asesoría →
                            </a>
                        </div>
                    </div>
                    
                    <!-- Artículo 2: Seguridad y Normativas Portuarias -->
                    <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="text-xs font-bold text-primary-blue uppercase tracking-wider">Sector Marítimo & Logística</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue leading-snug">
                                Cumplimiento Fitosanitario NIMF-15 en Puertos y Despacho de Contenedores
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                                Requisitos obligatorios de cuarentena y desinsectación en embalajes de madera para carga de exportación e importación, evitando detenciones aduanales.
                            </p>
                        </div>
                        <div class="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                            <span class="text-xs text-gray-500">Normativa Internacional</span>
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20consultar%20sobre%20certificaciones%20fitosanitarias%20mar%C3%ADtimas."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="text-sm text-primary-blue font-bold hover:text-accent-orange transition">
                                Consultar Asesoría →
                            </a>
                        </div>
                    </div>

                    <!-- Artículo 3: EPP y Bioseguridad -->
                    <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="text-xs font-bold text-secondary-green uppercase tracking-wider">Salud Ocupacional</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue leading-snug">
                                Protocolo de Bioseguridad y Equipos EPP en Ambientes Sensibles
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm leading-relaxed">
                                Criterios de protección en centros educativos, clínicas y complejos residenciales: selección de ingredientes no residuales y ventilación técnica segura.
                            </p>
                        </div>
                        <div class="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                            <span class="text-xs text-gray-500">Buenas Prácticas</span>
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20informaci%C3%B3n%20sobre%20protocolos%20de%20bioseguridad%20para%20mi%20empresa."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="text-sm text-primary-blue font-bold hover:text-accent-orange transition">
                                Consultar Asesoría →
                            </a>
                        </div>
                    </div>

                </div>

                <!-- CTA Institucional de Asesoramiento -->
                <div class="mt-16 bg-primary-blue p-8 sm:p-10 rounded-2xl shadow-xl text-center text-white">
                    <h3 class="text-2xl sm:text-3xl font-extrabold mb-3">¿Requiere capacitación o asesoramiento normativo para su equipo?</h3>
                    <p class="mb-6 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">Brindamos acompañamiento a comités de seguridad industrial, auditores de calidad y administradores logísticos.</p>
                    <a href="#contacto" onclick="navigateTo('contacto')"
                       class="inline-block bg-accent-orange text-primary-blue py-3 px-8 rounded-xl font-bold text-base btn-primary hover:bg-orange-500 focus-visible shadow-md">
                        Solicitar Sesión de Asesoramiento
                    </a>
                </div>

            </div>
        </section>
    `;
}