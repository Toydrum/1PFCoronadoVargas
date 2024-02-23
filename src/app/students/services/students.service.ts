import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { BehaviorSubject, Observable, catchError, mergeMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: Student[] = [];
  private studentsSource = new BehaviorSubject<Student[]>([...this.students]);
  students$ = this.studentsSource.asObservable();
  constructor(private httpClient: HttpClient) {}

  addStudent(student: Student) {
    const min = Math.ceil(4000);
    const max = Math.floor(9000);
    const num = Math.random() * (max - min + 1) + min;
    function cred(num: number) {
      return Math.round(num);
    }
    let addedStudentPassword = {
      ...student,
      password: 'mypassword',
      credencial: cred(num),
      role:"user"
    };
    console.log(addedStudentPassword)
    return this.httpClient.post<Student>('http://localhost:3000/students', addedStudentPassword)
    /* .pipe(mergeMap(() => this.getCurrentStudents())); */
  }


  getCurrentStudents() {
    return (this.httpClient.get<Student[]>('http://localhost:3000/students')
    );
    console.log(this.getCurrentStudents)
  }
}
