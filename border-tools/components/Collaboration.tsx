'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const option1 = {
  tag: 'Opción 1',
  title: 'Gestión Ecommerce\nExterna',
  subtitle: 'Freelance / Retainer',
  desc: 'Apoyo estratégico y operativo sin compromiso de tiempo completo. Ideal para comenzar mientras se evalúa el alcance del proyecto.',
  features: [
    'Gestión de publicaciones en Mercado Libre',
    'Optimización de títulos, imágenes y descripciones',
    'Coordinación de promociones y campañas',
    'Atención y seguimiento de compradores',
    'Reportes mensuales de desempeño',
    'Apoyo en estrategia de contenido básico',
    'Coordinación operativa digital-física',
  ],
  cta: 'Hablar de esta opción',
  recommended: false,
};

const option2 = {
  tag: 'Opción 2',
  title: 'Ecommerce &\nOperaciones Digitales',
  subtitle: 'Rol dedicado a tiempo completo',
  desc: 'Involucramiento total en la operación digital de Border Tools. Estrategia, ejecución y crecimiento como responsabilidad principal.',
  features: [
    'Estrategia de crecimiento digital completa',
    'Gestión de todos los canales de marketplace',
    'Coordinación de inventario multi-canal',
    'Ejecución y monitoreo de publicidad pagada',
    'Desarrollo y gestión del sitio web propio',
    'Reportes ejecutivos y tableros operativos',
    'Estrategia y ejecución de expansión a USA',
    'Coordinación con proveedor de logística',
    'Gestión de catálogo y precios',
  ],
  cta: 'Hablar de esta opción',
  recommended: true,
};

export default function Collaboration() {
  return (
    <section id="colaboracion" className="py-24 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">12 — Opciones de Colaboración</p>
          <h2 className="section-title mb-4">
            Formas de<br /><span className="text-gold">Trabajar Juntos</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            Dos modelos de colaboración según las necesidades actuales de Border Tools.
            Ambos están orientados a resultados reales y crecimiento sostenido.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[option1, option2].map((opt) => (
            <motion.div
              key={opt.tag}
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className={`relative rounded-2xl border overflow-hidden ${
                opt.recommended
                  ? 'border-gold/30 bg-gold/[0.03]'
                  : 'border-white/[0.07] bg-bg-card'
              }`}
            >
              {opt.recommended && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              )}

              <div className="p-6 border-b border-white/[0.06]">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-[9px] font-semibold tracking-[2px] uppercase px-2 py-1 rounded border ${
                      opt.recommended
                        ? 'text-gold border-gold/30 bg-gold/10'
                        : 'text-zinc-500 border-zinc-700 bg-zinc-800/50'
                    }`}
                  >
                    {opt.tag}
                  </span>
                  {opt.recommended && (
                    <span className="text-[9px] font-semibold tracking-wider uppercase text-green-400 border border-green-400/30 bg-green-400/10 px-2 py-1 rounded">
                      Recomendado
                    </span>
                  )}
                </div>
                <h3
                  className={`font-condensed font-bold text-2xl uppercase leading-tight mb-1 whitespace-pre-line ${
                    opt.recommended ? 'text-zinc-100' : 'text-zinc-200'
                  }`}
                >
                  {opt.title}
                </h3>
                <p className={`text-xs font-semibold tracking-widest uppercase ${opt.recommended ? 'text-gold/80' : 'text-zinc-500'}`}>
                  {opt.subtitle}
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-5">{opt.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={13}
                        className={`mt-0.5 shrink-0 ${opt.recommended ? 'text-gold' : 'text-zinc-500'}`}
                      />
                      <span className="text-sm text-zinc-300 font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:mayragalvan@email.com"
                  className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.5px] transition-all group ${
                    opt.recommended ? 'text-gold hover:text-gold-light' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {opt.cta}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact note */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mt-8 p-5 rounded-xl border border-white/[0.06] text-center"
        >
          <p className="text-sm text-zinc-500 font-light">
            Presentado por{' '}
            <strong className="text-zinc-200 font-semibold">Mayra Galván</strong>
            {' '}—{' '}
            <span className="text-gold/80">Ecommerce & Digital Operations Consultant</span>
          </p>
          <p className="text-xs text-zinc-600 mt-1 font-light">
            Disponible para resolver dudas, ampliar cualquier sección o ajustar la propuesta a las necesidades específicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
