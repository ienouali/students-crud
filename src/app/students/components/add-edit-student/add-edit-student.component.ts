import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface Student {
  id?: number;
  fullName: string;
  age: number;
  civility: string;
  skills: string[]
}

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {
  fullName: string = "";
  @Output() isSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() student: EventEmitter<any> = new EventEmitter<any>();
  @Input() action: string;
  @Input() editedStudent;

  constructor() {
  }

  ngOnInit(): void {
  }


  handleSubmit(e): void {
    e.preventDefault();
    if (this.fullName.trim() !== "" ) {
      this.student.emit({
        action: this.action,
        studentData: {
          id: this.editedStudent?.id,
          fullName: this.fullName.trim(),
          age: 21,
          civility: 'M',
          skills: ['js', 'node', 'next']
        }
      })
      this.fullName = "";
      this.isSubmit.emit(this.action);
    }
    else {
      alert('This field can be empty');
    }
  }

}
