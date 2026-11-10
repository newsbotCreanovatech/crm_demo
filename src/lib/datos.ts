// Datos ficticios solo para la demostración. No hay base de datos.

export type EstadoPoliza =
  | "Borrador"
  | "En revisión"
  | "Faltan documentos"
  | "Aprobada"
  | "Cancelada"
  | "Venta perdida";

export type EstatusLegal = "Ciudadano" | "Residente" | "Permiso de trabajo";

export interface Miembro {
  nombre: string;
  relacion: "Titular" | "Cónyuge" | "Hijo/a";
  nacimiento: string;
  aplica: boolean;
}

export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
  area: "Salud" | "Vida" | "Medicare" | "Dental";
  aseguradora: string;
  plan: string;
  estado: EstadoPoliza;
  estatusLegal: EstatusLegal;
  fecha: string;
  agente: string;
  ciudad: string;
  prima: number;
  credito: number;
  ingresoAnual: number;
  aplicacion: string;
  renovado2027: boolean;
  miembros: Miembro[];
}

export const agentes = ["Laura Gómez", "Carlos Méndez", "Sofía Herrera"];

export const clientes: Cliente[] = [
  {
    id: "c-1001", nombre: "María López Fuentes", telefono: "(469) 555-0142", email: "maria.lopez@ejemplo.com",
    area: "Salud", aseguradora: "Oscar", plan: "Gold Simple Diabetes Guided Care", estado: "Aprobada",
    estatusLegal: "Ciudadano", fecha: "2026-01-10", agente: "Laura Gómez", ciudad: "Dallas, TX",
    prima: 0, credito: 472, ingresoAnual: 20000, aplicacion: "7558764958", renovado2027: false,
    miembros: [
      { nombre: "María López Fuentes", relacion: "Titular", nacimiento: "1986-03-14", aplica: true },
      { nombre: "Andrés Ruiz Soto", relacion: "Cónyuge", nacimiento: "1984-07-02", aplica: true },
      { nombre: "Valeria Ruiz López", relacion: "Hijo/a", nacimiento: "2015-11-21", aplica: true },
    ],
  },
  {
    id: "c-1002", nombre: "José Ramírez Ortega", telefono: "(786) 555-0198", email: "jose.ramirez@ejemplo.com",
    area: "Salud", aseguradora: "Ambetter", plan: "Silver Balanced CSR 150", estado: "Faltan documentos",
    estatusLegal: "Residente", fecha: "2025-12-15", agente: "Laura Gómez", ciudad: "Miami, FL",
    prima: 12.4, credito: 389, ingresoAnual: 24500, aplicacion: "7558761203", renovado2027: false,
    miembros: [{ nombre: "José Ramírez Ortega", relacion: "Titular", nacimiento: "1979-01-30", aplica: true }],
  },
  {
    id: "c-1003", nombre: "Ana Torres Medina", telefono: "(817) 555-0119", email: "ana.torres@ejemplo.com",
    area: "Salud", aseguradora: "Molina Healthcare", plan: "Bronze 6500", estado: "Aprobada",
    estatusLegal: "Ciudadano", fecha: "2025-11-19", agente: "Carlos Méndez", ciudad: "Fort Worth, TX",
    prima: 0, credito: 610, ingresoAnual: 31000, aplicacion: "7558759981", renovado2027: true,
    miembros: [
      { nombre: "Ana Torres Medina", relacion: "Titular", nacimiento: "1990-05-08", aplica: true },
      { nombre: "Diego Torres Medina", relacion: "Hijo/a", nacimiento: "2012-02-17", aplica: true },
      { nombre: "Lucía Torres Medina", relacion: "Hijo/a", nacimiento: "2017-09-03", aplica: true },
      { nombre: "Raúl Pérez Díaz", relacion: "Cónyuge", nacimiento: "1988-12-11", aplica: false },
    ],
  },
  {
    id: "c-1004", nombre: "Luis Fernández Rojas", telefono: "(214) 555-0167", email: "luis.fernandez@ejemplo.com",
    area: "Salud", aseguradora: "Oscar", plan: "Silver Simple PCP Saver CSR 150 - EPO", estado: "Aprobada",
    estatusLegal: "Permiso de trabajo", fecha: "2025-11-12", agente: "Laura Gómez", ciudad: "Dallas, TX",
    prima: 4.1, credito: 355, ingresoAnual: 22800, aplicacion: "7558755420", renovado2027: true,
    miembros: [{ nombre: "Luis Fernández Rojas", relacion: "Titular", nacimiento: "1993-04-22", aplica: true }],
  },
  {
    id: "c-1005", nombre: "Carmen Ruiz Navarro", telefono: "(305) 555-0133", email: "carmen.ruiz@ejemplo.com",
    area: "Salud", aseguradora: "Aetna", plan: "Silver S", estado: "Borrador",
    estatusLegal: "Ciudadano", fecha: "2025-11-04", agente: "Sofía Herrera", ciudad: "Hialeah, FL",
    prima: 0, credito: 0, ingresoAnual: 18000, aplicacion: "—", renovado2027: false,
    miembros: [
      { nombre: "Carmen Ruiz Navarro", relacion: "Titular", nacimiento: "1975-08-19", aplica: true },
      { nombre: "Tomás Gil Ruiz", relacion: "Hijo/a", nacimiento: "2009-06-25", aplica: true },
    ],
  },
  {
    id: "c-1006", nombre: "Pedro Castillo Vega", telefono: "(832) 555-0110", email: "pedro.castillo@ejemplo.com",
    area: "Salud", aseguradora: "BCBSTX", plan: "Blue Advantage Silver HMO", estado: "En revisión",
    estatusLegal: "Residente", fecha: "2026-01-08", agente: "Carlos Méndez", ciudad: "Houston, TX",
    prima: 22.9, credito: 402, ingresoAnual: 27400, aplicacion: "7558766011", renovado2027: false,
    miembros: [{ nombre: "Pedro Castillo Vega", relacion: "Titular", nacimiento: "1982-10-05", aplica: true }],
  },
  {
    id: "c-1007", nombre: "Gabriela Sánchez Mora", telefono: "(469) 555-0175", email: "gabriela.sanchez@ejemplo.com",
    area: "Salud", aseguradora: "Cigna", plan: "Connect Gold 1000", estado: "Aprobada",
    estatusLegal: "Ciudadano", fecha: "2025-12-02", agente: "Sofía Herrera", ciudad: "Plano, TX",
    prima: 38.0, credito: 520, ingresoAnual: 35200, aplicacion: "7558760321", renovado2027: true,
    miembros: [
      { nombre: "Gabriela Sánchez Mora", relacion: "Titular", nacimiento: "1987-02-12", aplica: true },
      { nombre: "Mateo Sánchez Mora", relacion: "Hijo/a", nacimiento: "2014-03-30", aplica: true },
    ],
  },
  {
    id: "c-1008", nombre: "Ricardo Morales Peña", telefono: "(786) 555-0124", email: "ricardo.morales@ejemplo.com",
    area: "Salud", aseguradora: "Ambetter", plan: "Bronze Essential", estado: "Cancelada",
    estatusLegal: "Ciudadano", fecha: "2025-10-28", agente: "Laura Gómez", ciudad: "Orlando, FL",
    prima: 0, credito: 298, ingresoAnual: 16900, aplicacion: "7558751189", renovado2027: false,
    miembros: [{ nombre: "Ricardo Morales Peña", relacion: "Titular", nacimiento: "1970-12-01", aplica: true }],
  },
  {
    id: "c-1009", nombre: "Elena Vargas Cruz", telefono: "(214) 555-0186", email: "elena.vargas@ejemplo.com",
    area: "Salud", aseguradora: "Oscar", plan: "Gold Classic", estado: "Aprobada",
    estatusLegal: "Residente", fecha: "2025-11-25", agente: "Carlos Méndez", ciudad: "Irving, TX",
    prima: 15.5, credito: 447, ingresoAnual: 26100, aplicacion: "7558757634", renovado2027: false,
    miembros: [
      { nombre: "Elena Vargas Cruz", relacion: "Titular", nacimiento: "1991-07-27", aplica: true },
      { nombre: "Iván Vargas Cruz", relacion: "Hijo/a", nacimiento: "2019-01-15", aplica: true },
    ],
  },
  {
    id: "c-1010", nombre: "Fernando Ríos Delgado", telefono: "(305) 555-0157", email: "fernando.rios@ejemplo.com",
    area: "Salud", aseguradora: "Molina Healthcare", plan: "Silver 250", estado: "Venta perdida",
    estatusLegal: "Permiso de trabajo", fecha: "2025-11-30", agente: "Sofía Herrera", ciudad: "Tampa, FL",
    prima: 0, credito: 0, ingresoAnual: 21000, aplicacion: "—", renovado2027: false,
    miembros: [{ nombre: "Fernando Ríos Delgado", relacion: "Titular", nacimiento: "1985-05-05", aplica: true }],
  },
];

