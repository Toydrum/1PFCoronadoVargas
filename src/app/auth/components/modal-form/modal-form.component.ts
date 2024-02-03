import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})


export class ModalFormComponent {
loginForm: FormGroup;
revealPassword = false;
constructor(private fb: FormBuilder){
  this.loginForm = this.fb.group({
    credential: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    password: this.fb.control('', [Validators.required])
  })

}


onSubmit(){
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched()
  }
  console.log(this.loginForm.valid)
}

}
