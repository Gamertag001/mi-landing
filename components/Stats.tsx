"use client";

import { useCounter } from "@/hooks/useReveal";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: 10000, suffix: "+", label: "Viajeros Felices", icon: "✈️" },
  { value: 120, suffix: "+", label: "Destinos Activos", icon: "🌍" },
  { value: 15, suffix: "★", label: "Años de Experiencia", icon: "🏆" },
  { value: 100, suffix: "%", label: "Satisfacción", icon: "❤️" },
];

function StatCounter({ stat }: { stat: StatItem }) {
  const ref = useCounter(stat.value, 2000, stat.suffix);

  return (
    <div className="reveal-scale flex flex-col items-center text-center p-6 rounded-2xl glass card-glow group">
      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="font-playfair text-4xl sm:text-5xl font-bold gradient-text mb-2">
        <span ref={ref}>0{stat.suffix}</span>
      </div>
      <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-oscuro relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-azul-medio/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-azul-medio/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-azul-medio text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestros Números
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            El impacto que generamos
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${i * 150}ms` }}
              className="reveal-scale"
            >
              <StatCounter stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
