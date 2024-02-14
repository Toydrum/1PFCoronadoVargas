import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/students/services/students.service';
import { Student } from 'src/app/students/interfaces/student.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-form-register',
  templateUrl: './modal-form-register.component.html',
  styleUrls: ['./modal-form-register.component.scss'],
})
export class ModalFormRegisterComponent {
  alumnoFormGroup: FormGroup;
  careers: string[] = [
    'Knight',
    'Archer',
    'Royal Guard',
    'Artillery',
    'Engineer',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private studentsService: StudentsService,
    private authService: AuthService
  ) {
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
      }),
    });
   /*  console.log(this.alumnoFormGroup.value); */
  }

  registerStudent() {

    const newStudent = {
      nombre: this.alumnoFormGroup.value.firstName,
      apellido: this.alumnoFormGroup.value.lastName,
      semestre: 1,
      carrera: this.alumnoFormGroup.value.career,
    };

    console.log(newStudent);

    this.studentsService.addStudent(newStudent).subscribe(
      (response: Student) => {
        console.log('Solicitud completada:', response);
        // Hacer algo con la respuesta
      });
    this.authService.register(newStudent);
  }
}
