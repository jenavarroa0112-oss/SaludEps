import { useState } from 'react';
import { Search as SearchIcon, X, Frown } from 'lucide-react';
import { entregas } from '../data/mockData';
import MedicationCard from '../components/MedicationCard';
import { motion } from 'motion/react';

export default function Search() {
  const [query, setQuery] = useState('');
  
  const filtered = entregas.filter(e => 
    e.medicamento.nombre_medicamento.toLowerCase().includes(query.toLowerCase()) ||
    e.estado_entrega.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }} 
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-6"
    >
      <div className="sticky top-0 bg-[var(--color-background)] pt-2 pb-4 z-10">
        <h1 className="text-2xl font-bold mb-4">Buscar medicamento</h1>
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            autoFocus
            placeholder="Ej. Losartán, En camino..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-10 text-[var(--color-text-main)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)] focus:border-transparent transition-all shadow-sm"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filtered.length > 0 ? (
          filtered.map(entrega => (
            <MedicationCard key={entrega.id} entrega={entrega} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Frown className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-main)]">No hay resultados</h3>
            <p className="text-[var(--color-text-muted)] mt-2">No encontramos medicamentos ni estados que coincidan con "{query}". Intenta con otro término.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
