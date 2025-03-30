import celuIMG from "../assets/celu8.jpeg"


export default function Three({id}) {
  return (
    <>
      {/* About Section */}
      <section className="py-20 px-4"  id={id}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Qué es la celulitis y por qué aparece?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="lg:pl-24">
              <img
                src={celuIMG}
                alt="Tipos de celulitis"
                className="rounded-lg shadow-lg h-94 w-94"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprende tu cuerpo
              </h3>
              <p className="text-gray-900 mb-4">
                La celulitis afecta al 90% de las mujeres en algún momento de
                sus vidas, independientemente de su peso o condición física. No
                es solo un problema estético, sino una condición natural del
                tejido graso subcutáneo.
              </p>
              <p className="text-gray-900 mb-4">
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
                  <span className="text-gray-900">
                    Tipos de celulitis: blanda, dura y edematosa
                  </span>
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
                  <span className="text-gray-900">
                    Factores que contribuyen a su aparición
                  </span>
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
                  <span className="text-gray-900">
                    Impacto emocional y autoestima
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
