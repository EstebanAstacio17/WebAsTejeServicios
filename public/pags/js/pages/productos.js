function generateProductosPage() {
    return `
        <!-- CATÁLOGO DE PRODUCTOS E INSUMOS (Fiel a la Identidad AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="productos-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center space-x-2 bg-cyan-50 text-[#00a8cc] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#00a8cc] animate-pulse"></span>
                        <span>Suministros Profesionales & Equipamiento Industrial</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Catálogo de Suministros & Equipos
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Equipos y consumibles de grado profesional certificados, seleccionados por nuestros técnicos para garantizar la máxima eficacia y cumplimiento sanitario.
                    </p>
                </div>

                <!-- Bento de Categorías Destacadas -->
                <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    
                    <div class="bento-card p-8 text-center group border-cyan-100 hover:border-cyan-300">
                        <div class="w-16 h-16 rounded-2xl bg-cyan-50 text-[#00a8cc] flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300">
                            🧯
                        </div>
                        <h3 class="font-extrabold text-xl text-[#102a71] mb-2">EPP & Bioseguridad</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">
                            Mascarillas con filtro para vapores orgánicos, guantes de nitrilo y trajes químicos micro-porosos.
                        </p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-xs font-bold text-[#00a8cc] hover:text-[#102a71] transition inline-flex items-center gap-1">
                            <span>Solicitar Catálogo EPP</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div class="bento-card p-8 text-center group border-emerald-100 hover:border-emerald-300">
                        <div class="w-16 h-16 rounded-2xl bg-emerald-50 text-[#22c55e] flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300">
                            🐛
                        </div>
                        <h3 class="font-extrabold text-xl text-[#102a71] mb-2">Monitoreo & Cebos</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">
                            Estaciones de cebado con llave de seguridad para roedores, cebos antitermitas y trampas de luz UV.
                        </p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-xs font-bold text-[#22c55e] hover:text-[#16a34a] transition inline-flex items-center gap-1">
                            <span>Solicitar Sistemas de Cebo</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>

                    <div class="bento-card p-8 text-center group border-blue-100 hover:border-blue-300">
                        <div class="w-16 h-16 rounded-2xl bg-blue-50 text-[#102a71] flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300">
                            ⚙️
                        </div>
                        <h3 class="font-extrabold text-xl text-[#102a71] mb-2">Equipos de Aplicación</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">
                            Termonebulizadores ULV, motomochilas a combustión, bombas estacionarias y pulverizadores.
                        </p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-xs font-bold text-[#102a71] hover:text-[#00a8cc] transition inline-flex items-center gap-1">
                            <span>Cotizar Maquinaria</span>
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>

                </div>

                <!-- Listado de Productos con Fichas de Alta Fidelidad -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <!-- Producto 1: Nebulizador ULV -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-cyan-50 text-[#00a8cc] border border-cyan-200">
                                    Equipo Industrial
                                </span>
                                <span class="text-xl">💨</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Nebulizadores Eléctricos ULV</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Microgotas de 5 a 50 micras para desinfección profunda en naves industriales, centros médicos, silos y bodegas marítimas.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Cobertura uniforme en espacios cerrados</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Regulador de caudal ajustable</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Operación silenciosa y eficiente</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Nebulizador%20El%C3%A9ctrico%20ULV."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 2: Estaciones Cebaderas -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-50 text-[#22c55e] border border-emerald-200">
                                    Control de Roedores
                                </span>
                                <span class="text-xl">🐀</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Estaciones Cebaderas de Seguridad</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Fabricadas en polímero de alta resistencia a la intemperie. Sistema de cierre seguro con llave para auditorías sanitarias y BPM.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Cumple normativas sanitarias BPM</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Varillas metálicas para fijación de bloques</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Llave universal de seguridad incluida</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Estaciones%20Cebaderas%20de%20Seguridad."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 3: Trajes de Protección EPP -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-cyan-50 text-[#00a8cc] border border-cyan-200">
                                    Bioseguridad & EPP
                                </span>
                                <span class="text-xl">🦺</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Overoles de Protección Química</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Trajes impermeables micro-porosos con capucha elástica, diseñados para barrera contra partículas finas, nieblas y plaguicidas.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Certificación Tipo 5/6 contra químicos</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Antiestático y transpirable</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Tallas M, L, XL y XXL disponibles</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Trajes%20de%20Protecci%C3%B3n%20Qu%C3%ADmica%20EPP."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 4: Aspersores de Compresión -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-blue-50 text-[#102a71] border border-blue-200">
                                    Aplicación Precisa
                                </span>
                                <span class="text-xl">🎯</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Aspersores de Presión 8L y 16L</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Tanques presurizables de polietileno reforzado con lanza de bronce para aplicación perimetral focalizada en zócalos y grietas.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Boquillas de abanico y cono regulable</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Válvula de alivio de sobrepresión</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Sellos Viton resistentes a químicos</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Aspersores%20de%20Presi%C3%B3n."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 5: Fumigadoras Estacionarias -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-50 text-[#22c55e] border border-emerald-200">
                                    Alta Capacidad
                                </span>
                                <span class="text-xl">⚡</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Fumigadoras Estacionarias 6.5 HP</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Motor a combustión de 4 tiempos con bomba triple pistón cerámico. Capacidad de presión sostenida para grandes obras y buques.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Alcance de manguera hasta 100 metros</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Caudal regulable de alto rendimiento</li>
                                <li class="flex items-center"><span class="text-[#22c55e] font-bold mr-2">✓</span> Venta y servicio de mantenimiento técnico</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Fumigadora%20Estacionaria%206.5HP."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 6: Respiradores con Filtro -->
                    <div class="bento-card p-7 flex flex-col justify-between group">
                        <div>
                            <div class="flex items-center justify-between mb-4">
                                <span class="px-3 py-1 text-xs font-extrabold rounded-full bg-cyan-50 text-[#00a8cc] border border-cyan-200">
                                    Protección Respiratoria
                                </span>
                                <span class="text-xl">😷</span>
                            </div>
                            <h4 class="text-xl font-black text-[#102a71] mb-2 font-display">Máscaras de Media Cara con Filtros</h4>
                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                                Respiradores elastoméricos con cartuchos dobles para vapores orgánicos y prefiltros P95/P100 para uso continuo.
                            </p>
                            <ul class="text-xs text-slate-700 space-y-2 mb-6">
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Ajuste ergonómico de 4 puntos</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Cartuchos recambiables certificados</li>
                                <li class="flex items-center"><span class="text-[#00a8cc] font-bold mr-2">✓</span> Máxima protección contra emanaciones</li>
                            </ul>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20M%C3%A1scaras%20de%20Protecci%C3%B3n%20Respiratoria."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full btn-brand-eco py-3 rounded-xl font-bold text-xs shadow-md text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

                <!-- Llamada a la Acción para Venta Mayorista -->
                <div class="mt-20 p-8 sm:p-14 bg-gradient-to-br from-[#091738] via-[#0f2b5c] to-[#164294] text-white rounded-3xl shadow-2xl text-center border border-slate-800">
                    <span class="text-xs uppercase tracking-widest text-[#22c55e] font-bold bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                        🌱 Dejamos Huellas Ecológicas
                    </span>
                    <h3 class="text-2xl sm:text-4xl font-black mt-4 mb-3 tracking-tight font-display">
                        ¿Requiere un Pedido Mayorista o Institucional?
                    </h3>
                    <p class="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Ofrecemos precios corporativos por volumen para empresas de construcción, administración de condominios o navieras, con comprobante fiscal DGII (e-CF).
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20pedido%20mayorista%20de%20insumos."
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-brand-eco py-3.5 px-8 rounded-full font-bold text-base shadow-xl">
                            Consultar Pedido Mayorista por WhatsApp
                        </a>
                        <a href="#contacto" onclick="navigateTo('contacto')"
                           class="btn-brand-cyan py-3.5 px-8 rounded-full font-bold text-base shadow-xl">
                            Enviar Requerimiento por Formulario
                        </a>
                    </div>
                </div>

                <!-- Pilares de Confianza y Respaldo -->
                <div class="mt-16 grid md:grid-cols-3 gap-8">
                    <div class="text-center p-6 bg-white rounded-3xl border border-slate-200/70 shadow-sm">
                        <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-[#22c55e] flex items-center justify-center mx-auto mb-4 text-2xl">
                            🚚
                        </div>
                        <h4 class="font-extrabold text-lg text-[#102a71] mb-1">Despacho Confiable</h4>
                        <p class="text-slate-600 text-xs sm:text-sm">Entregas coordinadas en Santo Domingo y envíos a todo el territorio nacional.</p>
                    </div>
                    <div class="text-center p-6 bg-white rounded-3xl border border-slate-200/70 shadow-sm">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-50 text-[#00a8cc] flex items-center justify-center mx-auto mb-4 text-2xl">
                            🛡️
                        </div>
                        <h4 class="font-extrabold text-lg text-[#102a71] mb-1">Calidad Garantizada</h4>
                        <p class="text-slate-600 text-xs sm:text-sm">Insumos y equipos probados en nuestras operaciones bajo estándares de bioseguridad.</p>
                    </div>
                    <div class="text-center p-6 bg-white rounded-3xl border border-slate-200/70 shadow-sm">
                        <div class="w-14 h-14 rounded-2xl bg-blue-50 text-[#102a71] flex items-center justify-center mx-auto mb-4 text-2xl">
                            📜
                        </div>
                        <h4 class="font-extrabold text-lg text-[#102a71] mb-1">Facturación Formal</h4>
                        <p class="text-slate-600 text-xs sm:text-sm">Facturador electrónico habilitado por la DGII con comprobantes fiscales válidos.</p>
                    </div>
                </div>

            </div>
        </section>
    `;
}