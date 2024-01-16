export interface Student {
  nombre: string,
  credencial: number,
  semestre: number,
  carrera: string,
  materiasDeSemestre: string[],
  materiasAcreditadas?: string[],

}
