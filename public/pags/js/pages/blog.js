function generateBlogPage() {
    return `
        <!-- SECCIÓN PRINCIPAL: BLOG & NOTICIAS DE LA INDUSTRIA (Fiel a la Identidad AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="blog-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Encabezado del Blog -->
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center space-x-2 bg-cyan-50 text-[#00a8cc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#00a8cc] animate-pulse"></span>
                        <span>Actualidad • Normativas Fitosanitarias • Criterios de Ingeniería</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Blog & Noticias de la Industria
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Análisis técnico, regulaciones fitosanitarias internacionales, normativas fiscales y buenas prácticas en bioseguridad para directores de operaciones, contratistas, fiduciarias y empresas en República Dominicana.
                    </p>
                    
                    <!-- Filtros de Categorías Rápidas -->
                    <div class="flex flex-wrap justify-center gap-2 mt-8" id="blog-filters">
                        <button type="button" onclick="filterBlogCategory('all')" id="filter-all" class="blog-filter-btn bg-[#102a71] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer transition">
                            Todas las Publicaciones
                        </button>
                        <button type="button" onclick="filterBlogCategory('construccion')" id="filter-construccion" class="blog-filter-btn bg-white text-slate-700 hover:text-[#102a71] hover:bg-cyan-50 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Construcción, Zapatas & Termitas
                        </button>
                        <button type="button" onclick="filterBlogCategory('portuario')" id="filter-portuario" class="blog-filter-btn bg-white text-slate-700 hover:text-[#102a71] hover:bg-cyan-50 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Sector Portuario & NIMF-15
                        </button>
                        <button type="button" onclick="filterBlogCategory('fiscal')" id="filter-fiscal" class="blog-filter-btn bg-white text-slate-700 hover:text-[#102a71] hover:bg-cyan-50 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Normativa Fiscal DGII (e-CF)
                        </button>
                        <button type="button" onclick="filterBlogCategory('mip')" id="filter-mip" class="blog-filter-btn bg-white text-slate-700 hover:text-[#102a71] hover:bg-cyan-50 border border-slate-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Manejo Integrado MIP & BPM
                        </button>
                    </div>
                </div>

                <!-- NOTA TÉCNICA DESTACADA: TRATAMIENTO PREVIO EN ZAPATAS Y SUELOS (5, 10 A 15 AÑOS) -->
                <section class="mb-16 bg-white rounded-3xl shadow-2xl border-2 border-[#00a8cc]/40 overflow-hidden" id="nota-tecnica-zapatas">
                    <div class="bg-gradient-to-r from-[#091738] via-[#0f2b5c] to-[#00a8cc] text-white px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#22c55e]">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl">🏗️</span>
                            <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#86efac]">
                                Boletín Técnico Especial: Ingeniería Civil & Prevención Estructural
                            </span>
                        </div>
                        <span class="text-xs bg-emerald-950/80 text-[#22c55e] border border-emerald-400/40 px-3 py-1 rounded-full font-black">
                            Garantías Certificadas: 5, 10 a 15 Años
                        </span>
                    </div>

                    <div class="p-6 sm:p-12">
                        <div class="max-w-4xl">
                            <div class="inline-flex items-center space-x-2 bg-cyan-50 text-[#00a8cc] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-cyan-200">
                                <span>Criterio Técnico Indispensable en Obra Negra</span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102a71] leading-tight mb-4 font-display">
                                La Importancia del Tratamiento Previo de Suelos en Zapatas: Cómo Prevenir Termitas y Comejenes una vez Concluida la Construcción
                            </h2>
                            
                            <p class="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                                En el ecosistema tropical de la República Dominicana, las <strong>termitas subterráneas (<em>Coptotermes gestroi</em>)</strong> y los <strong>comejenes</strong> habitan de manera endémica en el subsuelo. Una vez concluida la obra civil y habitada la edificación, estos xilófagos aprovechan microfisuras del hormigón, juntas frías de dilatación y pasos de tuberías hidrosanitarias o eléctricas para penetrar silenciosamente, devorando marcos de puertas, closets, vigas de madera, plafones y paneles de yeso (drywall).
                            </p>

                            <!-- Comparativa en 3 Pasos (Bento Grid) -->
                            <div class="grid md:grid-cols-3 gap-6 my-8">
                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                                    <div class="text-cyan-600 text-2xl font-black mb-1 font-display">01. El Problema</div>
                                    <h3 class="font-extrabold text-[#102a71] text-sm mb-2">Tratamientos Reactivos Invasivos</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed">
                                        Perforar losas de porcelanato, romper zócalos e inyectar muros cuando la plaga ya está adentro resulta hasta un <strong>400% más costoso</strong> y causa daños estéticos irreversibles a la terminación.
                                    </p>
                                </div>

                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                                    <div class="text-[#22c55e] text-2xl font-black mb-1 font-display">02. La Solución Técnica</div>
                                    <h3 class="font-extrabold text-[#102a71] text-sm mb-2">Barrera Química Pre-Vaciado</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed">
                                        Saturación uniforme a alta presión en zapatas, plateas, dados de columna y terreno compactado antes del vaciado de hormigón. Forma un escudo químico continuo e infranqueable.
                                    </p>
                                </div>

                                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                                    <div class="text-[#102a71] text-2xl font-black mb-1 font-display">03. Respaldo AS Servicios</div>
                                    <h3 class="font-extrabold text-[#102a71] text-sm mb-2">Garantía de 5, 10 a 15 Años</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed">
                                        Póliza certificada por escrito con código de validación digital auditable ante fiduciarias, bancos y compradores, respaldada por un <strong>programa de seguimiento continuo</strong>.
                                    </p>
                                </div>
                            </div>

                            <!-- Bloque Institucional -->
                            <div class="bg-emerald-50 border-l-4 border-[#22c55e] p-6 rounded-r-2xl mb-8">
                                <h3 class="text-base font-extrabold text-[#102a71] mb-2 flex items-center gap-2">
                                    <span>🛡️</span>
                                    <span>Ejecución Profesional y Garantía Extendida AS Servicios</span>
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                                    En <strong>AS Servicios (AS-Teje Servicios SRL)</strong> contamos con el equipamiento de alta presión, termiticidas no repelentes de fijación molecular (con registro del Ministerio de Salud Pública) y personal calificado para intervenir obras civiles en cualquier etapa de cimentación.
                                </p>
                                <ul class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                                    <li class="flex items-center gap-2">
                                        <span class="text-[#22c55e] font-bold">✔</span>
                                        <span>Garantía por escrito de <strong>5, 10 y hasta 15 Años</strong>.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-[#22c55e] font-bold">✔</span>
                                        <span><strong>Seguimiento continuo:</strong> revisiones periódicas programadas.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-[#22c55e] font-bold">✔</span>
                                        <span>Certificados auditables para fiduciarias y aseguradoras.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-[#22c55e] font-bold">✔</span>
                                        <span>Facturación electrónica DGII con crédito fiscal B01.</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Botones de Acción -->
                            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <span class="text-xs text-slate-500 text-center sm:text-left">
                                    Atención especializada para ingenieros, arquitectos, contratistas y fiduciarias a nivel nacional.
                                </span>

                                <div class="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                                    <a href="#cotizador" onclick="navigateTo('cotizador')" 
                                       class="btn-brand-navy px-6 py-3.5 rounded-xl text-xs font-bold shadow-md">
                                        Calcular Metraje en Cotizador
                                    </a>
                                    <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20asesor%C3%ADa%20para%20el%20tratamiento%20de%20suelo%20en%20zapatas%20contra%20termitas%20y%20comejenes%20con%20garant%C3%ADa%20de%205,%2010%20o%2015%20a%C3%B1os." 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="btn-brand-eco px-6 py-3.5 rounded-xl text-xs font-bold shadow-md flex items-center justify-center space-x-2">
                                        <span>Consultar con Ingeniero Especialista</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- GRID DE ARTÍCULOS TÉCNICOS & NOTICIAS DE LA INDUSTRIA -->
                <div class="mb-16">
                    <h2 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-8 font-display">
                        Artículos Técnicos & Criterios Normativos Recientes
                    </h2>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <!-- Noticia 1: NIMF-15 Portuario (2026) -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="portuario">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#00a8cc] bg-cyan-50 px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                                        Marítimo & Puertos
                                    </span>
                                    <time datetime="2026-02-05" class="text-xs text-slate-400 font-semibold">Feb 2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Actualización de la Norma NIMF-15 en Terminales de Caucedo y Río Haina
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Requisitos obligatorios de cuarentena y certificación fitosanitaria de embalajes de madera maciza para contenedores de exportación. Directrices de la CIPF/FAO para evitar demoras aduanales.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#NIMF15</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Aduanas</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Fitosanitario</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20deseo%20asesor%C3%ADa%20sobre%20certificaci%C3%B3n%20NIMF-15%20para%20despacho%20portuario."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>
                        
                        <!-- Noticia 2: Termitas y Comejenes (Garantías 5-15 años) -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="construccion">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#00a8cc] bg-cyan-50 px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                                        Construcción & Obras
                                    </span>
                                    <time datetime="2026-01-18" class="text-xs text-slate-400 font-semibold">Ene 2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Garantías de 5, 10 a 15 Años en Tratamiento de Suelo en Zapatas
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Especificaciones técnicas sobre la saturación química de suelo pre-vaciado. Estructuración de coberturas por escrito con seguimiento continuo e inspecciones periódicas de campo.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Zapatas</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#GarantiaExtendida</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Ingeniería</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20la%20garant%C3%ADa%20de%205,%2010%20a%2015%20a%C3%B1os%20en%20tratamiento%20de%20suelos%20pre-vaciado."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 3: Facturación Electrónica DGII (Ley 32-23) -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="fiscal">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#22c55e] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                                        Tributario & DGII
                                    </span>
                                    <time datetime="2025-12-10" class="text-xs text-slate-400 font-semibold">2025–2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Ley 32-23 de Facturación Electrónica: e-CF en Fumigación Corporativa
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    El calendario obligatorio exige a empresas en zonas francas y constructoras contratar proveedores autorizados con e-CF (B01/E31) para asegurar la total deducibilidad de gastos.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#eCF</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#DGII</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Formalidad</span>
                                <a href="#contacto" onclick="navigateTo('contacto')"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#22c55e] transition flex items-center gap-1">
                                    <span>Información</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 4: Manejo Integrado MIP & BPM -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="mip">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#102a71] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
                                        Inocuidad & BPM
                                    </span>
                                    <time datetime="2025-11-20" class="text-xs text-slate-400 font-semibold">Nov 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Rotación de Moléculas y Bioseguridad en Almacenes e Industrias
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Protocolos técnicos de alternancia de familias químicas (piretroides, neonicotinoides) y cebos anticoagulantes para evitar resistencia biológica según normativas HACCP.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#MIP</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#HACCP</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Bioseguridad</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20deseo%20informaci%C3%B3n%20sobre%20programas%20MIP%20para%20almacenes."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 5: Control de Roedores en Centros Logísticos -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="mip">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#22c55e] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                                        Logística & Carga
                                    </span>
                                    <time datetime="2025-10-14" class="text-xs text-slate-400 font-semibold">Oct 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Cordones Sanitarios y Trazabilidad en Naves de Almacenamiento
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Diseño de anillos perimetrales con estaciones cebaderas inviolables georreferenciadas para centros de distribución y operadores de carga en Santo Domingo y Haina.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Roedores</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Logística</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Control Perimetral</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20evaluaci%C3%B3n%20de%20cord%C3%B3n%20sanitario%20para%20almac%C3%A9n."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#22c55e] transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 6: Bioseguridad en Complejos Educativos y Torres -->
                        <article class="blog-card bento-card p-7 flex flex-col justify-between group" data-category="mip">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-[#00a8cc] bg-cyan-50 px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-200">
                                        Corporativo & Escolar
                                    </span>
                                    <time datetime="2025-09-28" class="text-xs text-slate-400 font-semibold">Sep 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-black text-[#102a71] leading-snug font-display">
                                    Protocolos de Fumigación Inodora y Cero Interrupción Laboral
                                </h3>
                                <p class="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Criterios de bioseguridad en colegios, clínicas y oficinas: selección de geles inodoros y aplicaciones nocturnas para recibir a los usuarios sin residualidad tóxica.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 font-medium">
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Corporativo</span>
                                    <span class="bg-slate-100 px-2.5 py-0.5 rounded-md">#Inodoro</span>
                                </div>
                            </div>
                            <div class="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-bold">Salud Ocupacional</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20tratamientos%20corporativos%20inodoros."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-[#102a71] font-bold group-hover:text-[#00a8cc] transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                    </div>
                </div>

                <!-- Banner Auxiliar: Consulta de Certificados de Garantía -->
                <div class="mt-14 bg-gradient-to-r from-[#091738] via-[#0f2b5c] to-[#00a8cc] p-8 sm:p-12 rounded-3xl shadow-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
                    <div>
                        <div class="flex items-center space-x-2 text-[#86efac] text-xs font-extrabold uppercase tracking-widest mb-2">
                            <span>🛡️ Consulta Oficial en Línea</span>
                        </div>
                        <h3 class="text-2xl sm:text-3xl font-black text-white font-display">
                            ¿Tiene una Garantía Emitida y Desea Validarla?
                        </h3>
                        <p class="text-slate-200 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                            Consulte el código de folio de su certificado para comprobar vigencia, técnico fitosanitario asignado y registro de Salud Pública.
                        </p>
                    </div>
                    <a href="#certificados" onclick="navigateTo('certificados')" 
                       class="whitespace-nowrap btn-brand-eco py-3.5 px-8 rounded-full text-xs sm:text-sm font-bold shadow-xl flex items-center space-x-2">
                        <span>Validar Folio en Línea</span>
                        <span>→</span>
                    </a>
                </div>

                <!-- CTA Institucional de Asesoramiento Normativo -->
                <div class="mt-12 bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-lg text-center">
                    <h3 class="text-2xl sm:text-3xl font-black text-[#102a71] mb-3 font-display">
                        ¿Requiere una charla técnica o asesoría normativa para su equipo?
                    </h3>
                    <p class="mb-6 max-w-2xl mx-auto text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Acompañamos a comités de seguridad industrial, auditores de calidad y contratistas en el cumplimiento de normas sanitarias, fiscales y portuarias.
                    </p>
                    <a href="#contacto" onclick="navigateTo('contacto')"
                       class="btn-brand-cyan py-3.5 px-8 rounded-full font-bold text-sm shadow-xl inline-block">
                        Solicitar Asesoría Técnica
                    </a>
                </div>

            </div>
        </section>
    `;
}

// Función de filtrado dinámico por categoría
function filterBlogCategory(cat) {
    const articles = document.querySelectorAll('.blog-card');
    const featured = document.getElementById('nota-tecnica-zapatas');
    const buttons = document.querySelectorAll('.blog-filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('bg-[#102a71]', 'text-white');
        btn.classList.add('bg-white', 'text-slate-700');
    });

    const activeBtn = document.getElementById('filter-' + cat);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-700');
        activeBtn.classList.add('bg-[#102a71]', 'text-white');
    }

    if (cat === 'all') {
        articles.forEach(a => a.style.display = '');
        if (featured) featured.style.display = '';
    } else {
        if (featured) {
            featured.style.display = (cat === 'construccion') ? '' : 'none';
        }
        articles.forEach(a => {
            const articleCat = a.getAttribute('data-category');
            if (articleCat === cat) {
                a.style.display = '';
            } else {
                a.style.display = 'none';
            }
        });
        if (cat === 'construccion' && featured) {
            featured.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Exposición global
if (typeof window !== 'undefined') {
    window.generateBlogPage = generateBlogPage;
    window.filterBlogCategory = filterBlogCategory;
}
