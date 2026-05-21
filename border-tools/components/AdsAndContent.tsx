'use client';
import { motion } from 'framer-motion';
import { Target, RefreshCw, Calendar, Package, Users, Video, Camera, Tag, Megaphone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const audiences = [
  { label: 'Contratistas', desc: 'Herramientas eléctricas, taladros, combos de construcción', icon: '🔧' },
  { label: 'Soldadores', desc: 'Equipos de soldar, EPP, kits de soldadura', icon: '⚡' },
  { label: 'Mecánicos', desc: 'Llaves, dados, herramientas de diagnóstico', icon: '🔩' },
  { label: 'Electricistas', desc: 'Multímetros, herramientas de cableado, kits', icon: '💡' },
  { label: 'Compradores Industriales', desc: 'Pedidos de volumen, equipo para taller', icon: '🏭' },
];

const campaignTypes = [
  { icon: Target, title: 'Campañas por Combo', desc: 'Un creativo por kit. Mostrar los componentes del combo + precio final. Alto CTR comprobado.' },
  { icon: RefreshCw, title: 'Retargeting', desc: 'Impactar a quienes visitaron el sitio o la publicación de ML sin comprar. Bajo costo, alta conversión.' },
  { icon: Calendar, title: 'Campañas Estacionales', desc: 'Buen Fin, Día del Padre, Black Friday, inicio de temporada de construcción. Presupuesto concentrado.' },
  { icon: Package, title: 'Producto Específico', desc: 'Para herramientas de alta rotación o alto margen. Anuncio directo al producto con CTA claro.' },
];

const contentTypes = [
  { icon: Video, title: 'Demo Rápido de Combo', desc: '30–60 segundos mostrando los componentes del kit. Sin producción compleja, solo claridad.' },
  { icon: Camera, title: 'Presentación de Producto Nuevo', desc: 'Foto/video del producto recién llegado. Genera urgencia y muestra movimiento de inventario.' },
  { icon: Tag, title: 'Promoción del Mes', desc: 'Un combo o producto destacado cada semana. Consistencia > viralidad.' },
  { icon: Package, title: 'Clips de Tienda', desc: 'Video corto mostrando el inventario real. Genera confianza — el cliente ve que existe la tienda.' },
  { icon: Megaphone, title: 'Destacados de Marca', desc: 'Contenido corto de Milwaukee, Makita o DeWalt. Asociar Border Tools con marcas premium.' },
  { icon: Users, title: 'Testimonios y Reseñas', desc: 'Compartir reseñas reales de ML o clientes. Prueba social sencilla y efectiva.' },
];

export default function AdsAndContent() {
  return (
    <>
      {/* ADS */}
      <section id="publicidad" className="py-24 border-b border-white/[0.05] bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <p className="section-eyebrow">09 — Publicidad Digital</p>
            <h2 className="section-title mb-4">
              Estrategia de<br /><span className="text-gold">Meta Ads</span>
            </h2>
            <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
              Publicidad pagada con enfoque de bajo riesgo. Escalar gradualmente, medir antes de
              invertir fuerte, y priorizar campañas con retorno demostrado.
            </p>
          </motion.div>

          {/* Budget callout */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-3 gap-4 mb-12"
          >
            <div className="card-base text-center">
              <p className="font-condensed font-bold text-3xl text-gold mb-1">$100–300</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider">MXN/día</p>
              <p className="text-xs text-zinc-600 mt-1 font-light">Meta Ads — presupuesto inicial de prueba</p>
            </div>
            <div className="card-base text-center">
              <p className="font-condensed font-bold text-3xl text-blue-400 mb-1">Variable</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider">por producto</p>
              <p className="text-xs text-zinc-600 mt-1 font-light">Mercado Ads — selectivo, alto margen</p>
            </div>
            <div className="card-base text-center">
              <p className="font-condensed font-bold text-3xl text-green-400 mb-1">Gradual</p>
              <p className="text-[11px] text-zinc-500 uppercase tracking-wider">escalamiento</p>
              <p className="text-xs text-zinc-600 mt-1 font-light">Solo escalar lo que ya convierte</p>
            </div>
          </motion.div>

          {/* Audiences */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-10"
          >
            <p className="text-[10px] font-semibold tracking-[3px] uppercase text-zinc-500 mb-4">Audiencias objetivo</p>
            <div className="flex flex-wrap gap-2">
              {audiences.map(({ label, desc, icon }) => (
                <div
                  key={label}
                  className="group relative bg-bg-card border border-white/[0.06] rounded-xl px-4 py-2.5 flex items-center gap-2 hover:border-white/[0.12] transition-all cursor-default"
                >
                  <span className="text-base">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-300">{label}</p>
                    <p className="text-[10px] text-zinc-600 font-light hidden group-hover:block absolute bottom-full left-0 mb-2 bg-bg-card border border-white/[0.08] rounded-lg px-3 py-2 w-52 z-10 shadow-xl">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Campaign types */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
            className="grid md:grid-cols-2 gap-3"
          >
            {campaignTypes.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="card-base card-hover group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-muted flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1">{title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="contenido" className="py-24 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <p className="section-eyebrow">10 — Estrategia de Contenido</p>
            <h2 className="section-title mb-4">
              Contenido<br /><span className="text-gold">Ligero y Efectivo</span>
            </h2>
            <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
              El contenido de Border Tools no necesita ser viral. Necesita generar confianza,
              mostrar producto y apoyar las ventas — sin convertirse en una agencia de medios.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {contentTypes.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="card-base card-hover group">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Icon size={17} className="text-purple-400" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mt-8 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex gap-3 items-start"
          >
            <div className="w-1 h-full min-h-[2rem] bg-purple-500/40 rounded-full shrink-0" />
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              <strong className="text-zinc-200 font-semibold">Principio de contenido:</strong>{' '}
              Consistencia semanal en 1–2 plataformas es más efectivo que intentar estar en todas
              sin calidad. Instagram/Facebook como canal principal, TikTok opcional cuando haya
              capacidad operativa.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
