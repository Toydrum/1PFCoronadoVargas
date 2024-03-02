import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* interfaces */
import { Student } from 'src/app/students/interfaces/student.interface';
/* Services */
import { StudentsService } from 'src/app/students/services/students.service';
/* Store */
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { AuthActions } from '../state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private studentsService: StudentsService,
    private _store: Store<AppState>
  ) {}

  register(student: Student): void {
    this._store.dispatch(
      AuthActions.loadAuthSuccess({ loaded: true, identity: student })
    );
  }

  login(logger: Student): void {
    this.studentsService.getCurrentStudents().subscribe({
      next: (v: Student[] | undefined) => {
        let student: Student | undefined = !!v
          ? v.find((student: Student) => {
              return student.credencial === logger.credencial;
            })
          : undefined;
        this.commitToStore(student);
      },
    });
  }

  commitToStore(student: Student | undefined): void {
    this._store.dispatch(
      AuthActions.loadAuthSuccess({ loaded: true, identity: student })
    );
    if (!!student) {
      this.router.navigate(['/students/abmAlumnos']);
    }
  }
}
