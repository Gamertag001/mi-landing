"use client";

const footerLinks = {
  Destinos: ["Santorini", "Bali", "Patagonia", "Tokio", "Marruecos"],
  Servicios: [
    "Itinerarios",
    "Vuelos",
    "Alojamiento",
    "Tours Exclusivos",
    "Seguro de Viaje",
  ],
  Empresa: ["Sobre Nosotros", "Blog de Viajes", "Trabaja con Nosotros", "Prensa"],
  Soporte: [
    "Centro de Ayuda",
    "Política de Cancelación",
    "Términos y Condiciones",
    "Privacidad",
  ],
};

const socialLinks = [
  { icon: "𝕏", label: "Twitter / X", href: "#" },
  { icon: "in", label: "LinkedIn", href: "#" },
  { icon: "▶", label: "YouTube", href: "#" },
  { icon: "📸", label: "Instagram", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-oscuro border-t border-white/8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-azul-medio/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-azul-marino/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azul-medio to-azul-marino flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="font-playfair text-2xl font-bold">
                <span className="text-white">Wander</span>
                <span className="text-azul-medio">lust</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Creamos experiencias de viaje únicas e inolvidables. Tu aventura
              perfecta está a un clic de distancia.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-azul-medio hover:border-azul-medio/40 hover:scale-110 transition-all duration-300 text-xs font-bold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-celeste transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="glass rounded-2xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-azul-medio/15 flex items-center justify-center text-azul-medio text-lg flex-shrink-0">
              📧
            </div>
            <div>
              <p className="text-white/40 text-xs">Email</p>
              <a
                href="mailto:hola@wanderlust.com"
                className="text-white text-sm hover:text-azul-medio transition-colors"
              >
                hola@wanderlust.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-azul-medio/15 flex items-center justify-center text-azul-medio text-lg flex-shrink-0">
              📞
            </div>
            <div>
              <p className="text-white/40 text-xs">Teléfono</p>
              <a
                href="tel:+1800WANDER"
                className="text-white text-sm hover:text-azul-medio transition-colors"
              >
                +1 800 WANDER
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-azul-medio/15 flex items-center justify-center text-azul-medio text-lg flex-shrink-0">
              🕐
            </div>
            <div>
              <p className="text-white/40 text-xs">Atención</p>
              <p className="text-white text-sm">Lun–Dom, 8AM–10PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/8">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Wanderlust. Todos los derechos
            reservados. Hecho con ❤️ para viajeros.
          </p>
          <div className="flex items-center gap-4 text-white/35 text-xs">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacidad
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#" className="hover:text-white/60 transition-colors">
              Términos
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#" className="hover:text-white/60 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        title="Volver arriba"
        className="fixed bottom-8 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-azul-medio to-azul-marino shadow-xl shadow-azul-marino/40 text-white flex items-center justify-center text-lg hover:scale-110 hover:shadow-azul-medio/60 transition-all duration-300 z-40 btn-shimmer"
        aria-label="Volver arriba"
      >
        ↑
      </button>
    </footer>
  );
}
