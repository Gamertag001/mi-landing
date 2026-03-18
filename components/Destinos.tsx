"use client";

interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  price: string;
  duration: string;
  rating: string;
  badge: string;
  gradient: string;
  emoji: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini",
    country: "Grecia",
    description:
      "Vistas al Egeo desde cúpulas azules, atardeceres mágicos en Oia y playas de arena volcánica única.",
    price: "desde $6.500.000",
    duration: "7 días",
    rating: "4.9",
    badge: "Más Popular",
    gradient: "from-blue-600 via-cyan-500 to-blue-400",
    emoji: "🏛️",
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    description:
      "Templos entre arrozales, selvas tropicales, surf en playas cristalinas y cultura espiritual única.",
    price: "desde $4.779.999",
    duration: "10 días",
    rating: "4.8",
    badge: "Oferta Especial",
    gradient: "from-emerald-600 via-teal-500 to-cyan-400",
    emoji: "🌺",
  },
  {
    id: 3,
    name: "Patagonia",
    country: "Argentina & Chile",
    description:
      "Glaciares imponentes, Torres del Paine, lagos turquesa y la majestuosa Cordillera de los Andes.",
    price: "desde $3.999.999",
    duration: "12 días",
    rating: "5.0",
    badge: "Mejor Valorado",
    gradient: "from-slate-600 via-blue-700 to-indigo-500",
    emoji: "🏔️",
  },
];

function DestinationCard({ dest, index }: { dest: Destination; index: number }) {
  const animClass =
    index === 0 ? "reveal-left" : index === 2 ? "reveal-right" : "reveal";

  return (
    <article
      className={`${animClass} group relative rounded-3xl overflow-hidden card-glow cursor-pointer`}
      style={{ transitionDelay: `${index * 150}ms` }}
      aria-label={`Destino: ${dest.name}, ${dest.country}`}
    >
      {/* Card background with gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-oscuro/95 via-oscuro/50 to-transparent" />

      {/* Animated background emoji */}
      <div className="absolute top-6 right-6 text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700 select-none">
        {dest.emoji}
      </div>

      {/* Glass base */}
      <div className="relative h-full border border-white/10 rounded-3xl group-hover:border-azul-medio/40 transition-colors duration-300">
        {/* Content */}
        <div className="p-7 flex flex-col h-full min-h-[380px]">
          {/* Badge */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${dest.gradient} text-white shadow-lg`}
            >
              {dest.badge}
            </span>
            <div className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
              <span>⭐</span>
              <span>{dest.rating}</span>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h3 className="font-playfair text-3xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
              {dest.name}
            </h3>
            <div className="flex items-center gap-1.5 text-azul-medio text-sm font-medium">
              <span>📍</span>
              <span>{dest.country}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
            {dest.description}
          </p>

          {/* Footer */}
          <div className="border-t border-white/10 pt-5 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-xs mb-0.5">Desde</p>
              <p className="text-azul-medio font-bold text-lg">{dest.price}</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 text-xs mb-0.5">Duración</p>
              <p className="text-white font-semibold text-sm">{dest.duration}</p>
            </div>
          </div>

          {/* Hover button */}
          <button
            id={`dest-btn-${dest.id}`}
            className="mt-4 btn-shimmer w-full py-3 rounded-xl bg-gradient-to-r from-azul-medio/20 to-azul-marino/20 border border-azul-medio/30 text-azul-medio font-semibold text-sm hover:from-azul-medio hover:to-azul-marino hover:text-white hover:border-transparent transition-all duration-300 group-hover:translate-y-0"
          >
            Ver Detalles →
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Destinos() {
  return (
    <section id="destinos" className="py-24 bg-oscuro relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-azul-marino/20 blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-72 h-72 rounded-full bg-azul-medio/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-azul-medio text-sm font-semibold uppercase tracking-widest mb-4">
            Destinos Destacados
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Lugares que te{" "}
            <span className="gradient-text">robarán el corazón</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Cada destino cuidadosamente seleccionado para ofrecerte la
            experiencia perfecta entre cultura, naturaleza y aventura.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-12">
          <button
            id="ver-todos-destinos"
            className="btn-shimmer border border-azul-medio/40 text-celeste font-semibold px-8 py-3.5 rounded-full hover:bg-azul-medio/10 hover:border-azul-medio transition-all duration-300"
          >
            Ver todos los destinos →
          </button>
        </div>
      </div>
    </section>
  );
}
