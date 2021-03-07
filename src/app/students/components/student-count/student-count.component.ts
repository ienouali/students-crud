import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {
  @Input() _list: [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
