import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';
import { text } from '@fortawesome/fontawesome-svg-core';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('id_token'))}`,
    responseType: 'text'
  })
};


@Injectable({
  providedIn: 'root'
})

export class DataService {
baseUrl="http://localhost:5000/admin/";
  constructor(private http:HttpClient) {  }

  viewteachers(){
    let url=this.baseUrl+ "teacher";
    return this.http.get(url,httpOptions);
  }
  addteacher(teacher){
    let body=JSON.stringify(teacher);
    let url=this.baseUrl+ "addteacher";
    return this.http.post(url,body,httpOptions);
  }
  viewstudents(){
    let url=this.baseUrl+ "student";
    return this.http.get(url,httpOptions);
  }
  addstudent(student){
    let body=JSON.stringify(student);
    let url=this.baseUrl+ "addstudent";
    return this.http.post(url,body,httpOptions);
  }
  viewClasses(){
    let url = "http://localhost:5000/admin/class";
    return this.http.get(url,httpOptions);
  }
  userslist(){
    console.log(httpOptions);
    let url="http://localhost:3000/users";
    return this.http.get(url,httpOptions);
  }
  addAssignment(assignment) {
    let body = JSON.stringify(assignment);
    let url = "http://localhost:5000/teacher/addassignment";
    return this.http.post(url, body, httpOptions);
  }
  viewAssignment() {
    let url = "http://localhost:5000/teacher/assignments";
    return this.http.get(url, httpOptions);
  }
  deleteAssignment(assignment) {
    let url = "http://localhost:5000/teacher/deleteassignment/"+assignment;
    return this.http.delete(url, httpOptions);
  }
}
