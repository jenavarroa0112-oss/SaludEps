import { EstadoEntrega } from '../types';
import { PackageOpen, Truck, Store, AlertCircle, Clock } from 'lucide-react';

export default function StatusBadge({ estado }: { estado: EstadoEntrega }) {
  const config = {
    'Solicitado': { bg: 'bg-[var(--color-status-solicitado)]/10', text: 'text-[var(--color-status-solicitado)]', icon: Clock },
    'En farmacia': { bg: 'bg-[var(--color-status-farmacia)]/10', text: 'text-[var(--color-status-farmacia)]', icon: Store },
    'En camino': { bg: 'bg-[var(--color-status-camino)]/10', text: 'text-[var(--color-status-camino)]', icon: Truck },
    'Entregado': { bg: 'bg-[var(--color-status-entregado)]/10', text: 'text-[var(--color-status-entregado)]', icon: PackageOpen },
    'Retrasado': { bg: 'bg-[var(--color-status-retrasado)]/10', text: 'text-[var(--color-status-retrasado)]', icon: AlertCircle },
  };

  const { bg, text, icon: Icon } = config[estado];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}>
      <Icon className="w-3.5 h-3.5" />
      {estado}
    </span>
  );
}
