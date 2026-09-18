export type Paciente = {
  id: string;
  nombre_paciente: string;
  edad: number;
  eps: string;
  condicion_relevante: string;
};

export type Medicamento = {
  id: string;
  nombre_medicamento: string;
  dosis: string;
  disponibilidad: 'Disponible' | 'Agotado temporalmente' | 'En camino' | string;
};

export type EstadoEntrega = 'Solicitado' | 'En farmacia' | 'En camino' | 'Entregado' | 'Retrasado';

export type Entrega = {
  id: string;
  id_paciente: string;
  medicamento: Medicamento;
  fecha_entrega_estimada: string;
  estado_entrega: EstadoEntrega;
  sede_farmacia: string;
};

export type TipoNotificacion = 'recordatorio_toma' | 'cambio_estado_entrega' | 'medicamento_disponible' | 'alerta_retraso';

export type Notificacion = {
  id: string;
  id_paciente: string;
  tipo: TipoNotificacion;
  mensaje: string;
  fecha: string;
  leida: boolean;
};
