import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent implements OnInit {

  public assignments;
  aID;
  assignment;

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

  delete(){
    this._data.deleteAssignment(this.aID).subscribe(data => {
      this.assignment = data},
      err => console.error(err),
      () => console.log('Assignment deleted')
    );
    this.aID = "";
    window.location.reload();
  }

}
