"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #003f91 0%, #292727 50%, #003f91 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(93,169,233,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0,63,145,0.4) 0%, transparent 50%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(153,194,225,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(153,194,225,0.5) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-azul-medio/15 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-celeste/10 blur-3xl animate-pulse-slow delay-500" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-celeste">
          <span className="w-2 h-2 rounded-full bg-azul-medio animate-pulse" />
          Únete a más de 10,000 viajeros
        </div>

        {/* Headline */}
        <h2 className="reveal font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Tu próxima aventura
          <br />
          <span className="gradient-text">comienza aquí</span>
        </h2>

        {/* Subtitle */}
        <p className="reveal text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Suscríbete y recibe ofertas exclusivas, guías de destinos y tips de
          viaje directo en tu correo. Sin spam, solo inspiración.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          id="cta-email-form"
          className="reveal flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
          noValidate
        >
          <div className="flex-1 relative">
            <input
              id="cta-email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              disabled={status === "loading" || status === "success"}
              className={`w-full px-5 py-4 rounded-full bg-white/10 border text-white placeholder:text-white/40 outline-none focus:ring-2 transition-all duration-300 text-sm backdrop-blur-sm ${
                status === "error"
                  ? "border-red-400/60 focus:ring-red-400/30"
                  : "border-white/20 focus:border-azul-medio focus:ring-azul-medio/30"
              }`}
            />
          </div>
          <button
            id="cta-submit-btn"
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`btn-shimmer px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 flex-shrink-0 ${
              status === "success"
                ? "bg-emerald-500 text-white cursor-default"
                : "bg-gradient-to-r from-azul-medio to-azul-marino text-white hover:scale-105 shadow-lg shadow-azul-marino/40 hover:shadow-azul-medio/50"
            }`}
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    fill="currentColor"
                  />
                </svg>
                Enviando...
              </span>
            ) : status === "success" ? (
              "✓ ¡Suscrito!"
            ) : (
              "Suscribirme Gratis"
            )}
          </button>
        </form>

        {/* Status messages */}
        {status === "error" && (
          <p className="text-red-400 text-sm mb-4 animate-fade-in">
            Por favor ingresa un email válido.
          </p>
        )}
        {status === "success" && (
          <p className="text-emerald-400 text-sm mb-4 animate-fade-in">
            🎉 ¡Gracias! Revisa tu bandeja de entrada.
          </p>
        )}

        {/* Trust badges */}
        <div className="reveal flex flex-wrap justify-center gap-6 text-white/40 text-xs">
          <div className="flex items-center gap-1.5">
            <span>🔒</span>
            <span>Sin spam, jamás</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>📬</span>
            <span>Cancela cuando quieras</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🎁</span>
            <span>Descuento de bienvenida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
