import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AbmDeAlumnosComponent } from './components/abm-de-alumnos/abm-de-alumnos.component';
import { authGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,

  },
  {
    path: 'abmAlumnos',
    canActivate: [authGuard],
    component: AbmDeAlumnosComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