export const medicare = [
  { id: "m-1", nombre: "Rosa Jiménez Paredes", edad: 67, plan: "Humana Gold Plus HMO", parte: "Advantage (C)", estado: "Aprobada" as EstadoPoliza, efectiva: "2026-01-01" },
  { id: "m-2", nombre: "Héctor Salinas Ruiz", edad: 71, plan: "AARP Medicare Advantage", parte: "Advantage (C)", estado: "En revisión" as EstadoPoliza, efectiva: "2026-01-01" },
  { id: "m-3", nombre: "Marta Quintero León", edad: 65, plan: "WellCare Value Script", parte: "Medicamentos (D)", estado: "Borrador" as EstadoPoliza, efectiva: "2026-02-01" },
];

export const prospectos = [
  { id: "p-1", nombre: "Daniela Ortiz Campos", telefono: "(469) 555-0101", email: "daniela.ortiz@ejemplo.com", area: "Salud", fuente: "Facebook", llamado: false, nota: "Pregunta por plan familiar, 4 personas." },
  { id: "p-2", nombre: "Jorge Herrera Luna", telefono: "(786) 555-0138", email: "jorge.herrera@ejemplo.com", area: "Vida", fuente: "Referido", llamado: true, nota: "Referido por María López." },
  { id: "p-3", nombre: "Patricia Núñez Rivas", telefono: "(817) 555-0172", email: "", area: "Salud", fuente: "WhatsApp", llamado: false, nota: "Perdió cobertura del trabajo." },
  { id: "p-4", nombre: "Alberto Campos Reyes", telefono: "(305) 555-0149", email: "alberto.campos@ejemplo.com", area: "Medicare", fuente: "Llamada", llamado: true, nota: "Cumple 65 en marzo." },
  { id: "p-5", nombre: "Silvia Rendón Paz", telefono: "(214) 555-0193", email: "silvia.rendon@ejemplo.com", area: "Dental", fuente: "Web", llamado: false, nota: "" },
  { id: "p-6", nombre: "Óscar Beltrán Mejía", telefono: "(832) 555-0116", email: "oscar.beltran@ejemplo.com", area: "Salud", fuente: "Importado", llamado: false, nota: "Lista de la feria de salud." },
  { id: "p-7", nombre: "Natalia Cárdenas Sol", telefono: "(469) 555-0127", email: "natalia.cardenas@ejemplo.com", area: "Salud", fuente: "Facebook", llamado: false, nota: "Prefiere WhatsApp por la tarde." },
];

