import { Component, Output, EventEmitter } from '@angular/core';
/* import {MatToolbarModule} from '@angular/material/toolbar'; */

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  showNavBar: boolean = false;
  openSideBar() {
    this.showNavBar = !this.showNavBar;
  }

  CloseSideBar($event: boolean) {
    this.showNavBar = $event;
  }
}
