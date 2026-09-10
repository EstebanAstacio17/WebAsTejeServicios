function generateContactoPage() {
    return `
        <!-- SECCIÓN DE CONTACTO & ASESORÍA TÉCNICA (Fiel a la Tarjeta de Negocios AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="contacto-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center space-x-2 bg-emerald-50 text-[#16a34a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                        <span>🌱 Dejamos Huellas Ecológicas • Atención Personalizada</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Contacto & Coordinación Técnica
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Complete el formulario para solicitar una propuesta formal o comuníquese de forma directa con nuestra gerencia y equipo de ingenieros.
                    </p>
                </div>

                <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    
                    <!-- Formulario de Contacto (7 Columnas) -->
                    <div class="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200/80">
                        <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-2 font-display">Solicitar Asesoría o Visita</h2>
                        <p class="text-slate-600 text-sm mb-8">Un especialista técnico evaluará su caso y responderá en menos de 24 horas.</p>
                        
                        <form action="https://formspree.io/f/xblbvqga" method="POST" class="space-y-5">
                            
                            <input type="hidden" name="_subject" value="Nueva Solicitud Web AS Servicios" />
                            <!-- Anti-Spam Honeypot para Formspree -->
                            <input type="text" name="_gotcha" style="display:none !important;" tabindex="-1" autocomplete="off" aria-hidden="true" />

                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label for="nombre" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Nombre Completo *</label>
                                    <input type="text" id="nombre" name="Nombre Completo" required class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition">
                                </div>
                                <div>
                                    <label for="empresa" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Empresa / Proyecto</label>
                                    <input type="text" id="empresa" name="Empresa/Institución" class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition">
                                </div>
                            </div>
                            
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label for="email" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Correo Electrónico *</label>
                                    <input type="email" id="email" name="_replyto" required class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition">
                                </div>
                                <div>
                                    <label for="telefono" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Teléfono / WhatsApp *</label>
                                    <input type="tel" id="telefono" name="Teléfono" required class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition">
                                </div>
                            </div>

                            <div>
                                <label for="servicio-interes" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Servicio de Interés *</label>
                                <div class="relative">
                                    <select id="servicio-interes" name="Servicio de Interés" required class="w-full p-3.5 pr-10 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition appearance-none">
                                        <option value="">Seleccione un servicio</option>
                                        <option value="Protección Anti-Termitas Zapatas">Protección Anti-Termitas en Zapatas (Pre-Vaciado 5 a 15 Años)</option>
                                        <option value="Fumigación Marítima NIMF-15">Fumigación Marítima NIMF-15 & Desgasificación</option>
                                        <option value="Manejo Integrado de Plagas MIP">Manejo Integrado de Plagas (MIP Industrial/BPM)</option>
                                        <option value="Control de Plagas Comerciales">Control de Plagas Comerciales & Domésticas</option>
                                        <option value="Venta de Insumos y Equipos">Venta de Insumos y Equipos Profesionales</option>
                                        <option value="Capacitación y Asesoramiento">Capacitación y Asesoramiento Técnico</option>
                                        <option value="Otros">Otro Requerimiento</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label for="ubicacion" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Ubicación de la Obra o Instalación</label>
                                <input type="text" id="ubicacion" name="Ubicación del Proyecto" placeholder="Provincia, Municipio o Puerto" class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition">
                            </div>

                            <div>
                                <label for="mensaje" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71] mb-1.5">Descripción de la Necesidad o Plaga *</label>
                                <textarea id="mensaje" name="Mensaje/Problema" rows="4" required placeholder="Describa el metraje, tipo de plaga, estado de la obra o fechas requeridas..." class="w-full p-3.5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] text-sm text-slate-900 bg-slate-50/50 transition"></textarea>
                            </div>

                            <div class="flex items-center pt-1">
                                <input type="checkbox" id="privacidad" name="Acepta Política de Privacidad" required class="w-4 h-4 text-[#22c55e] border-slate-300 rounded focus:ring-[#22c55e]">
                                <label for="privacidad" class="ml-2.5 text-xs text-slate-600">
                                    Acepto la <a href="pags/html/PP.html" target="_blank" rel="noopener noreferrer" class="text-[#102a71] font-bold hover:underline">Política de Privacidad</a> y el tratamiento de mis datos de contacto.
                                </label>
                            </div>

                            <button type="submit" class="w-full btn-brand-cyan py-4 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center space-x-2">
                                <span>Enviar Solicitud de Asesoría</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </button>
                        </form>

                        <div class="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
                            <p class="text-xs text-slate-500">
                                <span class="font-bold text-[#102a71]">🔒 Confidencialidad y Compromiso 24 Horas:</span><br>
                                Sus datos serán utilizados exclusivamente para cotizaciones y diagnósticos técnicos.
                            </p>
                        </div>
                    </div>

                    <!-- Canales Directos de Atención (Fiel a la Tarjeta Corporativa) -->
                    <div class="lg:col-span-5 space-y-6">
                        
                        <!-- Tarjeta Corporativa con Datos de la Tarjeta Oficial -->
                        <div class="bg-gradient-to-br from-[#091738] via-[#0f2b5c] to-[#102a71] text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-800">
                            
                            <!-- Encabezado de la Tarjeta -->
                            <div class="border-b border-slate-700/80 pb-5 mb-6">
                                <span class="text-xs uppercase tracking-widest text-[#22c55e] font-bold bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                                    🌱 Dejamos Huellas Ecológicas
                                </span>
                                <div class="mt-4">
                                    <h3 class="text-2xl font-black text-white font-display">AS Servicios</h3>
                                    <p class="text-sm font-bold text-[#00a8cc]">Atención al Cliente & Asesoría Técnica</p>
                                    <div class="w-16 h-1 bg-[#00a8cc] rounded-full mt-2"></div>
                                </div>
                            </div>

                            <ul class="space-y-4 text-sm">
                                <li class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center text-lg border border-[#25D366]/30">
                                        📱
                                    </div>
                                    <div>
                                        <span class="text-xs text-slate-400 block">WhatsApp & Llamadas:</span>
                                        <a href="https://wa.me/18092323518" target="_blank" rel="noopener noreferrer" class="font-bold text-white hover:text-[#25D366] transition">
                                            (809) 232-3518
                                        </a>
                                    </div>
                                </li>

                                <li class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-lg border border-pink-500/30">
                                        📷
                                    </div>
                                    <div>
                                        <span class="text-xs text-slate-400 block">Instagram Oficial:</span>
                                        <a href="https://www.instagram.com/astejeservicios/" target="_blank" rel="noopener noreferrer" class="font-bold text-white hover:text-pink-400 transition">
                                            @astejeservicios
                                        </a>
                                    </div>
                                </li>

                                <li class="flex items-center space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#38bdf8] flex items-center justify-center text-lg border border-cyan-500/30">
                                        ✉️
                                    </div>
                                    <div>
                                        <span class="text-xs text-slate-400 block">Correo Oficial:</span>
                                        <a href="mailto:contacto@astejeservicios.com" class="font-bold text-white hover:text-[#38bdf8] transition text-sm block">
                                            contacto@astejeservicios.com
                                        </a>
                                    </div>
                                </li>

                                <li class="flex items-start space-x-3.5">
                                    <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00a8cc] flex items-center justify-center text-lg border border-blue-500/30 mt-0.5">
                                        📍
                                    </div>
                                    <div>
                                        <span class="text-xs text-slate-400 block">Dirección Oficial:</span>
                                        <a href="https://maps.app.goo.gl/9wK1FJ3jBrNsmjCk6" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-200 hover:text-[#00a8cc] transition leading-relaxed block">
                                            Autopista Duarte Km. 13, Los Peralejos, Santo Domingo, Distrito Nacional.
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <!-- Horarios -->
                            <div class="mt-6 pt-5 border-t border-slate-700/80">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-[#22c55e] mb-2">Disponibilidad</h4>
                                <div class="space-y-1 text-xs text-slate-300">
                                    <div class="flex justify-between">
                                        <span>Lunes - Viernes:</span>
                                        <span class="font-bold text-white">09:00 AM - 05:00 PM</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Sábados:</span>
                                        <span class="font-bold text-white">09:00 AM - 12:00 PM</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Operaciones Portuarias & Zapatas:</span>
                                        <span class="font-bold text-[#00a8cc]">24/7 Programado</span>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 flex gap-3">
                                <a href="tel:+18092323518" class="flex-1 btn-apple-secondary py-3 rounded-xl font-bold text-xs text-center">
                                    Llamar
                                </a>
                                <a href="https://wa.me/18092323518" target="_blank" rel="noopener noreferrer" class="flex-1 btn-brand-eco py-3 rounded-xl font-bold text-xs text-center">
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <!-- Mapa Interactivo Integrado -->
                        <div class="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
                            <div class="h-48 bg-slate-200">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60545.49134567066!2d-70.0302753!3d18.4794367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8b7813472ee7%3A0x8370b1e4fc739d89!2sAS-TEJE%20SERVICIOS%20SRL!5e0!3m2!1sen!2sdo!4v1762920039308!5m2!1sen!2sdo" 
                                    width="100%" 
                                    height="100%" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div class="p-4 flex items-center justify-between">
                                <span class="text-xs font-semibold text-slate-600">Autopista Duarte Km. 13, Los Peralejos</span>
                                <a href="https://maps.app.goo.gl/9wK1FJ3jBrNsmjCk6" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-[#00a8cc] hover:underline">
                                    Abrir Mapa →
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    `;
}