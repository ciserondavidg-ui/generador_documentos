'use strict';
// Cada ficha utiliza campos de captura, no afirmaciones jurídicas automáticas.
const field=(id,label,type='text',required=true)=>({id,label,type,required});
const person=field('person','Persona relacionada'), court=field('court','Juzgado / autoridad indicada en la fuente'), exp=field('exp','Expediente de referencia'), date=field('date','Fecha registrada','date'), time=field('time','Hora local','time'), zone=field('zone','Zona horaria indicada'), actor=field('actor','Parte promovente'), source=field('source','Referencia de la fuente comprobada'), notes=field('notes','Observaciones internas','textarea',false);
const TEMPLATES={
 audiencia:{title:'Seguimiento de audiencia',fields:[person,court,exp,date,time,zone,source,notes]},
 caratula:{title:'Ficha interna de presentación de demanda',fields:[actor,person,court,exp,date,field('files','Archivos presentados según la fuente','textarea'),source,notes]},
 citacion:{title:'Registro interno de citación recibida',fields:[person,court,exp,date,time,zone,source,notes]},
 demanda:{title:'Ficha de preparación de demanda',fields:[actor,person,court,field('address','Domicilio de referencia','textarea',false),field('facts','Hechos para revisión jurídica','textarea'),source,notes]},
 diligencia:{title:'Seguimiento interno de diligencia',fields:[person,court,exp,date,source,notes]},
 escrito:{title:'Borrador de trabajo para escrito',fields:[actor,person,court,exp,field('body','Contenido para revisión jurídica','textarea'),source,notes]},
 inasistencia:{title:'Registro de asistencia a audiencia',fields:[person,court,exp,date,time,zone,field('attendance','Asistencia observada según fuente'),source,notes]},
 repuve:{title:'Registro interno de consulta vehicular',fields:[field('vin','NIV'),field('brand','Marca'),field('model','Modelo'),date,source,notes]},
 segundo:{title:'Ficha de seguimiento de segundo escrito',fields:[actor,person,court,exp,date,source,notes]},
 sentencia:{title:'Seguimiento de resolución recibida',fields:[person,court,exp,date,source,notes]},
 sepomex:{title:'Ficha de domicilio y correspondencia',fields:[person,field('address','Domicilio','textarea'),field('postal','Código postal'),source,notes]},
 qr:{title:'Control interno de acreditación recibida',fields:[person,court,exp,date,time,zone,source,notes]}
};
const NOTICE='CONTROL INTERNO — NO OFICIAL. No constituye citación, resolución, acuse, autorización de acceso ni certificación de autoridad.';
