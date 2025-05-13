import { useState, useEffect } from 'react';

const slides = [
  { id: 1, img: '/special.svg', title: 'Slide 1' },
  { id: 2, img: '/oferta.svg', title: 'Slide 2' },
  { id: 3, img: '/img3.jpg', title: 'Slide 3' },
];

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Reinicia el índice si llega al final
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia automáticamente cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 text-white text-4xl">{slide.title}</div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
