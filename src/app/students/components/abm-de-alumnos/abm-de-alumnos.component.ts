import { Component } from '@angular/core';
import { RegistroService } from 'src/app/auth/services/registro.service';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.scss'],
})
export class AbmDeAlumnosComponent {
  constructor(registroService: RegistroService) {}
}
