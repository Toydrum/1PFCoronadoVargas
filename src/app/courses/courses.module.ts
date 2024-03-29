import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing-module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, SharedModule, CoursesRoutingModule],
  exports:[CoursesComponent]
})
export class CoursesModule {}
