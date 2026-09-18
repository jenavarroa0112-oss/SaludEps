import { useState } from 'react';
import { entregas } from '../data/mockData';
import MedicationCard from '../components/MedicationCard';
import { motion } from 'motion/react';

export default function Medications() {
  const [filter, setFilter] = useState<string>('Todos');
  const filters = ['Todos', 'En camino', 'En farmacia', 'Retrasado', 'Entregado'];

  const filtered = filter === 'Todos' ? entregas : entregas.filter(e => e.estado_entrega === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6"
    >
      <h1 className="text-2xl font-bold">Mis Medicamentos</h1>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
              filter === f 
                ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' 
                : 'bg-white text-[var(--color-text-muted)] border-gray-200 hover:border-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length > 0 ? (
          filtered.map(entrega => (
            <MedicationCard key={entrega.id} entrega={entrega} />
          ))
        ) : (
          <p className="text-center py-8 text-[var(--color-text-muted)]">No hay medicamentos en este estado.</p>
        )}
      </div>
    </motion.div>
  );
}
