export interface Student {
  nombre: string,
  apellido: string,
  credencial: number,
  semestre: number,
  carrera: string,
  materiasDeSemestre?: string[],
  materiasAcreditadas?: string[],

}
