function generateProductosPage() {
    return `
        <!-- Contenido de VENTA DE PRODUCTOS -->
        <section class="py-20 sm:py-28 bg-white fade-in" id="productos-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-lg font-semibold text-secondary-green uppercase">Tienda Profesional & Insumos</span>
                    <h2 class="text-4xl sm:text-5xl font-extrabold text-primary-blue mt-2">Suministros e Insumos de Grado Industrial</h2>
                    <p class="mt-4 text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">Equipos y consumibles certificados, seleccionados por nuestros técnicos para garantizar la máxima eficacia, cumplimiento de normativas sanitarias y bioseguridad.</p>
                </div>

                <!-- Categorías Destacadas -->
                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 border-t-4 border-accent-orange">
                        <span class="text-4xl">🧯</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">EPP y Bioseguridad</h3>
                        <p class="text-gray-600 text-sm mt-1">Protección para el aplicador: Mascarillas con filtro para vapores orgánicos, guantes de nitrilo y trajes químicos.</p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-sm text-primary-blue font-bold mt-3 inline-block hover:underline focus-visible">
                            Solicitar Catálogo EPP →
                        </a>
                    </div>

                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 border-t-4 border-secondary-green">
                        <span class="text-4xl">🐛</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">Monitoreo y Cebos</h3>
                        <p class="text-gray-600 text-sm mt-1">Sistemas de detección temprana con llave de seguridad para roedores, cebos antitermitas y trampas de luz UV.</p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-sm text-primary-blue font-bold mt-3 inline-block hover:underline focus-visible">
                            Solicitar Sistemas de Cebo →
                        </a>
                    </div>

                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary-blue">
                        <span class="text-4xl">⚙️</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">Equipos de Aplicación</h3>
                        <p class="text-gray-600 text-sm mt-1">Termonebulizadores ULV, motomochilas a combustión, bombas de espalda y pulverizadores de compresión previa.</p>
                        <a href="#contacto" onclick="navigateTo('contacto')" 
                           class="text-sm text-primary-blue font-bold mt-3 inline-block hover:underline focus-visible">
                            Cotizar Maquinaria →
                        </a>
                    </div>
                </div>

                <!-- Listado de Productos con Fichas Claras -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <!-- Producto 1: Nebulizador ULV -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-primary-blue mb-3">Equipo Industrial</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Nebulizadores Eléctricos ULV</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Microgotas de 5 a 50 micras para desinfección profunda en naves industriales, centros médicos, silos y bodegas marítimas. Alto alcance y penetración.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Cobertura uniforme en espacios cerrados</li>
                                <li>✔ Regulador de caudal ajustable</li>
                                <li>✔ Operación silenciosa y eficiente</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Nebulizador%20El%C3%A9ctrico%20ULV."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 2: Estaciones Cebaderas -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-3">Control de Roedores</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Estaciones Cebaderas con Cerradura</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Fabricadas en polímero de alta resistencia a la intemperie. Sistema de cierre seguro que protege a niños y mascotas, aptas para auditorías sanitarias y BPM.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Cumple normativas sanitarias locales e intl.</li>
                                <li>✔ Varillas metálicas para fijación de bloques</li>
                                <li>✔ Llave universal de seguridad incluida</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Estaciones%20Cebaderas%20de%20Seguridad."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 3: Trajes de Protección EPP -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800 mb-3">Bioseguridad & EPP</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Overoles de Protección Química</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Trajes impermeables micro-porosos con capucha elástica, diseñados para barrera contra partículas finas, nieblas y salpicaduras de plaguicidas.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Certificación Tipo 5/6 contra químicos</li>
                                <li>✔ Antiestático y transpirable</li>
                                <li>✔ Tallas M, L, XL y XXL disponibles</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Trajes%20de%20Protecci%C3%B3n%20Qu%C3%ADmica%20EPP."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 4: Aspersores de Compresión -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-primary-blue mb-3">Aplicación Precisa</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Aspersores de Presión 8L y 16L</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Tanques presurizables de polietileno reforzado con lanza de bronce para aplicación perimetral focalizada en zócalos, grietas y juntas estructurales.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Boquillas de abanico y cono regulable</li>
                                <li>✔ Válvula de alivio de sobrepresión</li>
                                <li>✔ Sellos Viton resistentes a químicos</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Aspersores%20de%20Presi%C3%B3n."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 5: Fumigadoras Estacionarias -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 mb-3">Equipo de Alta Capacidad</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Fumigadoras Estacionarias 6.5 HP</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Motor a combustión de 4 tiempos con bomba triple pistón cerámico. Capacidad de presión sostenida para tratamientos en grandes obras y buques.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Alcance de manguera hasta 100 metros</li>
                                <li>✔ Caudal regulable de alto rendimiento</li>
                                <li>✔ Venta y servicio de mantenimiento técnico</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20Fumigadora%20Estacionaria%206.5HP."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                    <!-- Producto 6: Respiradores con Filtro -->
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between">
                        <div class="p-6">
                            <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-orange-100 text-orange-800 mb-3">Protección Respiratoria</span>
                            <h4 class="text-xl font-bold text-primary-blue mb-2">Máscaras de Media Cara con Filtros</h4>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                                Respiradores elastoméricos con cartuchos dobles para vapores orgánicos y prefiltros de partículas P95/P100, para uso profesional continuo.
                            </p>
                            <ul class="text-xs text-gray-500 space-y-1 mb-4">
                                <li>✔ Ajuste ergonómico de 4 puntos</li>
                                <li>✔ Cartuchos recambiables certificados</li>
                                <li>✔ Máxima protección contra emanaciones</li>
                            </ul>
                        </div>
                        <div class="p-6 pt-0 space-y-2">
                            <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20M%C3%A1scaras%20de%20Protecci%C3%B3n%20Respiratoria."
                               target="_blank"
                               rel="noopener noreferrer"
                               class="block w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg font-bold text-sm btn-primary text-center">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

                <!-- Llamada a la Acción para Venta Mayorista -->
                <div class="mt-20 p-8 sm:p-12 bg-primary-blue text-white rounded-3xl shadow-xl text-center">
                    <h3 class="text-2xl sm:text-3xl font-extrabold">¿Requiere un pedido mayorista o institucional?</h3>
                    <p class="mt-3 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">Ofrecemos precios corporativos por volumen para empresas de construcción, administración de condominios o navieras, con comprobante fiscal (NCF).</p>
                    <div class="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/18092323518?text=Hola%20AS-Teje%20Servicios,%20solicito%20cotizaci%C3%B3n%20para%20pedido%20mayorista%20de%20insumos."
                           target="_blank"
                           rel="noopener noreferrer"
                           class="bg-secondary-green text-primary-blue px-8 py-3 rounded-xl font-bold text-base btn-primary hover:bg-emerald-400 focus-visible">
                            Consultar Pedido Mayorista por WhatsApp
                        </a>
                        <a href="#contacto" onclick="navigateTo('contacto')"
                           class="bg-accent-orange text-primary-blue px-8 py-3 rounded-xl font-bold text-base btn-primary hover:bg-orange-500 focus-visible">
                            Enviar Requerimiento por Formulario
                        </a>
                    </div>
                </div>

                <!-- Información de Confianza y Respaldo -->
                <div class="mt-16 grid md:grid-cols-3 gap-8">
                    <div class="text-center p-6 bg-bg-light rounded-2xl">
                        <div class="bg-secondary-green rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-2xl">
                            🚚
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-1">Despacho Confiable</h4>
                        <p class="text-gray-600 text-sm">Entregas coordinadas en Santo Domingo y envíos a todo el territorio nacional.</p>
                    </div>
                    <div class="text-center p-6 bg-bg-light rounded-2xl">
                        <div class="bg-accent-orange rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-2xl">
                            🛡️
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-1">Calidad Garantizada</h4>
                        <p class="text-gray-600 text-sm">Insumos y equipos probados en nuestras operaciones bajo estándares de bioseguridad.</p>
                    </div>
                    <div class="text-center p-6 bg-bg-light rounded-2xl">
                        <div class="bg-primary-blue rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-2xl">
                            📜
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-1">Facturación Formal</h4>
                        <p class="text-gray-600 text-sm">Facturador electrónico habilitado por la DGII con comprobantes fiscales válidos.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}