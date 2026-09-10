function generateServiciosPage() {
    return `
        <!-- ENCABEZADO DE SERVICIOS B2B (Fiel a la Identidad AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="servicios-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center space-x-2 bg-emerald-50 text-[#16a34a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                        <span>🌱 Prevención, Control y Exterminación de Plagas</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Servicios Técnicos Especializados
                    </h1>
                    <p class="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed">
                        Control de plagas doméstico y comercial de alto rigor con trazabilidad digital, registros oficiales del Ministerio de Salud Pública y garantías verificables por escrito.
                    </p>
                </div>
                
                <!-- BENTO GRID DE SERVICIOS POR SECTOR DE ALTA EXIGENCIA -->
                <div class="grid md:grid-cols-2 gap-8 mb-20">
                    
                    <!-- Tarjeta 1: Sector Marítimo & Portuario -->
                    <div class="bento-card p-8 sm:p-10 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-cyan-50 text-[#00a8cc] rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 shadow-sm">
                                    🚢
                                </div>
                                <span class="bg-cyan-100 text-[#007799] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border border-cyan-200">
                                    NIMF-15 / CIPF
                                </span>
                            </div>

                            <span class="text-xs font-bold uppercase tracking-wider text-[#00a8cc] block mb-1">Comercio Exterior & Logística</span>
                            <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-3">
                                Servicios Portuarios, Navieras & Carga
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Tratamientos fitosanitarios y de cuarentena internacional para carga de exportación e importación en terminales portuarias dominicanas (Caucedo, Río Haina, Santo Domingo).
                            </p>

                            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-[#102a71] mb-3">Alcance Operativo:</h4>
                                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Fumigación NIMF-15:</strong> Tratamiento certificado de paletas, tarimas y embalajes de madera con sellado fitosanitario para aduanas.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Contenedores & Bodegas:</strong> Gasificación y desgasificación con control de concentración hasta 0 ppm residual.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Certificado Inmediato:</strong> Documentación bilingüe con validez para navieras internacionales y autoridades aduanales.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span class="text-xs text-slate-500 font-medium">Navieras, Couriers, Exportadores</span>
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20fumigaci%C3%B3n%20mar%C3%ADtima%20o%20NIMF-15." 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="w-full sm:w-auto btn-brand-navy px-6 py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar Operación Portuaria
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 2: Sector Construcción & Obras Civiles -->
                    <div class="bento-card p-8 sm:p-10 flex flex-col justify-between group border-cyan-200 ring-1 ring-[#00a8cc]/20">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-cyan-50 text-[#00a8cc] rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 shadow-sm">
                                    🏗️
                                </div>
                                <span class="bg-cyan-100 text-[#007799] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border border-cyan-200">
                                    Garantía 5, 10 a 15 Años
                                </span>
                            </div>

                            <span class="text-xs font-bold uppercase tracking-wider text-[#00a8cc] block mb-1">Cimentaciones & Estructuras</span>
                            <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-3">
                                Protección Anti-Termitas (Zapatas)
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Tratamiento previo de suelos y cimentaciones para crear barreras químicas infranqueables contra termitas subterráneas (<em>Coptotermes</em>) y comejenes en obras civiles en desarrollo o concluidas.
                            </p>

                            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-[#00a8cc] mb-3">Protocolos de Aplicación:</h4>
                                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                                    <li class="flex items-start">
                                        <span class="text-[#00a8cc] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Tratamiento Pre-Vaciado en Zapatas:</strong> Saturación química a alta presión en zapatas, plateas, dados de columnas y suelo perimetral antes de vaciar hormigón.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#00a8cc] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Termiticidas No Repelentes:</strong> Moléculas modernas microencapsuladas con registro de Salud Pública que erradican la colonia completa por efecto transferencia.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#00a8cc] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Garantía por Escrito de 5, 10 a 15 Años:</strong> Certificado oficial auditable para fiduciarias y bancos, respaldado por un programa de <strong>seguimiento continuo e inspecciones periódicas</strong>.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span class="text-xs text-slate-500 font-medium">Constructoras, Ingenieros, Desarrolladores</span>
                            <a href="#cotizador" onclick="navigateTo('cotizador')" 
                               class="w-full sm:w-auto btn-brand-cyan px-6 py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Calcular Metraje en Cotizador
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 3: Zonas Francas & Industrias (MIP / HACCP) -->
                    <div class="bento-card p-8 sm:p-10 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-emerald-50 text-[#22c55e] rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 shadow-sm">
                                    🏭
                                </div>
                                <span class="bg-emerald-100 text-[#166534] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-200">
                                    BPM / HACCP / MIP
                                </span>
                            </div>

                            <span class="text-xs font-bold uppercase tracking-wider text-[#22c55e] block mb-1">Inocuidad & Auditorías</span>
                            <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-3">
                                Manejo Integrado de Plagas Industrial (MIP)
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Programas preventivos y de monitoreo continuo para naves industriales, centros de distribución, farmacéuticas y plantas procesadoras de alimentos.
                            </p>

                            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-[#16a34a] mb-3">Componentes del Plan:</h4>
                                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Cordón Sanitario Perimetral:</strong> Estaciones de cebado de alta resistencia, rotuladas y ancladas según normas de seguridad.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Monitoreo de Tendencias:</strong> Bitácoras de inspección, hojas de seguridad técnica (MSDS) y planos de ubicación de trampas.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Cumplimiento Normativo:</strong> Listo para auditorías internacionales de inocuidad y habilitaciones de Salud Pública.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span class="text-xs text-slate-500 font-medium">Zonas Francas, Almacenes, Manufactureras</span>
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="w-full sm:w-auto btn-brand-navy px-6 py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Solicitar Auditoría Sanitaria
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 4: Comercial, Corporativo & Institucional -->
                    <div class="bento-card p-8 sm:p-10 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-blue-50 text-[#102a71] rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300 shadow-sm">
                                    🏢
                                </div>
                                <span class="bg-blue-100 text-[#102a71] font-mono font-bold text-xs px-3.5 py-1.5 rounded-full border border-blue-200">
                                    Cero Interrupción
                                </span>
                            </div>

                            <span class="text-xs font-bold uppercase tracking-wider text-[#102a71] block mb-1">Espacios Corporativos & Residenciales</span>
                            <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-3">
                                Control Corporativo & Doméstico
                            </h2>
                            <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                Mantenimiento higiénico-sanitario para residenciales, torres de oficinas, centros educativos y condominios con formulaciones biodegradables seguras.
                            </p>

                            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-[#102a71] mb-3">Valores Diferenciales:</h4>
                                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Productos de Grado Saludable:</strong> Formulaciones biodegradables, geles inodoros y nebulizaciones en frío no manchantes.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Horarios Flexibles:</strong> Ejecución en turnos nocturnos o fines de semana para entrega de instalaciones limpias a primera hora.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> 
                                        <span><strong>Facturación Electrónica DGII:</strong> Comprobantes fiscales con crédito fiscal B01 emitidos puntualmente.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span class="text-xs text-slate-500 font-medium">Oficinas, Colegios, Clínicas, Residencias</span>
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="w-full sm:w-auto btn-brand-navy px-6 py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Programar Visita
                            </a>
                        </div>
                    </div>

                </div>

                <!-- SECCIÓN: PROTOCOLO OPERATIVO EN 4 FASES (METODOLOGÍA TÉCNICA) -->
                <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-16">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="text-xs font-extrabold uppercase tracking-widest text-[#00a8cc] bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
                            Estándar de Ejecución Técnica
                        </span>
                        <h3 class="text-2xl sm:text-4xl font-black text-[#102a71] mt-3 tracking-tight font-display">
                            El Protocolo de Precisión AS Servicios en 4 Fases
                        </h3>
                        <p class="text-sm sm:text-base text-slate-600 mt-2">
                            Garantizamos intervenciones ordenadas, con control riguroso de producto y documentación formal de respaldo.
                        </p>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Fase 1 -->
                        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative group hover:bg-white hover:shadow-lg transition">
                            <div class="text-3xl font-black text-[#22c55e] mb-2 font-display">01</div>
                            <h4 class="font-bold text-[#102a71] text-base mb-2">Inspección & Diagnóstico</h4>
                            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Identificación taxonómica de la plaga, cálculo volumétrico o métrico del área y evaluación de factores de riesgo estructural o biológico.
                            </p>
                        </div>

                        <!-- Fase 2 -->
                        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative group hover:bg-white hover:shadow-lg transition">
                            <div class="text-3xl font-black text-[#00a8cc] mb-2 font-display">02</div>
                            <h4 class="font-bold text-[#102a71] text-base mb-2">Formulación & Dosificación</h4>
                            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Selección del principio activo registrado ante el Ministerio de Salud Pública y cálculo de concentraciones según normativa técnica y ficha MSDS.
                            </p>
                        </div>

                        <!-- Fase 3 -->
                        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative group hover:bg-white hover:shadow-lg transition">
                            <div class="text-3xl font-black text-[#164294] mb-2 font-display">03</div>
                            <h4 class="font-bold text-[#102a71] text-base mb-2">Aplicación Segura con EPP</h4>
                            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Despliegue de cuadrillas especializadas con equipos de protección personal normativos y maquinaria calibrada (termonebulizadores, motomochilas, inyectores).
                            </p>
                        </div>

                        <!-- Fase 4 -->
                        <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 relative group hover:bg-white hover:shadow-lg transition">
                            <div class="text-3xl font-black text-[#102a71] mb-2 font-display">04</div>
                            <h4 class="font-bold text-[#102a71] text-base mb-2">Certificación & Trazabilidad</h4>
                            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                Emisión de certificado oficial con folio único, registro de vigencia en nuestro portal digital y programación de revisiones periódicas.
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🛡️</span>
                            <span class="text-xs sm:text-sm text-slate-600">
                                ¿Posee ya un tratamiento con nosotros? Puede consultar la vigencia de su garantía oficial.
                            </span>
                        </div>
                        <a href="#certificados" onclick="navigateTo('certificados')" 
                           class="btn-apple-secondary px-5 py-2.5 rounded-xl font-bold text-xs transition">
                            Ir al Validador de Certificados →
                        </a>
                    </div>
                </div>

                <!-- LLAMADA A LA ACCIÓN FINAL (Banner en Azul Real / Cian / Verde) -->
                <div class="bg-gradient-to-br from-[#091738] via-[#0f2b5c] to-[#164294] p-8 sm:p-14 rounded-3xl shadow-2xl text-center text-white border border-slate-800">
                    <span class="text-xs uppercase tracking-widest text-[#22c55e] font-bold bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                        🌱 Dejamos Huellas Ecológicas
                    </span>
                    <h3 class="text-2xl sm:text-4xl font-black mt-4 mb-4 tracking-tight font-display">
                        ¿Requiere una Propuesta Formal o Inspección In Situ?
                    </h3>
                    <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Coordinamos una visita técnica a sus instalaciones o proyecto en obra para definir el plan de acción exacto y emitir una cotización formal con crédito fiscal.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="btn-brand-cyan py-3.5 px-8 rounded-full font-bold text-base shadow-xl">
                            Solicitar Inspección Técnica
                        </a>
                        <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20deseo%20coordinar%20una%20reuni%C3%B3n%20técnica%20para%20un%20proyecto." 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn-brand-eco py-3.5 px-8 rounded-full font-bold text-base shadow-xl flex items-center justify-center space-x-2">
                            <span>Contactar por WhatsApp</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    `;
}