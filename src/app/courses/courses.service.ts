import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICourse } from './interfaces/course.interface';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {


  courses: ICourse[] = [{
    id: 1,
    courseName:'Infantry',
    students:[4832,5678,6637],
    teacherName: 'Sir Gregor',
  },
  {
    id: 2,
    courseName:'Cavalry',
    students:[4686,6667,3937],
    teacherName: 'Sir Mclane',
  },
  {
    id:3,
    courseName:'Squire',
    students:[6664,6227,5437],
    teacherName: 'Sir Hammer',
  }
  ];

  courses$: Subject<ICourse[]> = new Subject<ICourse[]>()

  constructor() {
    this.courses$.next(this.courses)

  }

  getCourses(){
    this.courses$.next(this.courses)
    return this.courses;
  }

  getCourses$(){

    this.courses$.next(this.courses)

    return this.courses$;
  }

  addCourse(course: ICourse){
    if(!course.id){
      course.id= this.courses.length +1
    }
    this.courses.push(course);
    this.courses$.next(this.courses)
  }

  deleteCourse(course: ICourse){
    this.courses = this.courses.filter((c)=>{
      return c.id !== course.id
    })
    this.courses$.next(this.courses)
  }

  editCourse(course: ICourse){
    this.courses = this.courses.map((c)=>{
      if(c.id == course.id){
        c = course
      }
      return c;
    })
    this.courses$.next(this.courses)

  }


}
