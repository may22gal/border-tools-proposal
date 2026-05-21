'use client';
import { motion } from 'framer-motion';
import { Store, Award, TrendingUp, MapPin, Package, Zap, Globe, BarChart2, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const strengths = [
  {
    icon: Store,
    title: 'Tienda Física Establecida',
    desc: 'Presencia física comprobada que genera confianza, credibilidad y ventaja logística frente a vendedores puramente digitales.',
  },
  {
    icon: Award,
    title: 'Marcas Americanas Premium',
    desc: 'Portafolio de herramientas de marcas reconocidas con alta demanda en México y USA — Milwaukee, Makita, DeWalt y similares.',
  },
  {
    icon: TrendingUp,
    title: 'Trayectoria en Mercado Libre',
    desc: 'Historial de ventas activo en la plataforma más grande de Latinoamérica. Base sólida para optimización y escala.',
  },
  {
    icon: MapPin,
    title: 'Ventaja de Frontera',
    desc: 'Posicionamiento geográfico único. Acceso directo a mercancía americana con capacidad de atender ambos mercados.',
  },
  {
    icon: Package,
    title: 'Enfoque en Combos',
    desc: 'Estrategia de kits y paquetes que diferencia a Border Tools de competidores que solo venden producto individual.',
  },
  {
    icon: Zap,
    title: 'Demanda Industrial Creciente',
    desc: 'Sector de herramientas profesionales en expansión constante. Contratistas, mecánicos y talleres buscan proveedores confiables.',
  },
];

const opportunities = [
  {
    icon: Globe,
    title: 'Presencia Digital Limitada',
    desc: 'El catálogo completo no está visible online. Una gran parte de la demanda se pierde por falta de presencia digital estructurada.',
    color: 'border-amber-500/30 bg-amber-500/[0.04]',
    iconColor: 'text-amber-400',
  },
  {
    icon: BarChart2,
    title: 'Optimización de Marketplace',
    desc: 'Las publicaciones en Mercado Libre tienen espacio de mejora: títulos, imágenes, combos y posicionamiento de anuncios.',
    color: 'border-amber-500/30 bg-amber-500/[0.04]',
    iconColor: 'text-amber-400',
  },
  {
    icon: Package,
    title: 'Sincronización de Inventario',
    desc: 'Sin un sistema centralizado, gestionar inventario entre tienda física, ML y futuros canales es un riesgo operativo.',
    color: 'border-amber-500/30 bg-amber-500/[0.04]',
    iconColor: 'text-amber-400',
  },
  {
    icon: Award,
    title: 'Oportunidad de Marca',
    desc: 'Border Tools puede construir una identidad digital reconocible — diferenciándose del vendedor genérico con branding propio.',
    color: 'border-blue-500/30 bg-blue-500/[0.04]',
    iconColor: 'text-blue-400',
  },
  {
    icon: AlertCircle,
    title: 'Expansión a USA',
    desc: 'El mercado americano representa una oportunidad enorme, pero requiere un enfoque por fases con infraestructura bien definida.',
    color: 'border-blue-500/30 bg-blue-500/[0.04]',
    iconColor: 'text-blue-400',
  },
];

export default function Analysis() {
  return (
    <section id="analisis" className="py-24 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">02 — Análisis del Negocio</p>
          <h2 className="section-title mb-4">
            Estado Actual &<br /><span className="text-gold">Oportunidades</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            Border Tools cuenta con una base sólida. El objetivo es convertir esa base
            en una operación digital escalable con sistemas, presencia y estrategia.
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
        >
          <p className="text-[10px] font-semibold tracking-[3px] uppercase text-zinc-500 mb-5">
            ✓ Fortalezas actuales
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
            {strengths.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="card-base card-hover group"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon size={17} className="text-gold" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
        >
          <p className="text-[10px] font-semibold tracking-[3px] uppercase text-zinc-500 mb-5">
            → Áreas de oportunidad
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {opportunities.map(({ icon: Icon, title, desc, color, iconColor }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className={`card-base border ${color} transition-all duration-300 hover:brightness-110`}
              >
                <div className="flex items-start gap-3">
                  <Icon size={17} className={`${iconColor} mt-0.5 shrink-0`} />
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1">{title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary callout */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mt-10 p-6 rounded-xl border border-gold/20 bg-gold/[0.03] flex gap-4 items-start"
        >
          <div className="w-1 h-full min-h-[3rem] bg-gold/50 rounded-full shrink-0" />
          <p className="text-sm text-zinc-300 leading-relaxed">
            <strong className="text-zinc-100 font-semibold">Diagnóstico ejecutivo:</strong>{' '}
            Border Tools tiene el inventario, las marcas y la experiencia física. Lo que falta es
            la infraestructura digital, la optimización de canales y la estrategia de expansión.
            Eso es exactamente lo que este plan resuelve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
