import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-modal-form-register',
  templateUrl: './modal-form-register.component.html',
  styleUrls: ['./modal-form-register.component.scss']
})
export class ModalFormRegisterComponent {
  alumnoFormGroup: FormGroup;
  //carreras:

constructor(private formBuilder: FormBuilder){
    this.alumnoFormGroup = this.formBuilder.group({
    firstName: this.formBuilder.control(''),
    lastName: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    edad: this.formBuilder.control(null),


  })
}
}
