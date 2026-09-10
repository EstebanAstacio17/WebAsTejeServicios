function generateCotizadorPage() {
    return `
        <!-- COTIZADOR EN LÍNEA V2.0 (Fiel a la Identidad AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="cotizador-main">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center mb-14">
                    <div class="inline-flex items-center space-x-2 bg-cyan-50 text-[#00a8cc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#00a8cc] animate-pulse"></span>
                        <span>Configurador Técnico de Servicios • Tarifas 2026</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Cotizador en Línea
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Calcule una estimación preliminar basada en nuestro protocolo de dosificación fitosanitaria y tarifas estándar en RD$.
                    </p>
                </div>

                <div class="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-12">
                    <form id="cotizador-form" class="space-y-7">
                        
                        <!-- 1. Tipo de Servicio -->
                        <div>
                            <label for="servicio-tipo" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-2">
                                1. Seleccione el Tipo de Servicio
                            </label>
                            <div class="relative">
                                <select id="servicio-tipo" name="servicio-tipo" class="w-full p-4 pl-4 pr-10 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] font-semibold text-slate-800 transition duration-200 bg-slate-50/50 appearance-none text-sm sm:text-base">
                                    <option value="general">Control General de Plagas (Naves, Oficinas, Locales)</option>
                                    <option value="termitas">Protección Anti-Termitas & Suelos (Zapatas / Pre-Vaciado)</option>
                                    <option value="especial">Desinfección Especial & Nebulización en Frío</option>
                                    <option value="maritimo">Fumigación Marítima NIMF-15 & Desgasificación</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 2. Área en Metros Cuadrados -->
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <label for="area" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71]">
                                    2. Área Estimada (en Metros Cuadrados m²)
                                </label>
                                <span class="text-xs text-slate-400 font-semibold">Mínimo 50 m²</span>
                            </div>
                            <input type="number" id="area" name="area" min="50" placeholder="Ej: 500" class="w-full p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] font-bold text-slate-900 transition duration-200 bg-slate-50/50 text-base">
                            
                            <!-- Presets Rápidos -->
                            <div class="flex flex-wrap gap-2 mt-2.5">
                                <span class="text-xs text-slate-400 self-center">Áreas sugeridas:</span>
                                <button type="button" onclick="const a = document.getElementById('area'); if(a){ a.value = 150; a.dispatchEvent(new Event('input')); }" class="text-xs font-semibold bg-slate-100 hover:bg-cyan-50 hover:text-[#00a8cc] text-slate-700 px-2.5 py-1 rounded-lg transition">
                                    150 m² (Local/Oficina)
                                </button>
                                <button type="button" onclick="const a = document.getElementById('area'); if(a){ a.value = 600; a.dispatchEvent(new Event('input')); }" class="text-xs font-semibold bg-slate-100 hover:bg-cyan-50 hover:text-[#00a8cc] text-slate-700 px-2.5 py-1 rounded-lg transition">
                                    600 m² (Nave/Obra)
                                </button>
                                <button type="button" onclick="const a = document.getElementById('area'); if(a){ a.value = 1850; a.dispatchEvent(new Event('input')); }" class="text-xs font-semibold bg-slate-100 hover:bg-cyan-50 hover:text-[#00a8cc] text-slate-700 px-2.5 py-1 rounded-lg transition">
                                    1,850 m² (Torre/Zapata)
                                </button>
                            </div>
                        </div>

                        <!-- 3. Frecuencia y Tipo de Cliente -->
                        <div class="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label for="frecuencia" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-2">
                                    3. Frecuencia Deseada
                                </label>
                                <div class="relative">
                                    <select id="frecuencia" name="frecuencia" class="w-full p-4 pl-4 pr-10 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] font-semibold text-slate-800 transition duration-200 bg-slate-50/50 appearance-none text-sm">
                                        <option value="unica">Única / Intervención Puntual</option>
                                        <option value="mensual">Póliza Mensual (Mayor Ahorro)</option>
                                        <option value="trimestral">Póliza Trimestral</option>
                                        <option value="anual">Contrato Anual (Tarifa Preferencial)</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <label for="tipo-cliente" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-2">
                                    4. Sector / Tipo de Inmueble
                                </label>
                                <div class="relative">
                                    <select id="tipo-cliente" name="tipo-cliente" class="w-full p-4 pl-4 pr-10 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] font-semibold text-slate-800 transition duration-200 bg-slate-50/50 appearance-none text-sm">
                                        <option value="general">Empresa / Comercio General</option>
                                        <option value="construccion">Constructora / Proyecto en Obra</option>
                                        <option value="naviera">Naviera / Terminal Portuaria</option>
                                        <option value="educacion">Colegio / Centro Educativo</option>
                                        <option value="residencial">Condominio / Residencial</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Botón de Cálculo -->
                        <div class="pt-2">
                            <button type="button" id="cotizar-btn" class="w-full btn-brand-navy py-4 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center space-x-2">
                                <svg class="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                                <span>CALCULAR ESTIMACIÓN PRELIMINAR</span>
                            </button>
                        </div>

                        <!-- Tarjeta de Resultados Dinámicos (Respaldo en Azul Marino y Cian) -->
                        <div id="resultado-cotizador" class="mt-8 p-6 sm:p-8 bg-gradient-to-br from-[#091738] via-[#0f2b5c] to-[#102a71] text-white rounded-3xl shadow-2xl border border-slate-700/80 hidden">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-700/80 pb-6 mb-6">
                                <div>
                                    <span class="text-xs uppercase tracking-widest text-[#38bdf8] font-extrabold">Presupuesto Estimado Sugerido</span>
                                    <p class="text-3xl sm:text-5xl font-black text-white mt-1 font-display tracking-tight" id="cotizacion-monto">
                                        RD$ 0.00
                                    </p>
                                </div>
                                <div class="mt-3 sm:mt-0">
                                    <span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-950/80 text-[#22c55e] border border-emerald-500/30">
                                        ● Sujeto a Inspección Ocular
                                    </span>
                                </div>
                            </div>

                            <p class="text-xs text-slate-300 mb-6 leading-relaxed">
                                * <strong>Nota Técnica:</strong> El valor final incluye productos ecológicos certificados MSP, mano de obra calificada, equipos de aplicación y certificado oficial de servicio con comprobante fiscal DGII (e-CF).
                            </p>

                            <div class="flex flex-col sm:flex-row gap-3.5">
                                <a id="cotizar-whatsapp-btn"
                                   href="https://wa.me/18092323518"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="flex-1 btn-brand-eco py-3.5 px-6 rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center space-x-2 text-center">
                                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0003 2.00008C6.48008 2.00008 2.00008 6.48008 2.00008 12.0003C2.00008 14.1803 2.69908 16.2003 3.93908 17.8403L2.57108 22.0803L7.00008 20.6693C8.59908 21.6003 10.2801 22.0003 12.0003 22.0003C17.5203 22.0003 22.0003 17.5203 22.0003 12.0003C22.0003 6.48008 17.5203 2.00008 12.0003 2.00008ZM16.5003 15.6003C16.3003 15.9603 14.3703 16.9403 14.0703 17.0603C13.7703 17.1803 13.5603 17.1803 13.3503 17.0603C13.1403 16.9403 12.4403 16.7103 11.5803 16.1903C10.7203 15.6703 10.0903 14.9903 9.61031 14.3003C9.13031 13.6103 8.75031 12.8703 8.64031 12.6003C8.53031 12.3303 7.84031 11.8503 7.84031 11.8503L7.84031 11.8503C7.63031 11.5803 7.84031 11.3703 8.05031 11.1603C8.26031 10.9503 8.48031 10.7403 8.69031 10.4703C8.90031 10.2003 9.00031 10.0203 9.11031 9.8103C9.22031 9.6003 9.51031 9.2703 9.77031 9.0603C10.0303 8.8503 10.2403 8.8603 10.4503 9.0703C10.6603 9.2803 10.7703 9.5203 11.0203 10.0403C11.2703 10.5603 11.3803 10.6803 11.5803 10.9203C11.7803 11.1603 11.8803 11.4003 11.7703 11.6403C11.6603 11.8803 11.4503 12.0003 11.2303 12.1203C11.0103 12.2403 10.8003 12.3703 10.5903 12.5503C10.3803 12.7303 10.0603 12.9803 9.87031 13.1703C9.68031 13.3603 9.48031 13.5603 9.39031 13.7503C9.30031 13.9403 9.43031 14.2303 9.58031 14.4903C9.73031 14.7503 9.89031 14.9903 10.1503 15.2203C10.4103 15.4503 10.6603 15.6803 10.8703 15.8203C11.0803 15.9603 11.3503 16.0903 11.6003 16.2003C11.8503 16.3103 12.0603 16.3303 12.1703 16.3303C12.4203 16.3303 12.6203 16.3103 13.1603 16.0803C13.6903 15.8503 14.7703 15.3003 14.9803 15.0603C15.1903 14.8203 15.3903 14.7303 15.5403 14.7303C15.6903 14.7303 16.3503 15.0303 16.5003 15.2403C16.6503 15.4503 16.6503 15.4503 16.5003 15.6003Z"/>
                                    </svg>
                                    <span>Agendar Inspección por WhatsApp</span>
                                </a>

                                <a href="#contacto" onclick="navigateTo('contacto')"
                                   class="btn-brand-cyan py-3.5 px-6 rounded-2xl font-bold text-sm shadow-lg text-center flex items-center justify-center">
                                    <span>Llenar Formulario Web</span>
                                </a>
                            </div>
                        </div>

                        <div id="cotizador-error" class="mt-4 p-4 bg-red-50 text-red-700 border border-red-200 rounded-2xl hidden text-sm font-medium">
                            ⚠️ Por favor, ingrese un área válida mayor o igual a 50 m² para calcular su estimación.
                        </div>
                    </form>
                </div>
            </div>
        </section>
    `;
}