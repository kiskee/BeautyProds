

const celulitisProgram = [
  {
    id: 1,
    title: "Comprendiendo la Celulitis",
    description: "Conoce los tipos de celulitis y los factores que contribuyen a su aparición.",
    price: "Módulo 1",
    image: "/api/placeholder/300/200",
    translationKey: "understanding"
  },
  {
    id: 2,
    title: "Plan de Ejercicios en Casa",
    description: "Rutinas de 21 días diseñadas para combatir la celulitis eficazmente.",
    price: "Módulo 2",
    image: "/api/placeholder/300/200",
    translationKey: "exercises"
  },
  {
    id: 3,
    title: "Plan de Alimentación Anticelulitis",
    description: "Alimentos recomendados y menús semanales para reducir la celulitis.",
    price: "Módulo 3",
    image: "/api/placeholder/300/200",
    translationKey: "nutrition"
  },
  {
    id: 4,
    title: "Infusiones y Tés Beneficiosos",
    description: "Propiedades de tés e infusiones que ayudan a combatir la celulitis.",
    price: "Módulo 4",
    image: "/api/placeholder/300/200",
    translationKey: "teas"
  },
  {
    id: 5,
    title: "Consejos Adicionales",
    description: "Hidratación, masajes y herramientas complementarias para mejores resultados.",
    price: "Módulo 5",
    image: "/api/placeholder/300/200",
    translationKey: "tips"
  },
  {
    id: 6,
    title: "Historias de Éxito",
    description: "Testimonios reales e inspiración para mantener la constancia en el programa.",
    price: "Módulo 6",
    image: "/api/placeholder/300/200",
    translationKey: "success"
  },
];

export default function Main() {
 
  return (
    <>
      <main className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-bold text-pink-800 mb-4 sm:mb-6 text-center">
            Programa de 21 días para Eliminar la Celulitis
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <p className="text-gray-700 mb-4">
              Descubre el poder de eliminar la celulitis con nuestro programa estructurado de 21 días. 
              Aprende sobre los diferentes tipos de celulitis, implementa ejercicios efectivos, 
              mejora tu alimentación y transforma tu estilo de vida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {celulitisProgram.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-32 sm:h-40 md:h-48 bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-400">
                    Imagen del módulo
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-medium text-pink-700 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {module.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-500 font-bold">
                      {module.price}
                    </span>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition-colors shadow-sm text-sm sm:text-base">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-pink-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-pink-700 mb-4">¿Por qué elegir nuestro programa?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Plan estructurado de 21 días con resultados visibles</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Ejercicios diseñados específicamente para combatir la celulitis</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Plan de alimentación completo con menús semanales</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Consejos prácticos y recursos complementarios</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">✓</span>
                <span>Historias reales que te motivarán a mantener la constancia</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}