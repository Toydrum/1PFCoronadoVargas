import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/students/services/students.service';
import { Student } from 'src/app/students/interfaces/student.interface';

@Component({
  selector: 'app-modal-form-register',
  templateUrl: './modal-form-register.component.html',
  styleUrls: ['./modal-form-register.component.scss'],
})
export class ModalFormRegisterComponent {
  alumnoFormGroup: FormGroup;
  careers: string[] = ['Knight', 'Archer', 'Royal Guard', 'Artillery', 'Engineer']


  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService) {
    this.alumnoFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      age: this.formBuilder.control(null),
      career: this.formBuilder.control(''),

      location: this.formBuilder.group({
        address: this.formBuilder.control(''),
        country: this.formBuilder.control(''),
        state: this.formBuilder.control(''),
        zip: this.formBuilder.control(null),
      })
    });
    console.log(this.alumnoFormGroup.value)
  }

  registerStudent(){
    const min = Math.ceil(4000);
    const max = Math.floor(9000)
    const num = (Math.random()*(max-min+1)+min);
    function cred (num:number){

      return Math.round(num)
    }
    const newStudent = {
      nombre: this.alumnoFormGroup.value.firstName,
      apellido: this.alumnoFormGroup.value.lastName,
      credencial: cred(num),
      semestre: 1,
      carrera: this.alumnoFormGroup.value.career,
    }
    console.log(newStudent)

    this.studentsService.addStudent(newStudent)

  }
}
