import { Component, OnInit } from '@angular/core';
import { ICourse } from '../interfaces/course.interface';
import { CoursesService } from '../courses.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { StudentsService } from 'src/app/students/services/students.service';
import { Student } from 'src/app/students/interfaces/student.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['course', 'professor', 'students', 'actions'];
  dataSource: ICourse[] = [];
  coursesForm: FormGroup;
  courseNa: string | undefined;
  coursePro: string | undefined;
  course: ICourse | undefined;
  public isEdit: boolean = false;
  public students: number[] = [];

  constructor(
    private _coursesService: CoursesService,
    private _studentsService: StudentsService,
    private fb: FormBuilder
  ) {
    this.coursesForm = this.fb.group({
      courseName: this.fb.control(''),
      teacherName: this.fb.control(''),
      students: this.fb.control(''),
    });
  }
  ngOnInit(): void {
    this.getCourses();
    this.getStudents();
  }

  getCourses() {
    this._coursesService.getCourses().subscribe({
      next: (c: ICourse[] | undefined) => {
        if (!!c) {
          this.dataSource = [...c];
        } else {
          this.dataSource = [];
        }
        console.log(this.dataSource);
      },
    });
  }

  getStudents() {
    this._studentsService.getCurrentStudents().subscribe({
      next: (s: Student[] | undefined) => {
        if (!!s) {
          console.log(s);
          this.students = s
            .map((st: Student): number => st.credencial || 0)
            .filter((st: number) => !!st);
          console.log(this.students);
        }
      },
    });
  }

  deleteCourse(id: string) {
    this._coursesService.deleteCourse(id).subscribe({
      next: (c: ICourse | undefined) => {
        console.log(c);
        this.getCourses();
      },
      error: (err) => {
        console.error(err);
        alert('Error deleting course');
        this.getCourses();
      },
    });
  }

  editCourseC(id: string) {
    this._coursesService.getCourse(id).subscribe({
      next: (c: ICourse | undefined) => {
        console.log(c);
        if (!!c) {
          this.course = c;
          this.coursesForm.patchValue(c);
          this.isEdit = true;
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error getting the course');
      },
    });
  }

  getDetail(course: Omit<ICourse, 'id'> & Required<{ id: string }>) {
    this._coursesService.getCourse(course.id).subscribe({
      next: (c: ICourse | undefined) => {
        console.log(c);
        if (!!c) {
          this.courseNa = c.courseName;
          this.coursePro = c.teacherName;
        } else {
          this.courseNa = '';
          this.coursePro = '';
        }
      },
    });
  }

  onSubmit() {
    console.log(this.coursesForm.value);
    let students: number[] = [];
    let notStudents: number[] = [];
    if (!!this.coursesForm.value.students) {
      students = this.coursesForm.value.students
        .trim()
        .split(',')
        .map((s: string): number => parseInt(s))
        .filter((s: number) => {
          if (!this.students.includes(s)) {
            notStudents.push(s);
          }
          return this.students.includes(s);
        });
      console.log(students);
      alert(`Students ${notStudents} are not registered`);
    }
    let course: ICourse = {
      courseName: this.coursesForm.value.courseName,
      teacherName: this.coursesForm.value.teacherName,
      students: students,
    };
    if (!!this.isEdit) {
      course.id = this.course?.id;
    }

    if (!!course.id) {
      console.log(course.id);
      this._coursesService.editCourse(course).subscribe({
        next: (c: ICourse | undefined) => {
          console.log(c);
          this.getCourses();
          this.isEdit = false;
        },
        error: (err) => {
          console.error(err);
          alert('Error editing course');
          this.getCourses();
        },
      });
    } else {
      console.log('no id');
      this._coursesService.addCourse(course).subscribe({
        next: (c: ICourse | undefined) => {
          console.log(c);
          this.getCourses();
        },
        error: (err) => {
          console.error(err);
          alert('Error adding course');
          this.getCourses();
        },
      });
    }
    this.coursesForm.reset();
  }
}
