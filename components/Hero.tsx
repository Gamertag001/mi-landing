"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 3,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    );
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle pointer-events-none"
          style={{
            left: `${p.x}%`,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(93,169,233,${p.opacity})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Radial glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-azul-medio/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-azul-marino/20 blur-3xl animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-celeste/5 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(93,169,233,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(93,169,233,0.4) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm font-medium text-celeste transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-azul-medio animate-pulse" />
          Más de 10,000 viajeros satisfechos
        </div>

        {/* Main headline */}
        <h1
          className={`font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white block">Descubre el</span>
          <span className="gradient-text block">Mundo Contigo</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Vive experiencias únicas e inolvidables. Desde playas paradisíacas
          hasta ciudades históricas, diseñamos el viaje perfecto para ti.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            id="hero-explore-btn"
            onClick={() => {
              document
                .getElementById("destinos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-shimmer bg-gradient-to-r from-azul-medio to-azul-marino text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-azul-marino/40 hover:shadow-azul-medio/60 hover:scale-105 transition-all duration-300 text-base w-full sm:w-auto"
          >
            Explorar Destinos
          </button>
          <button
            id="hero-learn-btn"
            onClick={() => {
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-azul-medio/50 transition-all duration-300 text-base w-full sm:w-auto"
          >
            Nuestros Servicios →
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-2 text-white/40 text-xs transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Desplázate para explorar</span>
          <div className="w-px h-12 bg-gradient-to-b from-azul-medio/60 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#292727"
          />
        </svg>
      </div>
    </section>
  );
}
