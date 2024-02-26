import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalFormComponent } from './components/modal-form/modal-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: ModalFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
