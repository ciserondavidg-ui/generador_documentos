'use strict';
const templates = {
 general: ['Registro general', ['Asunto','Observaciones']],
 audiencia: ['Seguimiento interno de audiencia', ['Referencia interna','Fecha prevista','Hora prevista','Fuente consultada','Observaciones']],
 caratula: ['Ficha interna de expediente', ['Referencia interna','Responsable','Estado de revisión','Observaciones']],
 citacion: ['Registro de cita', ['Fecha prevista','Hora prevista','Lugar informado','Fuente consultada','Observaciones']],
 demanda: ['Ficha de revisión jurídica', ['Referencia interna','Responsable','Hechos por revisar','Observaciones']],
 diligencia: ['Bitácora de actividad', ['Responsable','Actividad registrada','Observaciones']],
 escrito: ['Borrador de trabajo', ['Asunto','Contenido','Observaciones']],
 inasistencia: ['Registro interno de asistencia', ['Fecha prevista','Estado de asistencia','Fuente consultada','Observaciones']],
 repuve: ['Bitácora de consulta vehicular', ['Referencia vehicular','Fecha de consulta','Fuente consultada','Observaciones']],
 segundo: ['Borrador de seguimiento', ['Asunto','Contenido','Observaciones']],
 sentencia: ['Ficha de revisión de resolución existente', ['Referencia interna','Fuente consultada','Fecha de consulta','Observaciones']],
 sepomex: ['Registro interno de correspondencia', ['Referencia interna','Domicilio','Estado de envío','Observaciones']],
 qr: ['Registro interno de cita', ['Referencia interna','Fecha prevista','Hora prevista','Observaciones']]
};
const notice = 'DOCUMENTO INTERNO — NO OFICIAL';
const disclaimer = 'No acredita actos de autoridad, notificaciones, resoluciones, consultas oficiales ni permisos de acceso.';
