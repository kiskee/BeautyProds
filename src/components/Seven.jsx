export default function Seven({id}) {
  return (
    <>
      {/* Final CTA Section */}
      <section  id={id} className="py-20 px-4 bg-gradient-to-r from-pink-300 to-pink-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¡Comienza tu transformación hoy!
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-3xl mx-auto">
            Descarga nuestro PDF gratuito y únete a miles de personas que ya han
            transformado su piel y aumentado su confianza.
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
          <p className="text-sm text-gray-900 mt-4">
            *No compartimos tu información. Recibirás solamente el PDF
            solicitado.
          </p>
        </div>
      </section>
    </>
  );
}
