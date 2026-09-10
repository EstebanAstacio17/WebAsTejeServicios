// Base de datos de Certificados de Garantía Oficiales Emitidos (Auditable)
const certificadosDB = [
    {
        codigo: "AST-2025-0482",
        cliente: "Constructora JFortuna SRL",
        rnc: "1-31-89421-5",
        proyecto: "Torre Residencial Vista Marina, Piantini",
        servicio: "Protección Anti-Termitas Estructural Pre-Vaciado (Barrera Química de Suelo)",
        areaTratada: "1,850 m² de zapata y cimentación",
        fechaServicio: "14 de Enero, 2025",
        vencimientoGarantia: "14 de Enero, 2030",
        duracionGarantia: "5 Años por Escrito",
        estado: "vigente", // vigente, revision, vencido
        productoUtilizado: "Termiticida Clorpirifos / Fipronil de Grado Profesional",
        registroSaludPublica: "MSP-DIGEP-2023-4189",
        tecnicoResponsable: "Ing. R. Méndez (Lic. Operador Fito-Sanitario #084)",
        observaciones: "Barrera química de saturación perimetral completa. Monitoreo semestral programado."
    },
    {
        codigo: "AST-2026-0115",
        cliente: "CAMU Logistics Services SRL",
        rnc: "1-32-04518-2",
        proyecto: "Despacho de Contenedores Terminal Portuaria Haina Oriental",
        servicio: "Fumigación Marítima y Fitosanitaria NIMF-15 (Madera de Embalaje)",
        areaTratada: "14 Contenedores High Cube 40ft (Carga de Exportación)",
        fechaServicio: "02 de Febrero, 2026",
        vencimientoGarantia: "02 de Mayo, 2026",
        duracionGarantia: "Certificado de Cuarentena Marítima Internacional",
        estado: "vigente",
        productoUtilizado: "Fosfuro de Aluminio / Tratamiento Gasificado Certificado",
        registroSaludPublica: "MSP-FIT-2024-0092",
        tecnicoResponsable: "Téc. Manuel Almonte (Certificación Portuaria CIPF-ISPM)",
        observaciones: "Nivel de concentración y desgasificación certificado con 0 ppm residual post-cuarentena."
    },
    {
        codigo: "AST-2025-0920",
        cliente: "Condominio Al Día (CONDAY SRL)",
        rnc: "1-30-74512-8",
        proyecto: "Complejo Residencial y Comercial Bella Vista",
        servicio: "Manejo Integrado de Plagas Comercial & Cordón Sanitario Perimetral",
        areaTratada: "4,200 m² (Áreas Comunes, Soterrados y Ductos de Basura)",
        fechaServicio: "18 de Septiembre, 2025",
        vencimientoGarantia: "18 de Septiembre, 2026",
        duracionGarantia: "1 Año (Póliza de Mantenimiento Trimestral)",
        estado: "vigente",
        productoUtilizado: "Insecticidas Microencapsulados de Acción Residual + Estaciones Cebaderas",
        registroSaludPublica: "MSP-BPM-2023-7714",
        tecnicoResponsable: "Téc. Carlos Peña (Especialista en Control Urbano)",
        observaciones: "Inspecciones de control trimestrales al día. Próxima visita programada."
    },
    {
        codigo: "AST-2024-0310",
        cliente: "Operaciones Logísticas del Caribe",
        rnc: "1-28-66231-9",
        proyecto: "Almacén Central de Mercancías Secas Km 18",
        servicio: "Desinsectación y Control de Roedores Industrial",
        areaTratada: "3,100 m² de nave techada",
        fechaServicio: "10 de Marzo, 2024",
        vencimientoGarantia: "10 de Marzo, 2025",
        duracionGarantia: "1 Año",
        estado: "vencido",
        productoUtilizado: "Gel Cucarachicida + Bloques Anticoagulantes de 2da Gen",
        registroSaludPublica: "MSP-MIP-2022-1543",
        tecnicoResponsable: "Téc. Manuel Almonte",
        observaciones: "Periodo de garantía finalizado. Se recomienda auditoría de renovación de cordón sanitario."
    }
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

// Generador de la vista de Certificados
function generateCertificadosPage() {
    return `
        <section class="py-16 sm:py-24 bg-bg-light fade-in" id="certificados-main">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <!-- Encabezado Institucional -->
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                        <span>🛡️ Portal de Consulta Oficial</span>
                        <span>•</span>
                        <span>Auditoría de Garantías</span>
                    </div>
                    <h1 class="text-3xl sm:text-5xl font-extrabold text-primary-blue mt-1">
                        Validación de Certificados de Garantía
                    </h1>
                    <p class="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Consulte la autenticidad, cobertura y vigencia de los certificados emitidos por 
                        <strong>AS-Teje Servicios SRL</strong> para navieras, puertos, proyectos de construcción y empresas.
                    </p>
                </div>

                <!-- Caja de Búsqueda -->
                <div class="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 max-w-3xl mx-auto mb-12">
                    <form id="cert-search-form" onsubmit="event.preventDefault(); buscarCertificado();" class="space-y-4">
                        <label for="cert-query" class="block text-sm font-bold text-gray-700">
                            Ingrese el Número de Certificado, RNC o Nombre del Proyecto
                        </label>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <div class="relative flex-grow">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input type="text" 
                                       id="cert-query" 
                                       placeholder="Ej: AST-2025-0482, AST-2026-0115..." 
                                       class="w-full pl-11 p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-green focus:border-secondary-green focus-visible text-base">
                            </div>
                            <button type="submit" 
                                    class="bg-secondary-green text-primary-blue font-extrabold px-8 py-3.5 rounded-xl btn-primary hover:bg-emerald-400 focus-visible transition shadow-md whitespace-nowrap">
                                Validar Certificado
                            </button>
                        </div>
                        <div class="pt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                            <span class="font-semibold">Búsquedas de prueba:</span>
                            <button type="button" onclick="cargarEjemploCert('AST-2025-0482')" class="underline hover:text-primary-blue font-mono bg-gray-100 px-2 py-1 rounded">AST-2025-0482 (Construcción)</button>
                            <button type="button" onclick="cargarEjemploCert('AST-2026-0115')" class="underline hover:text-primary-blue font-mono bg-gray-100 px-2 py-1 rounded">AST-2026-0115 (Naviera)</button>
                            <button type="button" onclick="cargarEjemploCert('AST-2025-0920')" class="underline hover:text-primary-blue font-mono bg-gray-100 px-2 py-1 rounded">AST-2025-0920 (Condominio)</button>
                        </div>
                    </form>
                </div>

                <!-- Contenedor del Resultado -->
                <div id="cert-resultado-wrapper" class="max-w-4xl mx-auto">
                    <!-- Estado inicial: Información de transparencia -->
                    <div id="cert-estado-inicial" class="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 text-center text-gray-600 shadow-md">
                        <div class="w-16 h-16 bg-blue-50 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                            📜
                        </div>
                        <h3 class="text-xl font-bold text-primary-blue mb-2">Transparencia y Seguridad Garantizada</h3>
                        <p class="max-w-xl mx-auto text-sm leading-relaxed mb-4">
                            Cada intervención técnica de AS-Teje Servicios incluye un certificado digital foliado con especificación de químicos utilizados, registro de Salud Pública y periodo de garantía ejecutable.
                        </p>
                        <div class="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto text-xs text-gray-500 pt-4 border-t border-gray-100">
                            <div>
                                <span class="font-bold text-primary-blue block mb-1">✔ Válido para Bancos:</span>
                                Certificados antitermitas aceptados en inspecciones de desembolso de préstamos de construcción.
                            </div>
                            <div>
                                <span class="font-bold text-primary-blue block mb-1">✔ Cumplimiento Portuario:</span>
                                Aval fitosanitario internacional bajo norma NIMF-15 para navieras y aduanas.
                            </div>
                            <div>
                                <span class="font-bold text-primary-blue block mb-1">✔ Auditorías Sanitarias:</span>
                                Reportes técnicos de Manejo Integrado de Plagas (MIP) para BPM y Salud Pública.
                            </div>
                        </div>
                    </div>

                    <!-- Contenedor dinámico de certificado cargado -->
                    <div id="cert-detalle-card" class="hidden"></div>
                </div>

                <!-- Soporte y Verificaciones Manuales -->
                <div class="mt-16 text-center text-sm text-gray-500 max-w-xl mx-auto">
                    <p>¿Es auditor o inspector aduanal y necesita verificación manual de un folio antiguo?</p>
                    <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20verificaci%C3%B3n%20manual%20de%20un%20certificado%20de%20garant%C3%ADa." 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="text-accent-orange font-bold hover:underline inline-block mt-1">
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
            badgeEstado = `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-green-100 text-green-800 border border-green-300">
                ● VIGENTE Y AUDITABLE
            </span>`;
        } else if (cert.estado === 'revision') {
            badgeEstado = `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-yellow-100 text-yellow-800 border border-yellow-300">
                ● EN PROCESO DE MONITOREO
            </span>`;
        } else {
            badgeEstado = `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-red-100 text-red-800 border border-red-300">
                ● GARANTÍA VENCIDA / RENOVACIÓN REQUERIDA
            </span>`;
        }

        detalleCard.innerHTML = `
            <article class="bg-white rounded-3xl shadow-2xl border-2 border-secondary-green overflow-hidden print-area">
                
                <!-- Encabezado del Certificado -->
                <div class="bg-primary-blue text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b-4 border-secondary-green">
                    <div>
                        <span class="text-xs uppercase tracking-widest text-secondary-green font-bold">Certificado Oficial de Servicio y Cobertura</span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-1">AS-TEJE SERVICIOS SRL</h2>
                        <p class="text-xs text-gray-300">RNC: 1-32-47891-3 • Registro Nacional de Proveedor del Estado • DGII Facturador Electrónico</p>
                    </div>
                    <div class="text-right">
                        <span class="text-xs text-gray-400 block">Folio de Validación:</span>
                        <span class="text-xl sm:text-2xl font-mono font-extrabold text-accent-orange">${sanitizeHTML(cert.codigo)}</span>
                        <div class="mt-2">${badgeEstado}</div>
                    </div>
                </div>

                <!-- Cuerpo del Certificado -->
                <div class="p-6 sm:p-10 space-y-8">
                    
                    <!-- Datos del Cliente y Proyecto -->
                    <div class="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div>
                            <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Empresa Beneficiaria:</span>
                            <h3 class="text-lg font-extrabold text-primary-blue mt-1">${sanitizeHTML(cert.cliente)}</h3>
                            <p class="text-xs text-gray-600 mt-1"><strong>RNC / Cédula:</strong> ${sanitizeHTML(cert.rnc)}</p>
                        </div>
                        <div>
                            <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Ubicación / Proyecto / Carga:</span>
                            <h4 class="text-base font-bold text-gray-800 mt-1">${sanitizeHTML(cert.proyecto)}</h4>
                            <p class="text-xs text-gray-600 mt-1"><strong>Alcance:</strong> ${sanitizeHTML(cert.areaTratada)}</p>
                        </div>
                    </div>

                    <!-- Especificaciones Técnicas y de Cumplimiento -->
                    <div class="grid sm:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div>
                                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Servicio Fitosanitario / Tratamiento:</span>
                                <p class="text-sm font-extrabold text-primary-blue mt-0.5">${sanitizeHTML(cert.servicio)}</p>
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Producto Químico & Principio Activo:</span>
                                <p class="text-xs text-gray-700 font-medium mt-0.5">${sanitizeHTML(cert.productoUtilizado)}</p>
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Registro Ministerio de Salud Pública:</span>
                                <p class="text-xs font-mono font-bold text-gray-800 mt-0.5">${sanitizeHTML(cert.registroSaludPublica)}</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div>
                                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Vigencia y Duración de Garantía:</span>
                                <p class="text-base font-extrabold text-secondary-green mt-0.5">${sanitizeHTML(cert.duracionGarantia)}</p>
                            </div>
                            <div class="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    <span class="text-gray-500 block font-semibold">Fecha de Tratamiento:</span>
                                    <span class="font-bold text-gray-800">${sanitizeHTML(cert.fechaServicio)}</span>
                                </div>
                                <div>
                                    <span class="text-gray-500 block font-semibold">Vencimiento Póliza:</span>
                                    <span class="font-bold text-gray-800">${sanitizeHTML(cert.vencimientoGarantia)}</span>
                                </div>
                            </div>
                            <div>
                                <span class="text-xs text-gray-500 font-bold uppercase tracking-wider block">Técnico Certificado Responsable:</span>
                                <p class="text-xs text-gray-700 font-semibold mt-0.5">${sanitizeHTML(cert.tecnicoResponsable)}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Observaciones y Notas Técnicas -->
                    <div class="p-4 bg-emerald-50 border-l-4 border-secondary-green rounded-r-xl text-xs text-emerald-900 leading-relaxed">
                        <strong>Dictamen Técnico:</strong> ${sanitizeHTML(cert.observaciones)}
                    </div>

                    <!-- Acciones y Descarga -->
                    <div class="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
                        <button type="button" 
                                onclick="window.print()" 
                                class="w-full sm:w-auto bg-primary-blue text-white py-3 px-6 rounded-xl font-bold text-sm btn-primary flex items-center justify-center space-x-2 shadow-md hover:bg-blue-900">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                            </svg>
                            <span>Imprimir Comprobante de Validación</span>
                        </button>

                        <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20informaci%C3%B3n%20sobre%20el%20Certificado%20${encodeURIComponent(cert.codigo)}%20del%20cliente%20${encodeURIComponent(cert.cliente)}."
                           target="_blank"
                           rel="noopener noreferrer"
                           class="w-full sm:w-auto bg-[#25D366] text-white py-3 px-6 rounded-xl font-bold text-sm btn-primary flex items-center justify-center space-x-2 shadow-md hover:bg-emerald-600">
                            <span>Consultar Re-Inspección por WhatsApp</span>
                        </a>
                    </div>

                </div>
            </article>
        `;
    } else {
        detalleCard.innerHTML = `
            <div class="bg-white p-8 rounded-3xl shadow-xl border border-red-200 text-center">
                <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ⚠️
                </div>
                <h3 class="text-xl font-bold text-primary-blue mb-2">Certificado No Encontrado</h3>
                <p class="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    No se encontró ningún registro para el criterio: <strong class="text-gray-900 font-mono">"${sanitizeHTML(query)}"</strong>.
                    Por favor verifique el número en su documento físico o consulte a nuestro departamento de control de calidad.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-3">
                    <button type="button" onclick="cargarEjemploCert('AST-2025-0482')" class="bg-gray-100 text-gray-700 py-2.5 px-5 rounded-xl font-bold text-xs hover:bg-gray-200">
                        Probar con Folio de Ejemplo
                    </button>
                    <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20no%20pude%20localizar%20mi%20certificado%20en%20el%20portal%20con%20el%20criterio:%20${encodeURIComponent(query)}"
                       target="_blank"
                       rel="noopener noreferrer"
                       class="bg-[#25D366] text-white py-2.5 px-5 rounded-xl font-bold text-xs hover:bg-emerald-600 flex items-center justify-center space-x-2">
                        <span>Verificar con un Asesor en WhatsApp</span>
                    </a>
                </div>
            </div>
        `;
    }
}

// Carga rápida de ejemplos desde los botones auxiliares
function cargarEjemploCert(codigo) {
    const input = document.getElementById('cert-query');
    if (input) {
        input.value = codigo;
        buscarCertificado();
    }
}

// Exposición global explícita para compatibilidad total en el navegador
if (typeof window !== 'undefined') {
    window.certificadosDB = certificadosDB;
    window.buscarCertificado = buscarCertificado;
    window.cargarEjemploCert = cargarEjemploCert;
    window.generateCertificadosPage = generateCertificadosPage;
}
