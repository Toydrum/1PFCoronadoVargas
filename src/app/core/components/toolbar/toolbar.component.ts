import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Student } from 'src/app/students/interfaces/student.interface';
/* Store */
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { identitySelector } from 'src/app/auth/state/auth.selectors';
import { AuthActions } from 'src/app/auth/state/auth.actions';

/* import {MatToolbarModule} from '@angular/material/toolbar'; */

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public activeUser: Student | undefined;
  constructor(private _store: Store<AppState>) {
    this._store.select(identitySelector).subscribe({
      next: (i: Student | undefined) => {
        this.activeUser = i;
      },
    });
  }

  ngOnInit(): void {
    this._store.dispatch(AuthActions.loadAuth());
  }

  showNavBar: boolean = false;
  openSideBar() {
    this.showNavBar = !this.showNavBar;
  }

  CloseSideBar($event: boolean) {
    this.showNavBar = $event;
  }
}
