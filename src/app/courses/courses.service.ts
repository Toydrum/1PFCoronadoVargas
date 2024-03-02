import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { ICourse } from './interfaces/course.interface';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[] | undefined> {
    return this.http.get<ICourse[] | undefined>(
      'http://localhost:3000/courses'
    );
  }

  getCourse(id: string): Observable<ICourse | undefined> {
    return this.http
      .get<ICourse | undefined>(`http://localhost:3000/courses/${id}`)
      .pipe(
        map((r: ICourse | undefined) => {
          console.log(r);
          return r;
        })
      );
  }

  addCourse(course: ICourse): Observable<ICourse | undefined> {
    return this.http
      .post<ICourse | undefined>('http://localhost:3000/courses', course)
      .pipe(
        map((r: ICourse | undefined) => {
          console.log(r);
          return r;
        })
      );
  }

  deleteCourse(id: string): Observable<ICourse | undefined> {
    return this.http
      .delete<ICourse>(`http://localhost:3000/courses/${id}`)
      .pipe(
        map((r: ICourse | undefined) => {
          console.log(r);
          return r;
        })
      );
  }

  editCourse(course: ICourse): Observable<ICourse | undefined> {
    return this.http
      .put<ICourse>(`http://localhost:3000/courses/${course.id}`, course)
      .pipe(
        map((r: ICourse | undefined) => {
          console.log(r);
          return r;
        })
      );
  }
}
