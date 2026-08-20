function generateHomePage() {
    return `
        <!-- 1. SECCIÓN HERO -->
        <section class="hero-bg py-24 sm:py-32 fade-in" id="inicio">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
                <h1 class="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
                    Control de Plagas <span class="text-accent-orange">Certificado</span> para la Industria y sus Proyectos
                </h1>
                <p class="text-xl sm:text-2xl mb-8 font-light max-w-3xl mx-auto">
                    Años de experiencia protegiendo puertos, navieras, aeropuertos, instituciones y proyectos de construcción con protocolos certificados.
                </p>
                <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#" onclick="navigateTo('cotizador')" class="bg-accent-orange text-primary-blue px-8 py-3 rounded-xl font-bold text-lg btn-primary hover:bg-orange-500 pulse-glow focus-visible">
                        ¡Cotiza tu Servicio en Línea Ahora!
                    </a>
                    <a href="#" onclick="navigateTo('servicios')" class="bg-white text-primary-blue px-8 py-3 rounded-xl font-bold text-lg btn-primary hover:bg-gray-200 focus-visible">
                        Ver Servicios Especializados
                    </a>
                </div>
            </div>
        </section>

        <!-- 2. REFERENCIA DE CLIENTES -->
        <section class="py-12 bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-xl font-semibold text-gray-600 mb-8">
                    Experiencia Probada y Respaldada con Estándares de Calidad.
                </h2>

                <div class="flex flex-wrap justify-center items-center gap-6 md:gap-12">

                    <a href="https://jfortuna.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imgs/Clientes/jfortunaconstructora-removebg-preview.png" 
                        alt="Constructora JFortuna" 
                        class="h-24 opacity-75 hover:opacity-100 transition duration-300 transform hover:scale-110">
                    </a>

                    <a href="https://www.instagram.com/camulogisticservices/" target="_blank" rel="noopener noreferrer"> 
                    <img src="imgs/Clientes/camulogistics.png" 
                        alt="CAMU Logistics Services" 
                        class="h-24 opacity-75 hover:opacity-100 transition duration-300 transform hover:scale-110">
                    </a>

                    <a href="https://condominioaldia.com.do/" target="_blank" rel="noopener noreferrer"> 
                    <img src="imgs/Clientes/conday-removebg-preview.png" 
                        alt="Condominio Al Dia, CONDAY" 
                        class="h-24 opacity-75 hover:opacity-100 transition duration-300 transform hover:scale-110">
                    </a>

                    <a href="https://funjemar.org.do/" target="_blank" rel="noopener noreferrer"> 
                    <img src="imgs/Clientes/funjemar-removebg-preview.png" 
                        alt="Fundacion Jesucristo Amor y Rescate" 
                        class="h-24 opacity-75 hover:opacity-100 transition duration-300 transform hover:scale-110">
                    </a>

                    <a href="https://www.instagram.com/montessorimanaen/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer"> 
                    <img src="imgs/Clientes/montessorimanaen-removebg-preview.png" 
                        alt="Montessori Manaen" 
                        class="h-24 opacity-75 hover:opacity-100 transition duration-300 transform hover:scale-110">
                    </a>

                </div>
            </div>
        </section>

        <!-- 3. SECCIÓN: POR QUÉ ELEGIRNOS -->
        <section class="py-16 bg-bg-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-primary-blue">¿Por Qué Confiar en AS-Teje Servicios?</h2>
                </div>

                <div class="grid md:grid-cols-3 gap-8">

                    <!-- Expertos Certificados -->
                    <div class="text-center p-6">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">

                            <!-- Estrella animada -->
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1E40AF"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>

                            <!-- Ícono -->
                            <span class="text-4xl text-primary-blue z-10 icon-center">📜</span>
                        </div>

                        <h3 class="text-xl font-bold text-primary-blue mb-2">Expertos Certificados</h3>
                        <p class="text-gray-600">Nuestro equipo cuenta con certificaciones y años de experiencia probada en el sector.</p>
                    </div>

                    <!-- Respuesta Rápida -->
                    <div class="text-center p-6">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">

                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1E40AF"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>

                            <span class="text-4xl text-secondary-green z-10 icon-center">⚡</span>
                        </div>

                        <h3 class="text-xl font-bold text-primary-blue mb-2">Respuesta Rápida</h3>
                        <p class="text-gray-600">Servicio de emergencia para atender sus necesidades urgentes en el menor tiempo posible.</p>
                    </div>

                    <!-- Garantía de Servicio -->
                    <div class="text-center p-6">
                        <div class="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center icon-wrapper">

                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#1E40AF"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>

                            <span class="text-4xl text-accent-orange z-10 icon-center">🛡️</span>
                        </div>

                        <h3 class="text-xl font-bold text-primary-blue mb-2">Garantía de Servicio</h3>
                        <p class="text-gray-600">Todos nuestros trabajos incluyen controles y garantía por escrito, asegurando su satisfacción.</p>
                    </div>

                </div>
            </div>
        </section>


        <section class="py-0 bg-white mb-10 md:mb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative w-full overflow-hidden rounded-lg shadow-xl">

            <img src="imgs/ContactoFondo.png"
                 alt="Fondo Contacto AS-Teje" 
                 class="w-full h-32 sm:h-48 md:h-56 object-cover object-center"/> 

            <div class="absolute inset-0 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-3">
                
                <div class="text-center sm:text-left text-white bg-gray-500/70 p-4 rounded-lg max-w-full sm:max-w-md mb-3 sm:mb-0">
                    
                    <h3 class="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug text-white">
                        CONTÁCTANOS <span class="block sm:inline text-blue-900 ml-1">809-232-3518</span>
                    </h3>
                    
                    <p class="text-xs sm:text-base text-white mt-1">
                        Para más información sobre nuestros servicios.
                    </p>
                </div>

                <a href="#" onclick="navigateTo('contacto')" 
                   class="bg-blue-900 text-white px-8 py-3 text-sm sm:text-base font-bold rounded-md shadow-lg hover:bg-blue-800 transition transform hover:scale-105 inline-block whitespace-nowrap">
                    CONTACTO
                </a>

            </div>

        </div>
    </div>
</section>




    `;
}