export interface Alumno {
  nombre: string,
  credencial: number,
  semestre: number,
  carrera: string,
  materiasDeSemestre: string[],
  materiasAcreditadas?: string[],

}
