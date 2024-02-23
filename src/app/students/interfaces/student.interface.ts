export interface Student {
  id?: string,
  nombre: string,
  apellido: string,
  credencial?: number,
  semestre: number,
  carrera: string,
  password?: string,
  role?: string,
  materiasDeSemestre?: string[],
  materiasAcreditadas?: string[],

}
