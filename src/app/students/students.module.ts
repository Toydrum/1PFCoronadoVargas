import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { StudentsComponent } from './components/students/students.component';
import { ListaDeAlumnosComponent } from './components/lista-de-alumnos/lista-de-alumnos.component';
import { AbmDeAlumnosComponent } from './components/abm-de-alumnos/abm-de-alumnos.component';
import { ProfileComponent } from './components/profile/profile.component';

import { CabecerasDirective } from '../shared/directives/cabeceras.directive';

import { StudentsRoutingModule } from './students-routing-module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    StudentsComponent,
    ListaDeAlumnosComponent,
    AbmDeAlumnosComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, SharedModule, MatButtonModule, MatTableModule, StudentsRoutingModule, AuthModule],
  exports: [
    StudentsComponent,
    ListaDeAlumnosComponent,
    AbmDeAlumnosComponent,
    ProfileComponent,
    UpperCasePipe,
    CabecerasDirective,
  ],
})
export class StudentsModule {}
