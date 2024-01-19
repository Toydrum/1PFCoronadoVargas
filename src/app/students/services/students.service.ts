import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Student[] = [
  ]
  private studentsSource = new BehaviorSubject<Student>(
    {
    nombre: 'josh',
    apellido: 'Balandrano',
    credencial: 4235,
    semestre: 1,
    carrera: 'Knight',
    materiasDeSemestre: [],
    materiasAcreditadas: []
    },
    );
  students$ = this.studentsSource.asObservable();
  constructor() { }

  addStudent(student: Student){
    this.studentsSource.next(student);
    this.students.push(student)
    console.log(this.students)
    }


  showCurrentStudents(){

  }
}
