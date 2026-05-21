'use client';
import { motion } from 'framer-motion';
import { Package, Zap, TrendingUp, DollarSign, Target, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const combos = [
  {
    name: 'Combo Contratista',
    tag: 'BESTSELLER',
    tagColor: 'bg-gold/20 text-gold',
    items: ['Taladro percutor 18V', 'Atornillador de impacto', 'Batería + cargador dual', 'Bolso profesional'],
    price: '$4,800 – $6,200 MXN',
    margin: 'Margen alto',
    icon: '🔧',
  },
  {
    name: 'Combo Soldador Pro',
    tag: 'ALTA DEMANDA',
    tagColor: 'bg-blue-500/20 text-blue-400',
    items: ['Careta de soldar auto-oscurecimiento', 'Guantes de piel', 'Mandil de cuero', 'Electrodo + carrete MIG'],
    price: '$2,200 – $3,500 MXN',
    margin: 'Fácil upsell',
    icon: '⚡',
  },
  {
    name: 'Kit Mecánico',
    tag: 'ESPECIALIZADO',
    tagColor: 'bg-zinc-600/40 text-zinc-300',
    items: ['Juego de llaves métricas', 'Dados de impacto', 'Torquímetro', 'Caja organizadora'],
    price: '$3,100 – $4,400 MXN',
    margin: 'Diferenciación clara',
    icon: '🔩',
  },
  {
    name: 'Combo Carpintero',
    tag: 'KIT COMPLETO',
    tagColor: 'bg-amber-500/20 text-amber-400',
    items: ['Sierra circular 7-1/4"', 'Lijadora orbital', 'Router fresadora', 'Batería 18V compartida'],
    price: '$5,500 – $7,800 MXN',
    margin: 'Ticket máximo',
    icon: '🪚',
  },
  {
    name: 'Starter Kit Básico',
    tag: 'ENTRADA',
    tagColor: 'bg-green-500/20 text-green-400',
    items: ['Taladro 12V compacto', 'Destornillador de impacto', 'Batería + cargador', 'Set de brocas'],
    price: '$1,800 – $2,600 MXN',
    margin: 'Volumen + upsell',
    icon: '🛠️',
  },
  {
    name: 'Bundle Batería + Cargador',
    tag: 'ACCESORIO CLAVE',
    tagColor: 'bg-purple-500/20 text-purple-400',
    items: ['2 baterías 20V premium', 'Cargador rápido dual', 'Organizador compacto'],
    price: '$1,200 – $1,900 MXN',
    margin: 'Add-on perfecto',
    icon: '🔋',
  },
];

const whyCombos = [
  { icon: DollarSign, title: 'Ticket Promedio Mayor', desc: 'Un combo de $4,500 MXN vs $900 por pieza — mismo cliente, 5x más ingreso.' },
  { icon: Target, title: 'Difícil de Comparar', desc: 'El cliente no puede buscar el "precio exacto" del combo en otra tienda fácilmente.' },
  { icon: Star, title: 'Mayor Valor Percibido', desc: 'El cliente siente que recibe más por su dinero. Menos resistencia al precio.' },
  { icon: Zap, title: 'Mejor Desempeño en Ads', desc: 'Combos convierten mejor en Meta Ads. Un solo creativo vende múltiples productos.' },
  { icon: TrendingUp, title: 'Upsells Naturales', desc: 'Quien compra el kit básico está listo para el kit pro en 3 meses.' },
  { icon: Package, title: 'Inventario Inteligente', desc: 'Rotar accesorios incluidos en combos reduce el stock muerto de forma natural.' },
];

export default function Combos() {
  return (
    <section id="combos" className="py-24 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">04 — Estrategia de Combos</p>
          <h2 className="section-title mb-4">
            El Poder de<br /><span className="text-gold">los Combos</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            La estrategia de combos y kits es la palanca de crecimiento más poderosa
            para Border Tools — mayor ingreso, mejor margen, menor competencia de precio.
          </p>
        </motion.div>

        {/* Why combos */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
        >
          {whyCombos.map(({ icon: Icon, title, desc }) => (
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

        {/* Combo catalog */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-8"
        >
          <p className="text-[10px] font-semibold tracking-[3px] uppercase text-zinc-500 mb-5">
            Ejemplos de combos — Catálogo propuesto
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {combos.map((combo) => (
            <motion.div
              key={combo.name}
              variants={fadeUp}
              className="card-base card-hover group relative overflow-hidden"
            >
              {/* Gold accent top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{combo.icon}</span>
                <span className={`tag ${combo.tagColor} text-[9px]`}>{combo.tag}</span>
              </div>

              <h3 className="font-condensed font-bold text-lg text-zinc-100 uppercase mb-3">
                {combo.name}
              </h3>

              <ul className="space-y-1 mb-4">
                {combo.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                    <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.06] pt-3 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-wider">Precio estimado</p>
                  <p className="text-sm font-semibold text-gold">{combo.price}</p>
                </div>
                <span className="text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-1 rounded">
                  {combo.margin}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
