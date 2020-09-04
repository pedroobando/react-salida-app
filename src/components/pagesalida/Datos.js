export const lstAllAprobadores = [
  { dni: 9547, nombre: 'Camilo Larez', roll: 'ADM', aprobador: false },
  { dni: 5478, nombre: 'Raiza Mota', roll: 'ADM', aprobador: false },
  { dni: 1975, nombre: 'Ezperanza Rodriguez', roll: 'GTE', aprobador: false },
  { dni: 5321, nombre: 'Jose Martinez', roll: 'APB', aprobador: false },
  { dni: 3323, nombre: 'Juan Pinerua', roll: 'SEG', aprobador: false },
  { dni: 1925, nombre: 'Pedro Rengel', roll: 'SEG', aprobador: false },
];

export const lstSinTerminar = [
  { nroSalida: 'ADM-124-454', nombre: 'Luis Ocando' },
  { nroSalida: 'DPT-2322-454', nombre: 'Franco Colonico' },
  { nroSalida: 'MTT-0820-014', nombre: 'Extintores El Norte' },
];

export const lstTerminadas = [
  {
    nroSalida: 'ADM-124-454',
    nombre: 'Luis Ocando',
    sinRetorno: true,
    fecha: Date.now(),
  },
  {
    nroSalida: 'DPT-2322-454',
    nombre: 'Franco Colonico',
    sinRetorno: false,
    fecha: Date.now(),
  },
  {
    nroSalida: 'MTT-0820-014',
    nombre: 'Extintores El Norte',
    sinRetorno: false,
    fecha: Date.now(),
  },
];

export const lstPersonas = [
  {
    cedula: '007',
    nombre: 'Esperanza Rodriguez',
    email: 'pedroobando@hotmail.com',
  },
  {
    cedula: '12',
    nombre: 'Maglis Gonzalez',
    email: 'pedroobando@hotmail.com',
  },
  {
    cedula: '123',
    nombre: 'Lizmar Ferrer',
    email: 'pedroobando@hotmail.com',
  },
  {
    cedula: '1234',
    nombre: 'Yotsimar Avila',
    email: 'Yotsi@hotmail.com',
  },
];
