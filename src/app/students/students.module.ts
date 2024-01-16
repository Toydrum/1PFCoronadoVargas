import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { StudentsComponent } from './components/students/students.component';
import { ListaDeAlumnosComponent } from './components/lista-de-alumnos/lista-de-alumnos.component';
import { AbmDeAlumnosComponent } from './components/abm-de-alumnos/abm-de-alumnos.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    StudentsComponent,
    ListaDeAlumnosComponent,
    AbmDeAlumnosComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    StudentsComponent,
    ListaDeAlumnosComponent,
    AbmDeAlumnosComponent,
    ProfileComponent,
  ],
})
export class StudentsModule {}
