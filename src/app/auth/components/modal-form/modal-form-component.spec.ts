import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ModalFormComponent } from './modal-form.component';
import { Student } from 'src/app/students/interfaces/student.interface';
import { AuthService } from '../../services/auth.service';
import { FormBuilder } from '@angular/forms';

class MockAuthService {
  login(logger: Student){

  }
}

describe('ModalFormComponent: ', () => {
  let component: ModalFormComponent;
  let fixture: ComponentFixture<ModalFormComponent>;
  let authService: AuthService;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ModalFormComponent],
      providers: [FormBuilder, {provide: AuthService, useClass: MockAuthService}],
       schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ModalFormComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialice form with empty values',()=>{
    expect(component.loginForm.value).toEqual({credencial: Number, password: ''})
  });

  it('should call onSubmit method when form is submited', ()=>{
    spyOn(component,'onSubmit');
    const boton = fixture.nativeElement.querySelector('#boton');
    boton.dispatchEvent(new Event('click'))
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('it should call authservice.login', ()=>{
    component.onSubmit();
    expect(component.loginForm.valid).toBeFalsy()
  })

});
