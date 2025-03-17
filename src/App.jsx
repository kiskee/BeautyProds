import React, { useState } from "react";

const beautyServices = [
  {
    id: 1,
    title: "Tratamiento Facial",
    description:
      "Revitaliza tu piel con nuestro tratamiento facial personalizado.",
    price: "$45",
    image: "/api/placeholder/300/200",
  },
  {
    id: 2,
    title: "Manicure & Pedicure",
    description: "Cuida tus manos y pies con nuestros servicios premium.",
    price: "$35",
    image: "/api/placeholder/300/200",
  },
  {
    id: 3,
    title: "Maquillaje Profesional",
    description:
      "Luce espectacular para cualquier ocasión con nuestros expertos.",
    price: "$60",
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    title: "Extensiones de Pestañas",
    description: "Realza tu mirada con nuestras extensiones de pestañas.",
    price: "$50",
    image: "/api/placeholder/300/200",
  },
  {
    id: 5,
    title: "Masaje Relajante",
    description: "Elimina el estrés con nuestros masajes terapéuticos.",
    price: "$70",
    image: "/api/placeholder/300/200",
  },
  {
    id: 6,
    title: "Tratamiento Capilar",
    description: "Recupera la salud y brillo de tu cabello.",
    price: "$55",
    image: "/api/placeholder/300/200",
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-gradient-to-r from-pink-500 to-pink-400 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              BeautyApp
            </h1>

            {/* Botón hamburguesa para móvil */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Navegación para desktop */}
            <nav className="hidden md:flex gap-2 lg:gap-4">
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                Inicio
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                Servicios
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all text-sm lg:text-base">
                Productos
              </button>
              <button className="px-3 py-1 lg:px-4 lg:py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium shadow-sm transition-all text-sm lg:text-base">
                Contacto
              </button>
            </nav>
          </div>

          {/* Menú móvil expandible */}
          {isMenuOpen && (
            <nav className="md:hidden mt-3 pb-3 flex flex-col gap-2">
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                Inicio
              </button>
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                Servicios
              </button>
              <button className="px-4 py-2 bg-white text-pink-500 rounded-md hover:bg-pink-50 font-medium shadow-sm transition-all w-full text-left">
                Productos
              </button>
              <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 font-medium shadow-sm transition-all w-full text-left">
                Contacto
              </button>
            </nav>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        {/* Banner */}
        <div className="bg-gradient-to-r from-pink-300 to-pink-200 rounded-lg shadow-lg mb-8 sm:mb-10 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-4 sm:p-6">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-3 sm:mb-4">
                Descubre tu Belleza Natural
              </h2>
              <p className="text-pink-700 mb-4 sm:mb-6 text-sm sm:text-base">
                Ofrecemos los mejores tratamientos y productos para realzar tu
                belleza natural.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 shadow-md transition-all font-medium text-sm sm:text-base">
                Reservar Cita
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full bg-pink-100 shadow-lg flex items-center justify-center">
                <span className="text-base sm:text-lg text-pink-500 font-medium">
                  Imagen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-4 sm:mb-6 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {beautyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-32 sm:h-40 md:h-48 bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-400">Imagen del servicio</span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-medium text-pink-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-500 font-bold">
                      {service.price}
                    </span>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition-colors shadow-sm text-sm sm:text-base">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg p-4 sm:p-6 md:p-8 text-center shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            ¿Lista para transformar tu imagen?
          </h2>
          <p className="text-pink-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Únete a nuestra comunidad y recibe ofertas exclusivas, consejos de
            belleza y más.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm text-sm sm:text-base w-full"
            />
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 shadow-md transition-all font-medium text-sm sm:text-base whitespace-nowrap">
              Suscribirse
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-pink-900 text-pink-100 py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">BeautyApp</h3>
              <p className="text-pink-200">
                Tu destino para la belleza y cuidado personal
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-white">Enlaces</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Productos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Contacto</h4>
                <ul className="space-y-1">
                  <li className="hover:text-white transition-colors">Email</li>
                  <li className="hover:text-white transition-colors">
                    Teléfono
                  </li>
                  <li className="hover:text-white transition-colors">
                    Ubicación
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Síguenos</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-800 mt-6 pt-4 text-center text-pink-300">
            <p className="text-sm sm:text-base">
              &copy; 2025 BeautyApp. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
