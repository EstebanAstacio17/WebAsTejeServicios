// Base de datos de Certificados de Garantía Oficiales Emitidos (Auditable)
// Estructura lista para habilitar e integrar certificados reales en cualquier momento:
const certificadosDB = [
    /* 
    REGISTROS DE EJEMPLO DESHABILITADOS (Estructura modelo para nuevos certificados oficiales):
    {
        codigo: "AST-2025-XXXX",
        cliente: "Nombre del Cliente / Empresa",
        rnc: "RNC Oficial",
        proyecto: "Nombre del Proyecto / Ubicación",
        servicio: "Tipo de Servicio Realizado",
        areaTratada: "Metraje / Área tratada",
        fechaServicio: "DD de Mes, YYYY",
        vencimientoGarantia: "DD de Mes, YYYY",
        duracionGarantia: "Periodo de Garantía",
        estado: "vigente", // 'vigente', 'revision', 'vencido'
        productoUtilizado: "Producto / Químico Fitosanitario",
        registroSaludPublica: "No. Registro MSP",
        tecnicoResponsable: "Técnico Fitosanitario Certificado",
        observaciones: "Observaciones técnicas del servicio"
    }
    */
];

// Sanitización de entradas para prevención de ataques XSS
function sanitizeHTML(str) {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Generador de la vista de Certificados (Fiel a la Identidad AS Servicios)
function generateCertificadosPage() {
    return `
        <section class="py-20 sm:py-28 bg-slate-50 fade-in" id="certificados-main">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Encabezado Institucional -->
                <div class="text-center max-w-3xl mx-auto mb-14">
                    <div class="inline-flex items-center space-x-2 bg-emerald-50 text-[#16a34a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                        <span>Portal de Consulta Oficial • Auditoría de Garantías</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-black text-[#102a71] tracking-tight font-display">
                        Validación de Certificados de Garantía
                    </h1>
                    <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Consulte la autenticidad, cobertura y vigencia de los certificados emitidos por 
                        <strong class="text-slate-800">AS Servicios (AS-Teje Servicios SRL)</strong> para navieras, puertos, proyectos de construcción y empresas.
                    </p>
                </div>

                <!-- Caja de Búsqueda de Alta Fidelidad -->
                <div class="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80 max-w-3xl mx-auto mb-14">
                    <form id="cert-search-form" onsubmit="event.preventDefault(); buscarCertificado();" class="space-y-4">
                        <label for="cert-query" class="block text-xs uppercase tracking-wider font-extrabold text-[#102a71]">
                            Ingrese el Folio del Certificado, RNC o Nombre del Proyecto
                        </label>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <div class="relative flex-grow">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input type="text" 
                                       id="cert-query" 
                                       placeholder="Ingrese el número de folio, cliente o RNC..." 
                                       class="w-full pl-12 p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#00a8cc]/20 focus:border-[#00a8cc] font-medium text-slate-800 bg-slate-50/50 text-sm sm:text-base">
                            </div>
                            <button type="submit" 
                                    class="btn-brand-navy px-8 py-4 rounded-2xl font-bold text-sm shadow-md whitespace-nowrap flex items-center justify-center space-x-2">
                                <span>Validar Certificado</span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Contenedor del Resultado -->
                <div id="cert-resultado-wrapper" class="max-w-4xl mx-auto">
                    <!-- Estado inicial: Información de transparencia -->
                    <div id="cert-estado-inicial" class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 text-center shadow-lg">
                        <div class="w-16 h-16 bg-cyan-50 text-[#00a8cc] rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                            📜
                        </div>
                        <h3 class="text-xl sm:text-2xl font-black text-[#102a71] mb-2 font-display">Transparencia y Seguridad Garantizada</h3>
                        <p class="max-w-xl mx-auto text-sm text-slate-600 leading-relaxed mb-8">
                            Cada intervención técnica de AS Servicios incluye un certificado digital foliado con especificación de químicos utilizados, registro de Salud Pública y periodo de garantía ejecutable.
                        </p>
                        <div class="grid sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto text-xs text-slate-600 pt-6 border-t border-slate-100">
                            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <span class="font-extrabold text-[#102a71] block mb-1.5 text-sm">✔ Válido para Bancos</span>
                                Aceptado en auditorías e inspecciones de desembolso fiduciario en obras civiles.
                            </div>
                            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <span class="font-extrabold text-[#102a71] block mb-1.5 text-sm">✔ Cumplimiento Portuario</span>
                                Aval fitosanitario internacional bajo norma NIMF-15 para navieras y aduanas.
                            </div>
                            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                                <span class="font-extrabold text-[#102a71] block mb-1.5 text-sm">✔ Auditorías Sanitarias</span>
                                Reportes técnicos de Manejo Integrado de Plagas (MIP) para BPM, HACCP y Salud Pública.
                            </div>
                        </div>
                    </div>

                    <!-- Contenedor dinámico de certificado cargado -->
                    <div id="cert-detalle-card" class="hidden"></div>
                </div>

                <!-- Soporte y Verificaciones Manuales -->
                <div class="mt-16 text-center text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
                    <p>¿Es auditor o inspector aduanal y necesita verificación de un folio histórico?</p>
                    <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20verificaci%C3%B3n%20manual%20de%20un%20certificado%20de%20garant%C3%ADa." 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="text-[#00a8cc] font-bold hover:underline inline-block mt-1">
                        Contactar a la Dirección Técnica por WhatsApp →
                    </a>
                </div>

            </div>
        </section>
    `;
}

// Lógica de búsqueda y renderizado del certificado
function buscarCertificado() {
    const input = document.getElementById('cert-query');
    const detalleCard = document.getElementById('cert-detalle-card');
    const estadoInicial = document.getElementById('cert-estado-inicial');
    if (!input || !detalleCard || !estadoInicial) return;

    const query = input.value.trim().toLowerCase();
    if (!query) {
        input.focus();
        return;
    }

    // Búsqueda en la base de datos oficial
    const cert = certificadosDB.find(c => 
        c.codigo.toLowerCase().includes(query) ||
        c.cliente.toLowerCase().includes(query) ||
        c.rnc.toLowerCase().includes(query) ||
        c.proyecto.toLowerCase().includes(query)
    );

    estadoInicial.classList.add('hidden');
    detalleCard.classList.remove('hidden');

    if (cert) {
        // Formato del Badge de estado
        let badgeEstado = '';
        if (cert.estado === 'vigente') {
            badgeEstado = `<span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-[#166534] border border-emerald-300">
                ● VIGENTE Y AUDITABLE
            </span>`;
        } else if (cert.estado === 'revision') {
            badgeEstado = `<span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black bg-yellow-100 text-yellow-800 border border-yellow-300">
                ● EN PROCESO DE MONITOREO
            </span>`;
        } else {
            badgeEstado = `<span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-black bg-red-100 text-red-800 border border-red-300">
                ● GARANTÍA VENCIDA / RENOVACIÓN REQUERIDA
            </span>`;
        }

        detalleCard.innerHTML = `
            <article class="bg-white rounded-3xl shadow-2xl border-2 border-[#00a8cc] overflow-hidden print-area">
                
                <!-- Encabezado del Certificado con el Gradiente Oficial -->
                <div class="bg-gradient-to-r from-[#091738] via-[#0f2b5c] to-[#00a8cc] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b-4 border-[#22c55e]">
                    <div>
                        <span class="text-xs uppercase tracking-widest text-[#86efac] font-bold">🌱 Certificado Oficial de Servicio y Cobertura</span>
                        <h2 class="text-2xl sm:text-3xl font-black text-white mt-1 font-display">AS SERVICIOS SRL</h2>
                        <p class="text-xs text-slate-200">RNC: 1-32-47891-3 • Registro Nacional de Proveedor del Estado • DGII Facturador Electrónico</p>
                    </div>
                    <div class="text-left sm:text-right">
                        <span class="text-xs text-slate-300 block">Folio de Validación:</span>
                        <span class="text-xl sm:text-2xl font-mono font-black text-[#38bdf8]">${sanitizeHTML(cert.codigo)}</span>
                        <div class="mt-2">${badgeEstado}</div>
                    </div>
                </div>

                <!-- Cuerpo del Certificado -->
                <div class="p-6 sm:p-10 space-y-8">
                    
                    <!-- Datos del Cliente y Proyecto -->
                    <div class="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                        <div>
                            <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Empresa Beneficiaria:</span>
                            <h3 class="text-lg font-black text-[#102a71] mt-1">${sanitizeHTML(cert.cliente)}</h3>
                            <p class="text-xs text-slate-600 mt-1"><strong>RNC / Cédula:</strong> ${sanitizeHTML(cert.rnc)}</p>
                        </div>
                        <div>
                            <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Ubicación / Proyecto / Carga:</span>
                            <h4 class="text-base font-bold text-slate-800 mt-1">${sanitizeHTML(cert.proyecto)}</h4>
                            <p class="text-xs text-slate-600 mt-1"><strong>Alcance:</strong> ${sanitizeHTML(cert.areaTratada)}</p>
                        </div>
                    </div>

                    <!-- Especificaciones Técnicas y de Cumplimiento -->
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div>
                                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Servicio Fitosanitario / Tratamiento:</span>
                                <p class="text-sm font-extrabold text-[#102a71] mt-0.5">${sanitizeHTML(cert.servicio)}</p>
                            </div>
                            <div>
                                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Producto Químico & Principio Activo:</span>
                                <p class="text-xs text-slate-700 font-medium mt-0.5">${sanitizeHTML(cert.productoUtilizado)}</p>
                            </div>
                            <div>
                                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Registro Ministerio de Salud Pública:</span>
                                <p class="text-xs font-mono font-bold text-slate-800 mt-0.5">${sanitizeHTML(cert.registroSaludPublica)}</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div>
                                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Vigencia y Duración de Garantía:</span>
                                <p class="text-base font-black text-[#22c55e] mt-0.5">${sanitizeHTML(cert.duracionGarantia)}</p>
                            </div>
                            <div class="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    <span class="text-slate-500 block font-semibold">Fecha de Tratamiento:</span>
                                    <span class="font-bold text-slate-800">${sanitizeHTML(cert.fechaServicio)}</span>
                                </div>
                                <div>
                                    <span class="text-slate-500 block font-semibold">Vencimiento Póliza:</span>
                                    <span class="font-bold text-slate-800">${sanitizeHTML(cert.vencimientoGarantia)}</span>
                                </div>
                            </div>
                            <div>
                                <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block">Técnico Certificado Responsable:</span>
                                <p class="text-xs text-slate-700 font-semibold mt-0.5">${sanitizeHTML(cert.tecnicoResponsable)}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Observaciones y Notas Técnicas -->
                    <div class="p-4 bg-cyan-50 border-l-4 border-[#00a8cc] rounded-r-2xl text-xs text-[#091738] leading-relaxed">
                        <strong>Dictamen Técnico:</strong> ${sanitizeHTML(cert.observaciones)}
                    </div>

                    <!-- Acciones y Descarga -->
                    <div class="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
                        <button type="button" 
                                onclick="window.print()" 
                                class="w-full sm:w-auto btn-brand-navy py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center space-x-2">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                            </svg>
                            <span>Imprimir Comprobante Oficial</span>
                        </button>

                        <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20el%20Certificado%20${encodeURIComponent(cert.codigo)}%20del%20cliente%20${encodeURIComponent(cert.cliente)}."
                           target="_blank"
                           rel="noopener noreferrer"
                           class="w-full sm:w-auto btn-brand-eco py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center space-x-2">
                            <span>Consultar Re-Inspección por WhatsApp</span>
                        </a>
                    </div>

                </div>
            </article>
        `;
    } else {
        detalleCard.innerHTML = `
            <div class="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200 text-center">
                <div class="w-16 h-16 bg-blue-50 text-[#00a8cc] rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                    🛡️
                </div>
                <h3 class="text-xl sm:text-2xl font-black text-[#102a71] mb-2 font-display">Consulta de Folio Oficial</h3>
                <p class="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    No se encontró ningún registro activo para el criterio: <strong class="text-slate-900 font-mono">"${sanitizeHTML(query)}"</strong>.
                    Para validar un certificado físico emitido por AS Servicios o solicitar su copia digital certificada, contacte a nuestra dirección técnica.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-3">
                    <a href="https://wa.me/18092323518?text=Hola%20AS%20Servicios,%20solicito%20validar%20mi%20certificado%20con%20el%20folio:%20${encodeURIComponent(query)}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="btn-brand-eco py-3.5 px-6 rounded-xl font-bold text-xs flex items-center justify-center space-x-2">
                        <span>Validar con Dirección Técnica en WhatsApp</span>
                    </a>
                </div>
            </div>
        `;
    }
}

// Exposición global explícita para compatibilidad total en el navegador
if (typeof window !== 'undefined') {
    window.certificadosDB = certificadosDB;
    window.buscarCertificado = buscarCertificado;
    window.generateCertificadosPage = generateCertificadosPage;
}
