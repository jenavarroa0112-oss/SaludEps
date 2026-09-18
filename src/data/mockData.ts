import { Entrega, Medicamento, Notificacion, Paciente } from '../types';

export const pacientes: Paciente[] = [
  { id: 'p1', nombre_paciente: 'Mauricio Gómez', edad: 74, eps: 'Sura EPS', condicion_relevante: 'Hipertensión' },
  { id: 'p2', nombre_paciente: 'Jorge Iván Cárdenas', edad: 68, eps: 'Nueva EPS', condicion_relevante: 'Diabetes tipo 2' },
  { id: 'p3', nombre_paciente: 'Carmen Julia Restrepo', edad: 81, eps: 'Sanitas EPS', condicion_relevante: 'Movilidad reducida' }
];

export const medicamentos: Medicamento[] = [
  { id: 'm1', nombre_medicamento: 'Losartán', dosis: '50 mg', disponibilidad: 'Disponible' },
  { id: 'm2', nombre_medicamento: 'Metformina', dosis: '850 mg', disponibilidad: 'Disponible' },
  { id: 'm3', nombre_medicamento: 'Atorvastatina', dosis: '20 mg', disponibilidad: 'Agotado temporalmente' },
  { id: 'm4', nombre_medicamento: 'Levotiroxina', dosis: '100 mcg', disponibilidad: 'Disponible' },
  { id: 'm5', nombre_medicamento: 'Insulina Glargina', dosis: '100 U/ml', disponibilidad: 'En camino' },
  { id: 'm6', nombre_medicamento: 'Ácido Acetilsalicílico', dosis: '100 mg', disponibilidad: 'Disponible' },
  { id: 'm7', nombre_medicamento: 'Omeprazol', dosis: '20 mg', disponibilidad: 'Disponible' },
  { id: 'm8', nombre_medicamento: 'Amlodipino', dosis: '5 mg', disponibilidad: 'En camino' },
  { id: 'm9', nombre_medicamento: 'Enalapril', dosis: '20 mg', disponibilidad: 'Agotado temporalmente' }
];

// Seed entregas tied to Rosa (p1) mostly, to show a rich dashboard for her
export const entregas: Entrega[] = [
  {
    id: 'e1',
    id_paciente: 'p1',
    medicamento: medicamentos[0], // Losartán
    fecha_entrega_estimada: 'Hoy, 3:00 PM',
    estado_entrega: 'En camino',
    sede_farmacia: 'Farmacia Sura - Sede Centro'
  },
  {
    id: 'e2',
    id_paciente: 'p1',
    medicamento: medicamentos[1], // Metformina
    fecha_entrega_estimada: 'Mañana, 10:00 AM',
    estado_entrega: 'En farmacia',
    sede_farmacia: 'Farmacia Sura - Sede Centro'
  },
  {
    id: 'e3',
    id_paciente: 'p1',
    medicamento: medicamentos[2], // Atorvastatina
    fecha_entrega_estimada: 'Pendiente disponibilidad',
    estado_entrega: 'Retrasado',
    sede_farmacia: 'Farmacia Sura - Sede Norte'
  },
  {
    id: 'e4',
    id_paciente: 'p1',
    medicamento: medicamentos[3], // Levotiroxina
    fecha_entrega_estimada: 'Hace 3 días',
    estado_entrega: 'Entregado',
    sede_farmacia: 'Farmacia Sura - Sede Centro'
  },
  {
    id: 'e5',
    id_paciente: 'p1',
    medicamento: medicamentos[5], // Ácido Acetilsalicílico
    fecha_entrega_estimada: 'Próxima semana',
    estado_entrega: 'Solicitado',
    sede_farmacia: 'Farmacia Sura - Sede Norte'
  },
  {
    id: 'e6',
    id_paciente: 'p1',
    medicamento: medicamentos[6], // Omeprazol
    fecha_entrega_estimada: 'Hoy, 5:00 PM',
    estado_entrega: 'En farmacia',
    sede_farmacia: 'Farmacia Sura - Sede Norte'
  },
  {
    id: 'e7',
    id_paciente: 'p1',
    medicamento: medicamentos[7], // Amlodipino
    fecha_entrega_estimada: 'Mañana, 2:00 PM',
    estado_entrega: 'En camino',
    sede_farmacia: 'Farmacia Sura - Sede Sur'
  },
  {
    id: 'e8',
    id_paciente: 'p1',
    medicamento: medicamentos[8], // Enalapril
    fecha_entrega_estimada: 'Pendiente disponibilidad',
    estado_entrega: 'Retrasado',
    sede_farmacia: 'Farmacia Sura - Sede Centro'
  }
];

export const notificaciones: Notificacion[] = [
  {
    id: 'n1',
    id_paciente: 'p1',
    tipo: 'cambio_estado_entrega',
    mensaje: 'Tu repartidor va en camino con Losartán.',
    fecha: 'Hace 10 min',
    leida: false
  },
  {
    id: 'n2',
    id_paciente: 'p1',
    tipo: 'medicamento_disponible',
    mensaje: 'Metformina ya está lista para recoger en la farmacia.',
    fecha: 'Ayer',
    leida: true
  },
  {
    id: 'n3',
    id_paciente: 'p1',
    tipo: 'alerta_retraso',
    mensaje: 'Atorvastatina se encuentra agotada temporalmente. Te notificaremos.',
    fecha: 'Hace 2 días',
    leida: true
  },
  {
    id: 'n4',
    id_paciente: 'p1',
    tipo: 'recordatorio_toma',
    mensaje: 'No olvides tomar tu Levotiroxina de hoy.',
    fecha: 'Hoy, 8:00 AM',
    leida: true
  }
];

// Context/Session mock
export const getActiveUser = () => pacientes[0];
