import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Tutor} from './tutor.model'
import{TutorBook} from './tutorBook.model'


@Injectable()
export class TutorService {

  //to Save array of Tutors.
  tutors: Tutor[];
  bookedTutors:TutorBook[];
  public tutor=null;
  constructor(private http:HttpClient) { }
 
 //Method to get all Tutors from database.
  getTutorList() {
    var baseURL = 'http://localhost:4000/api/tutors/';
    return this.http.get(baseURL);
  }

  getTutorDetailsById(id)
  {
    var baseURL = 'http://localhost:4000/api/tutors/byId';
    var res=this.http.get(baseURL,{ params: {id: id}});
    return res;
  } 
  //Method to get the list of tutors from database by coursename.
  getTutorListByCourseName(courseName : string) {
    var baseURL = 'http://localhost:4000/api/tutors/searchBycourseName';
    return this.http.get(baseURL,{ params: {courseName: courseName}});
  }

  //Method to get the list of tutors from database by coursename and location.
  getTutorListByCourseNameLocation(courseName : string, city:string) {
    var baseURL = 'http://localhost:4000/api/tutors/searchBylocation';
    return this.http.get(baseURL,{ params: {courseName: courseName,city: city}});
  }

  saveBookTutorDeatils(tut: TutorBook)
  {
    
    var baseURL = 'http://localhost:4000/api/bookTutors';
    return this.http.post(baseURL, tut);
  }
  getRegistredTutors(studentEmail : string)
  {
    
    var baseURL = 'http://localhost:4000/api/tutors/getListOfTutors';
    return this.http.get(baseURL,{ params: {studentEmail: studentEmail}});
  }
  cancelRegistration(_id : string)
  {
    
    var baseURL = 'http://localhost:4000/api/cancelRegistration';
    return this.http.delete(baseURL + `/${_id}`);
  }
}
