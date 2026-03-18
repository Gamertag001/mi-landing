"use client";

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: "🗺️",
    title: "Itinerarios Personalizados",
    description:
      "Diseñamos rutas únicas adaptadas a tus gustos, presupuesto y tiempo disponible.",
    features: ["Planificación completa", "Guías locales expertos", "Mapas offline"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: "✈️",
    title: "Vuelos y Traslados",
    description:
      "Gestionamos todos los vuelos, transfers y transportes con las mejores tarifas.",
    features: ["Búsqueda de tarifas", "Check-in online", "Seguimiento de vuelos"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    icon: "🏨",
    title: "Alojamiento Premium",
    description:
      "Selección de hoteles boutique, resorts y experiencias de hospedaje únicas.",
    features: ["Hoteles 4-5 estrellas", "Experiencias locales", "Desayuno incluido"],
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: "🎯",
    title: "Tours Exclusivos",
    description:
      "Actividades y excursiones fuera de lo común con grupos reducidos y guías especializados.",
    features: ["Grupos pequeños", "Accesos exclusivos", "Experiencias VIP"],
    color: "from-cyan-500 to-teal-400",
  },
  {
    icon: "🛡️",
    title: "Seguro de Viaje",
    description:
      "Viaja tranquilo con cobertura integral médica, cancelaciones y asistencia 24/7.",
    features: ["Cobertura médica total", "Cancelación flexible", "Asistencia 24h"],
    color: "from-emerald-500 to-green-400",
  },
  {
    icon: "📱",
    title: "Asistencia De Viaje",
    description:
      "Tu asistente de viaje en el bolsillo. Reservas, mapas y soporte en tiempo real.",
    features: ["Reservas instantáneas", "Atencion Inmediata", "Chat con expertos"],
    color: "from-orange-500 to-amber-400",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #292727 0%, #1a1f2e 50%, #292727 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-azul-medio/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-azul-medio/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-azul-marino/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-azul-medio text-sm font-semibold uppercase tracking-widest mb-4">
            Lo Que Ofrecemos
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Servicios diseñados para{" "}
            <span className="gradient-text">tu comodidad</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Cada detalle de tu viaje está cubierto. Desde la planificación hasta
            el regreso a casa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              id={`service-${i + 1}`}
              className="reveal group relative rounded-2xl p-6 glass border border-white/8 hover:border-white/20 card-glow overflow-hidden cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                style={{ background: "rgba(93,169,233,0.1)" }}
              >
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-azul-medio transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-white/55 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
