import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs'
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private alumnoSource = new BehaviorSubject<Alumno|null>(null)
  alumno$ = this.alumnoSource.asObservable();



  constructor() { }
}
