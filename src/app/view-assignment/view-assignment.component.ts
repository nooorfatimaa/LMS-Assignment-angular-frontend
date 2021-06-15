import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css']
})
export class ViewAssignmentComponent implements OnInit {

  public assignments;

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getAssignments()
  }

  getAssignments() {
    this._data.viewAssignment().subscribe(data => {
      this.assignments = data},
      err => console.error(err),
      () => console.log('Assignments received')
    );
  }

}
