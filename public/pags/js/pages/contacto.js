function generateContactoPage() {
    return `
        <section class="py-16 sm:py-24 bg-primary-blue/90 fade-in" id="contacto-main">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-start">
                    
                    <div class="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                        <h2 class="text-3xl font-bold text-primary-blue mb-6">Solicita un Asesoramiento</h2>
                        <p class="text-gray-600 mb-6">Complete el formulario y un especialista se contactará con usted en menos de 24 horas.</p>
                        
                        <form action="https://formspree.io/f/xblbvqga" method="POST" class="space-y-4">
                            
                            <input type="hidden" name="_subject" value="Nueva Solicitud Web" />

                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
                                    <input type="text" id="nombre" name="Nombre Completo" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                                </div>
                                <div>
                                    <label for="empresa" class="block text-sm font-medium text-gray-700 mb-1">Empresa / Institución</label>
                                    <input type="text" id="empresa" name="Empresa/Institución" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                                </div>
                            </div>
                            
                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email de Contacto *</label>
                                    <input type="email" id="email" name="_replyto" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                                </div>
                                <div>
                                    <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                                    <input type="tel" id="telefono" name="Teléfono" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                                </div>
                            </div>

                            <div>
                                <label for="servicio-interes" class="block text-sm font-medium text-gray-700 mb-1">Servicio de Interés *</label>
                                <select id="servicio-interes" name="Servicio de Interés" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                                    <option value="">Seleccione un servicio</option>
                                    <option value="Control de Plagas Comerciales">Control de Plagas Comerciales</option>
                                    <option value="Control de Termitas">Control de Termitas</option>
                                    <option value="Fumigación Marítima">Fumigación Marítima</option>
                                    <option value="Fumigación">Fumigación</option>
                                    <option value="Venta de Productos">Venta de Productos</option>
                                    <option value="Venta de Equipos">Venta de Equipos</option>
                                    <option value="Alquiler de Equipos">Alquiler de Equipos</option>
                                    <option value="Capacitación y Asesoramiento">Capacitación y Asesoramiento</option>
                                    <option value="Otros">Otros</option>
                                </select>
                            </div>

                            <div>
                                <label for="ubicacion" class="block text-sm font-medium text-gray-700 mb-1">Ubicación del Proyecto</label>
                                <input type="text" id="ubicacion" name="Ubicación del Proyecto" placeholder="Ciudad, Provincia" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible">
                            </div>

                            <div>
                                <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1">Mensaje / Descripción del Problema *</label>
                                <textarea id="mensaje" name="Mensaje/Problema" rows="4" required placeholder="Describa su necesidad o el problema de plagas que está enfrentando..." class="w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary-green focus:border-secondary-green focus-visible"></textarea>
                            </div>

                            <div class="flex items-center">
                                <input type="checkbox" id="privacidad" name="Acepta Política de Privacidad" required class="w-4 h-4 text-secondary-green border-gray-300 rounded focus:ring-secondary-green">
                                <label for="privacidad" class="ml-2 text-sm text-gray-600">
                                    Acepto la <a href="#" class="text-primary-blue hover:underline">Política de Privacidad</a> y el tratamiento de mis datos.
                                </label>
                            </div>

                            <button type="submit" class="w-full bg-accent-orange text-primary-blue py-3 rounded-xl font-bold text-lg btn-primary hover:bg-orange-500 focus-visible">
                                Enviar Solicitud
                            </button>
                        </form>

                        <div class="mt-6 p-4 bg-bg-light rounded-lg border border-gray-200">
                            <p class="text-sm text-gray-600 text-center">
                                <span class="font-semibold">Respuesta garantizada en 24 horas</span><br>
                                Nuestro equipo se contactará para programar una inspección.
                            </p>
                        </div>
                    </div>

                    <div class="pt-8 text-white">
                        <h3 class="text-3xl font-bold mb-4 text-white">Contacto Directo</h3>
                        <p class="text-xl mb-8">Estamos listos para ofrecerte la solución de control de plagas que su proyecto necesita.</p>

                        <ul class="space-y-6">

                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-secondary-green mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path class="svg-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                
                                <div>
                                    <span class="text-lg font-semibold">WhatsApp Business</span><br>
                                    
                                    <a href="https://wa.me/18092323518" target="_blank" rel="noopener noreferrer" class="text-gray-200 hover:text-secondary-green transition duration-300">
                                        (809) 232-3518
                                    </a>
                                </div>
                            </li>

                            <li class="flex items-center">
                                <svg class="w-6 h-6 text-secondary-green mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path class="svg-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-8 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                
                                <div>
                                    <span class="text-lg font-semibold">Email</span><br>
                                    
                                    <a href="mailto:contacto@astejeservicios.com" 
                                    class="text-gray-200 hover:text-secondary-green transition duration-300">
                                        contacto@astejeservicios.com
                                    </a>
                                </div>
                            </li>

                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-secondary-green mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                    <path class="svg-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path class="svg-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                
                                <div>
                                    <span class="text-lg font-semibold">Oficina Principal</span><br>
                                    
                                    <a href="https://maps.app.goo.gl/QPdHDLm6mxzTLuUKA" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    class="text-gray-200 hover:text-secondary-green transition duration-300">
                                        Aut. Duarte, Km. 13, Distrito Nacional, Rep. Dom.
                                    </a>
                                </div>
                            </li>

                        </ul>
                        
                        <div class="mt-8">
                            <h4 class="text-xl font-bold mb-4 text-secondary-green">Horarios de Atención</h4>
                            <ul class="space-y-2 bg-white/10 p-4 rounded-lg">
                                <li class="flex justify-between">
                                    <span>Lunes - Viernes:</span>
                                    <span class="font-semibold">09:00 AM - 05:00 PM</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Sábados:</span>
                                    <span class="font-semibold">09:00 AM - 12:00 PM</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Emergencias:</span>
                                    <span class="font-semibold text-accent-orange">24/7</span>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-8">
                            <h4 class="text-xl font-bold mb-4 text-secondary-green">Áreas de Servicio</h4>
                            <div class="grid grid-cols-2 gap-2 text-sm">
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Puertos</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Navieras</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Aeropuertos</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Construcción</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Colegios</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Hospitales</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Hoteles</span>
                                </div>
                                <div class="bg-white/10 p-3 rounded">
                                    <span class="font-semibold">Industrias</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 space-y-3">
                            <a href="tel:+18092323518" class="w-full bg-secondary-green text-primary-blue py-3 rounded-xl font-bold text-lg btn-primary hover:bg-green-700 focus-visible block text-center">
                                Llamar Ahora
                            </a>
                            <a href="https://wa.me/18092323518" class="w-full bg-white text-primary-blue py-3 rounded-xl font-bold text-lg btn-primary hover:bg-gray-200 focus-visible block text-center">
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div class="h-64 bg-gray-200 flex items-center justify-center">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60545.49134567066!2d-70.0302753!3d18.4794367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8b7813472ee7%3A0x8370b1e4fc739d89!2sAS-TEJE%20SERVICIOS%20SRL!5e0!3m2!1sen!2sdo!4v1762920039308!5m2!1sen!2sdo" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="p-6">
                        <h4 class="text-xl font-bold text-primary-blue mb-2">Nuestra Ubicación</h4>
                        <p class="text-gray-600 mb-3">Estamos estratégicamente ubicados para servir a toda la región con rapidez y eficiencia.</p>
                        <a href="https://maps.app.goo.gl/9wK1FJ3jBrNsmjCk6" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="inline-block text-accent-orange font-semibold hover:underline transition">
                        Ver en Google Maps →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    `;
}