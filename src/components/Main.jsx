import { useTranslation } from "react-i18next";

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

export default function Main() {
  const { t } = useTranslation();
  return (
    <>
      <main className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-800 mb-4 sm:mb-6 text-center">
            {t("main.services.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {beautyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-32 sm:h-40 md:h-48 bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-400">
                    {t("main.services.imageAlt")}
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-medium text-pink-700 mb-2">
                    {t(`main.services.${service.translationKey}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {t(`main.services.${service.translationKey}.description`)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-500 font-bold">
                      {service.price}
                    </span>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition-colors shadow-sm text-sm sm:text-base">
                      {t("main.services.button")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
