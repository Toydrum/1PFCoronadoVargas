import { Component } from '@angular/core';
/* Store */
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { identitySelector } from 'src/app/auth/state/auth.selectors';
/* Interfaces */
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  public activeUser: Student | undefined;

  constructor(private _store: Store<AppState>){
    this._store.select(identitySelector).subscribe({
      next: (i: Student | undefined) => {
        this.activeUser = i;
      },
    });
  }
}
