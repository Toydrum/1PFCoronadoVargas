import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course.interface';
import { CoursesService } from '../courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  dataSource: ICourse[] = [];
  displayedColumns: string[] = ['course', 'professor', 'actions'];
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
    this._coursesService.courses$.subscribe({
      next: (courses: ICourse[]) => {
        this.dataSource = [...courses];
        /* console.log(this.dataSource); */
      },
    });
  }
  ngOnInit(): void {
    this._coursesService.getCourses();
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

    let allCourses = this._coursesService.getCourses()

    allCourses.filter((c)=>{
        if(c.id == course.id){
        console.log(c)
          this.courseNa = c.courseName;
          this.coursePro = c.teacherName
        }
    })

  }

  onSubmit() {
    let course: ICourse = {
      courseName: this.coursesForm.value.courseName,
      teacherName: this.coursesForm.value.teacherName,
    };
    if(this.course && this.course.id){
      course.id = this.course.id
    }
    if(this.course && this.course.students){
      course.students = this.course.students
    }
    console.log(this.course);

      if (!!course.id) {
        console.log(course.id);
        this._coursesService.editCourse(course);
      } else {
        console.log('no id');
        this._coursesService.addCourse(course);
      }
      this.coursesForm.reset();
      /* this.course = undefined */

    /* console.log(this.coursesForm.value); */
  }
}
