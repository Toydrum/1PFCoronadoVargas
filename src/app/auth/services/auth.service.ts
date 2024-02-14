import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observeOn } from 'rxjs';
import { Student } from 'src/app/students/interfaces/student.interface';
import { StudentsService } from 'src/app/students/services/students.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStudent: Student | null = null
  students: Student[]= []

  constructor(private router: Router, private studentsService: StudentsService) {

  }

  register(student: Student):void {
    if(student){
      this.router.navigate(['/students/abmAlumnos'])
      this.authStudent = student;
    }
  }

  login(logger: any){
    /* console.log(typeof(logger)) */
    let students: Student[] = []
    this.studentsService.students$.subscribe(s => students = [...s] )
    /* console.log(students); */
    const loggerCredential = students.find(s=> s.credencial == logger.credential)
    console.log(!!loggerCredential)

  }
}
