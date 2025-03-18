import React from "react";

const StepsComponent = () => {
  const steps = [
    {
      number: 1,
      title: "Descarga la app",
      description:
        "¡Recibirás una lista de ingredientes con propiedades exclusivas para secar toda la celulitis y eliminar la inflamación y la hinchazón de tu cuerpo!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Alimentación balanceada",
      description:
        "Seguirás una dieta completa para todas las comidas durante los próximos 21 días. ¡Todas estas comidas están cuidadosamente preparadas con ingredientes que eliminarán la inflamación y la hinchazón de tu cuerpo, hasta que no quede más celulitis!",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Ejercicio regular",
      description:
        "Seguirás un programa de entrenamiento exclusivo para acelerar aún más la eliminación de la celulitis.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Hidratación constante",
      description:
        "Mientras comes y entrenas correctamente, aprenderás a preparar tés especiales que resecan toda la celulitis y eliminan la inflamación y el exceso de líquido de tu cuerpo. Es el poder de la medicina forestal de tu lado.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Rutina de cuidado",
      description:
        "Sigue una dieta saludable y una rutina de ejercicios y deshazte de la celulitis para siempre.  ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  // Función para renderizar flechas según la posición
  const renderArrow = (index) => {
    // Para los elementos en la primera fila (índices 0 y 1)
    if (index < 2) {
      return (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      );
    }
    // Para los elementos en la segunda fila (índices 2 y 3)
    else if (index < 4) {
      if (index === 2) {
        return (
          <div className="absolute -right-6 top-1/2 transform translate-y-1/2 rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-600 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        );
      }
      return (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-pink-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-b from-pink-100 to-pink-200 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-600 animate-pulse">
        Elimina la celulitis en 21 días
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {steps.slice(0, 4).map((step, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102 hover:bg-pink-50 relative"
          >
            <div className="flex items-center mb-3">
              <div className="flex-shrink-0 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-bounce">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-pink-600">
                PASO {step.number}
              </h3>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 shadow-md transform transition-transform hover:rotate-12">
                {step.icon}
              </div>
              <p className="text-gray-800">{step.description}</p>
            </div>

            {renderArrow(index)}
          </div>
        ))}
      </div>

      {/* Último paso centrado */}
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-102 hover:bg-pink-50 w-full md:w-1/2 mx-auto">
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3 animate-bounce">
              {steps[4].number}
            </div>
            <h3 className="text-xl font-semibold text-pink-600">
              PASO {steps[4].number}
            </h3>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mr-4 shadow-md transform transition-transform hover:rotate-12">
              {steps[4].icon}
            </div>
            <p className="text-gray-800">{steps[4].description}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 font-bold">
          ¡Comienza ahora tu transformación!
        </button>
      </div>
    </div>
  );
};

export default StepsComponent;
