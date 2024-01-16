import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalFormRegisterComponent } from './components/modal-form-register/modal-form-register.component';

@NgModule({
  declarations: [ModalFormComponent, ModalFormRegisterComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [ModalFormComponent, ModalFormRegisterComponent],
})
export class AuthModule {}
