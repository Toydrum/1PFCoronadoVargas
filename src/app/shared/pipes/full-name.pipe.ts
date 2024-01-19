import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/students/interfaces/student.interface';


@Pipe({
  name: 'fullname'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {

    if(value){
    return value.nombre +' '+ value.apellido;
    }
    return value
  }

}
