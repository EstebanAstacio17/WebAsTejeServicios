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

        <!-- 2. SECCIÓN BLOG -->
        <section class="py-16 sm:py-24 bg-bg-light border-t border-b fade-in" id="blog-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-extrabold text-primary-blue">Información y Tendencias del Sector</h2>
                    <p class="mt-4 text-xl text-gray-600">Contenido experto para clientes que buscan soluciones y conocimiento.</p>
                </div>

                <!-- Artículos de Blog -->
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Artículo 1: Termitas -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/a8e063/1a3263?text=Termitas" alt="Control de Termitas" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Especialización</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                Los 5 Errores Más Comunes en la Prevención de Termitas
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Aprende por qué el tratamiento superficial no es suficiente para la protección a largo plazo de tu infraestructura...</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">15 Mar 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Artículo 2: Seguridad/Certificaciones -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/1a3263/a8e063?text=Normativas" alt="Normativas de Fumigación" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Regulaciones</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                ¿Por qué su contrato con Naviera exige Certificación NPMA?
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Entendiendo las normativas internacionales que regulan el control de plagas en zonas marítimas y portuarias.</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">28 Feb 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>

                    <!-- Artículo 3: Productos/Equipos -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/ff7e5f/1a3263?text=EPP" alt="Suministros de Seguridad" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Suministros</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                Guía Completa de EPP para la Aplicación de Control de Plagas
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Los insumos de seguridad que todo profesional debe tener para garantizar un trabajo seguro y conforme a la ley.</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">12 Feb 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>

                    <!-- Artículo 4: Tendencias -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/1a3263/ff7e5f?text=Tendencias" alt="Tendencias del Sector" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Innovación</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                Tecnología IoT en el Monitoreo de Plagas: El Futuro Ya Está Aquí
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Cómo los sensores inteligentes están revolucionando la detección temprana de infestaciones en grandes instalaciones.</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">5 Feb 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>

                    <!-- Artículo 5: Caso de Éxito -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/a8e063/1a3263?text=Caso+Exito" alt="Caso de Éxito" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Caso de Estudio</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                Control Integral en Terminal Portuaria: Un Caso de Éxito
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Análisis de nuestro programa de control de plagas implementado en uno de los puertos más importantes del país.</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">22 Ene 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>

                    <!-- Artículo 6: Normativas -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
                        <img src="https://placehold.co/600x400/ff7e5f/1a3263?text=Legislacion" alt="Legislación Ambiental" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <span class="text-sm text-secondary-green font-semibold">Legislación</span>
                            <h3 class="text-xl font-bold mt-2 text-primary-blue hover:text-secondary-green transition duration-300 cursor-pointer">
                                Cambios en la Legislación Ambiental para Fumigación Comercial 2024
                            </h3>
                            <p class="mt-3 text-gray-600 text-sm">Actualización sobre las nuevas regulaciones que afectan a las empresas de control de plagas este año.</p>
                            <div class="mt-4 flex items-center justify-between">
                                <span class="text-sm text-gray-500">15 Ene 2024</span>
                                <a href="#" class="text-sm text-accent-orange font-semibold hover:underline focus-visible">Leer más →</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- CTA para suscripción al blog -->
                <div class="mt-16 bg-primary-blue p-8 rounded-2xl shadow-xl text-center text-white">
                    <h3 class="text-2xl font-bold mb-4">¿Quiere mantenerse actualizado sobre control de plagas?</h3>
                    <p class="mb-6">Suscríbase a nuestro boletín y reciba información técnica y normativas actualizadas.</p>
                    <div class="max-w-md mx-auto flex">
                        <input type="email" placeholder="Su correo electrónico" class="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none focus-visible">
                        <button class="bg-accent-orange text-primary-blue px-6 py-3 rounded-r-lg font-bold hover:bg-orange-500 transition duration-300 focus-visible">Suscribirse</button>
                    </div>
                    <p class="mt-3 text-sm text-gray-300">Puede darse de baja en cualquier momento. Respetamos su privacidad.</p>
                </div>

            </div>
        </section>
    `;
}