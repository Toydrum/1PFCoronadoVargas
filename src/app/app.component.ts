import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '1PFCoronadoVargas';
  showNavBar: boolean = false;

  constructor() {}

  openSideBar() {
    this.showNavBar = !this.showNavBar;
  }

  CloseSideBar($event: boolean) {
    this.showNavBar = $event;
  }
}
