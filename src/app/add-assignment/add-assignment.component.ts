import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  public classes;

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  getClasses() {
    this._data.viewClasses().subscribe(data => {
      this.classes = data},
      err => console.error(err),
      () => console.log('Classes received')
    );
  }

}
