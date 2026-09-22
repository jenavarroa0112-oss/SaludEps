import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Truck, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface WelcomeSplashProps {
  onStart: () => void;
}

export default function WelcomeSplash({ onStart }: WelcomeSplashProps) {
  const steps = [
    { label: 'Solicitado en EPS', icon: Clock, done: true, sub: 'Fórmula validada' },
    { label: 'Listo en farmacia', icon: MapPin, done: true, sub: 'Sede más cercana' },
    { label: 'En camino a casa', icon: Truck, done: true, current: true, sub: 'Repartidor asignado' },
    { label: 'Entrega confirmada', icon: CheckCircle2, done: false, sub: 'Tranquilidad total' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-[var(--color-surface)] rounded-[32px] sm:rounded-[36px] shadow-2xl border border-stone-200/70 overflow-hidden my-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
          {/* Left Column: Asymmetric Brand & Context (Left-aligned) */}
          <div className="md:col-span-7 p-6 sm:p-9 md:p-11 flex flex-col justify-between text-left">
            <div>
              {/* Header brand mark & High-contrast Tagline */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--color-text-main)] font-['Inter']">
                  Salud<span className="text-[var(--color-primary)]">Eps</span>
                </span>
                <span className="bg-[var(--color-accent)] text-white text-xs sm:text-[13px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  Seguimiento de tus medicamentos EPS
                </span>
              </div>

              {/* Punchy Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[var(--color-text-main)] leading-[1.18] tracking-tight mb-4">
                Tus tratamientos, <br className="hidden sm:inline" />
                <span className="text-[var(--color-accent)]">a tiempo</span> y sin incertidumbre.
              </h1>

              {/* Purpose sentence */}
              <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed mb-6 sm:mb-8 font-normal max-w-lg">
                Consulta la disponibilidad y sigue la entrega de tus medicamentos sin llamadas ni desplazamientos.
              </p>

              {/* Key benefit pill */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3.5 py-1.5 rounded-xl mb-6">
                <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                <span>Diseñado especialmente para ti y tus cuidadores</span>
              </div>
            </div>

            {/* Prominent CTA in Terracotta accent */}
            <div className="pt-2">
              <button
                onClick={onStart}
                className="w-full sm:w-auto min-w-[240px] bg-[var(--color-accent)] hover:bg-[#c96444] active:scale-[0.98] text-white text-lg font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Comenzar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual timeline of delivery with terracotta background */}
          <div className="md:col-span-5 bg-[#E07856] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute -top-14 -right-14 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-14 -left-14 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 mb-5">
              <span className="text-xs uppercase tracking-widest font-extrabold text-white/80 block mb-1">
                ¿Cómo funciona?
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                El recorrido de tu entrega
              </h2>
            </div>

            {/* Custom interactive-style Timeline representing the core app feature */}
            <div className="relative z-10 my-auto py-2">
              <div className="relative pl-7 space-y-5 sm:space-y-6">
                {/* Vertical connecting line */}
                <div className="absolute left-[13px] top-3 bottom-3 w-[3px] bg-white/30 rounded-full" />

                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative flex items-start gap-3.5 group">
                      {/* Step Node */}
                      <div
                        className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center -ml-7 flex-shrink-0 transition-transform ${
                          step.current
                            ? 'bg-white text-[var(--color-accent)] ring-4 ring-white/30 shadow-md scale-110'
                            : step.done
                            ? 'bg-white/90 text-[var(--color-primary)]'
                            : 'bg-white/20 text-white/60 border border-white/30'
                        }`}
                      >
                        <Icon className="w-4 h-4" strokeWidth={step.current ? 2.5 : 2} />
                      </div>

                      {/* Step Labels */}
                      <div className="pt-0.5">
                        <div className="flex items-center gap-2">
                          <p
                            className={`text-sm sm:text-base font-bold leading-tight ${
                              step.current ? 'text-white font-extrabold underline decoration-white/50 underline-offset-4' : 'text-white/90'
                            }`}
                          >
                            {step.label}
                          </p>
                          {step.current && (
                            <span className="text-[10px] font-black uppercase bg-white text-[var(--color-accent)] px-2 py-0.5 rounded-full tracking-wider shadow-sm">
                              En vivo
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-white/75 mt-0.5 font-medium">
                          {step.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom summary note */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/90 font-medium">
              <span>Actualizado con tu EPS</span>
              <span className="bg-black/15 px-2.5 py-1 rounded-lg">100% Digital</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
