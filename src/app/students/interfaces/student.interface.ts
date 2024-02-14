export interface Student {
  id?: string,
  nombre: string,
  apellido: string,
  credencial?: number,
  semestre: number,
  carrera: string,
  password?: string,
  materiasDeSemestre?: string[],
  materiasAcreditadas?: string[],

}
