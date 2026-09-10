function generateBlogPage() {
    return `
        <!-- SECCIÓN PRINCIPAL: BLOG & NOTICIAS DE LA INDUSTRIA -->
        <section class="py-16 sm:py-24 bg-bg-light fade-in" id="blog-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Encabezado del Blog -->
                <div class="text-center mb-14">
                    <div class="inline-flex items-center space-x-2 bg-blue-100 text-primary-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        <span>Actualidad • Normativas Oficiales • Criterios Técnicos</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-extrabold text-primary-blue mt-1">
                        Blog & Noticias de la Industria
                    </h1>
                    <p class="mt-4 text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Análisis técnico, regulaciones fitosanitarias internacionales, normativas fiscales y buenas prácticas en bioseguridad para directores de operaciones, contratistas, fiduciarias y empresas en República Dominicana.
                    </p>
                    <!-- Filtros de Categorías Rápidas -->
                    <div class="flex flex-wrap justify-center gap-2 mt-8" id="blog-filters">
                        <button type="button" onclick="filterBlogCategory('all')" id="filter-all" class="blog-filter-btn bg-primary-blue text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer transition">
                            Todas las Publicaciones
                        </button>
                        <button type="button" onclick="filterBlogCategory('construccion')" id="filter-construccion" class="blog-filter-btn bg-white text-gray-700 hover:text-primary-blue hover:bg-blue-50 border border-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Construcción, Zapatas & Termitas
                        </button>
                        <button type="button" onclick="filterBlogCategory('portuario')" id="filter-portuario" class="blog-filter-btn bg-white text-gray-700 hover:text-primary-blue hover:bg-blue-50 border border-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Sector Portuario & NIMF-15
                        </button>
                        <button type="button" onclick="filterBlogCategory('fiscal')" id="filter-fiscal" class="blog-filter-btn bg-white text-gray-700 hover:text-primary-blue hover:bg-blue-50 border border-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Normativa Fiscal DGII (e-CF)
                        </button>
                        <button type="button" onclick="filterBlogCategory('mip')" id="filter-mip" class="blog-filter-btn bg-white text-gray-700 hover:text-primary-blue hover:bg-blue-50 border border-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition cursor-pointer">
                            Manejo Integrado MIP & BPM
                        </button>
                    </div>
                </div>

                <!-- NOTA TÉCNICA DESTACADA: TRATAMIENTO PREVIO EN ZAPATAS Y SUELOS (5, 10 A 15 AÑOS) -->
                <section class="mb-16 bg-white rounded-3xl shadow-xl border-2 border-accent-orange/40 overflow-hidden" id="nota-tecnica-zapatas">
                    <div class="bg-gradient-to-r from-primary-blue via-blue-900 to-primary-blue text-white px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-3">
                        <div class="flex items-center space-x-2">
                            <span class="text-xl">🏗️</span>
                            <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-accent-orange">
                                Boletín Técnico Especial: Ingeniería Civil & Prevención Estructural
                            </span>
                        </div>
                        <span class="text-xs bg-accent-orange/20 text-orange-200 border border-orange-300/30 px-3 py-1 rounded-full font-bold">
                            Garantías Certificadas: 5, 10 a 15 Años
                        </span>
                    </div>

                    <div class="p-6 sm:p-12">
                        <div class="max-w-4xl">
                            <div class="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                                <span>Criterio Técnico Indispensable en Obra Negra</span>
                            </div>

                            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-blue leading-tight mb-4">
                                La Importancia del Tratamiento Previo de Suelos en Zapatas: Cómo Prevenir Termitas y Comejenes una vez Concluida la Construcción
                            </h2>
                            
                            <p class="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                                En el ecosistema tropical de la República Dominicana, las <strong>termitas subterráneas (<em>Coptotermes gestroi</em>)</strong> y los <strong>comejenes</strong> habitan de manera endémica en el subsuelo. Una vez concluida la obra civil y habitada la edificación, estos xilófagos aprovechan microfisuras del hormigón, juntas frías de dilatación y pasos de tuberías hidrosanitarias o eléctricas para penetrar silenciosamente, devorando marcos de puertas, closets, vigas de madera, plafones y paneles de yeso (drywall).
                            </p>

                            <!-- Comparativa en 3 Pasos -->
                            <div class="grid md:grid-cols-3 gap-6 my-8">
                                <div class="bg-bg-light p-6 rounded-2xl border border-gray-200 hover:border-accent-orange/50 transition">
                                    <div class="text-accent-orange text-2xl font-black mb-1">01. El Problema</div>
                                    <h3 class="font-bold text-primary-blue text-sm mb-2">Tratamientos Reactivos Invasivos</h3>
                                    <p class="text-xs text-gray-600 leading-relaxed">
                                        Perforar losas de porcelanato, romper zócalos e inyectar muros cuando la plaga ya está adentro resulta hasta un <strong>400% más costoso</strong> y causa daños estéticos irreversibles a la terminación.
                                    </p>
                                </div>

                                <div class="bg-bg-light p-6 rounded-2xl border border-gray-200 hover:border-secondary-green transition">
                                    <div class="text-secondary-green text-2xl font-black mb-1">02. La Solución Técnica</div>
                                    <h3 class="font-bold text-primary-blue text-sm mb-2">Barrera Química Pre-Vaciado</h3>
                                    <p class="text-xs text-gray-600 leading-relaxed">
                                        Saturación uniforme a alta presión en zapatas, plateas, dados de columna y terreno compactado antes del vaciado de hormigón. Forma un escudo químico continuo e infranqueable.
                                    </p>
                                </div>

                                <div class="bg-bg-light p-6 rounded-2xl border border-gray-200 hover:border-primary-blue transition">
                                    <div class="text-primary-blue text-2xl font-black mb-1">03. Respaldo AS-Teje</div>
                                    <h3 class="font-bold text-primary-blue text-sm mb-2">Garantía de 5, 10 a 15 Años</h3>
                                    <p class="text-xs text-gray-600 leading-relaxed">
                                        Póliza certificada por escrito con código de validación digital auditable ante fiduciarias, bancos y compradores, respaldada por un <strong>programa de seguimiento continuo</strong>.
                                    </p>
                                </div>
                            </div>

                            <!-- Bloque Institucional -->
                            <div class="bg-blue-50 border-l-4 border-primary-blue p-6 rounded-r-2xl mb-8">
                                <h3 class="text-base font-bold text-primary-blue mb-2 flex items-center gap-2">
                                    <span>🛡️</span>
                                    <span>Ejecución Profesional y Garantía Extendida AS-Teje Servicios</span>
                                </h3>
                                <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
                                    En <strong>AS-Teje Servicios SRL</strong> contamos con el equipamiento de alta presión, termiticidas no repelentes de fijación molecular (con registro del Ministerio de Salud Pública) y personal calificado para intervenir obras civiles en cualquier etapa de cimentación.
                                </p>
                                <ul class="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-800 font-medium">
                                    <li class="flex items-center gap-2">
                                        <span class="text-emerald-600 font-bold">✔</span>
                                        <span>Garantía por escrito de <strong>5, 10 y hasta 15 Años</strong>.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-emerald-600 font-bold">✔</span>
                                        <span><strong>Seguimiento continuo:</strong> revisiones periódicas programadas.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-emerald-600 font-bold">✔</span>
                                        <span>Certificados auditables para fiduciarias y aseguradoras.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="text-emerald-600 font-bold">✔</span>
                                        <span>Facturación electrónica DGII con crédito fiscal B01.</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Botones de Acción -->
                            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                <span class="text-xs text-gray-500 text-center sm:text-left">
                                    Atención especializada para ingenieros, arquitectos, contratistas y fiduciarias a nivel nacional.
                                </span>

                                <div class="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                                    <a href="#cotizador" onclick="navigateTo('cotizador')" 
                                       class="w-full sm:w-auto text-center bg-accent-orange text-primary-blue font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm btn-primary hover:bg-orange-500 transition shadow">
                                        Calcular Metraje en Cotizador
                                    </a>
                                    <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20asesor%C3%ADa%20para%20el%20tratamiento%20de%20suelo%20en%20zapatas%20contra%20termitas%20y%20comejenes%20con%20garant%C3%ADa%20de%205,%2010%20o%2015%20a%C3%B1os." 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-full sm:w-auto text-center bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm btn-primary hover:bg-emerald-600 transition shadow flex items-center justify-center space-x-2">
                                        <span>Consultar con Ingeniero Especialista</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- GRID DE ARTÍCULOS TÉCNICOS & NOTICIAS DE LA INDUSTRIA -->
                <div class="mb-14">
                    <h2 class="text-2xl sm:text-3xl font-bold text-primary-blue mb-8">
                        Artículos Técnicos & Criterios Normativos Recientes
                    </h2>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <!-- Noticia 1: NIMF-15 Portuario (2026) -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="portuario">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-primary-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Marítimo & Puertos
                                    </span>
                                    <time datetime="2026-02-05" class="text-xs text-gray-400 font-medium">Feb 2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Actualización de la Norma NIMF-15 en Terminales de Caucedo y Río Haina
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Requisitos obligatorios de cuarentena y certificación fitosanitaria de embalajes de madera maciza para contenedores de exportación. Directrices de la CIPF/FAO para evitar demoras aduanales.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#NIMF15</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Aduanas</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Fitosanitario</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20asesor%C3%ADa%20sobre%20certificaci%C3%B3n%20NIMF-15%20para%20despacho%20portuario."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>
                        
                        <!-- Noticia 2: Termitas y Comejenes (Garantías 5-15 años) -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="construccion">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-accent-orange bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Construcción & Obras
                                    </span>
                                    <time datetime="2026-01-18" class="text-xs text-gray-400 font-medium">Ene 2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Garantías de 5, 10 a 15 Años en Tratamiento de Suelo en Zapatas
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Especificaciones técnicas sobre la saturación química de suelo pre-vaciado. Estructuración de coberturas por escrito con seguimiento continuo e inspecciones periódicas de campo.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Zapatas</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#GarantiaExtendida</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Ingeniería</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20la%20garant%C3%ADa%20de%205,%2010%20a%2015%20a%C3%B1os%20en%20tratamiento%20de%20suelos%20pre-vaciado."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 3: Facturación Electrónica DGII (Ley 32-23) -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="fiscal">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-secondary-green bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Tributario & DGII
                                    </span>
                                    <time datetime="2025-12-10" class="text-xs text-gray-400 font-medium">2025–2026</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Ley 32-23 de Facturación Electrónica: e-CF en Fumigación Corporativa
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    El calendario obligatorio exige a empresas en zonas francas y constructoras contratar proveedores autorizados con e-CF (B01/E31) para asegurar la total deducibilidad de gastos.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#eCF</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#DGII</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Formalidad</span>
                                <a href="#contacto" onclick="navigateTo('contacto')"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Información</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 4: Manejo Integrado MIP & BPM -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="mip">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Inocuidad & BPM
                                    </span>
                                    <time datetime="2025-11-20" class="text-xs text-gray-400 font-medium">Nov 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Rotación de Moléculas y Bioseguridad en Almacenes e Industrias
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Protocolos técnicos de alternancia de familias químicas (piretroides, neonicotinoides) y cebos anticoagulantes para evitar resistencia biológica según normativas HACCP.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#MIP</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#HACCP</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Bioseguridad</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20deseo%20informaci%C3%B3n%20sobre%20programas%20MIP%20para%20almacenes."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 5: Control de Roedores en Centros Logísticos -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="mip">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Logística & Carga
                                    </span>
                                    <time datetime="2025-10-14" class="text-xs text-gray-400 font-medium">Oct 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Cordones Sanitarios y Trazabilidad en Naves de Almacenamiento
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Diseño de anillos perimetrales con estaciones cebaderas inviolables georreferenciadas para centros de distribución y operadores de carga en Santo Domingo y Haina.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Roedores</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Logística</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Control Perimetral</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20evaluaci%C3%B3n%20de%20cord%C3%B3n%20sanitario%20para%20almac%C3%A9n."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                        <!-- Noticia 6: Bioseguridad en Complejos Educativos y Torres -->
                        <article class="blog-card bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col justify-between" data-category="mip">
                            <div class="p-7">
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="text-xs font-extrabold text-primary-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Corporativo & Escolar
                                    </span>
                                    <time datetime="2025-09-28" class="text-xs text-gray-400 font-medium">Sep 2025</time>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-primary-blue leading-snug">
                                    Protocolos de Fumigación Inodora y Cero Interrupción Laboral
                                </h3>
                                <p class="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Criterios de bioseguridad en colegios, clínicas y oficinas: selección de geles inodoros y aplicaciones nocturnas para recibir a los usuarios sin residualidad tóxica.
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2 text-xs text-gray-500 font-medium">
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Corporativo</span>
                                    <span class="bg-gray-100 px-2 py-0.5 rounded">#Inodoro</span>
                                </div>
                            </div>
                            <div class="p-7 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                                <span class="text-xs text-gray-500 font-bold">Salud Ocupacional</span>
                                <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20tratamientos%20corporativos%20inodoros."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   class="text-xs text-primary-blue font-bold hover:text-accent-orange transition flex items-center gap-1">
                                    <span>Consultar</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </article>

                    </div>
                </div>

                <!-- Banner Auxiliar: Consulta de Certificados de Garantía -->
                <div class="mt-14 bg-gradient-to-r from-blue-900 to-primary-blue p-8 sm:p-10 rounded-3xl shadow-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <div class="flex items-center space-x-2 text-secondary-green text-sm font-bold uppercase tracking-wider mb-2">
                            <span>🛡️ Consulta Oficial en Línea</span>
                        </div>
                        <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                            ¿Tiene una Garantía Emitida y Desea Validarla?
                        </h3>
                        <p class="text-gray-300 text-sm sm:text-base mt-1 max-w-xl">
                            Consulte el código de folio de su certificado para comprobar vigencia, técnico fitosanitario asignado y registro de Salud Pública.
                        </p>
                    </div>
                    <a href="#certificados" onclick="navigateTo('certificados')" 
                       class="whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl text-sm sm:text-base btn-primary transition duration-300 shadow-lg flex items-center space-x-2">
                        <span>Validar Folio en Línea</span>
                        <span>→</span>
                    </a>
                </div>

                <!-- CTA Institucional de Asesoramiento Normativo -->
                <div class="mt-12 bg-white border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm text-center">
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-primary-blue mb-3">
                        ¿Requiere una charla técnica o asesoría normativa para su equipo?
                    </h3>
                    <p class="mb-6 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                        Acompañamos a comités de seguridad industrial, auditores de calidad y contratistas en el cumplimiento de normas sanitarias, fiscales y portuarias.
                    </p>
                    <a href="#contacto" onclick="navigateTo('contacto')"
                       class="inline-block bg-accent-orange text-primary-blue py-3.5 px-8 rounded-xl font-bold text-base btn-primary hover:bg-orange-500 focus-visible shadow-md">
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
        btn.classList.remove('bg-primary-blue', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });

    const activeBtn = document.getElementById('filter-' + cat);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-gray-700');
        activeBtn.classList.add('bg-primary-blue', 'text-white');
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
