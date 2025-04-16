import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import butsIMG from "../assets/buts1.png";

export default function Hero({ id }) {
  // Referencias para los elementos que animaremos
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Registrar ScrollTrigger con GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Timeline principal
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animación inicial de la sección
    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );

    // Animación del título con efecto de revelación
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );

    // Animación del texto descriptivo
    tl.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.5"
    );

    // Animación del botón con rebote
    tl.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Animación de la imagen con efecto de revelación
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    // Efecto flotante continuo para el botón
    gsap.to(buttonRef.current, {
      y: "-8px",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Efecto sutil de brillo para la imagen
    gsap.to(imageRef.current, {
      boxShadow:
        "0 0 20px rgba(236, 72, 153, 0.6), 0 10px 20px rgba(0,0,0,0.2)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animación al hacer scroll
    gsap.fromTo(
      imageRef.current,
      { rotation: 0 },
      {
        rotation: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Efecto parallax para el fondo
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(sectionRef.current, {
          backgroundPosition: `${progress * 20}% ${progress * 10}%`,
          duration: 0.1,
        });
      },
    });

    // Limpieza al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf([
        titleRef.current,
        descriptionRef.current,
        buttonRef.current,
        imageRef.current,
      ]);
    };
  }, []);

  // Animación hover para el botón
  const onButtonHover = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const onButtonLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handlePurchaseClick = () => {
    // Ahora podemos usar directamente fbq que está disponible globalmente
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 8.00,
        currency: 'USD',
        content_ids: ['12345'],
        content_type: 'product'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="pt-32 pb-20 px-4 bg-gradient-to-r from-pink-100 to-pink-200 relative overflow-hidden"
        id={id}
        style={{ backgroundSize: "200% 200%", backgroundPosition: "0% 0%" }}
      >
        {/* Círculos decorativos animados */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-pink-300 opacity-20"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Transforma tu piel en 21 días
          </h1>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto"
          >
            Descubre el poder de eliminar la celulitis con nuestro programa
            completo basado en ciencia y resultados comprobados
          </p>
          <button
            ref={buttonRef}
            className="px-8 py-4 bg-pink-600 text-white text-lg rounded-full hover:bg-pink-700 transition shadow-lg relative"
            onMouseEnter={onButtonHover}
            onMouseLeave={onButtonLeave}
            onClick={handlePurchaseClick}
          >
            <a href="https://pay.hotmart.com/W99056782N?bid=1743999619668">¡COMPRA TU GUÍA AHORA!</a>
            
            <div className="absolute inset-0 rounded-full bg-white opacity-30 transform scale-0" />
          </button>
          <div className="mt-12 flex justify-center">
            <img
              ref={imageRef}
              src={butsIMG}
              alt="Resultados del programa anti-celulitis"
              className="rounded-lg shadow-xl h-[450px] w-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Estilos para las animaciones de los círculos */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </>
  );
}
