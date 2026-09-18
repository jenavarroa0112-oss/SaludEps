import { EstadoEntrega } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

export default function Timeline({ estadoActual }: { estadoActual: EstadoEntrega }) {
  const isRetrasado = estadoActual === 'Retrasado';
  const mainSteps = ['Solicitado', 'En farmacia', 'En camino', 'Entregado'];
  
  // If delayed, we don't know exact progress, but let's assume it's stuck somewhere.
  // For the demo, let's just highlight the current flow up to requested if delayed.
  const currentIndex = isRetrasado ? 0 : mainSteps.indexOf(estadoActual);

  return (
    <div className="relative py-4 pl-4">
      {/* Vertical line */}
      <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200"></div>

      <div className="flex flex-col gap-6">
        {mainSteps.map((step, idx) => {
          const isCompleted = idx <= currentIndex && !isRetrasado;
          const isCurrent = idx === currentIndex && !isRetrasado;
          
          return (
            <div key={step} className="relative flex items-center gap-4">
              <div className="relative z-10 flex-shrink-0 bg-white">
                {isCompleted ? (
                  <CheckCircle2 className="w-7 h-7 text-[var(--color-primary)]" />
                ) : (
                  <Circle className="w-7 h-7 text-gray-300" strokeWidth={2} />
                )}
              </div>
              <div className="flex flex-col">
                <span className={`text-base font-semibold ${isCompleted ? 'text-[var(--color-text-main)]' : 'text-gray-400'}`}>
                  {step}
                </span>
                {isCurrent && step === 'En farmacia' && (
                  <span className="text-sm text-[var(--color-text-muted)]">Listo para recoger en sede</span>
                )}
                {isCurrent && step === 'En camino' && (
                  <span className="text-sm text-[var(--color-text-muted)]">El repartidor está en ruta</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {isRetrasado && (
        <div className="mt-6 p-4 bg-[var(--color-status-retrasado)]/10 rounded-2xl border border-[var(--color-status-retrasado)]/20">
          <h4 className="text-[var(--color-status-retrasado)] font-semibold flex items-center gap-2">
            Entrega retrasada
          </h4>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">
            Hubo un problema logístico o falta de disponibilidad. Te notificaremos cuando se reanude.
          </p>
        </div>
      )}
    </div>
  );
}
