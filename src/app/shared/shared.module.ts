import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FullNamePipe } from './pipes/full-name.pipe';
import { CabecerasDirective } from './directives/cabeceras.directive';

@NgModule({
  declarations: [FullNamePipe, CabecerasDirective],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [MaterialModule, ReactiveFormsModule, FullNamePipe, CabecerasDirective],
})
export class SharedModule {}
