import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})


export class ModalFormComponent {
loginForm: FormGroup;
revealPassword = false;
constructor(private fb: FormBuilder, private authService: AuthService ){
  this.loginForm = this.fb.group({
    credential: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    password: this.fb.control('', [Validators.required])
  })

}


onSubmit(){
  this.authService.login(this.loginForm.value);

  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched()
  }
  /* console.log(this.loginForm.valid) */


}

}
