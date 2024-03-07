import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { Student } from '../interfaces/student.interface';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService],
    });
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addStudent works', ()=>{
    const mockStudent: Student = {
      "id": "6d19",
      "nombre": "Gabriela",
      "apellido": "Ramos",
      "semestre": 1,
      "carrera": "Knight",
      "password": "mypassword",
      "credencial": 8117,
      "role": "user"
    }
    service.addStudent(mockStudent).subscribe({
      next:(student:Student)=>{
        expect(student).toBeDefined();
      }
    })
  })

  it('getCurrentStudents must work', ()=>{
    service.getCurrentStudents().subscribe({
      next:(students: Student[])=>{
        expect(students).toBeDefined();
      }
    })
  })
});