export const estadosCartera: { estado: string; n: number }[] = [
  { estado: "Borrador", n: 2 },
  { estado: "En revisión", n: 4 },
  { estado: "Faltan documentos", n: 7 },
  { estado: "Aprobada", n: 127 },
  { estado: "Pago pendiente", n: 0 },
  { estado: "Cancelada", n: 12 },
  { estado: "Venta perdida", n: 9 },
];

export const tareas = [
  { id: "t-1", titulo: "Pedir prueba de ingresos", detalle: "José Ramírez · Ambetter", asignada: "Laura Gómez", creador: "Admin", prioridad: "Alta", vence: "2026-11-10", hecha: false, checklist: ["Carta del empleador", "Últimos 2 talones de pago"] },
  { id: "t-2", titulo: "Revisar pólizas pendientes de noviembre y diciembre", detalle: "Revisar una por una en el portal", asignada: "Laura Gómez", creador: "Admin", prioridad: "Alta", vence: "2026-11-12", hecha: false, checklist: [] },
  { id: "t-3", titulo: "Llamar a Carmen Ruiz", detalle: "Completar la aplicación en borrador", asignada: "Sofía Herrera", creador: "Laura Gómez", prioridad: "Normal", vence: "2026-11-10", hecha: true, checklist: [] },
  { id: "t-4", titulo: "Enviar carta de consentimiento", detalle: "Ana Torres · renovación 2027", asignada: "Carlos Méndez", creador: "Carlos Méndez", prioridad: "Normal", vence: "2026-11-14", hecha: false, checklist: ["Generar PDF", "Enviar por WhatsApp", "Recibir firma"] },
  { id: "t-5", titulo: "Preparar lista de Medicare de marzo", detalle: "Clientes que cumplen 65", asignada: "Sofía Herrera", creador: "Admin", prioridad: "Baja", vence: "2026-11-20", hecha: false, checklist: [] },
];

