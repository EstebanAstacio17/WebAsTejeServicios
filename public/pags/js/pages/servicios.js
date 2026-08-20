function generateServiciosPage() {
    return `
        <!-- Título de Servicios -->
        <section class="py-16 sm:py-24 bg-bg-light fade-in" id="servicios-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-lg font-semibold text-accent-orange uppercase">Soluciones Garantizadas</span>
                    <h2 class="text-5xl font-extrabold text-primary-blue mt-2">Nuestros Servicios</h2>
                    <p class="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">Enfoque en protocolos, cumplimiento y soluciones a largo plazo para ambientes críticos: Puertos, Navieras, Aeropuertos y Construcción.</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Tarjeta 1: Control Comercial e Institucional -->
                    <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-t-4 border-secondary-green">
                        <div class="flex items-center mb-4">
                            <span class="text-5xl mr-3">🏢</span>
                            <h3 class="text-2xl font-bold text-primary-blue">Control de Plagas Comercial</h3>
                        </div>
                        <p class="text-gray-600 mb-4">Manejo integrado de plagas para complejos operativos de alta exigencia: Oficinas, Colegios y Residenciales.</p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-start"><span class="text-secondary-green font-bold mr-2">✓</span> Sistemas con cumplimientos de normas.</li>
                            <li class="flex items-start"><span class="text-secondary-green font-bold mr-2">✓</span> Desinfección y sanitización post-plaga.</li>
                            <li class="flex items-start"><span class="text-secondary-green font-bold mr-2">✓</span> Monitoreo continuo y reportes detallados.</li>
                        </ul>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <p class="text-sm text-gray-500">Clientes: Colegios, Administradores de Residenciales, Centros Comerciales</p>
                        </div>
                    </div>
                    
                    <!-- Tarjeta 2: Especialistas en Termitas -->
                    <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-t-4 border-accent-orange">
                        <div class="flex items-center mb-4">
                            <span class="text-5xl mr-3">🏗️</span>
                            <h3 class="text-2xl font-bold text-primary-blue">Protección Anti-Termitas Estructural</h3>
                        </div>
                        <p class="text-gray-600 mb-4">Soluciones contra termitas subterráneas y protección estructural garantizada.</p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-start"><span class="text-accent-orange font-bold mr-2">✓</span> Inspección.</li>
                            <li class="flex items-start"><span class="text-accent-orange font-bold mr-2">✓</span> Tratamientos con barrera pre- y post-construcción.</li>
                            <li class="flex items-start"><span class="text-accent-orange font-bold mr-2">✓</span> Sistemas de cebo con monitoreo continuo.</li>
                        </ul>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <p class="text-sm text-gray-500">Garantía extendida disponible para proyectos de construcción</p>
                        </div>
                    </div>

                    <!-- Tarjeta 3: Servicios Marítimos y Carga -->
                    <div class="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-t-4 border-primary-blue">
                        <div class="flex items-center mb-4">
                            <span class="text-5xl mr-3">🚢</span>
                            <h3 class="text-2xl font-bold text-primary-blue">Fumigación Marítima y Carga</h3>
                        </div>
                        <p class="text-gray-600 mb-4">Servicios especializados para navieras, puertos y aeropuertos, cumpliendo con normativas ISPM-15 y protocolos de cuarentena.</p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-start"><span class="text-primary-blue font-bold mr-2">✓</span> Certificados de fumigación.</li>
                            <li class="flex items-start"><span class="text-primary-blue font-bold mr-2">✓</span> Desinsectación de contenedores y bodegas.</li>
                            <li class="flex items-start"><span class="text-primary-blue font-bold mr-2">✓</span> Tratamientos para cumplimiento de normativas fitosanitarias.</li>
                        </ul>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <p class="text-sm text-gray-500">Certificación NIMF-15 para embalajes de madera</p>
                        </div>
                    </div>
                </div>

                <!-- Llamada a la Acción -->
                <div class="mt-16 bg-primary-blue p-8 rounded-2xl shadow-xl text-center text-white">
                    <h3 class="text-3xl font-extrabold mb-4">¿Listo para proteger su infraestructura?</h3>
                    <p class="text-lg mb-6">Un técnico se contactará para confirmar el valor final según la inspección en sitio.</p>
                    <a href="#" onclick="navigateTo('contacto')" class="inline-block bg-accent-orange text-primary-blue py-3 px-8 rounded-xl font-bold hover:bg-orange-500 transition duration-300 focus-visible">
                        Solicitar Inspección Técnica
                    </a>
                </div>
            </div>
        </section>
    `;
}