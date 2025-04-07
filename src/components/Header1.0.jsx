import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (id) => {
  gsap.to(window, { duration: 1.5, scrollTo: `#${id}`, ease: "power2.out" });
};

export default function Header() {
  const headerRef = useRef(null);
  const [key, setKey] = useState(0);
  const text = "Zero-Celulitis";

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="fixed w-full bg-white bg-opacity-90 shadow-md z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <div className="text-pink-600 font-bold text-2xl">BeautySkin</div> */}
          <motion.h1
            key={key} // Reinicia la animación cambiando la clave
            className="text-2xl sm:text-4xl font-bold text-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="ml-1 text-4xl"
              initial={{ opacity: 0 }} // Inicia invisible
              animate={{ opacity: [0, 1, 0] }} // Luego empieza a titilar
              transition={{ delay: 1, repeat: Infinity, duration: 0.8 }} // Espera 3s antes de titilar
            >
              .
            </motion.span>
          </motion.h1>
          <nav className="hidden md:flex space-x-6 text-xl">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              Sobre el programa
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("content")}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              Contenido
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-900 hover:text-pink-500 transition"
            >
              Testimonios
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
