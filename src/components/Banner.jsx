//import { useTranslation } from "react-i18next";
import pielImage from "../assets/piel.png";
import pielImage2 from '../assets/celu8.jpeg'

export default function Banner() {
 // const { t } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-8 flex-grow">
        <div className="bg-gradient-to-r from-pink-300 to-pink-200 rounded-lg shadow-lg mb-8 sm:mb-10 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-4 sm:p-6">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-800 mb-3 sm:mb-4">
                Transforma tu piel: Cero Celulitis y Flacidez
              </h2>
              <p className="text-pink-700 mb-4 sm:mb-6 text-sm sm:text-base">
                Descubre nuestro revolucionario tratamiento que combate la
                celulitis y flacidez de manera efectiva. Resultados visibles
                desde la primera sesión con técnicas avanzadas y productos de
                alta calidad.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 shadow-md transition-all font-medium text-sm sm:text-base">
                Comprar ahora
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={pielImage}
                alt="Piel Firme y Radiante"
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover shadow-lg"
              />
              <img
                src={pielImage2}
                alt="Piel Firme y Radiante"
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full object-cover shadow-lg ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
