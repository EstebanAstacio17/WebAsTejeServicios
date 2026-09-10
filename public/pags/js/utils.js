// Lógica del Cotizador en Línea Actualizada V2.0 (RD$ - 2026)
function calcularCotizacion() {
    const areaInput = document.getElementById('area');
    const resultadoDiv = document.getElementById('resultado-cotizador');
    const montoP = document.getElementById('cotizacion-monto');
    const errorDiv = document.getElementById('cotizador-error');
    const whatsappBtn = document.getElementById('cotizar-whatsapp-btn');
    
    if (!areaInput || !resultadoDiv) return;
    
    const servicioSelect = document.getElementById('servicio-tipo');
    const frecuenciaSelect = document.getElementById('frecuencia');
    const tipoClienteSelect = document.getElementById('tipo-cliente');
    
    const tipoServicio = servicioSelect ? servicioSelect.value : 'general';
    const frecuencia = frecuenciaSelect ? frecuenciaSelect.value : 'unica';
    const tipoCliente = tipoClienteSelect ? tipoClienteSelect.value : 'general';
    const area = parseFloat(areaInput.value);

    if (isNaN(area) || area < 50) {
        if (errorDiv) errorDiv.classList.remove('hidden');
        if (resultadoDiv) resultadoDiv.classList.add('hidden');
        return;
    } else {
        if (errorDiv) errorDiv.classList.add('hidden');
    }

    // 1. Tarifa Base por Metro Cuadrado (en RD$) - Estándares 2026
    let tarifaBaseM2 = 0;
    switch (tipoServicio) {
        case 'general': tarifaBaseM2 = 60.00; break;
        case 'termitas': tarifaBaseM2 = 225.00; break;
        case 'especial': tarifaBaseM2 = 95.00; break;
        case 'maritimo': tarifaBaseM2 = 320.00; break;
        default: tarifaBaseM2 = 60.00;
    }

    // 2. Ajustes por Frecuencia (Costo base de visita garantizado)
    let factorFrecuencia = 1.0;
    let bonoFrecuencia = 0;
    switch (frecuencia) {
        case 'unica': factorFrecuencia = 1.00; bonoFrecuencia = 5000; break;
        case 'mensual': factorFrecuencia = 0.85; bonoFrecuencia = 2500; break;
        case 'trimestral': factorFrecuencia = 0.90; bonoFrecuencia = 3500; break;
        case 'anual': factorFrecuencia = 0.80; bonoFrecuencia = 8000; break;
        default: factorFrecuencia = 1.00; bonoFrecuencia = 5000;
    }

    // 3. Multiplicador de Complejidad por Tipo de Cliente (Riesgos Operativos)
    let factorCliente = 1.0;
    switch (tipoCliente) {
        case 'general': factorCliente = 1.00; break;
        case 'residencial': factorCliente = 1.00; break;
        case 'educacion': factorCliente = 1.05; break;
        case 'construccion': factorCliente = 1.15; break;
        case 'naviera': factorCliente = 1.25; break;
        default: factorCliente = 1.00;
    }

    // 4. Cálculo Final
    const costoEstimado = (area * tarifaBaseM2 * factorFrecuencia * factorCliente) + bonoFrecuencia;

    // 5. Formato Moneda Dominicana (RD$)
    const formatoMoneda = new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP',
        minimumFractionDigits: 2
    });

    const montoFormateado = formatoMoneda.format(costoEstimado);

    // Mostrando el resultado
    montoP.textContent = montoFormateado;
    resultadoDiv.classList.remove('hidden');

    // 6. Generación del enlace dinámico de WhatsApp para agendar
    if (whatsappBtn) {
        const servicioNombre = servicioSelect?.selectedOptions[0]?.text || tipoServicio;
        const frecuenciaNombre = frecuenciaSelect?.selectedOptions[0]?.text || frecuencia;
        const clienteNombre = tipoClienteSelect?.selectedOptions[0]?.text || tipoCliente;

        const mensajeWA = `Hola AS-Teje Servicios, realicé una estimación en su sitio web y deseo coordinar la inspección técnica ocular:
- *Servicio requerido:* ${servicioNombre}
- *Área estimada:* ${area} m²
- *Frecuencia deseada:* ${frecuenciaNombre}
- *Tipo de Cliente:* ${clienteNombre}
- *Presupuesto Estimado:* ${montoFormateado}

Por favor confirmar disponibilidad de fecha para la visita.`;

        whatsappBtn.href = `https://wa.me/18092323518?text=${encodeURIComponent(mensajeWA)}`;
    }
}

// Lógica de la Calculadora de Alquiler Actualizada V2.0
function calcularAlquiler() {
    const diasInput = document.getElementById('dias');
    const conTecnicoSelect = document.getElementById('con-tecnico');
    const equipoSelect = document.getElementById('equipo-tipo');
    const montoAlquilerP = document.getElementById('alquiler-monto');
    const whatsappBtn = document.getElementById('alquiler-whatsapp-btn');

    if (!diasInput || !conTecnicoSelect || !montoAlquilerP) return;

    // Tarifas actualizadas a RD$ para 2026 por tipo de equipo
    let tarifaBaseEquipo = 3500.00;
    let equipoNombre = 'Fumigadora Estacionaria KTC 6.5 HP';

    if (equipoSelect) {
        equipoNombre = equipoSelect.selectedOptions[0]?.text || equipoSelect.value;
        switch (equipoSelect.value) {
            case 'estacionaria':
                tarifaBaseEquipo = 3500.00;
                break;
            case 'termonebulizador':
                tarifaBaseEquipo = 4500.00;
                break;
            case 'motomochila':
                tarifaBaseEquipo = 2800.00;
                break;
            case 'bomba-manual':
                tarifaBaseEquipo = 1200.00;
                break;
            default:
                tarifaBaseEquipo = 3500.00;
        }
    }

    const TARIFA_TECNICO_ADICIONAL = 12000.00; // Técnico certificado + Viáticos
    const dias = parseInt(diasInput.value);
    const conTecnico = conTecnicoSelect.value;

    if (isNaN(dias) || dias < 1) {
        diasInput.value = 1;
        return calcularAlquiler();
    }

    let costoDiarioTotal = tarifaBaseEquipo;
    if (conTecnico === 'si') {
        costoDiarioTotal += TARIFA_TECNICO_ADICIONAL;
    }

    let descuento = 0;
    if (dias > 7) {
        descuento = 0.15; // 15% de descuento por más de 1 semana
    }

    const costoTotal = (dias * costoDiarioTotal) * (1 - descuento);

    const formatoMoneda = new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP',
        minimumFractionDigits: 2
    });

    const montoFormateado = formatoMoneda.format(costoTotal);
    montoAlquilerP.textContent = montoFormateado;

    // Generar enlace dinámico de WhatsApp para alquilar
    if (whatsappBtn) {
        const tecnicoTexto = (conTecnico === 'si') ? 'Con Técnico Certificado AS-Teje' : 'Solo Equipo (Sin Operador)';
        const mensajeWA = `Hola AS-Teje Servicios, deseo consultar disponibilidad para alquilar equipos de fumigación:
- *Equipo solicitado:* ${equipoNombre}
- *Duración:* ${dias} día(s)
- *Modalidad:* ${tecnicoTexto}
- *Tarifa Estimada:* ${montoFormateado}

¿Tienen el equipo disponible para entrega?`;

        whatsappBtn.href = `https://wa.me/18092323518?text=${encodeURIComponent(mensajeWA)}`;
    }
}