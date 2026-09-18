import { Link } from 'react-router-dom';
import { Entrega } from '../types';
import StatusBadge from './StatusBadge';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MedicationCard({ entrega }: { entrega: Entrega }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        to={`/medications/${entrega.id}`} 
        className="block bg-[var(--color-surface)] rounded-2xl p-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow"
      >
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-text-main)]">
              {entrega.medicamento.nombre_medicamento}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">{entrega.medicamento.dosis}</p>
          </div>
          <StatusBadge estado={entrega.estado_entrega} />
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Fecha estimada</span>
            <span className="text-sm font-medium text-[var(--color-text-main)]">{entrega.fecha_entrega_estimada}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>
      </Link>
    </motion.div>
  );
}
