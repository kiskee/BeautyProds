import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials({ id }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <>
      {/* Testimonials Section */}
      <section id={id} className="py-20 px-4 bg-pink-50" ref={sectionRef}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Historias de éxito
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[person1, person2, person3].map((person, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={person}
                    alt={`Testimonio ${index + 1}`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {["Laura S.", "María J.", "Carmen D."][index]}
                    </h4>
                    <div className="flex text-yellow-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 italic">
                  {[
                    "Después de dos embarazos, mi piel había cambiado mucho. Seguí el programa durante 21 días y noté una mejora increíble en la textura de mi piel. Los ejercicios son fáciles de seguir y el plan alimenticio es delicioso.",
                    "He probado muchos productos y métodos sin éxito. Este programa finalmente me dio resultados visibles. Las infusiones son mi parte favorita y ahora forman parte de mi rutina diaria.",
                    "Lo que más me gustó fue la explicación científica de por qué aparece la celulitis. Entender el problema me ayudó a comprometerme con el programa. Ya no me siento avergonzada de mi cuerpo en verano.",
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}