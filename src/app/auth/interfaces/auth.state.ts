import { Student } from 'src/app/students/interfaces/student.interface';

export interface IAuthState {
  loaded: boolean;
  identity?: Student;
}
