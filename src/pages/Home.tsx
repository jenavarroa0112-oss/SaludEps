import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { getActiveUser, entregas } from '../data/mockData';
import MedicationCard from '../components/MedicationCard';
import { motion } from 'motion/react';

export default function Home() {
  const navigate = useNavigate();
  const user = getActiveUser();
  
  // Find the most urgent/relevant upcoming delivery
  const upcoming = entregas.find(e => e.estado_entrega === 'En camino' || e.estado_entrega === 'En farmacia') || entregas[0];
  
  const stats = {
    enCamino: entregas.filter(e => e.estado_entrega === 'En camino').length,
    listos: entregas.filter(e => e.estado_entrega === 'En farmacia').length,
    retrasados: entregas.filter(e => e.estado_entrega === 'Retrasado').length,
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6"
    >
      {/* Quick Search Trigger */}
      <div 
        onClick={() => navigate('/search')}
        className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-gray-100 cursor-text"
      >
        <Search className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400">Buscar un medicamento...</span>
      </div>

      {/* Summary Badges */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex-shrink-0 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-3 rounded-2xl flex flex-col items-start min-w-[110px]">
          <span className="text-2xl font-bold">{stats.enCamino}</span>
          <span className="text-xs font-semibold uppercase tracking-wider">En camino</span>
        </div>
        <div className="flex-shrink-0 bg-[var(--color-warning)]/10 text-[var(--color-warning)] px-4 py-3 rounded-2xl flex flex-col items-start min-w-[110px]">
          <span className="text-2xl font-bold">{stats.listos}</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Para recoger</span>
        </div>
        {stats.retrasados > 0 && (
          <div className="flex-shrink-0 bg-[var(--color-danger)]/10 text-[var(--color-danger)] px-4 py-3 rounded-2xl flex flex-col items-start min-w-[110px]">
            <span className="text-2xl font-bold">{stats.retrasados}</span>
            <span className="text-xs font-semibold uppercase tracking-wider">Retrasados</span>
          </div>
        )}
      </div>

      {/* Next Delivery Highlight */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold text-[var(--color-text-main)]">Próximo a recibir</h2>
        </div>
        <div className="bg-[var(--color-primary)] text-white rounded-3xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <div className="relative z-10">
            <span className="inline-block px-2 py-1 bg-white/20 rounded-md text-xs font-semibold mb-3">
              {upcoming.estado_entrega}
            </span>
            <h3 className="text-2xl font-bold mb-1">{upcoming.medicamento.nombre_medicamento}</h3>
            <p className="text-white/80 text-sm mb-6">{upcoming.medicamento.dosis}</p>
            
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <div>
                <p className="text-xs text-white/60 uppercase font-semibold">Fecha estimada</p>
                <p className="font-medium">{upcoming.fecha_entrega_estimada}</p>
              </div>
              <Link 
                to={`/medications/${upcoming.id}`}
                className="bg-white text-[var(--color-primary)] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-1 hover:bg-gray-50 transition-colors"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent / All Meds Link */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[var(--color-text-main)]">Tus medicamentos</h2>
          <Link to="/medications" className="text-[var(--color-primary)] font-semibold flex items-center gap-1 text-sm">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {entregas.slice(0, 3).map(entrega => (
            <MedicationCard key={entrega.id} entrega={entrega} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
