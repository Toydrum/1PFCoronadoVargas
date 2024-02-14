import {Component} from '@angular/core';
import { StudentsService } from '../../services/students.service';

import { Student } from '../../interfaces/student.interface';


@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent {
  /* students: Student[] = []; */
  displayedColumns: string[] = ['course', 'name', 'credential', 'semester'];
  dataSource: Student[] = [];


  constructor(private studentsService: StudentsService) {
    this.studentsService.getCurrentStudents().subscribe({next: (s:Student[])=> {this.dataSource = [...s]}})

  }





;
  }


