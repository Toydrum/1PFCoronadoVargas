import { Component, Output, EventEmitter, OnInit } from '@angular/core';
/* Interfaces */
import { Student } from 'src/app/students/interfaces/student.interface';
/* Store */
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { identitySelector } from 'src/app/auth/state/auth.selectors';
import { AuthActions } from 'src/app/auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public activeUser: Student | undefined;
  close: boolean = false;
  @Output() booleanEvent = new EventEmitter<boolean>();
  constructor(private _store: Store<AppState>, private _router: Router) {
    this._store.select(identitySelector).subscribe({
      next: (i: Student | undefined) => {
        this.activeUser = i;
      },
    });
  }

  ngOnInit(): void {
    this._store.dispatch(AuthActions.loadAuth());
  }

  closeSideBar() {
    this.booleanEvent.emit(this.close);
  }

  logout() {
    this._store.dispatch(
      AuthActions.loadAuthFailure({ error: 'User logged out' })
    );
    this._router.navigate(['/auth/login']);
  }
}