export const citas = [
  { dia: 10, hora: "11:30", titulo: "Cotizar plan familiar", con: "Luis Fernández", canal: "Videollamada" },
  { dia: 10, hora: "16:00", titulo: "Firma de consentimiento", con: "Ana Torres", canal: "WhatsApp" },
  { dia: 11, hora: "10:00", titulo: "Renovación 2027", con: "María López", canal: "Llamada" },
  { dia: 13, hora: "12:00", titulo: "Revisión de documentos", con: "José Ramírez", canal: "Oficina" },
  { dia: 17, hora: "09:30", titulo: "Reunión de equipo", con: "Equipo", canal: "Oficina" },
  { dia: 19, hora: "17:00", titulo: "Consulta Medicare", con: "Alberto Campos", canal: "Llamada" },
  { dia: 24, hora: "11:00", titulo: "Seguimiento póliza", con: "Pedro Castillo", canal: "WhatsApp" },
];

export const conversaciones = [
  {
    id: "w-1", nombre: "Pedro Castillo Vega", hace: "12 min", sinLeer: 1,
    mensajes: [
      { de: "agente", texto: "Hola Pedro, su aplicación ya se envió a BCBSTX. Le aviso en cuanto la aprueben.", hora: "09:02" },
      { de: "cliente", texto: "Muchas gracias. ¿Ya salió la tarjeta del seguro?", hora: "10:48" },
    ],
  },
  {
    id: "w-2", nombre: "Carmen Ruiz Navarro", hace: "1 h", sinLeer: 1,
    mensajes: [
      { de: "agente", texto: "Carmen, para terminar su aplicación necesito una foto de su identificación.", hora: "08:15" },
      { de: "cliente", texto: "Le mando la foto del documento en un momento.", hora: "09:51" },
    ],
  },
  {
    id: "w-3", nombre: "María López Fuentes", hace: "ayer", sinLeer: 0,
    mensajes: [
      { de: "agente", texto: "Hola María, ya podemos renovar su plan para 2027. ¿Le viene bien que la llame mañana a las 10?", hora: "17:20" },
      { de: "cliente", texto: "Sí, perfecto. Gracias.", hora: "18:02" },
    ],
  },
  {
    id: "w-4", nombre: "Gabriela Sánchez Mora", hace: "lun", sinLeer: 0,
    mensajes: [{ de: "cliente", texto: "¿Mi hijo también queda cubierto con el dentista?", hora: "12:30" }],
  },
];

