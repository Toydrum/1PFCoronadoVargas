import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent {
  dataSource: Student[] = [];

  constructor(private studentsService: StudentsService) {
    this.getStudents();
  }

  getStudents() {
    this.studentsService.getCurrentStudents().subscribe({
      next: (s: Student[] | undefined) => {
        if (!!s) {
          this.dataSource = [...s];
        } else {
          this.dataSource = [];
        }
        console.log(this.dataSource);
      },
    });
  }
}
