"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  destination: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    location: "Ciudad de México, México",
    avatar: "MG",
    rating: 5,
    text: "Fue el viaje de mis sueños. El itinerario a Santorini fue perfecto: cada detalle, cada hotel, cada excursión superó mis expectativas. El equipo de Wanderlust estuvo siempre disponible. ¡Definitivamente regresaré!",
    destination: "Santorini, Grecia",
    date: "Febrero 2026",
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    location: "Bogotá, Colombia",
    avatar: "CR",
    rating: 5,
    text: "Bali fue una experiencia transformadora. Los guías locales eran increíbles y conocían lugares que no encontrarías en ninguna guía turística. El servicio de Wanderlust es de clase mundial.",
    destination: "Bali, Indonesia",
    date: "Enero 2026",
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Buenos Aires, Argentina",
    avatar: "AM",
    rating: 5,
    text: "La Patagonia con Wanderlust fue épica. Glaciares, condores, paisajes que te dejan sin palabras. El equipo de logística es impecable. No hay mejor forma de viajar que con expertos de tu lado.",
    destination: "Patagonia, Argentina",
    date: "Diciembre 2025",
  },
  {
    id: 4,
    name: "Jorge Hernández",
    location: "Lima, Perú",
    avatar: "JH",
    rating: 5,
    text: "Todo perfecto desde el primer momento. La atención personalizada hace la diferencia. Me ayudaron a planificar un viaje único para mi aniversario. Mi esposa quedó encantada. 100% recomendado.",
    destination: "Santorini & Roma",
    date: "Marzo 2026",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-white/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function AvatarCircle({ initials, color }: { initials: string; color: string }) {
  const colors: Record<string, string> = {
    MG: "from-blue-500 to-cyan-400",
    CR: "from-emerald-500 to-teal-400",
    AM: "from-violet-500 to-purple-400",
    JH: "from-orange-500 to-amber-400",
  };
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[initials] || "from-azul-medio to-azul-marino"} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function Testimonios() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonios" className="py-24 bg-oscuro relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-azul-medio/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-azul-marino/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-azul-medio text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonios
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Lo que dicen nuestros{" "}
            <span className="gradient-text">viajeros</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Miles de viajeros han confiado en nosotros para crear sus memorias
            más preciadas. Estas son sus historias.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="reveal mb-8">
          <div className="glass-dark rounded-3xl p-8 md:p-10 border border-white/8 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-8xl text-azul-medio/10 font-playfair select-none pointer-events-none">
              "
            </div>

            <div className="flex items-start gap-4 mb-6">
              <AvatarCircle
                initials={testimonials[active].avatar}
                color=""
              />
              <div>
                <p className="font-semibold text-white text-base">
                  {testimonials[active].name}
                </p>
                <p className="text-white/50 text-sm">
                  {testimonials[active].location}
                </p>
                <div className="mt-1">
                  <StarRating rating={testimonials[active].rating} />
                </div>
              </div>
              <div className="ml-auto text-right hidden sm:block">
                <span className="text-xs text-azul-medio font-medium bg-azul-medio/10 px-3 py-1 rounded-full">
                  {testimonials[active].destination}
                </span>
                <p className="text-white/40 text-xs mt-1">{testimonials[active].date}</p>
              </div>
            </div>

            <blockquote className="text-white/80 text-lg leading-relaxed font-light italic">
              "{testimonials[active].text}"
            </blockquote>
          </div>
        </div>

        {/* Testimonial thumbnails */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              id={`testimonial-${t.id}`}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                active === i
                  ? "border-azul-medio/60 bg-azul-medio/10 scale-105"
                  : "border-white/8 glass hover:border-white/20 hover:scale-102"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <AvatarCircle initials={t.avatar} color="" />
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold truncate">
                    {t.name.split(" ")[0]}
                  </p>
                  <StarRating rating={t.rating} />
                </div>
              </div>
              <p className="text-white/50 text-xs line-clamp-2 leading-relaxed">
                {t.text.substring(0, 60)}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
