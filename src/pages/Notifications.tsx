import { notificaciones } from '../data/mockData';
import { Bell, Truck, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Notifications() {
  const getIcon = (tipo: string) => {
    switch(tipo) {
      case 'recordatorio_toma': return <Clock className="w-5 h-5 text-[var(--color-primary)]" />;
      case 'cambio_estado_entrega': return <Truck className="w-5 h-5 text-[var(--color-status-camino)]" />;
      case 'medicamento_disponible': return <CheckCircle2 className="w-5 h-5 text-[var(--color-success)]" />;
      case 'alerta_retraso': return <AlertCircle className="w-5 h-5 text-[var(--color-danger)]" />;
      default: return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const getBg = (tipo: string) => {
    switch(tipo) {
      case 'recordatorio_toma': return 'bg-[var(--color-primary)]/10';
      case 'cambio_estado_entrega': return 'bg-[var(--color-status-camino)]/10';
      case 'medicamento_disponible': return 'bg-[var(--color-success)]/10';
      case 'alerta_retraso': return 'bg-[var(--color-danger)]/10';
      default: return 'bg-gray-100';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col gap-6"
    >
      <h1 className="text-2xl font-bold">Notificaciones</h1>
      <div className="flex flex-col gap-3">
        {notificaciones.map((notif) => (
          <div 
            key={notif.id} 
            className={`flex gap-4 p-4 rounded-2xl border ${!notif.leida ? 'bg-white border-gray-200 shadow-sm' : 'bg-transparent border-transparent'}`}
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getBg(notif.tipo)}`}>
              {getIcon(notif.tipo)}
            </div>
            <div className="flex flex-col gap-1">
              <p className={`text-sm ${!notif.leida ? 'font-bold text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}`}>
                {notif.mensaje}
              </p>
              <span className="text-xs text-gray-400 font-medium">{notif.fecha}</span>
            </div>
            {!notif.leida && (
              <div className="ml-auto flex-shrink-0">
                <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full mt-2"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
