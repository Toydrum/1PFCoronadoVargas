import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { StudentsService } from 'src/app/students/services/students.service';

describe('Pruebas de AuthService', () => {
  let authService: AuthService

  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [AuthService, StudentsService],
    });

  });
    authService = TestBed.inject(AuthService)
  it('AuthService debe ser definido', () => {
    expect(authService).toBeTruthy();
  });

});
