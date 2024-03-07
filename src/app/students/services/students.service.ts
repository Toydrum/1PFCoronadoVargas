import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  addStudent(student: Student) {
    const min = Math.ceil(4000);
    const max = Math.floor(9000);
    const num = Math.round(Math.random() * (max - min + 1) + min);
    let addedStudentPassword = {
      ...student,
      password: 'mypassword',
      credencial: num,
      role: 'user',
    };
    console.log(addedStudentPassword);
    return this.httpClient.post<Student>(
      'http://localhost:3000/students',
      addedStudentPassword
    );
    /* .pipe(mergeMap(() => this.getCurrentStudents())); */
  }

  getCurrentStudents(): Observable<Student[] | undefined> {
    return this.httpClient.get<Student[] | undefined>(
      'http://localhost:3000/students'
    );
  }
}
