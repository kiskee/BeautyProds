import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portadaIMG from "../assets/portada.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Content({ id }) {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    const button = buttonRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      img,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: img,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      button,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: button,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id={id} className="py-20 px-4">
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
                {[
                  "Introducción y comprensión de la celulitis",
                  "Plan de ejercicios para 3 semanas completas",
                  "Plan de alimentación anticelulitis",
                  "Recetas de infusiones y tés depurativos",
                  "Consejos para masajes y cepillado en seco",
                  "Historias de éxito y testimonios",
                  "Referencias científicas y recursos adicionales",
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="text-pink-600 font-bold mr-2">✓</div>
                    <span className="text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <button
                ref={buttonRef}
                className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg"
              >
                COMPRALO AHORA
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              ref={imgRef}
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
  );
}
