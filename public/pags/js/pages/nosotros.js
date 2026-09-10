function generateNosotrosPage() {
    return `
        <!-- SECCIÓN EXPERIENCIA & TRAYECTORIA (Fiel a la Identidad AS Servicios) -->
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="experiencia">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Encabezado -->
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center space-x-2 bg-emerald-50 text-[#16a34a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                        <span>🌱 Dejamos Huellas Ecológicas • Respaldo Desde 2021</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Nuestra Trayectoria Habla Por Nosotros
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Somos una empresa dominicana dedicada a ofrecer servicios generales de prevención, control y exterminación de plagas, doméstico y comercial, para puertos, navieras, constructoras, industrias e instituciones de alta exigencia.
                    </p>
                </div>

                <!-- Manifiesto Corporativo -->
                <div class="max-w-4xl mx-auto space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl mb-20">
                    <p>
                        Durante casi media década hemos trabajado con estricta responsabilidad, capacitación técnica continua y métodos certificados, aplicando controles preventivos y correctivos diseñados para cada entorno particular. Nuestro enfoque combina precisión química ecológica, productos aprobados por el Ministerio de Salud Pública y un acompañamiento real que garantiza intervenciones seguras, efectivas y sostenibles en el tiempo.
                    </p>
                    <p>
                        A lo largo de estos años hemos fortalecido un modelo de servicio basado en la evaluación diagnóstica continua, el monitoreo profesional y la implementación de buenas prácticas: asesoramiento fitosanitario portuario NIMF-15, barreras químicas pre-vaciado en cimentaciones contra comejenes y termitas (con 5 a 15 años de garantía), programas de Manejo Integrado de Plagas (MIP) y respuestas operativas de emergencia 24/7.
                    </p>
                    <p>
                        Creemos en la formalidad comercial, la transparencia y la educación técnica como ejes fundamentales para construir relaciones comerciales a largo plazo. Cada certificado emitido refleja nuestro compromiso irrenunciable con la excelencia técnica y la tranquilidad de cada cliente.
                    </p>
                </div>

                <!-- Bento de Filosofía Empresarial -->
                <div class="mb-20">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <span class="text-xs font-extrabold uppercase tracking-widest text-[#00a8cc] bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
                            Pilares Estratégicos
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-black text-[#102a71] mt-3 font-display">Filosofía Empresarial</h2>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Misión -->
                        <div class="bento-card p-8 flex flex-col justify-between group border-cyan-100 hover:border-[#00a8cc]">
                            <div>
                                <div class="w-14 h-14 bg-cyan-50 text-[#00a8cc] rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition duration-300">
                                    🎯
                                </div>
                                <h3 class="text-xl font-black text-[#102a71] mb-3 font-display">Misión</h3>
                                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Crear efectivos sistemas de controles de plagas capaces de ser implementados con precisión técnica, logrando una prevención adecuada y brindando seguimiento profesional para cada caso, dejando una huella ecológica de conciencia, calidad y educación.
                                </p>
                            </div>
                        </div>

                        <!-- Visión -->
                        <div class="bento-card p-8 flex flex-col justify-between group border-emerald-100 hover:border-[#22c55e]">
                            <div>
                                <div class="w-14 h-14 bg-emerald-50 text-[#22c55e] rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition duration-300">
                                    👁️
                                </div>
                                <h3 class="text-xl font-black text-[#102a71] mb-3 font-display">Visión</h3>
                                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                                    Ser líderes en innovación de métodos de controles de plagas y bioseguridad en la República Dominicana, aplicando soluciones flexibles, científicamente validadas y adaptadas a cada necesidad particular con enfoque técnico profesional y ecológico.
                                </p>
                            </div>
                        </div>

                        <!-- Valores -->
                        <div class="bento-card p-8 flex flex-col justify-between group border-blue-100 hover:border-[#102a71]">
                            <div>
                                <div class="w-14 h-14 bg-blue-50 text-[#102a71] rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition duration-300">
                                    💎
                                </div>
                                <h3 class="text-xl font-black text-[#102a71] mb-3 font-display">Valores</h3>
                                <ul class="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                                    <li class="flex items-start gap-2"><span class="text-[#22c55e] font-bold text-sm">✔</span> <span><strong>Confianza:</strong> Relaciones transparentes respaldadas por pólizas y garantías auditables.</span></li>
                                    <li class="flex items-start gap-2"><span class="text-[#22c55e] font-bold text-sm">✔</span> <span><strong>Responsabilidad:</strong> Compromiso ético con la salud ocupacional y el entorno ambiental.</span></li>
                                    <li class="flex items-start gap-2"><span class="text-[#22c55e] font-bold text-sm">✔</span> <span><strong>Integridad:</strong> Cumplimiento estricto de dosificaciones químicas y normativas oficiales.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sellos Institucionales & Habilitación -->
                <div class="pt-16 border-t border-slate-200/80 mb-20">
                    <div class="text-center max-w-2xl mx-auto mb-12">
                        <span class="text-xs font-extrabold uppercase tracking-widest text-[#00a8cc] bg-cyan-50 px-3.5 py-1 rounded-full border border-cyan-200">
                            Formalidad & Cumplimiento Legal
                        </span>
                        <h2 class="text-2xl sm:text-4xl font-black text-[#102a71] mt-3 font-display">
                            Empresa Formal y Habilitada para Operar
                        </h2>
                        <p class="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                            AS Servicios opera bajo todos los requisitos fiscales, sanitarios y comerciales establecidos por la legislación dominicana.
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
                        <!-- Sello 1: DGII -->
                        <div class="flex flex-col items-center justify-center w-full sm:w-96 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition">
                            <img src="imgs/Icono Facturador.png"
                                 alt="AS Servicios - Facturador Electrónico autorizado por la DGII"
                                 class="max-w-[200px] max-h-20 w-auto h-auto object-contain mb-4">
                            <h4 class="text-lg font-black text-[#102a71] text-center font-display">
                                Facturador Electrónico DGII
                            </h4>
                            <span class="text-xs text-slate-500 text-center mt-1">
                                Emisión de Comprobantes Fiscales Electrónicos con Crédito Fiscal (e-CF B01 / E31)
                            </span>
                        </div>

                        <!-- Sello 2: Proveedor del Estado -->
                        <div class="flex flex-col items-center justify-center w-full sm:w-96 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition">
                            <img src="imgs/logo_dgcp_completo.png"
                                 alt="AS Servicios - Proveedor del Estado DGCP"
                                 class="max-w-[200px] max-h-20 w-auto h-auto object-contain mb-4">
                            <h4 class="text-lg font-black text-[#102a71] text-center font-display">
                                Proveedor del Estado (DGCP)
                            </h4>
                            <span class="text-xs text-slate-500 text-center mt-1">
                                RNP activo y habilitado para licitaciones y compras públicas institucionales.
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Estadísticas Corporativas Keynote -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16"> 
                    <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#00a8cc] transition">
                        <div class="text-3xl sm:text-5xl font-black text-[#102a71] mb-1 font-display">200+</div>
                        <div class="text-xs sm:text-sm text-slate-500 font-semibold">Proyectos Atendidos</div>
                    </div>
                    <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#22c55e] transition">
                        <div class="text-3xl sm:text-5xl font-black text-[#22c55e] mb-1 font-display">5+</div>
                        <div class="text-xs sm:text-sm text-slate-500 font-semibold">Años de Trayectoria</div>
                    </div>
                    <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#00a8cc] transition">
                        <div class="text-3xl sm:text-5xl font-black text-[#00a8cc] mb-1 font-display">10+</div>
                        <div class="text-xs sm:text-sm text-slate-500 font-semibold">Sectores Corporativos</div>
                    </div>
                    <div class="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#22c55e] transition">
                        <div class="text-3xl sm:text-5xl font-black text-[#22c55e] mb-1 font-display">24/7</div>
                        <div class="text-xs sm:text-sm text-slate-500 font-semibold">Despacho Operativo</div>
                    </div>
                </div>

                <!-- CTA Institucional -->
                <div class="bg-gradient-to-br from-[#091738] via-[#0f2b5c] to-[#164294] p-8 sm:p-14 rounded-3xl shadow-2xl text-center text-white border border-slate-800">
                    <span class="text-xs uppercase tracking-widest text-[#22c55e] font-bold bg-emerald-950/70 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                        🌱 Dejamos Huellas Ecológicas
                    </span>
                    <h3 class="text-2xl sm:text-4xl font-black mt-3 mb-4 tracking-tight font-display">
                        ¿Desea conocer más sobre nuestros protocolos o solicitar una reunión técnica?
                    </h3>
                    <p class="mb-8 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
                        Nuestro equipo de ingenieros fitosanitarios y consultores está a su entera disposición.
                    </p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#contacto" onclick="navigateTo('contacto')"
                           class="btn-brand-cyan py-3.5 px-8 rounded-full font-bold text-base shadow-xl">
                            Contacto Comercial
                        </a>
                        <a href="#blog" onclick="navigateTo('blog')"
                           class="btn-apple-secondary py-3.5 px-8 rounded-full font-bold text-base shadow-xl">
                            Ver Blog & Noticias de la Industria →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    `;
}
