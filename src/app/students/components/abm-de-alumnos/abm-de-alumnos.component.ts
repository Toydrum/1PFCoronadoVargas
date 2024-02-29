import {Component} from '@angular/core';
import { StudentsService } from '../../services/students.service';

import { Student } from '../../interfaces/student.interface';


@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent {

  displayedColumns: string[] = ['course', 'name', 'credential', 'semester','role'];
  dataSource: Student[] = [];


  constructor(private studentsService: StudentsService) {
    this.studentsService.getCurrentStudents().subscribe({next: (s:Student[])=> {this.dataSource = [...s]}})

  }

  getStudents(){
    this.studentsService.getCurrentStudents().subscribe({next: (s:Student[])=> {this.dataSource = [...s]}})

  }




;
  }


