import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {

  public assignments;

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  getAssignments() {
    this._data.viewAssignment().subscribe(data => {
      this.assignments = data},
      err => console.error(err),
      () => console.log('Assignments received')
    );
  }

}
