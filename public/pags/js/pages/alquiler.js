function generateAlquilerPage() {
    return `
        <!-- Contenido de ALQUILER DE EQUIPOS -->
        <section class="py-20 sm:py-32 bg-primary-blue fade-in" id="alquiler-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16 text-white">
                    <span class="text-lg font-semibold text-secondary-green uppercase">Servicio Flex Alquiler</span>
                    <h2 class="text-5xl font-extrabold mt-2">Renta de Equipos de Fumigación</h2>
                    <p class="mt-4 text-xl opacity-90 max-w-4xl mx-auto">Alquile nebulizadores industriales, equipos de termonebulización y aspersores de alta presión por día o semana. Incluye soporte técnico opcional.</p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12 items-start">
                    <!-- Columna 1: Calculadora de Alquiler -->
                    <div class="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-t-8 border-secondary-green">
                        <h3 class="text-3xl font-bold text-primary-blue mb-6">Calculadora de Tarifa</h3>
                        <p class="text-gray-600 mb-8">Seleccione la duración y si requiere la asistencia de un técnico certificado.</p>
                        
                        <form id="alquiler-form" class="space-y-6">
                            <div>
                                <label for="dias" class="block text-sm font-medium text-gray-700 mb-2">Días de Alquiler (Mínimo 1)</label>
                                <input type="number" id="dias" min="1" value="1" oninput="calcularAlquiler()" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue focus-visible">
                            </div>
                            <div>
                                <label for="equipo-tipo" class="block text-sm font-medium text-gray-700 mb-2">Tipo de Equipo</label>
                                <select id="equipo-tipo" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue focus-visible" onchange="calcularAlquiler()">
                                    <option value="estacionaria">Fumigadora Estacionaria KTC 6.5 HP</option>
                                    <option value="termonebulizador">Termonebulizador Industrial ULV</option>
                                    <option value="motomochila">Motomochila de Fumigación 2 Tiempos</option>
                                    <option value="bomba-manual">Bomba de Presión Manual 16L</option>
                                </select>
                            </div>
                            <div>
                                <label for="con-tecnico" class="block text-sm font-medium text-gray-700 mb-2">Servicio de Técnico Acompañante</label>
                                <select id="con-tecnico" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue focus-visible" onchange="calcularAlquiler()">
                                    <option value="no">No (Solo Equipo - Requiere Certificación Propia)</option>
                                    <option value="si">Sí (Técnico Certificado AS-Teje + Operación)</option>
                                </select>
                            </div>
                        </form>

                        <div id="resultado-alquiler" class="mt-8 p-6 bg-bg-light rounded-xl border border-gray-200">
                            <h4 class="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Costo Estimado de Alquiler:</h4>
                            <p class="text-3xl font-extrabold text-secondary-green" id="alquiler-monto">Cálculo...</p>
                            <p class="text-xs text-gray-500 mt-2">Tarifa en RD$. Incluye 15% de descuento para alquileres mayores a 7 días.</p>
                        </div>

                        <div class="mt-6 space-y-3">
                            <a id="alquiler-whatsapp-btn"
                               href="https://wa.me/18092323518"
                               target="_blank"
                               rel="noopener noreferrer"
                               class="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl font-bold text-sm btn-primary flex items-center justify-center space-x-2 shadow-md">
                                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0003 2.00008C6.48008 2.00008 2.00008 6.48008 2.00008 12.0003C2.00008 14.1803 2.69908 16.2003 3.93908 17.8403L2.57108 22.0803L7.00008 20.6693C8.59908 21.6003 10.2801 22.0003 12.0003 22.0003C17.5203 22.0003 22.0003 17.5203 22.0003 12.0003C22.0003 6.48008 17.5203 2.00008 12.0003 2.00008ZM16.5003 15.6003C16.3003 15.9603 14.3703 16.9403 14.0703 17.0603C13.7703 17.1803 13.5603 17.1803 13.3503 17.0603C13.1403 16.9403 12.4403 16.7103 11.5803 16.1903C10.7203 15.6703 10.0903 14.9903 9.61031 14.3003C9.13031 13.6103 8.75031 12.8703 8.64031 12.6003C8.53031 12.3303 7.84031 11.8503 7.84031 11.8503L7.84031 11.8503C7.63031 11.5803 7.84031 11.3703 8.05031 11.1603C8.26031 10.9503 8.48031 10.7403 8.69031 10.4703C8.90031 10.2003 9.00031 10.0203 9.11031 9.8103C9.22031 9.6003 9.51031 9.2703 9.77031 9.0603C10.0303 8.8503 10.2403 8.8603 10.4503 9.0703C10.6603 9.2803 10.7703 9.5203 11.0203 10.0403C11.2703 10.5603 11.3803 10.6803 11.5803 10.9203C11.7803 11.1603 11.8803 11.4003 11.7703 11.6403C11.6603 11.8803 11.4503 12.0003 11.2303 12.1203C11.0103 12.2403 10.8003 12.3703 10.5903 12.5503C10.3803 12.7303 10.0603 12.9803 9.87031 13.1703C9.68031 13.3603 9.48031 13.5603 9.39031 13.7503C9.30031 13.9403 9.43031 14.2303 9.58031 14.4903C9.73031 14.7503 9.89031 14.9903 10.1503 15.2203C10.4103 15.4503 10.6603 15.6803 10.8703 15.8203C11.0803 15.9603 11.3503 16.0903 11.6003 16.2003C11.8503 16.3103 12.0603 16.3303 12.1703 16.3303C12.4203 16.3303 12.6203 16.3103 13.1603 16.0803C13.6903 15.8503 14.7703 15.3003 14.9803 15.0603C15.1903 14.8203 15.3903 14.7303 15.5403 14.7303C15.6903 14.7303 16.3503 15.0303 16.5003 15.2403C16.6503 15.4503 16.6503 15.4503 16.5003 15.6003Z"/>
                                </svg>
                                <span>Solicitar Disponibilidad vía WhatsApp</span>
                            </a>
                            <a href="#contacto" onclick="navigateTo('contacto')" class="w-full bg-accent-orange text-primary-blue py-3 rounded-xl font-bold text-sm btn-primary hover:bg-orange-500 focus-visible block text-center">
                                Consultar por Formulario Web
                            </a>
                        </div>
                    </div>

                    <!-- Columna 2: Descripción de Equipos -->
                    <div class="pt-8 text-white">
                        <h3 class="text-3xl font-bold mb-6 text-secondary-green">Ventajas de Nuestro Servicio de Renta</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <span class="mr-4 text-4xl text-accent-orange">🔧</span>
                                <div>
                                    <h4 class="font-bold text-xl">Mantenimiento Incluido</h4>
                                    <p class="mt-1 text-gray-200">Todos los equipos se entregan calibrados y revisados. Mantenimiento y soporte rápido en caso de fallas.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="mr-4 text-4xl text-accent-orange">🚢</span>
                                <div>
                                    <h4 class="font-bold text-xl">Equipos para Puertos y Navieras</h4>
                                    <p class="mt-1 text-gray-200">Contamos con modelos especializados requeridos para la fumigación de carga y contenedores según normativa internacional.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="mr-4 text-4xl text-accent-orange">⚙️</span>
                                <div>
                                    <h4 class="font-bold text-xl">Asesoría de Aplicación</h4>
                                    <p class="mt-1 text-gray-200">Nuestro técnico puede acompañar la operación, asegurando la aplicación correcta y eficiente de los productos.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <span class="mr-4 text-4xl text-accent-orange">📋</span>
                                <div>
                                    <h4 class="font-bold text-xl">Capacitación Incluida</h4>
                                    <p class="mt-1 text-gray-200">Incluimos sesión de capacitación para el uso seguro y efectivo del equipo.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Catálogo de Equipos Disponibles -->
                        <div class="mt-12">
                            <h4 class="text-2xl font-bold mb-6 text-secondary-green">Equipos Disponibles para Alquiler</h4>
                            
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div class="bg-white/10 p-4 rounded-xl border border-white/10 hover:border-secondary-green transition duration-300">
                                    <h5 class="font-bold text-base mb-1 text-white">Fumigadora Estacionaria 6.5 HP</h5>
                                    <p class="text-gray-300 text-xs">Alta presión con mangueras de 50m. Ideal para naves y exteriores.</p>
                                    <p class="text-secondary-green font-bold text-sm mt-2">RD$ 3,500 / día</p>
                                </div>
                                
                                <div class="bg-white/10 p-4 rounded-xl border border-white/10 hover:border-secondary-green transition duration-300">
                                    <h5 class="font-bold text-base mb-1 text-white">Termonebulizador ULV Industrial</h5>
                                    <p class="text-gray-300 text-xs">Generador de niebla densa para bodegas, contenedores y silos.</p>
                                    <p class="text-secondary-green font-bold text-sm mt-2">RD$ 4,500 / día</p>
                                </div>

                                <div class="bg-white/10 p-4 rounded-xl border border-white/10 hover:border-secondary-green transition duration-300">
                                    <h5 class="font-bold text-base mb-1 text-white">Motomochila 2 Tiempos</h5>
                                    <p class="text-gray-300 text-xs">Portabilidad para obras, proyectos viales y residenciales.</p>
                                    <p class="text-secondary-green font-bold text-sm mt-2">RD$ 2,800 / día</p>
                                </div>

                                <div class="bg-white/10 p-4 rounded-xl border border-white/10 hover:border-secondary-green transition duration-300">
                                    <h5 class="font-bold text-base mb-1 text-white">Bomba de Presión Manual 16L</h5>
                                    <p class="text-gray-300 text-xs">Aplicación precisa en interiores, colegios y clínicas.</p>
                                    <p class="text-secondary-green font-bold text-sm mt-2">RD$ 1,200 / día</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20consultar%20disponibilidad%20de%20equipos%20de%20fumigaci%C3%B3n%20para%20alquiler."
                           target="_blank"
                           rel="noopener noreferrer"
                           class="inline-block mt-8 bg-accent-orange text-primary-blue px-8 py-3 rounded-xl font-bold text-base btn-primary hover:bg-orange-500 focus-visible">
                            Consultar Disponibilidad Inmediata
                        </a>
                    </div>
                </div>

                <!-- Términos y Condiciones -->
                <div class="mt-16 bg-white/10 p-8 rounded-2xl text-white">
                    <h4 class="text-2xl font-bold mb-4 text-secondary-green">Términos y Condiciones de Alquiler</h4>
                    <div class="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <h5 class="font-bold mb-2">Requisitos:</h5>
                            <ul class="space-y-1 text-gray-200">
                                <li>• Depósito de garantía reembolsable</li>
                                <li>• Documentación de identificación</li>
                                <li>• Contrato de responsabilidad</li>
                                <li>• Seguro opcional disponible</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-bold mb-2">Incluye:</h5>
                            <ul class="space-y-1 text-gray-200">
                                <li>• Equipo calibrado y listo para usar</li>
                                <li>• Manual de operación</li>
                                <li>• Soporte telefónico 24/7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}