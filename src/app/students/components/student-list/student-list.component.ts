import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  @Input() studentsList;
  @Output() action : EventEmitter<any> = new EventEmitter<any>();
  @Output() toRemove : EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  handleEdit(student: number) : void {
    this.action.emit({
      action: 'Edit', student
    });
  }

  handleDelete(id: number) : void {
    if(confirm('This student will be deleted, please confirm deletion !'))
      this.toRemove.emit({studentId: id});
  }

}
