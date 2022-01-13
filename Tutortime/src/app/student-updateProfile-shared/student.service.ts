import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Student} from './student.model'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //to Save array of Tutors.
  public student: Student;

  constructor(private http:HttpClient) { }
 
  getStudentDetails(student_Email: string)
  {
    var baseURL = 'http://localhost:4000/api/students/searchByemail';
     return this.http.get(baseURL, { params: {student_Email: student_Email}});
  }
  updateStudentDetails(stu: Student) {

    var baseURL = 'http://localhost:4000/api/updateStudentDetails/';
    return this.http.put(baseURL + `${stu._id}`, stu);
  }
  deleteStudentAccount(student_Email: string)
  {
    var baseURL = 'http://localhost:4000/api/students/deleteStudentAccount';
    return this.http.delete(baseURL , { params: {student_Email: student_Email}});
  }


}
