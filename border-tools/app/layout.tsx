import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Border Tools — Plan de Expansión Digital',
  description:
    'Estrategia profesional de crecimiento en ecommerce y expansión a mercados de México y USA. Presentado por Mayra Galván, Ecommerce & Digital Operations Consultant.',
  openGraph: {
    title: 'Border Tools — Plan de Expansión Digital',
    description: 'Estrategia de expansión digital para México y USA.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans bg-bg-primary text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
