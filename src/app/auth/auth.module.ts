import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing-module';


import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalFormRegisterComponent } from './components/modal-form-register/modal-form-register.component';
import { StudentsService } from '../students/services/students.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [ModalFormComponent, ModalFormRegisterComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  exports: [ModalFormComponent, ModalFormRegisterComponent],
  providers: [StudentsService, AuthService]
})
export class AuthModule {}
