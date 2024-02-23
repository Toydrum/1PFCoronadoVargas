import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/app/students/interfaces/student.interface';
import { StudentsService } from 'src/app/students/services/students.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStudentSubject = new BehaviorSubject<Student | undefined>(undefined);
  authStudent$ = this.authStudentSubject.asObservable();
  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

  register(student: Student): void {
    if (student) {
      this.router.navigate(['/students/abmAlumnos']);
      this.authStudentSubject.next(student)
    }
  }

  login(logger: Student): void {
   this.studentsService.getCurrentStudents().subscribe((v) => {
      let student: Student | undefined = v.find((student) => {

          return student.credencial === logger.credencial;
      });
      this.authStudentSubject.next(student)
      if(!!student){
      this.router.navigate(['/students/abmAlumnos']);
      this.authStudent$.subscribe({next:(s)=>{console.log(s)}})}
    });
  }
}
