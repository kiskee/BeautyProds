import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registramos el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function NewComponen() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const sectionsRef = useRef([]);

  // Función para añadir referencias a las secciones
  const addToSections = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

//   useEffect(() => {
//     // Animación del header
//     gsap.from(headerRef.current, {
//       y: -100,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Animación del hero
//     gsap.from(heroRef.current.children, {
//       opacity: 0,
//       y: 50,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power3.out",
//       delay: 0.5,
//     });

//     // Animación para el botón CTA
//     gsap.to(ctaButtonRef.current, {
//       scale: 1.05,
//       repeat: -1,
//       yoyo: true,
//       duration: 1.5,
//     });

//     // Animaciones para cada sección al hacer scroll
//     sectionsRef.current.forEach((section, index) => {
//       gsap.from(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         delay: 0.1 * index,
//       });
//     });

//     return () => {
//       // Limpieza de animaciones
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

  return (
    <>
      <div className="font-sans min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Header */}
        <header
          ref={headerRef}
          className="fixed w-full bg-white bg-opacity-90 shadow-md z-50"
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-black font-bold text-2xl">BeautySkin</div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-500 transition"
              >
                Sobre el programa
              </a>
              <a
                href="#benefits"
                className="text-gray-700 hover:text-pink-500 transition"
              >
                Beneficios
              </a>
              <a
                href="#content"
                className="text-gray-700 hover:text-pink-500 transition"
              >
                Contenido
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-pink-500 transition"
              >
                Testimonios
              </a>
            </nav>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              Contacto
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-pink-100 to-pink-200">
          <div ref={heroRef} className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-800 mb-6">
              Transforma tu piel en 21 días
            </h1>
            <p className="text-xl md:text-2xl text-pink-700 mb-8 max-w-3xl mx-auto">
              Descubre el poder de eliminar la celulitis con nuestro programa
              completo basado en ciencia y resultados comprobados
            </p>
            <button
              ref={ctaButtonRef}
              className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg"
            >
              ¡DESCARGA GRATIS TU GUÍA AHORA!
            </button>
            <div className="mt-12 flex justify-center">
              <img
                src="/api/placeholder/600/400"
                alt="Resultados del programa anti-celulitis"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={addToSections} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
              ¿Qué es la celulitis y por qué aparece?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Tipos de celulitis"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                  Comprende tu cuerpo
                </h3>
                <p className="text-gray-700 mb-4">
                  La celulitis afecta al 90% de las mujeres en algún momento de
                  sus vidas, independientemente de su peso o condición física.
                  No es solo un problema estético, sino una condición natural
                  del tejido graso subcutáneo.
                </p>
                <p className="text-gray-700 mb-4">
                  En nuestra guía completa encontrarás información sobre:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span>Tipos de celulitis: blanda, dura y edematosa</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span>Factores que contribuyen a su aparición</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-pink-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-5 h-5 text-pink-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span>Impacto emocional y autoestima</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          ref={addToSections}
          className="py-20 px-4 bg-pink-50"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
              Beneficios de nuestro programa de 21 días
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  Plan de ejercicios estructurado
                </h3>
                <p className="text-gray-600">
                  Ejercicios específicos para cada semana que activan la
                  circulación y tonifican las áreas problemáticas, adaptados a
                  todos los niveles.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  Alimentación anticelulitis
                </h3>
                <p className="text-gray-600">
                  Plan alimenticio completo con menús semanales, alimentos
                  recomendados ricos en antioxidantes y colágeno, y consejos
                  para reducir inflamación.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  Infusiones y remedios naturales
                </h3>
                <p className="text-gray-600">
                  Recetas de tés e infusiones depurativas para complementar tu
                  tratamiento, propiedades de tés verdes, rojos y hierbas
                  medicinales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Preview Section */}
        <section id="content" ref={addToSections} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
              ¿Qué incluye nuestro PDF?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-pink-100 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-4">
                    Contenido del programa:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Introducción y comprensión de la celulitis
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Plan de ejercicios para 3 semanas completas
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Plan de alimentación anticelulitis
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Recetas de infusiones y tés depurativos
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Consejos para masajes y cepillado en seco
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Historias de éxito y testimonios
                      </span>
                    </li>
                    <li className="flex">
                      <div className="text-pink-600 font-bold mr-2">✓</div>
                      <span className="text-gray-700">
                        Referencias científicas y recursos adicionales
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <button className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg">
                    DESCARGAR AHORA
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/api/placeholder/400/600"
                  alt="Vista previa del PDF"
                  className="rounded-lg shadow-xl mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-lg font-bold py-2 px-6 rounded-full transform rotate-12">
                  ¡GRATIS!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          ref={addToSections}
          className="py-20 px-4 bg-pink-50"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-12">
              Historias de éxito
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="/api/placeholder/60/60"
                    alt="Testimonio 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-pink-700">Laura S.</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Después de dos embarazos, mi piel había cambiado mucho. Seguí
                  el programa durante 21 días y noté una mejora increíble en la
                  textura de mi piel. Los ejercicios son fáciles de seguir y el
                  plan alimenticio es delicioso."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="/api/placeholder/60/60"
                    alt="Testimonio 2"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-pink-700">María J.</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "He probado muchos productos y métodos sin éxito. Este
                  programa finalmente me dio resultados visibles. Las infusiones
                  son mi parte favorita y ahora forman parte de mi rutina
                  diaria."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src="/api/placeholder/60/60"
                    alt="Testimonio 3"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-pink-700">Carmen D.</h4>
                    <div className="flex text-yellow-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Lo que más me gustó fue la explicación científica de por qué
                  aparece la celulitis. Entender el problema me ayudó a
                  comprometerme con el programa. Ya no me siento avergonzada de
                  mi cuerpo en verano."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          ref={addToSections}
          className="py-20 px-4 bg-gradient-to-r from-pink-300 to-pink-200"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-6">
              ¡Comienza tu transformación hoy!
            </h2>
            <p className="text-xl text-pink-700 mb-8 max-w-3xl mx-auto">
              Descarga nuestro PDF gratuito y únete a miles de personas que ya
              han transformado su piel y aumentado su confianza.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="px-6 py-3 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-8 py-3 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg w-full md:w-auto">
                ENVIARME EL PDF
              </button>
            </div>
            <p className="text-sm text-pink-700 mt-4">
              *No compartimos tu información. Recibirás solamente el PDF
              solicitado.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-pink-800 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">BeautySkin</h3>
                <p className="text-pink-200">
                  Ayudamos a miles de personas a mejorar su piel y aumentar su
                  confianza a través de programas basados en ciencia y
                  resultados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-pink-200 hover:text-white transition"
                    >
                      Sobre el programa
                    </a>
                  </li>
                  <li>
                    <a
                      href="#benefits"
                      className="text-pink-200 hover:text-white transition"
                    >
                      Beneficios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#content"
                      className="text-pink-200 hover:text-white transition"
                    >
                      Contenido
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-pink-200 hover:text-white transition"
                    >
                      Testimonios
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                <p className="text-pink-200 mb-2">
                  ¿Tienes alguna pregunta? No dudes en contactarnos.
                </p>
                <a
                  href="mailto:info@beautyskin.com"
                  className="text-white underline"
                >
                  info@beautyskin.com
                </a>
              </div>
            </div>
            <div className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-200">
              <p>&copy; 2025 BeautySkin. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