export const plantillasWhatsapp = [
  "Recordatorio de renovación",
  "Faltan documentos",
  "Póliza aprobada",
  "Felicitación de cumpleaños",
];

export const historial = [
  { fecha: "2026-11-10 10:12", usuario: "Sofía Herrera", accion: "Marcó como hecha la tarea «Llamar a Carmen Ruiz»" },
  { fecha: "2026-11-09 15:27", usuario: "Laura Gómez", accion: "Actualizó la ficha de María López Fuentes (forma de pago)" },
  { fecha: "2026-11-09 15:23", usuario: "Laura Gómez", accion: "Renovó a 2027 a Ana Torres Medina con 3 miembros y sus documentos" },
  { fecha: "2026-11-09 14:35", usuario: "Carlos Méndez", accion: "Renovó a 2027 a Luis Fernández Rojas" },
  { fecha: "2026-11-09 14:15", usuario: "Carlos Méndez", accion: "Renovó a 2027 a Gabriela Sánchez Mora con 1 miembro" },
  { fecha: "2026-11-09 13:59", usuario: "Admin", accion: "Cambió el estado de Elena Vargas Cruz a «Aprobada»" },
  { fecha: "2026-11-08 08:20", usuario: "Laura Gómez", accion: "Importó 24 prospectos desde Excel" },
  { fecha: "2026-11-07 11:05", usuario: "Admin", accion: "Creó el usuario Sofía Herrera (Agente)" },
];

export const equipo = [
  { nombre: "Admin", email: "admin@tuagencia.com", rol: "Administrador", activo: true, ultimo: "Hoy, 08:47" },
  { nombre: "Laura Gómez", email: "laura@tuagencia.com", rol: "Agente", activo: true, ultimo: "Hoy, 09:12" },
  { nombre: "Carlos Méndez", email: "carlos@tuagencia.com", rol: "Agente", activo: true, ultimo: "Ayer, 18:40" },
  { nombre: "Sofía Herrera", email: "sofia@tuagencia.com", rol: "Agente", activo: true, ultimo: "Hoy, 10:12" },
  { nombre: "Antiguo usuario", email: "antiguo@tuagencia.com", rol: "Agente", activo: false, ultimo: "Hace 2 meses" },
];

export const accesos = [
  { nombre: "Cotizador del Marketplace", detalle: "Planes y precios oficiales", url: "https://www.healthcare.gov/see-plans/" },
  { nombre: "HealthSherpa", detalle: "Inscripciones y renovaciones", url: "https://www.healthsherpa.com/" },
  { nombre: "HealthCare.gov en español", detalle: "Información general para el cliente", url: "https://www.cuidadodesalud.gov/" },
  { nombre: "Molina Healthcare", detalle: "Portal de la aseguradora", url: "https://www.molinahealthcare.com/" },
  { nombre: "Ambetter Health", detalle: "Portal de la aseguradora", url: "https://www.ambetterhealth.com/" },
  { nombre: "BCBSTX", detalle: "Portal de la aseguradora", url: "https://www.bcbstx.com/" },
  { nombre: "Cigna", detalle: "Portal de la aseguradora", url: "https://www.cigna.com/" },
  { nombre: "Oscar", detalle: "Portal de la aseguradora", url: "https://www.hioscar.com/" },
  { nombre: "UnitedHealthcare", detalle: "Buscar médico", url: "https://www.uhc.com/" },
];

export const cursos = [
  { titulo: "Cómo funciona el Marketplace", lecciones: 6, minutos: 48, progreso: 100 },
  { titulo: "Inscripción abierta 2027: novedades", lecciones: 4, minutos: 30, progreso: 50 },
  { titulo: "Medicare desde cero", lecciones: 8, minutos: 75, progreso: 0 },
  { titulo: "Cómo pedir y revisar documentos", lecciones: 3, minutos: 20, progreso: 0 },
];

export function formatoFecha(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}

export function iniciales(nombre: string) {
  return nombre.split(" ").slice(0, 2).map((p) => p[0]).join("");
}
