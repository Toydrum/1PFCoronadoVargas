import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/students/interfaces/student.interface';
import { StudentsService } from 'src/app/students/services/students.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStudent: Student | undefined = undefined;
  students: Student[] = [];

  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

  register(student: Student): void {
    if (student) {
      this.router.navigate(['/students/abmAlumnos']);
      this.authStudent = student;
    }
  }

  login(logger: Student): void {
    this.studentsService.getCurrentStudents().subscribe((v) => {
      let student: Student | undefined = v.find((student) => {
        console.log(typeof student.credencial);
          console.log(typeof logger.credencial);
          return student.credencial === logger.credencial;
      });
      this.authStudent = student
      this.router.navigate(['/students/abmAlumnos']);
      console.log(this.authStudent);
    });
  }
}
