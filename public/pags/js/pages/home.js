function generateHomePage() {
    return `
        <!-- 1. HERO SECTION CINEMÁTICO DE ALTA FIDELIDAD (Fiel a la Tarjeta Corporativa y Logo AS) -->
        <section class="hero-gradient-cinema text-white relative overflow-hidden py-24 sm:py-32 lg:py-36 fade-in" id="inicio">
            <!-- Malla ambiental y orbes de luz desenfocados en Cian y Verde Ecológico -->
            <div class="hero-mesh-overlay"></div>
            <div class="ambient-orb-cyan w-96 h-96 -top-20 -left-20"></div>
            <div class="ambient-orb-green w-96 h-96 top-1/2 -right-20"></div>
            <div class="ambient-orb-blue w-80 h-80 -bottom-20 left-1/3"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                
                <!-- Badge Pill Superior (Slogan Oficial) -->
                <div class="inline-flex items-center space-x-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-slate-100 mb-8 border border-white/20 shadow-lg shimmer-badge">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                    <span class="text-[#86efac]">🌱 Dejamos Huellas Ecológicas</span>
                    <span class="text-slate-400">•</span>
                    <span class="text-slate-200">AS Servicios República Dominicana</span>
                </div>

                <!-- Título Principal de Alto Impacto -->
                <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.08] tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300">
                    Prevención, Control &<br class="hidden sm:inline">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#00a8cc] to-[#22c55e]">
                        Exterminación de Plagas
                    </span>
                </h1>
                
                <!-- Subtítulo Refinado (Copiado de la Tarjeta Oficial) -->
                <p class="text-base sm:text-xl lg:text-2xl mb-10 font-normal max-w-3xl mx-auto text-slate-200 leading-relaxed">
                    Servicios generales de prevención, control y exterminación de plagas, doméstico y comercial.
                </p>

                <!-- Botones de Acción (Dual CTA) -->
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
                    <a href="#cotizador" onclick="navigateTo('cotizador')" 
                       class="w-full sm:w-auto btn-brand-cyan px-9 py-4 rounded-full font-bold text-base shadow-xl flex items-center justify-center space-x-2">
                        <span>Calcular Cotización al Instante</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                    </a>

                    <a href="#servicios" onclick="navigateTo('servicios')" 
                       class="w-full sm:w-auto btn-apple-secondary px-9 py-4 rounded-full font-bold text-base shadow-lg flex items-center justify-center space-x-2">
                        <span>Explorar Servicios B2B</span>
                    </a>
                </div>

                <!-- Chips de Confianza Institucional -->
                <div class="mt-14 pt-8 border-t border-white/15 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs font-semibold text-slate-200">
                    <div class="flex items-center space-x-2">
                        <span class="text-[#22c55e] text-base">🛡️</span>
                        <span>Licencia Fitosanitaria MSP #084</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-[#38bdf8] text-base">🚢</span>
                        <span>Normativas Internacionales</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-[#00a8cc] text-base">📑</span>
                        <span>Garantía Escrita de 5 a 15 Años</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-[#22c55e] text-base">⚡</span>
                        <span>Facturación Electrónica e-CF</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- 2. WIDGET DE CONSULTA RÁPIDA DE GARANTÍAS (Glassmorphism Card) -->
        <section class="py-0 -mt-10 sm:-mt-14 relative z-30">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                        <div>
                            <div class="flex items-center space-x-2.5">
                                <div class="w-8 h-8 rounded-xl bg-cyan-100 text-[#00a8cc] flex items-center justify-center font-bold text-sm">
                                    🛡️
                                </div>
                                <h2 class="text-lg sm:text-xl font-extrabold text-[#102a71]">
                                    Consulta Oficial de Certificados de Garantía
                                </h2>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-500 mt-1">
                                Ingrese el folio emitido para auditar en tiempo real la autenticidad, cobertura y vigencia de su tratamiento.
                            </p>
                        </div>
                        <span class="inline-flex items-center text-xs font-bold text-[#16a34a] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                            Acceso Público Auditable
                        </span>
                    </div>

                    <!-- Buscador Integrado -->
                    <form onsubmit="event.preventDefault(); const val = document.getElementById('home-cert-input').value.trim(); if(val){ consultarCertificadoDesdeHome(val); } return false;" 
                          class="flex flex-col sm:flex-row gap-3">
                        <div class="relative flex-1">
                            <input type="text" 
                                   id="home-cert-input" 
                                   placeholder="Ingrese el número de folio, nombre del cliente o RNC..." 
                                   class="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-[#00a8cc] focus:ring-2 focus:ring-[#00a8cc]/20 focus:outline-none text-sm font-medium text-slate-800 transition bg-slate-50/50" 
                                   required>
                            <svg class="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                        <button type="submit" 
                                class="btn-brand-navy px-7 py-3.5 rounded-2xl text-sm font-bold shadow-md flex items-center justify-center space-x-2 whitespace-nowrap">
                            <span>Validar Certificado</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- 3. BARRA DE MÉTRICAS CLAVE ESTILO KEYNOTE -->
        <section class="py-16 sm:py-20 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    
                    <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center hover:border-[#00a8cc] transition">
                        <span class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">15 Años</span>
                        <h4 class="text-xs sm:text-sm font-bold text-[#00a8cc] mt-2 uppercase tracking-wider">Garantía Escrita</h4>
                        <p class="text-xs text-slate-500 mt-1">Tratamiento de suelos pre-vaciado en cimientos y zapatas.</p>
                    </div>

                    <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center hover:border-[#22c55e] transition">
                        <span class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">0 ppm</span>
                        <h4 class="text-xs sm:text-sm font-bold text-[#22c55e] mt-2 uppercase tracking-wider">Desgasificación Segura</h4>
                        <p class="text-xs text-slate-500 mt-1">Cumplimiento estricto en contenedores y bodegas de carga.</p>
                    </div>

                    <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center hover:border-[#00a8cc] transition">
                        <span class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">100%</span>
                        <h4 class="text-xs sm:text-sm font-bold text-[#00a8cc] mt-2 uppercase tracking-wider">Personal Capacitado</h4>
                        <p class="text-xs text-slate-500 mt-1">Supervisión por técnicos fitosanitarios calificados y certificados.</p>
                    </div>

                    <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center hover:border-[#22c55e] transition">
                        <span class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">24/7</span>
                        <h4 class="text-xs sm:text-sm font-bold text-[#22c55e] mt-2 uppercase tracking-wider">Despacho Operativo</h4>
                        <p class="text-xs text-slate-500 mt-1">Intervenciones nocturnas sin detener sus faenas productivas.</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- 4. SECCIÓN DE CLIENTES CORPORATIVOS Y ALIANZAS -->
        <section class="py-12 bg-white border-y border-slate-200/60">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p class="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                    Empresas & Proyectos que Confían en Nuestro Protocolo
                </p>
                <h3 class="text-lg sm:text-2xl font-bold text-slate-800 mb-8 max-w-2xl mx-auto">
                    Respaldando a constructoras, operadores logísticos e instituciones
                </h3>

                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                    <a href="https://jfortuna.com/" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-2xl hover:bg-slate-50 transition">
                        <img src="imgs/Clientes/jfortunaconstructora-removebg-preview.png" 
                             alt="Constructora JFortuna" 
                             class="h-16 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105">
                    </a>

                    <a href="https://www.instagram.com/camulogisticservices/" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-2xl hover:bg-slate-50 transition"> 
                        <img src="imgs/Clientes/camulogistics.png" 
                             alt="CAMU Logistics Services" 
                             class="h-16 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105">
                    </a>

                    <a href="https://condominioaldia.com.do/" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-2xl hover:bg-slate-50 transition"> 
                        <img src="imgs/Clientes/conday-removebg-preview.png" 
                             alt="Condominio Al Día CONDAY" 
                             class="h-16 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105">
                    </a>

                    <a href="https://funjemar.org.do/" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-2xl hover:bg-slate-50 transition"> 
                        <img src="imgs/Clientes/funjemar-removebg-preview.png" 
                             alt="Fundación Jesucristo Amor y Rescate" 
                             class="h-16 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105">
                    </a>

                    <a href="https://www.instagram.com/montessorimanaen/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" class="group p-3 rounded-2xl hover:bg-slate-50 transition"> 
                        <img src="imgs/Clientes/montessorimanaen-removebg-preview.png" 
                             alt="Montessori Manaen" 
                             class="h-16 sm:h-20 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 transform group-hover:scale-105">
                    </a>
                </div>
            </div>
        </section>

        <!-- 5. BENTO GRID DE SECTORES ESPECIALIZADOS B2B -->
        <section class="py-20 sm:py-28 bg-slate-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <span class="text-xs font-extrabold uppercase tracking-widest text-[#00a8cc] bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
                        Cobertura Técnica B2B
                    </span>
                    <h2 class="text-3xl sm:text-5xl font-black text-[#102a71] mt-4 tracking-tight font-display">
                        Soluciones para Industrias de Alta Exigencia
                    </h2>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Protocolos específicos adaptados a normativas aduanales, especificaciones estructurales de obra civil y auditorías internacionales de inocuidad.
                    </p>
                </div>

                <div class="grid lg:grid-cols-3 gap-8">
                    
                    <!-- Bento Card 1: Puertos y Navieras -->
                    <div class="bento-card p-8 flex flex-col justify-between group border-slate-200/80 hover:border-[#00a8cc]/50">
                        <div>
                            <div class="w-14 h-14 rounded-2xl bg-cyan-50 text-[#00a8cc] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-300">
                                🚢
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-[#00a8cc] block mb-1">Sector Marítimo & Portuario</span>
                            <h3 class="text-2xl font-black text-[#102a71] mb-3">Fumigación NIMF-15 & Carga</h3>
                            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                                Tratamientos fitosanitarios oficiales para embalajes de madera de exportación, gasificación con fosfuro de aluminio y desgasificación residual segura.
                            </p>
                            
                            <ul class="space-y-2.5 text-xs text-slate-700 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Certificación CIPF / NIMF-15 oficial aduanal</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Despachos en puertos Haina, Caucedo y Santo Domingo</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Monitoreo y lectura de gas residual (0 ppm)</li>
                            </ul>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex items-center justify-between">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-[#102a71] group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                <span>Ver protocolos marítimos</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                            <span class="text-xs font-semibold text-slate-400">ISPM-15</span>
                        </div>
                    </div>

                    <!-- Bento Card 2: Construcción & Zapatas -->
                    <div class="bento-card p-8 flex flex-col justify-between group border-cyan-200/80 ring-1 ring-[#00a8cc]/15">
                        <div>
                            <div class="w-14 h-14 rounded-2xl bg-cyan-50 text-[#00a8cc] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-300">
                                🏗️
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-[#00a8cc] block mb-1">Construcción & Obras Civiles</span>
                            <h3 class="text-2xl font-black text-[#102a71] mb-3">Barrera Pre-Vaciado de Zapatas</h3>
                            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                                Creación de escudo químico continuo e infranqueable en cimentaciones contra termitas subterráneas con termiticidas no repelentes de fijación prolongada.
                            </p>
                            
                            <ul class="space-y-2.5 text-xs text-slate-700 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Garantías por escrito de 5, 10 a 15 Años</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Aplicación en dados, vigas de amarre y plateas</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Folio digital auditable en nuestra plataforma</li>
                            </ul>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex items-center justify-between">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-[#102a71] group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                <span>Tratamientos en zapatas</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                            <span class="text-xs font-bold text-[#00a8cc] bg-cyan-50 px-2.5 py-0.5 rounded-full">Top Servicio</span>
                        </div>
                    </div>

                    <!-- Bento Card 3: Zonas Francas & Almacenes -->
                    <div class="bento-card p-8 flex flex-col justify-between group border-slate-200/80 hover:border-[#22c55e]/50">
                        <div>
                            <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-[#22c55e] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition duration-300">
                                🏭
                            </div>
                            <span class="text-xs font-bold uppercase tracking-wider text-[#22c55e] block mb-1">Industrias & Centros Logísticos</span>
                            <h3 class="text-2xl font-black text-[#102a71] mb-3">Manejo Integrado de Plagas (MIP)</h3>
                            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                                Cordones sanitarios exteriores, estaciones cebaderas numeradas, control de vectores y auditorías para estándares BPM, HACCP e ISO.
                            </p>
                            
                            <ul class="space-y-2.5 text-xs text-slate-700 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Informes técnicos con tendencias de consumo</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Fichas de seguridad MSDS y registros sanitarios</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2 text-sm">✓</span> Facturación electrónica DGII con crédito fiscal B01</li>
                            </ul>
                        </div>

                        <div class="pt-5 border-t border-slate-100 flex items-center justify-between">
                            <a href="#servicios" onclick="navigateTo('servicios')" class="text-sm font-bold text-[#102a71] group-hover:text-[#22c55e] transition flex items-center gap-1">
                                <span>Conocer programas MIP</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </a>
                            <span class="text-xs font-semibold text-slate-400">Auditable</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- 6. SECCIÓN: POR QUÉ CONFIAR EN AS SERVICIOS -->
        <section class="py-20 sm:py-28 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-3xl sm:text-4xl font-black text-[#102a71] tracking-tight font-display">
                        ¿Por Qué las Empresas Eligen a AS Servicios?
                    </h2>
                    <p class="text-slate-600 mt-3 text-base">
                        Estándares técnicos internacionales adaptados con precisión al clima tropical de la República Dominicana.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    
                    <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#00a8cc]/40 hover:shadow-xl transition duration-300">
                        <div class="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#00a8cc"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-3xl z-10 icon-center">📜</span>
                        </div>
                        <h3 class="text-xl font-bold text-[#102a71] mb-2">Técnicos & Químicos Certificados</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Personal con licencia fitosanitaria y formulaciones químicas ecológicas aprobadas por el Ministerio de Salud Pública de Rep. Dominicana.
                        </p>
                    </div>

                    <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#22c55e]/40 hover:shadow-xl transition duration-300">
                        <div class="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#22c55e"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-3xl z-10 icon-center">⚡</span>
                        </div>
                        <h3 class="text-xl font-bold text-[#102a71] mb-2">Respuesta Operativa 24/7</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Despacho de cuadrillas en horarios nocturnos o fines de semana para evitar interrupciones en su línea de producción o atraque marítimo.
                        </p>
                    </div>

                    <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200/70 text-center hover:bg-white hover:border-[#00a8cc]/40 hover:shadow-xl transition duration-300">
                        <div class="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center icon-wrapper">
                            <svg class="absolute inset-0 w-20 h-20 star-svg" viewBox="0 0 100 100">
                                <polygon class="icon-star"
                                    points="50,5 61,38 95,38 67,58 78,90 50,70 22,90 33,58 5,38 39,38"
                                    fill="none"
                                    stroke="#102a71"
                                    stroke-width="3"
                                    stroke-linejoin="round" />
                            </svg>
                            <span class="text-3xl z-10 icon-center">🛡️</span>
                        </div>
                        <h3 class="text-xl font-bold text-[#102a71] mb-2">Garantía Verificable en Línea</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Póliza documentada por escrito y consultable 24/7 en nuestro portal digital con código único de certificado.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <!-- 7. BANNER DE CONTACTO RÁPIDO & EMERGENCIAS (Estilo Banner Corporativo) -->
        <section class="py-12 bg-slate-50 mb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-[#091738] border border-slate-800">
                    
                    <img src="imgs/ContactoFondo.png"
                         alt="Fondo Contacto AS Servicios" 
                         class="w-full h-56 sm:h-72 object-cover object-center opacity-30 mix-blend-luminosity"/> 

                    <div class="absolute inset-0 bg-gradient-to-r from-[#091738] via-[#091738]/90 to-transparent flex flex-col sm:flex-row items-center justify-between px-6 sm:px-14 py-8">
                        <div class="text-center sm:text-left text-white max-w-full sm:max-w-xl mb-6 sm:mb-0">
                            <span class="text-xs uppercase tracking-widest text-[#22c55e] font-bold bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
                                🌱 Dejamos Huellas Ecológicas
                            </span>
                            <h3 class="text-2xl sm:text-4xl font-black tracking-tight text-white mt-3 font-display">
                                ¿Desea una Inspección Técnica en su Obra o Empresa?
                            </h3>
                            <p class="text-xs sm:text-sm text-slate-300 mt-2">
                                Contáctenos al <a href="https://wa.me/18092323518" target="_blank" rel="noopener noreferrer" class="text-[#25D366] font-bold underline">(809) 232-3518</a> o programe una visita con nuestros ingenieros.
                            </p>
                        </div>

                        <div class="flex items-center space-x-3">
                            <a href="#contacto" onclick="navigateTo('contacto')" 
                               class="btn-brand-cyan px-8 py-4 text-sm sm:text-base font-bold rounded-full shadow-xl transition inline-block whitespace-nowrap">
                                Solicitar Inspección
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}