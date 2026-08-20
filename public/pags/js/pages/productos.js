function generateProductosPage() {
    return `
        <!-- Contenido de VENTA DE PRODUCTOS -->
        <section class="py-20 sm:py-32 bg-white fade-in" id="productos-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <span class="text-lg font-semibold text-secondary-green uppercase">Tienda Profesional</span>
                    <h2 class="text-5xl font-extrabold text-primary-blue mt-2">Suministros e Insumos de Grado Industrial</h2>
                    <p class="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">Equipos y consumibles certificados, seleccionados por nuestros técnicos para garantizar la máxima eficacia y seguridad en sus operaciones.</p>
                </div>

                <!-- Categorías Destacadas -->
                <div class="grid md:grid-cols-3 gap-8 mb-16">

                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300">
                        <span class="text-4xl">🧯</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">EPP y Seguridad</h3>
                        <p class="text-gray-600 text-sm">Protección para el aplicador: Máscaras, guantes y trajes.</p>
                        <a href="#" onclick="navigateTo('contacto')" 
                        class="text-sm text-secondary-green font-semibold mt-2 inline-block hover:underline focus-visible">
                            Contáctanos
                        </a>
                    </div>

                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300">
                        <span class="text-4xl">🐛</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">Monitoreo y Cebos</h3>
                        <p class="text-gray-600 text-sm">Sistemas de detección temprana para termitas y roedores.</p>
                        
                        <a href="#" onclick="navigateTo('contacto')" 
                        class="text-sm text-secondary-green font-semibold mt-2 inline-block hover:underline focus-visible">
                            Contáctanos
                        </a>
                    </div>

                    <div class="bg-bg-light p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300">
                        <span class="text-4xl">⚙️</span>
                        <h3 class="font-bold text-xl mt-3 text-primary-blue">Equipos de Aplicación</h3>
                        <p class="text-gray-600 text-sm">Nebulizadores, aspersores y equipos estacionarios.</p>
                        
                        <a href="#" onclick="navigateTo('contacto')" 
                        class="text-sm text-secondary-green font-semibold mt-2 inline-block hover:underline focus-visible">
                            Contáctanos
                        </a>
                    </div>
                </div>

                <!-- Listado de Productos -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/1a3263/ffffff?text=Nebulizadores+&+Bombas" alt="Nebulizadores & Bombas" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')"
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/a8e063/1a3263?text=Cebos+&+Estaciones" alt="Estaciones y Cebos" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/ff7e5f/1a3263?text=Trajes+Overoles" alt="Trajes de Protección & Overoles" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/1a3263/ffffff?text=Aspersores" alt="Aspersores" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/1a3263/ffffff?text=Fumigadoras+Estacionarias" alt="Fumigadoras Estacionarias" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/a8e063/1a3263?text=Insecticidas" alt="Insecticidas" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/ff7e5f/1a3263?text=Rodenticidas" alt="Rodenticidas" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/1a3263/ffffff?text=Mascarillas+&+Mascaras" alt="Mascarillas & Mascaras" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg font-bold text-sm btn-primary focus-visible text-center hover:bg-green-700 transition duration-150">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-500">
                        <img src="https://placehold.co/400x300/a8e063/1a3263?text=Guantes+&+Mas" alt="Guantes & Mas" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <a href="#" onclick="navigateTo('contacto')" 
                            class="block w-full mt-3 bg-secondary-green text-white py-2 rounded-lg text-sm btn-primary font-bold hover:bg-green-700 focus-visible text-center">
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Llamada a la Acción para Venta Mayorista -->
                <div class="mt-20 p-10 bg-primary-blue text-white rounded-2xl shadow-xl text-center">
                    <h3 class="text-3xl font-extrabold">¿Necesita un pedido mayorista?</h3>
                    <p class="mt-3 text-lg opacity-90">Contáctenos para obtener precios especiales por volumen para empresas de construcción o reventa.</p>
                    <a href="#" onclick="navigateTo('contacto')" class="inline-block mt-6 bg-accent-orange text-primary-blue px-8 py-3 rounded-xl font-bold text-lg btn-primary hover:bg-orange-500 focus-visible">
                        Contactar Mayorista
                    </a>
                </div>

                <!-- Información de Envío y Garantía -->
                <div class="mt-12 grid md:grid-cols-3 gap-8">
                    <div class="text-center p-6">
                        <div class="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-2xl">🚚</span>
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-2">Envío Rápido</h4>
                        <p class="text-gray-600 text-sm">Despacho en 24-48 horas para todo el país.</p>
                    </div>
                    <div class="text-center p-6">
                        <div class="bg-accent-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-2xl">🛡️</span>
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-2">Garantía</h4>
                        <p class="text-gray-600 text-sm">Todos nuestros productos incluyen garantía del fabricante.</p>
                    </div>
                    <div class="text-center p-6">
                        <div class="bg-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-2xl">💳</span>
                        </div>
                        <h4 class="font-bold text-lg text-primary-blue mb-2">Pago Seguro</h4>
                        <p class="text-gray-600 text-sm">Múltiples métodos de pago y transacciones seguras.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}