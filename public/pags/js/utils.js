// Lógica del Cotizador en Línea Actualizada V2.0 (RD$ - 2026)
function calcularCotizacion() {
const areaInput = document.getElementById('area');
const resultadoDiv = document.getElementById('resultado-cotizador');
const montoP = document.getElementById('cotizacion-monto');
const errorDiv = document.getElementById('cotizador-error');
if (!areaInput || !resultadoDiv) return;
const tipoServicio = document.getElementById('servicio-tipo').value;
const frecuencia = document.getElementById('frecuencia').value;
const tipoCliente = document.getElementById('tipo-cliente').value;
const area = parseFloat(areaInput.value);
if (isNaN(area) || area < 50) {
if (errorDiv) errorDiv.classList.remove('hidden');
if (resultadoDiv) resultadoDiv.classList.add('hidden');
areaInput.focus();
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
}
// 2. Ajustes por Frecuencia (Costo base de visita garantizado)
let factorFrecuencia = 1.0;
let bonoFrecuencia = 0;
switch (frecuencia) {
case 'unica': factorFrecuencia = 1.00; bonoFrecuencia = 5000; break;
case 'mensual': factorFrecuencia = 0.85; bonoFrecuencia = 2500; break;
case 'trimestral': factorFrecuencia = 0.90; bonoFrecuencia = 3500; break;
case 'anual': factorFrecuencia = 0.80; bonoFrecuencia = 8000; break;
}
// 3. Multiplicador de Complejidad por Tipo de Cliente (Riesgos Operativos)
let factorCliente = 1.0;
switch (tipoCliente) {
case 'general': factorCliente = 1.00; break;
case 'residencial': factorCliente = 1.00; break;
case 'educacion': factorCliente = 1.05; break;
case 'construccion': factorCliente = 1.15; break;
case 'naviera': factorCliente = 1.25; break;
}
// 4. Cálculo Final
let costoEstimado = (area * tarifaBaseM2 * factorFrecuencia * factorCliente) +
bonoFrecuencia;
// 5. Formato Moneda Dominicana (RD$)
const formatoMoneda = new Intl.NumberFormat('es-DO', {
style: 'currency',
currency: 'DOP',
minimumFractionDigits: 2
});
// Mostrando el resultado
montoP.textContent = formatoMoneda.format(costoEstimado);
resultadoDiv.classList.remove('hidden');
}
// Lógica de la Calculadora de Alquiler Actualizada V2.0
function calcularAlquiler() {
const diasInput = document.getElementById('dias');
const conTecnicoSelect = document.getElementById('con-tecnico');
const montoAlquilerP = document.getElementById('alquiler-monto');
if (!diasInput || !conTecnicoSelect || !montoAlquilerP) return;
// Tarifas actualizadas a RD$ para 2026 (Equipos Especializados y Mano de Obra Calificada)
const TARIFA_BASE_EQUIPO = 3500.00; // Equipo industrial/profesional por día
const TARIFA_TECNICO_ADICIONAL = 12000.00; // Técnico certificado + Viáticos
const dias = parseInt(diasInput.value);
const conTecnico = conTecnicoSelect.value;
if (isNaN(dias) || dias < 1) {
diasInput.value = 1;
return calcularAlquiler();
}
let costoDiarioTotal = TARIFA_BASE_EQUIPO;
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
montoAlquilerP.textContent = formatoMoneda.format(costoTotal);
}