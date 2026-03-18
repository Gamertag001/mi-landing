import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wanderlust | Descubre el Mundo Contigo",
  description:
    "Vive experiencias de viaje únicas e inolvidables. Explora destinos, reserva tours exclusivos y crea recuerdos que duran toda la vida con Wanderlust.",
  keywords: "turismo, viajes, destinos, tours, vacaciones, aventura",
  openGraph: {
    title: "Wanderlust | Descubre el Mundo Contigo",
    description:
      "Vive experiencias de viaje únicas e inolvidables. Explora destinos, reserva tours exclusivos y crea recuerdos que duran toda la vida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-dm bg-oscuro text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
