import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAlumnosComponent } from './lista-de-alumnos.component';

describe('ListaDeAlumnosComponent', () => {
  let component: ListaDeAlumnosComponent;
  let fixture: ComponentFixture<ListaDeAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeAlumnosComponent]
    });
    fixture = TestBed.createComponent(ListaDeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
