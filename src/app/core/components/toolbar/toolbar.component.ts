import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Student } from 'src/app/students/interfaces/student.interface';

/* import {MatToolbarModule} from '@angular/material/toolbar'; */

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  activeUser: Student | undefined;
  user: Subscription | Student | undefined =
    this.authService.authStudent$.subscribe({
      next: (s) => {
        this.activeUser = s;
        this.buttonsOff = true;
      },
    });
  buttonsOff = false;
  constructor(private authService: AuthService) {}

  showNavBar: boolean = false;
  openSideBar() {
    this.showNavBar = !this.showNavBar;
  }

  CloseSideBar($event: boolean) {
    this.showNavBar = $event;
  }
}
