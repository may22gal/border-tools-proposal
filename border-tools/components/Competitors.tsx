'use client';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, ShieldCheck, Tag } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const competitors = [
  {
    name: 'ToolMX Distribuidora',
    channel: 'Mercado Libre MX',
    strategy: 'Precio bajo',
    rating: '4.2 ★',
    weakness: 'Sin combos, imágenes genéricas, poca diferenciación de marca',
    score: 42,
  },
  {
    name: 'Ferretería Centro',
    channel: 'ML + WhatsApp',
    strategy: 'Volumen',
    rating: '4.0 ★',
    weakness: 'Catálogo desorganizado, sin sistema digital, atención lenta',
    score: 38,
  },
  {
    name: 'ImportTools USA',
    channel: 'eBay + Amazon',
    strategy: 'Precio + velocidad',
    rating: '4.5 ★',
    weakness: 'Sin presencia en MX, no habla español, sin soporte local',
    score: 55,
  },
  {
    name: 'ProShop Industrial',
    channel: 'Shopify propio',
    strategy: 'Branding premium',
    rating: '4.6 ★',
    weakness: 'Precios altos, poca variedad de combos, sin canal físico',
    score: 60,
  },
];

const btAdvantages = [
  { icon: ShieldCheck, text: 'Confianza de tienda física + operación digital' },
  { icon: Tag, text: 'Combos especializados difíciles de comparar por precio' },
  { icon: TrendingUp, text: 'Branding propio con identidad industrial coherente' },
  { icon: ShieldCheck, text: 'Atención rápida y soporte en español' },
  { icon: Tag, text: 'Kits especializados por oficio: mecánico, soldador, carpintero' },
  { icon: TrendingUp, text: 'Credibilidad de marcas americanas en frontera' },
];

export default function Competitors() {
  return (
    <section id="competidores" className="py-24 border-b border-white/[0.05] bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">03 — Investigación de Mercado</p>
          <h2 className="section-title mb-4">
            Análisis de<br /><span className="text-gold">Competidores</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            La mayoría de los competidores compiten únicamente por precio.
            Border Tools puede diferenciarse con una estrategia superior.
          </p>
        </motion.div>

        {/* Competitor cards */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          className="grid md:grid-cols-2 gap-4 mb-14"
        >
          {competitors.map((c) => (
            <motion.div key={c.name} variants={fadeUp} className="card-base card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-200">{c.name}</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">{c.channel}</p>
                </div>
                <span className="text-xs text-zinc-400 bg-white/[0.04] px-2 py-1 rounded">{c.rating}</span>
              </div>

              {/* Score bar */}
              <div className="mb-3">
                <div className="flex justify-between text-[10px] text-zinc-600 mb-1">
                  <span>Diferenciación digital</span>
                  <span>{c.score}%</span>
                </div>
                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-zinc-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 mt-3">
                <TrendingDown size={13} className="text-red-400/70 mt-0.5 shrink-0" />
                <p className="text-xs text-zinc-500 font-light">{c.weakness}</p>
              </div>

              <div className="mt-2 inline-block">
                <span className="tag bg-zinc-800 text-zinc-500 text-[9px]">
                  Estrategia: {c.strategy}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Border Tools advantage */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl border border-gold/20 bg-gold/[0.03] overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-gold/10">
            <p className="text-[10px] tracking-[3px] uppercase text-gold/70 mb-1">Ventaja Competitiva</p>
            <h3 className="font-condensed font-bold text-2xl text-zinc-100 uppercase">
              Por qué Border Tools Gana
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {btAdvantages.map(({ icon: Icon, text }) => (
              <div key={text} className="bg-bg-primary/60 px-5 py-4 flex items-center gap-3">
                <Icon size={15} className="text-gold shrink-0" />
                <p className="text-sm text-zinc-300 font-light">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trend callout */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          {[
            { val: '+28%', label: 'Crecimiento anual ecommerce herramientas MX', color: 'text-green-400' },
            { val: '67%', label: 'Compradores buscan combos vs producto individual', color: 'text-gold' },
            { val: '3x', label: 'Mayor ticket promedio en kits vs pieza suelta', color: 'text-blue-400' },
          ].map(({ val, label, color }) => (
            <div key={val} className="card-base text-center">
              <p className={`font-condensed font-bold text-4xl ${color} mb-1`}>{val}</p>
              <p className="text-xs text-zinc-500 leading-snug font-light">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
