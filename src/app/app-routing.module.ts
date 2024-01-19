import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './students/components/profile/profile.component';
import { ArticlesListComponent } from './articles/components/articles-list/articles-list.component';
import { ErrorComponent } from './core/components/error/error.component';
import { ModalFormComponent } from './auth/components/modal-form/modal-form.component';
import { AbmDeAlumnosComponent } from './students/components/abm-de-alumnos/abm-de-alumnos.component';
const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'signin', component: ModalFormComponent },
  { path: 'abmAlumnos', component: AbmDeAlumnosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
