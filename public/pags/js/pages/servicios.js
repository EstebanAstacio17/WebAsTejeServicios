function generateServiciosPage() {
    return `
        <!-- Título y Encabezado de Servicios B2B -->
        <section class="py-16 sm:py-24 bg-bg-light fade-in" id="servicios-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center mb-16">
                    <div class="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        <span>Soluciones de Grado Industrial & Cumplimiento</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-extrabold text-primary-blue mt-1">
                        Servicios Técnicos Especializados
                    </h1>
                    <p class="mt-4 text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Ingeniería en control de plagas y bioseguridad operativa con trazabilidad, registros oficiales del Ministerio de Salud Pública y garantías verificables por escrito.
                    </p>
                </div>
                
                <!-- GRID DE SERVICIOS POR SECTOR DE ALTA EXIGENCIA -->
                <div class="grid md:grid-cols-2 gap-8 mb-16">
                    
                    <!-- Tarjeta 1: Sector Marítimo & Portuario -->
                    <div class="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border-t-8 border-primary-blue flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-blue-50 text-primary-blue rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                                    🚢
                                </div>
                                <span class="bg-blue-100 text-primary-blue font-mono font-bold text-xs px-3 py-1.5 rounded-full">
                                    NIMF-15 / CIPF
                                </span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl font-bold text-primary-blue mb-3">
                                Servicios Portuarios, Navieras & Carga
                            </h2>
                            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                Tratamientos fitosanitarios y de cuarentena internacional para carga de exportación/importación en terminales portuarias dominicanas (Caucedo, Río Haina, Santo Domingo).
                            </p>

                            <div class="bg-bg-light p-4 rounded-xl mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-primary-blue mb-2">Alcance Operativo:</h4>
                                <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li class="flex items-start">
                                        <span class="text-emerald-500 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Fumigación NIMF-15:</strong> Tratamiento certificado de paletas, tarimas y embalajes de madera con sellado fitosanitario para aduanas.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-emerald-500 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Contenedores & Bodegas:</strong> Gasificación y desgasificación con control de concentración hasta 0 ppm residual.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-emerald-500 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Certificado Inmediato:</strong> Documentación bilingüe con validez para navieras internacionales y autoridades aduanales.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span class="text-xs text-gray-500 font-medium">Cliente Tipo: Navieras, Couriers, Exportadores</span>
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20fumigaci%C3%B3n%20mar%C3%ADtima%20o%20NIMF-15." 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="w-full sm:w-auto bg-primary-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-900 transition text-center">
                                Cotizar Operación Portuaria
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 2: Sector Construcción & Obras Civiles -->
                    <div class="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border-t-8 border-accent-orange flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-orange-50 text-accent-orange rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                                    🏗️
                                </div>
                                <span class="bg-orange-100 text-orange-800 font-mono font-bold text-xs px-3 py-1.5 rounded-full">
                                    Garantía 5, 10 a 15 Años
                                </span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl font-bold text-primary-blue mb-3">
                                Protección Anti-Termitas & Comejenes (Zapatas)
                            </h2>
                            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                Tratamiento previo de suelos y cimentaciones para crear barreras químicas infranqueables contra termitas subterráneas (<em>Coptotermes</em>) y comejenes en obras civiles en desarrollo o concluidas.
                            </p>

                            <div class="bg-bg-light p-4 rounded-xl mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-accent-orange mb-2">Protocolos de Aplicación:</h4>
                                <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li class="flex items-start">
                                        <span class="text-accent-orange font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Tratamiento Pre-Vaciado en Zapatas:</strong> Saturación química a alta presión en zapatas, plateas, dados de columnas y suelo perimetral antes de vaciar hormigón.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent-orange font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Termiticidas No Repelentes:</strong> Moléculas modernas microencapsuladas con registro de Salud Pública que erradican la colonia completa por efecto transferencia.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-accent-orange font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Garantía por Escrito de 5, 10 a 15 Años:</strong> Certificado oficial auditable para fiduciarias y bancos, respaldado por un programa de <strong>seguimiento continuo e inspecciones periódicas</strong>.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span class="text-xs text-gray-500 font-medium">Cliente Tipo: Constructoras, Ingenieros, Desarrolladores</span>
                            <a href="#cotizador" onclick="navigateTo('cotizador')" 
                               class="w-full sm:w-auto bg-accent-orange text-primary-blue px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-orange-500 transition text-center">
                                Calcular Metraje en Cotizador
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 3: Zonas Francas & Industrias (MIP / HACCP) -->
                    <div class="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border-t-8 border-secondary-green flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-emerald-50 text-secondary-green rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                                    🏭
                                </div>
                                <span class="bg-emerald-100 text-emerald-800 font-mono font-bold text-xs px-3 py-1.5 rounded-full">
                                    BPM / HACCP / MIP
                                </span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl font-bold text-primary-blue mb-3">
                                Manejo Integrado de Plagas Industrial (MIP)
                            </h2>
                            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                Programas preventivos y de monitoreo continuo para naves industriales, centros de distribución, farmacéuticas y plantas procesadoras de alimentos.
                            </p>

                            <div class="bg-bg-light p-4 rounded-xl mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-secondary-green mb-2">Componentes del Plan:</h4>
                                <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li class="flex items-start">
                                        <span class="text-secondary-green font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Cordón Sanitario Perimetral:</strong> Estaciones de cebado de alta resistencia, rotuladas y ancladas según normas de seguridad.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-secondary-green font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Monitoreo de Tendencias:</strong> Bitácoras de inspección, hojas de seguridad técnica (MSDS) y planos de ubicación de trampas.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-secondary-green font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Cumplimiento Normativo:</strong> Listo para auditorías internacionales de inocuidad y habilitaciones de Salud Pública.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span class="text-xs text-gray-500 font-medium">Cliente Tipo: Zonas Francas, Almacenes, Manufactureras</span>
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="w-full sm:w-auto bg-primary-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-900 transition text-center">
                                Solicitar Auditoría Sanitaria
                            </a>
                        </div>
                    </div>

                    <!-- Tarjeta 4: Comercial, Corporativo & Institucional -->
                    <div class="bg-white p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 border-t-8 border-indigo-600 flex flex-col justify-between">
                        <div>
                            <div class="flex items-center justify-between mb-6">
                                <div class="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                                    🏢
                                </div>
                                <span class="bg-indigo-100 text-indigo-800 font-mono font-bold text-xs px-3 py-1.5 rounded-full">
                                    Cero Interrupción
                                </span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl font-bold text-primary-blue mb-3">
                                Control Corporativo & Institucional
                            </h2>
                            <p class="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                Mantenimiento higiénico-sanitario para torres de oficinas, centros educativos, clínicas y residenciales de alto perfil sin afectar la rutina laboral.
                            </p>

                            <div class="bg-bg-light p-4 rounded-xl mb-6">
                                <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">Valores Diferenciales:</h4>
                                <ul class="space-y-2 text-xs sm:text-sm text-gray-700">
                                    <li class="flex items-start">
                                        <span class="text-indigo-600 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Productos de Grado Saludable:</strong> Formulaciones biodegradables, geles inodoros y nebulizaciones en frío no manchantes.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-indigo-600 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Horarios Flexibles:</strong> Ejecución en turnos nocturnos o fines de semana para entrega de instalaciones limpias a primera hora.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="text-indigo-600 font-bold mr-2 text-base">✓</span> 
                                        <span><strong>Facturación Electrónica DGII:</strong> Comprobantes fiscales con crédito fiscal B01 emitidos puntualmente.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <span class="text-xs text-gray-500 font-medium">Cliente Tipo: Oficinas, Colegios, Clínicas, Condominios</span>
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="w-full sm:w-auto bg-primary-blue text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-900 transition text-center">
                                Programar Visita Corporativa
                            </a>
                        </div>
                    </div>

                </div>

                <!-- SECCIÓN: PROTOCOLO OPERATIVO EN 4 FASES (METODOLOGÍA TÉCNICA) -->
                <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 mb-16">
                    <div class="text-center max-w-3xl mx-auto mb-12">
                        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary-blue">
                            Estándar de Ejecución
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-primary-blue mt-1">
                            El Protocolo de Precisión AS-Teje en 4 Fases
                        </h3>
                        <p class="text-sm sm:text-base text-gray-600 mt-2">
                            Garantizamos intervenciones ordenadas, con control riguroso de producto y documentación formal de respaldo.
                        </p>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- Fase 1 -->
                        <div class="p-6 rounded-2xl bg-bg-light border border-gray-100 relative">
                            <div class="text-3xl font-extrabold text-secondary-green mb-2">01</div>
                            <h4 class="font-bold text-primary-blue text-base mb-2">Inspección & Diagnóstico</h4>
                            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Identificación taxonómica de la plaga, cálculo volumétrico o métrico del área y evaluación de factores de riesgo estructural o biológico.
                            </p>
                        </div>

                        <!-- Fase 2 -->
                        <div class="p-6 rounded-2xl bg-bg-light border border-gray-100 relative">
                            <div class="text-3xl font-extrabold text-accent-orange mb-2">02</div>
                            <h4 class="font-bold text-primary-blue text-base mb-2">Formulación & Dosificación</h4>
                            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Selección del principio activo registrado ante el Ministerio de Salud Pública y cálculo de concentraciones según normativa técnica y ficha de seguridad.
                            </p>
                        </div>

                        <!-- Fase 3 -->
                        <div class="p-6 rounded-2xl bg-bg-light border border-gray-100 relative">
                            <div class="text-3xl font-extrabold text-primary-blue mb-2">03</div>
                            <h4 class="font-bold text-primary-blue text-base mb-2">Aplicación Segura con EPP</h4>
                            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Despliegue de cuadrillas especializadas con equipos de protección personal normativos y maquinaria calibrada (termonebulizadores, motomochilas, inyectores).
                            </p>
                        </div>

                        <!-- Fase 4 -->
                        <div class="p-6 rounded-2xl bg-bg-light border border-gray-100 relative">
                            <div class="text-3xl font-extrabold text-emerald-600 mb-2">04</div>
                            <h4 class="font-bold text-primary-blue text-base mb-2">Certificación & Trazabilidad</h4>
                            <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Emisión de certificado oficial con folio único, registro de vigencia en nuestro portal digital y programación de revisiones periódicas.
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🛡️</span>
                            <span class="text-xs sm:text-sm text-gray-600">
                                ¿Posee ya un tratamiento con nosotros? Puede consultar la vigencia de su garantía oficial.
                            </span>
                        </div>
                        <a href="#certificados" onclick="navigateTo('certificados')" 
                           class="bg-blue-50 text-primary-blue border border-blue-200 hover:bg-blue-100 px-5 py-2.5 rounded-xl font-bold text-xs transition">
                            Ir al Validador de Certificados →
                        </a>
                    </div>
                </div>

                <!-- LLAMADA A LA ACCIÓN FINAL -->
                <div class="bg-gradient-to-r from-primary-blue to-blue-900 p-8 sm:p-12 rounded-3xl shadow-2xl text-center text-white">
                    <span class="text-xs uppercase tracking-widest text-secondary-green font-bold">Atención a Proyectos & Empresas</span>
                    <h3 class="text-2xl sm:text-4xl font-extrabold mt-2 mb-4">
                        ¿Requiere una Propuesta Formal o Inspección In Situ?
                    </h3>
                    <p class="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                        Coordinamos una visita técnica a sus instalaciones o proyecto en obra para definir el plan de acción exacto y emitir una cotización formal con crédito fiscal.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="bg-accent-orange hover:bg-orange-500 text-primary-blue py-3.5 px-8 rounded-xl font-bold text-base btn-primary transition duration-300 shadow-lg">
                            Solicitar Inspección Técnica
                        </a>
                        <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20coordinar%20una%20reuni%C3%B3n%20técnica%20para%20un%20proyecto." 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="bg-[#25D366] hover:bg-emerald-600 text-white py-3.5 px-8 rounded-xl font-bold text-base btn-primary transition duration-300 shadow-lg flex items-center justify-center space-x-2">
                            <span>Contactar por WhatsApp</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    `;
}