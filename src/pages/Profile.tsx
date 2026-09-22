import { getActiveUser } from '../data/mockData';
import { User, Activity, Building, Settings, LogOut, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileProps {
  onOpenIntro?: () => void;
}

export default function Profile({ onOpenIntro }: ProfileProps) {
  const user = getActiveUser();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6"
    >
      <h1 className="text-2xl font-bold">Mi Perfil</h1>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-[var(--color-primary-light)] text-white text-3xl font-bold flex items-center justify-center rounded-full mx-auto mb-4">
          {user.nombre_paciente.charAt(0)}
        </div>
        <h2 className="text-xl font-bold text-[var(--color-text-main)]">{user.nombre_paciente}</h2>
        <p className="text-[var(--color-text-muted)]">{user.edad} años</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex items-center gap-4 border-b border-gray-100">
          <div className="bg-gray-50 p-3 rounded-xl">
            <Building className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase">Mi EPS</p>
            <p className="font-bold text-[var(--color-text-main)]">{user.eps}</p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-4">
          <div className="bg-gray-50 p-3 rounded-xl">
            <Activity className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase">Condición principal</p>
            <p className="font-bold text-[var(--color-text-main)]">{user.condicion_relevante}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {onOpenIntro && (
          <button 
            onClick={onOpenIntro}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-left"
          >
            <HelpCircle className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="font-medium text-[var(--color-text-main)]">Ver pantalla de bienvenida y explicación</span>
          </button>
        )}
        <button className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
          <Settings className="w-5 h-5 text-[var(--color-text-muted)]" />
          <span className="font-medium text-[var(--color-text-main)]">Ajustes de la cuenta</span>
        </button>
        <button className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors text-[var(--color-danger)]">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
      
      <p className="text-center text-xs text-gray-400 mt-4">SaludEps Demo v0.1.0</p>
    </motion.div>
  );
}
