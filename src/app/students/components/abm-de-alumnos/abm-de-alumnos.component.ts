import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { StudentsService } from '../../services/students.service';

import { Student } from '../../interfaces/student.interface';



@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent implements AfterViewInit{
  students: Student[] = [];
  displayedColumns: string[] = ['course', 'name', 'credential', 'semester'];
  dataSource: Student[] = [
    {
      nombre: 'sam',
      apellido: 'Balandrano',
      credencial: 4244,
      semestre: 1,
      carrera: 'Archer',
      materiasDeSemestre: [],
      materiasAcreditadas: []
      },
      {
        nombre: 'angela',
        apellido: 'Miramontes',
        credencial: 6458,
        semestre: 1,
        carrera: 'Royal Guard',
        materiasDeSemestre: [],
        materiasAcreditadas: []
        },
  ];


  constructor(private studentsService: StudentsService, private renderer: Renderer2)  {

    this.studentsService.students$.subscribe(data=>{
      this.dataSource = [...this.dataSource, data];

      console.log(this.dataSource)

  })}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  addRow(data:Student){

  }
}



