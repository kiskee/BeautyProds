import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import celuIMG from "../assets/celu8.jpeg";

export default function About({ id }) {
  // Referencias para los elementos que animaremos
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const listItemRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Configuración del contexto para mejor rendimiento
    const ctx = gsap.context(() => {
      // Crear animación para el título principal cuando aparece en viewport
      gsap.fromTo(
        titleRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animación de revelación para el contenedor de imagen
      gsap.fromTo(
        imageContainerRef.current,
        {
          x: -80,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animación para la imagen misma
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.9,
          filter: "blur(5px)"
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Efecto brillante en la imagen
      gsap.to(imageRef.current, {
        boxShadow: "0 0 30px rgba(236, 72, 153, 0.4), 0 10px 25px rgba(0,0,0,0.2)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Animación para el contenido de texto
      gsap.fromTo(
        contentRef.current,
        {
          x: 80,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Animación en cascada para el subtítulo y párrafos
      const contentElements = [
        subtitleRef.current,
        paragraph1Ref.current,
        paragraph2Ref.current
      ];

      contentElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.3 + (index * 0.15),
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Animación en cascada para los items de la lista
      listItemRefs.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            x: -20,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.7 + (index * 0.12),
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );

        // Animación para los íconos dentro de los items
        gsap.fromTo(
          item.querySelector("div"),
          {
            scale: 0,
            rotation: -30
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.8 + (index * 0.12),
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Efecto parallax suave para la imagen
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(imageRef.current, {
            y: progress * 40,
            rotation: progress * 3,
            duration: 0.1
          });
        }
      });

      // Animación en hover para los items de la lista
      listItemRefs.current.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            x: 5,
            duration: 0.3,
            ease: "power1.out"
          });
          gsap.to(item.querySelector("div"), {
            backgroundColor: "#FBCFE8", // pink-200
            scale: 1.1,
            duration: 0.3
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: "power1.out"
          });
          gsap.to(item.querySelector("div"), {
            backgroundColor: "#FCE7F3", // pink-100
            scale: 1,
            duration: 0.3
          });
        });
      });
    }, sectionRef);

    // Limpieza
    return () => {
      ctx.revert(); // Limpia todas las animaciones creadas en este contexto
    };
  }, []);

  // Función para agregar items de la lista a las referencias
  const addToListRefs = (el) => {
    if (el && !listItemRefs.current.includes(el)) {
      listItemRefs.current.push(el);
    }
  };

  return (
    <>
      {/* About Section */}
      <section ref={sectionRef} className="py-20 px-4 overflow-hidden" id={id}>
        <div className="container mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 relative"
          >
            <span className="relative inline-block">
              ¿Qué es la celulitis y por qué aparece?
              <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-300 transform scale-x-0 origin-left" ref={el => {
                if (el) {
                  gsap.to(el, {
                    scaleX: 1,
                    duration: 1,
                    delay: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: titleRef.current,
                      start: "top 80%",
                      toggleActions: "play none none none"
                    }
                  });
                }
              }}></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={imageContainerRef}
              className="lg:pl-24 relative"
            >
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-pink-100 opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-pink-200 opacity-50"></div>
              <img
                ref={imageRef}
                src={celuIMG}
                alt="Tipos de celulitis"
                className="rounded-lg shadow-lg h-94 w-94 relative z-10"
              />
            </div>
            <div ref={contentRef}>
              <h3
                ref={subtitleRef}
                className="text-2xl font-semibold text-gray-900 mb-4"
              >
                Comprende tu cuerpo
              </h3>
              <p
                ref={paragraph1Ref}
                className="text-gray-900 mb-4"
              >
                La celulitis afecta al 90% de las mujeres en algún momento de
                sus vidas, independientemente de su peso o condición física. No
                es solo un problema estético, sino una condición natural del
                tejido graso subcutáneo.
              </p>
              <p
                ref={paragraph2Ref}
                className="text-gray-900 mb-4"
              >
                En nuestra guía completa encontrarás información sobre:
              </p>
              <ul className="space-y-2 mb-6">
                <li
                  ref={addToListRefs}
                  className="flex items-center cursor-pointer"
                >
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
                <li
                  ref={addToListRefs}
                  className="flex items-center cursor-pointer"
                >
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
                <li
                  ref={addToListRefs}
                  className="flex items-center cursor-pointer"
                >
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