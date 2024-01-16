import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  close: boolean = false;
  @Output() booleanEvent = new EventEmitter<boolean>();

  closeSideBar() {
    this.booleanEvent.emit(this.close);
  }
}
