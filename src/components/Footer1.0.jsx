export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-pink-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Zero-Celulitis</h3>
              <p className="text-white">
                Ayudamos a miles de personas a mejorar su piel y aumentar su
                confianza a través de programas basados en ciencia y resultados.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-white hover:text-pink-200 transition"
                  >
                    Sobre el programa
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-white hover:text-pink-200 transition"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#content"
                    className="text-white hover:text-pink-200 transition"
                  >
                    Contenido
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white hover:text-pink-200 transition"
                  >
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p className="text-white mb-2">
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
          <div className="border-t border-pink-700 mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 BeautySkin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
