/* import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent implements OnInit {
  listaDeAlumnos: Student[] =[] ;
  alumnoNuevo: Student = {
    nombre: 'Soy',
    apellido: 'para ti',
    credencial: 4567,
    semestre: 0,
    carrera: 'querer estar con brina',
    materiasDeSemestre: [],
    materiasAcreditadas: []
  }
  constructor(private studentsService: StudentsService){

  }

  ngOnInit(){

    this.studentsService.students$.subscribe(data=>{
      console.log(data)
    })

  }

  agregarStudent(){
    this.studentsService.addStudent(this.alumnoNuevo);
    this.listaDeAlumnos = this.studentsService.students
    console.log(this.listaDeAlumnos)
  }

}
 */
