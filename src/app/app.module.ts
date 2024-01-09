import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentsComponent } from './components/students/students.component';
import { ListaDeAlumnosComponent } from './components/lista-de-alumnos/lista-de-alumnos.component';
import { AbmDeAlumnosComponent } from './components/abm-de-alumnos/abm-de-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ArticlesComponent } from './components/articles/articles.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalFormRegisterComponent } from './components/modal-form-register/modal-form-register.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent,
    ListaDeAlumnosComponent,
    AbmDeAlumnosComponent,
    ArticlesComponent,
    ModalFormComponent,
    ModalFormRegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
