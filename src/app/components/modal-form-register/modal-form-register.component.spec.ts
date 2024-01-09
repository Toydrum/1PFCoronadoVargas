import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormRegisterComponent } from './modal-form-register.component';

describe('ModalFormRegisterComponent', () => {
  let component: ModalFormRegisterComponent;
  let fixture: ComponentFixture<ModalFormRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormRegisterComponent]
    });
    fixture = TestBed.createComponent(ModalFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
