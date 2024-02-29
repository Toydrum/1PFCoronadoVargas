import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICourse } from './interfaces/course.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {


  courses: ICourse[] = [{
    id: "",
    courseName:'Infantry',
    students:[4832,5678,6637],
    teacherName: 'Sir Gregor',
  },
  {
    id: "",
    courseName:'Cavalry',
    students:[4686,6667,3937],
    teacherName: 'Sir Mclane',
  },
  {
    id:"",
    courseName:'Squire',
    students:[6664,6227,5437],
    teacherName: 'Sir Hammer',
  }
  ];

  courses$: Subject<ICourse[]> = new Subject<ICourse[]>()

  constructor(private http: HttpClient) {


  }

  getCourses(){

    return this.http.get<ICourse[]>('http://localhost:3000/courses')
  }


  addCourse(course: ICourse){
    let newCourse = {
      ...course,
      students:[]
    }
    console.log(newCourse)
    return this.http.post<ICourse>('http://localhost:3000/courses', newCourse).subscribe({
      next:(r)=>{console.log(r)}
    })


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
