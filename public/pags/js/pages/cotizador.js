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
                            <button type="button" id="cotizar-btn" class="w-full bg-secondary-green text-primary-blue py-3.5 rounded-xl font-extrabold text-lg btn-primary hover:bg-emerald-400 focus-visible shadow-lg tracking-wide">
                                CALCULAR ESTIMACIÓN
                            </button>
                        </div>

                        <div id="resultado-cotizador" class="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-2xl hidden">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 mb-4">
                                <div>
                                    <h4 class="text-sm uppercase tracking-wider text-gray-500 font-semibold">Estimación Inicial Sugerida:</h4>
                                    <p class="text-3xl font-extrabold text-primary-blue mt-1" id="cotizacion-monto">Cálculo...</p>
                                </div>
                                <span class="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                                    ● Tarifas Estándar 2026
                                </span>
                            </div>

                            <p class="text-xs text-gray-500 mb-6">
                                * Nota: Esta estimación es referencial. El valor final se ratifica tras la inspección técnica ocular en sitio.
                            </p>

                            <div class="flex flex-col sm:flex-row gap-3">
                                <a id="cotizar-whatsapp-btn"
                                   href="https://wa.me/18092323518"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-xl font-bold text-sm btn-primary flex items-center justify-center space-x-2 shadow-md">
                                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0003 2.00008C6.48008 2.00008 2.00008 6.48008 2.00008 12.0003C2.00008 14.1803 2.69908 16.2003 3.93908 17.8403L2.57108 22.0803L7.00008 20.6693C8.59908 21.6003 10.2801 22.0003 12.0003 22.0003C17.5203 22.0003 22.0003 17.5203 22.0003 12.0003C22.0003 6.48008 17.5203 2.00008 12.0003 2.00008ZM16.5003 15.6003C16.3003 15.9603 14.3703 16.9403 14.0703 17.0603C13.7703 17.1803 13.5603 17.1803 13.3503 17.0603C13.1403 16.9403 12.4403 16.7103 11.5803 16.1903C10.7203 15.6703 10.0903 14.9903 9.61031 14.3003C9.13031 13.6103 8.75031 12.8703 8.64031 12.6003C8.53031 12.3303 7.84031 11.8503 7.84031 11.8503L7.84031 11.8503C7.63031 11.5803 7.84031 11.3703 8.05031 11.1603C8.26031 10.9503 8.48031 10.7403 8.69031 10.4703C8.90031 10.2003 9.00031 10.0203 9.11031 9.8103C9.22031 9.6003 9.51031 9.2703 9.77031 9.0603C10.0303 8.8503 10.2403 8.8603 10.4503 9.0703C10.6603 9.2803 10.7703 9.5203 11.0203 10.0403C11.2703 10.5603 11.3803 10.6803 11.5803 10.9203C11.7803 11.1603 11.8803 11.4003 11.7703 11.6403C11.6603 11.8803 11.4503 12.0003 11.2303 12.1203C11.0103 12.2403 10.8003 12.3703 10.5903 12.5503C10.3803 12.7303 10.0603 12.9803 9.87031 13.1703C9.68031 13.3603 9.48031 13.5603 9.39031 13.7503C9.30031 13.9403 9.43031 14.2303 9.58031 14.4903C9.73031 14.7503 9.89031 14.9903 10.1503 15.2203C10.4103 15.4503 10.6603 15.6803 10.8703 15.8203C11.0803 15.9603 11.3503 16.0903 11.6003 16.2003C11.8503 16.3103 12.0603 16.3303 12.1703 16.3303C12.4203 16.3303 12.6203 16.3103 13.1603 16.0803C13.6903 15.8503 14.7703 15.3003 14.9803 15.0603C15.1903 14.8203 15.3903 14.7303 15.5403 14.7303C15.6903 14.7303 16.3503 15.0303 16.5003 15.2403C16.6503 15.4503 16.6503 15.4503 16.5003 15.6003Z"/>
                                    </svg>
                                    <span>Agendar Inspección por WhatsApp</span>
                                </a>

                                <a href="#contacto" onclick="navigateTo('contacto')"
                                   class="bg-accent-orange text-primary-blue py-3 px-6 rounded-xl font-bold text-sm btn-primary hover:bg-orange-500 focus-visible text-center">
                                    Llenar Formulario Web
                                </a>
                            </div>
                        </div>

                        <div id="cotizador-error" class="mt-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl hidden text-sm font-medium">
                            ⚠️ Por favor, ingrese un área válida mayor o igual a 50 m² para calcular su estimación.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}