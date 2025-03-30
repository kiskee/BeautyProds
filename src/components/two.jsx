import butsIMG from "../assets/buts1.png";

export default function Two({ id }) {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 bg-gradient-to-r from-pink-100 to-pink-200"
        id={id}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforma tu piel en 21 días
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Descubre el poder de eliminar la celulitis con nuestro programa
            completo basado en ciencia y resultados comprobados
          </p>
          <button className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg">
            ¡COMPRA TU GUÍA AHORA!
          </button>
          <div className="mt-12 flex justify-center">
            <img
              src={butsIMG}
              alt="Resultados del programa anti-celulitis"
              className="rounded-lg shadow-xl h-[450px] w-[600px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
