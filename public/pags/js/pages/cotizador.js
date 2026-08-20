function generateCotizadorPage() {
    return `
        <!-- Cotizador en Línea -->
        <section class="py-16 sm:py-24 bg-primary-blue fade-in" id="cotizador-main">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12 text-white">
                    <span class="text-lg font-semibold text-secondary-green uppercase">Presupuesto Rápido</span>
                    <h2 class="text-5xl font-extrabold text-white mt-2">Estima Tu Costo de Servicio Ahora</h2>
                    <p class="mt-4 text-xl text-primary-blue-200">Obtén una cotización inicial basada en nuestros estándares de protocolo. Rápido, transparente y sin compromiso.</p>
                </div>

                <div class="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                    <form id="cotizador-form" class="space-y-6">
                        <div>
                            <label for="servicio-tipo" class="block text-sm font-medium text-gray-700 mb-2">1. Tipo de Servicio Requerido</label>
                            <select id="servicio-tipo" name="servicio-tipo" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green transition duration-300 focus-visible">
                                <option value="general">Control General (Naves, Oficinas)</option>
                                <option value="termitas">Control Especializado de Termitas</option>
                                <option value="especial">Desinfección/Fumigación Especial</option>
                                <option value="maritimo">Fumigación Marítima y Carga</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="area" class="block text-sm font-medium text-gray-700 mb-2">2. Área Aproximada (en m²)</label>
                            <input type="number" id="area" name="area" min="50" placeholder="Ej: 500" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green transition duration-300 focus-visible">
                        </div>

                        <div>
                            <label for="frecuencia" class="block text-sm font-medium text-gray-700 mb-2">3. Frecuencia Deseada</label>
                            <select id="frecuencia" name="frecuencia" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green transition duration-300 focus-visible">
                                <option value="unica">Única / Puntual</option>
                                <option value="mensual">Contrato Mensual</option>
                                <option value="trimestral">Contrato Trimestral</option>
                                <option value="anual">Contrato Anual (Mejor Precio)</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="tipo-cliente" class="block text-sm font-medium text-gray-700 mb-2">4. Tipo de Cliente</label>
                            <select id="tipo-cliente" name="tipo-cliente" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green transition duration-300 focus-visible">
                                <option value="general">Empresa General</option>
                                <option value="construccion">Empresa de Construcción</option>
                                <option value="naviera">Naviera/Puerto</option>
                                <option value="educacion">Centro Educativo</option>
                                <option value="residencial">Administración Residencial</option>
                            </select>
                        </div>

                        <div class="pt-4">
                            <button type="button" id="cotizar-btn" class="w-full bg-secondary-green text-white py-3 rounded-xl font-bold text-lg btn-primary hover:bg-green-700 focus-visible">
                                CALCULAR ESTIMACIÓN
                            </button>
                        </div>

                        <div id="resultado-cotizador" class="mt-6 p-4 bg-gray-100 rounded-xl hidden">
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Estimación Inicial:</h4>
                            <p class="text-2xl font-extrabold text-secondary-green" id="cotizacion-monto">Cálculo...</p>
                            <p class="text-sm text-gray-500 mt-2">Esta es una estimación. El valor final se confirmará tras la inspección técnica.</p>
                            <div class="mt-4">
                                <a href="#" onclick="navigateTo('contacto')" class="inline-block bg-accent-orange text-primary-blue py-2 px-6 rounded-lg font-bold text-sm btn-primary hover:bg-orange-500 focus-visible">
                                    Solicitar Inspección Detallada
                                </a>
                            </div>
                        </div>

                        <div id="cotizador-error" class="mt-4 p-3 bg-red-100 text-red-700 rounded-xl hidden">
                            Por favor, ingrese un área válida mayor a 50 m².
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}