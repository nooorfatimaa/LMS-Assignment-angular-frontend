import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  public classes;
  _number: Number;
  _name: String;
  _questions: String;
  _marks: Number;
  classid;

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getClasses()
  }

  getClasses() {
    this._data.viewClasses().subscribe(data => {
      this.classes = data},
      err => console.error(err),
      () => console.log('Classes received')
    );
  }

  addNewAssignment(){
    var temp;
    let assignment = {
      number: this._number,
      name: this._name,
      questions: this._questions,
      class: this.classid,
      marks: this._marks
    }
    this._data.addAssignment(assignment).subscribe(data => {
      temp = data},
      err => console.log(err),
      () => console.log('New assignment added')
    )
    this._number = 0;
    this._name = "";
    this._questions = "";
    this._marks = 0;
    this.classid = "";
    window.location.replace("http://localhost:4200/viewassignment");
  }
}
