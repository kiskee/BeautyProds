import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Benefits({ id }) {
  // Referencias para los elementos que animaremos
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const cardIconsRef = useRef([]);

  // Limpiar las referencias entre renderizados
  const clearRefs = () => {
    cardsRef.current = [];
    cardIconsRef.current = [];
  };

  useEffect(() => {
    // Limpiar referencias para evitar duplicados
    clearRefs();
    
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Crear un contexto GSAP para mejor rendimiento y limpieza
    const ctx = gsap.context(() => {
      // Animación para el título
      gsap.fromTo(
        titleRef.current,
        { 
          y: 50, 
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
      
      // Decoración animada del título
      const titleDecoration = document.createElement("div");
      titleDecoration.classList.add("title-decoration");
      titleRef.current.appendChild(titleDecoration);
      
      gsap.fromTo(
        titleDecoration,
        { 
          width: 0 
        },
        { 
          width: "80px", 
          duration: 0.8, 
          delay: 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Animación en cascada para las tarjetas
      cardsRef.current.forEach((card, index) => {
        // Animación de entrada para cada tarjeta
        gsap.fromTo(
          card,
          { 
            y: 80, 
            opacity: 0,
            scale: 0.9
          },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.8, 
            delay: 0.2 + (index * 0.15),
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
        
        // Obtener elementos internos de cada tarjeta para animarlos
        const cardTitle = card.querySelector("h3");
        const cardText = card.querySelector("p");
        
        // Animación para el título de la tarjeta
        gsap.fromTo(
          cardTitle,
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            delay: 0.4 + (index * 0.15),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
        
        // Animación para el texto de la tarjeta
        gsap.fromTo(
          cardText,
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            delay: 0.5 + (index * 0.15),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      
      // Animación para los íconos de las tarjetas
      cardIconsRef.current.forEach((icon, index) => {
        // Animación inicial
        gsap.fromTo(
          icon,
          { 
            scale: 0, 
            rotation: -30 
          },
          { 
            scale: 1, 
            rotation: 0, 
            duration: 0.8, 
            delay: 0.3 + (index * 0.15),
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: icon,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
        
        // Animación continua de pulso
        gsap.to(
          icon,
          {
            scale: 1.05,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          }
        );
      });
      
      // Efecto de fondo con partículas
      createParticles();
      
      // Animación de hover para las tarjetas
      cardsRef.current.forEach((card, index) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            backgroundColor: "#FFF5F7", // pink-50
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(cardIconsRef.current[index], {
            backgroundColor: "#FBCFE8", // pink-200
            scale: 1.2,
            duration: 0.4,
            ease: "power1.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            backgroundColor: "#FFFFFF",
            duration: 0.3,
            ease: "power2.out"
          });
          
          gsap.to(cardIconsRef.current[index], {
            backgroundColor: "#FCE7F3", // pink-100
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        });
      });

    }, sectionRef);
    
    return () => {
      ctx.revert(); // Limpia todas las animaciones al desmontar
    };
  }, []);
  
  // Función para crear partículas decorativas en el fondo
  const createParticles = () => {
    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles-container";
    particlesContainer.style.position = "absolute";
    particlesContainer.style.top = "0";
    particlesContainer.style.left = "0";
    particlesContainer.style.width = "100%";
    particlesContainer.style.height = "100%";
    particlesContainer.style.overflow = "hidden";
    particlesContainer.style.pointerEvents = "none";
    particlesContainer.style.zIndex = "0";
    
    sectionRef.current.prepend(particlesContainer);
    
    // Crear partículas
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      
      // Estilo base de la partícula
      Object.assign(particle.style, {
        position: "absolute",
        borderRadius: "50%",
        opacity: "0.2",
        pointerEvents: "none"
      });
      
      // Tamaño y posición aleatoria
      const size = Math.random() * 20 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        top: `${posY}%`,
        left: `${posX}%`,
        backgroundColor: i % 2 === 0 ? "#FCD5CE" : "#F9A8D4" // Colores rosados variados
      });
      
      particlesContainer.appendChild(particle);
      
      // Animación flotante
      gsap.to(particle, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 60 - 30,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  };
  
  // Función para agregar tarjetas a las referencias
  const addToCardRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  // Función para agregar íconos a las referencias
  const addToIconRefs = (el) => {
    if (el && !cardIconsRef.current.includes(el)) {
      cardIconsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Benefits Section */}
      <section id={id} className="py-20 px-4 bg-pink-50 relative overflow-hidden" ref={sectionRef}>
        <div className="container mx-auto relative z-10">
          <div className="relative text-center mb-12">
            <h2 
              ref={titleRef} 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 relative inline-block"
            >
              Beneficios de nuestro programa de 21 días
            </h2>
            <style jsx>{`
              .title-decoration {
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                height: 3px;
                background: linear-gradient(90deg, transparent, #F472B6, transparent);
                border-radius: 3px;
              }
              .particles-container .particle {
                z-index: -1;
              }
            `}</style>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              ref={addToCardRefs} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition relative"
            >
              <div 
                ref={addToIconRefs}
                className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Plan de ejercicios estructurado
              </h3>
              <p className="text-gray-900">
                Ejercicios específicos para cada semana que activan la
                circulación y tonifican las áreas problemáticas, adaptados a
                todos los niveles.
              </p>
            </div>
            <div 
              ref={addToCardRefs} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition relative"
            >
              <div 
                ref={addToIconRefs}
                className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Alimentación anticelulitis
              </h3>
              <p className="text-gray-900">
                Plan alimenticio completo con menús semanales, alimentos
                recomendados ricos en antioxidantes y colágeno, y consejos para
                reducir inflamación.
              </p>
            </div>
            <div 
              ref={addToCardRefs} 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition relative"
            >
              <div 
                ref={addToIconRefs}
                className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4"
              >
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Infusiones y remedios naturales
              </h3>
              <p className="text-gray-900">
                Recetas de tés e infusiones depurativas para complementar tu
                tratamiento, propiedades de tés verdes, rojos y hierbas
                medicinales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}