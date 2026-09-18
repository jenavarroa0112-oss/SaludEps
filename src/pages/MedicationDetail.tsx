import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { entregas } from '../data/mockData';
import Timeline from '../components/Timeline';
import StatusBadge from '../components/StatusBadge';
import { motion } from 'motion/react';

export default function MedicationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const entrega = entregas.find(e => e.id === id);

  if (!entrega) {
    return <div className="p-4 text-center">Medicamento no encontrado</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6"
    >
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors w-fit"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Volver</span>
      </button>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <StatusBadge estado={entrega.estado_entrega} />
        </div>
        <h1 className="text-3xl font-bold mt-3 mb-1 text-[var(--color-text-main)]">{entrega.medicamento.nombre_medicamento}</h1>
        <p className="text-[var(--color-text-muted)] text-lg">{entrega.medicamento.dosis}</p>
        
        <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-[var(--color-primary)]/10 p-2 rounded-xl mt-0.5">
              <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-0.5">Sede asignada</p>
              <p className="font-medium text-[var(--color-text-main)]">{entrega.sede_farmacia}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Seguimiento</h2>
        <Timeline estadoActual={entrega.estado_entrega} />
      </div>

      {entrega.estado_entrega === 'En farmacia' && (
        <button className="bg-[var(--color-primary)] text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-[var(--color-primary-light)] transition-all">
          Confirmar que lo he recogido
        </button>
      )}
      {entrega.estado_entrega === 'En camino' && (
        <button className="bg-[var(--color-primary)] text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-[var(--color-primary-light)] transition-all">
          Confirmar recepción en casa
        </button>
      )}
    </motion.div>
  );
}
