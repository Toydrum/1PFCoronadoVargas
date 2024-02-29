import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course.interface';
import { CoursesService } from '../courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['course', 'professor','students', 'actions'];
  dataSource: ICourse[] = [];
  coursesForm: FormGroup;
  courseNa: string | undefined;
  coursePro: string | undefined;
  course: ICourse | undefined;


  constructor(
    private _coursesService: CoursesService,
    private fb: FormBuilder,

  ) {
    this.coursesForm = this.fb.group({
      courseName: this.fb.control(''),
      teacherName: this.fb.control(''),
    });
    this._coursesService.getCourses().subscribe({next:(c)=>{this.dataSource = [...c] ;console.log(this.dataSource)}})


  }
  ngOnInit(): void {
    ;
  }

  deleteCourse(course: ICourse) {
    this._coursesService.deleteCourse(course);
  }

  editCourse(course: ICourse) {
    this.coursesForm.patchValue(course);
    this.course = course;
  }

  selectForEdit() {}

  getDetail(course: ICourse){

    this._coursesService.getCourses().subscribe({
      next:(r)=>{
        let courseArray: ICourse[];
        r.filter((c)=>{
          if(c.id == course.id){
          console.log(c)
            this.courseNa = c.courseName;
            this.coursePro = c.teacherName
          }
      })
      }
    })




    /* .filter((c)=>{
        if(c.id == course.id){
        console.log(c)
          this.courseNa = c.courseName;
          this.coursePro = c.teacherName
        }
    }) */

  }

  onSubmit() {
    let course: ICourse = {
      courseName: this.coursesForm.value.courseName,
      teacherName: this.coursesForm.value.teacherName,
    };
    this._coursesService.addCourse(course)
    console.log(course);
    if(this.course && this.course.id){
      course.id = this.course.id
    }
    if(this.course && this.course.students){
      course.students = this.course.students
    }

      /* if (!!course.id) {
        console.log(course.id);
        this._coursesService.editCourse(course);
      } else {
        console.log('no id');
        this._coursesService.addCourse(course);
      } */
      this.coursesForm.reset();
      /* this.course = undefined */

    /* console.log(this.coursesForm.value); */
  }
}
