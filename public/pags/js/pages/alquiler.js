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
                                <select id="equipo-tipo" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue focus-visible">
                                    <option value="Fumigadora Estacionaria">Fumigadora Estacionaria</option>
                                    <option value="Consultar Otro">Consultar Otro</option>
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

                        <div id="resultado-alquiler" class="mt-8 p-6 bg-bg-light rounded-xl border border-gray-300">
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Costo Estimado Total de Alquiler:</h4>
                            <p class="text-3xl font-extrabold text-secondary-green" id="alquiler-monto">Cálculo...</p>
                            <p class="text-sm text-gray-500 mt-3">El precio final puede variar. Descuentos por más de 7 días aplicados.</p>
                        </div>

                        <div class="mt-6">
                            <button onclick="navigateTo('contacto')" class="w-full bg-accent-orange text-primary-blue py-3 rounded-xl font-bold text-lg btn-primary hover:bg-orange-500 focus-visible">
                                Solicitar Alquiler Ahora
                            </button>
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
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-white/10 p-4 rounded-lg">
                                    <h5 class="font-bold text-lg mb-2">Fumigadora Estacionaria KTC 6.5 HP</h5>
                                    <p class="text-gray-200 text-sm">Ideal para espacios grandes y áreas abiertas.</p>
                                    <p class="text-accent-orange font-bold mt-2">Desde $30/día</p>
                                </div>
                                
                            </div>
                        </div>

                        <a href="#" onclick="navigateTo('contacto')" class="inline-block mt-8 bg-accent-orange text-primary-blue px-8 py-3 rounded-xl font-bold text-lg btn-primary hover:bg-orange-500 focus-visible">
                            Consultar Disponibilidad
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