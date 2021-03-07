import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  /* try working with ts */
  directiveVal: string = "10";

  _listStudents: [] = [];
  _action: string = "Add";
  _student: Object;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }



  getStudents() {
    this.studentService.getStudentsList()
      .subscribe(
        data => this._listStudents = data,
        error => console.log(error)
      );
  }

  saveStudent({action, studentData : student}): void {
    this.studentService.saveStudent({action, student})
      .pipe(
        switchMap(() => this.studentService.getStudentsList())
      )
      .subscribe(
        data => this._listStudents = data,
        error => console.log(error)
      );
  }

  deleteStudent({studentId}) {
    this.studentService.deleteStudent(studentId)
      .pipe(
        switchMap(() => this.studentService.getStudentsList())
      )
      .subscribe(
        data => this._listStudents = data,
        error => console.log(error)
      );
  }

  searchStudent(key) {
    this.studentService.getStudentsList()
      .subscribe(
        data => this._listStudents = data.filter( item => item.fullName.includes(key)),
        error => console.log(error)
      );
  }

  getAction({action, student}) {
    this._action = action;
    this._student = student;
  }

  isFormSubmit(action) {
      if(action === 'Edit') this._action = 'Add';
  }

}
