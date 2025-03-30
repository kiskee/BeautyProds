import portadaIMG from "../assets/portada.jpeg"

export default function Content({id}) {
  return (
    <>
      {/* Content Preview Section */}
      <section  id={id} className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Qué incluye nuestro PDF?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-pink-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contenido del programa:
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Introducción y comprensión de la celulitis
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Plan de ejercicios para 3 semanas completas
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Plan de alimentación anticelulitis
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Recetas de infusiones y tés depurativos
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Consejos para masajes y cepillado en seco
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Historias de éxito y testimonios
                    </span>
                  </li>
                  <li className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">
                      Referencias científicas y recursos adicionales
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg">
                  COMPRALO AHORA
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={portadaIMG}
                alt="Vista previa del PDF"
                className="rounded-lg shadow-xl mx-auto h-[650px]"
              />
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white text-lg font-bold py-2 px-6 rounded-full transform rotate-12">
                ¡Best Seller!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
