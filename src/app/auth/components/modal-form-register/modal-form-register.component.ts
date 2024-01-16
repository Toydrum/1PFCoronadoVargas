import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-form-register',
  templateUrl: './modal-form-register.component.html',
  styleUrls: ['./modal-form-register.component.scss'],
})
export class ModalFormRegisterComponent {
  alumnoFormGroup: FormGroup;
  careers: string[] = ['Knight', 'Archer', 'Royal Guard', 'Artillery', 'Engineer']


  constructor(private formBuilder: FormBuilder) {
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
  }
}
