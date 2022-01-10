import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorTimeBackendService {
  // Here I referred the HttpClient to connect to the Node application running on the below Port number.
  constructor(private http:HttpClient) { }
  async addCourse(obj){
  // I have also subscribed to the API endpoint hence i will recieve the ACK back.
    //  return this.http.post('http://129.173.22.35:28901/addcourse/send',obj).subscribe(data=>
    return await this.http.post('http://129.173.22.35:4000/api/addcourse',obj).toPromise();
   };
   async deleteTutorProfile(email:string){
    // I have also subscribed to the API endpoint hence i will recieve the ACK back.
      return await this.http.get('http://129.173.22.35:4000/api/deleteTutorProfile?email='+email).toPromise();
  };
   async getTutorProfile(email:string){
    // I have also subscribed to the API endpoint hence i will recieve the ACK back.
      return await this.http.get('http://129.173.22.35:4000/api/getTutorProfile?email='+email).toPromise();
  };
    async showCourse(emailID:string){
    var emailAppended = 'http://129.173.22.35:4000/api/showcourse?emailID='+emailID;
    return await this.http.get(emailAppended).toPromise();
  };
  async editCourse(emailID:string,courseID:string){
    var emailAppended = 'http://129.173.22.35:4000/api/editcourse?emailID='+emailID+'&courseID='+courseID;
    return await this.http.get(emailAppended).toPromise();
  };
  async updateCourse(emailID:string,courseID:string,updateCourseObject){
    var emailAppended = 'http://129.173.22.35:4000/api/editcourse/updatecourse?emailID='+emailID+'&courseID='+courseID;
    return await this.http.post(emailAppended,updateCourseObject).toPromise();
  };
  async removeCourse(courseID:string){
    var emailAppended = 'http://129.173.22.35:4000/api/editcourse/deletecourse?courseID='+courseID;
    return await this.http.get(emailAppended).toPromise();
  };
  async countEnrolledStudents(courseID:string){
    var url = 'http://129.173.22.35:4000/api/getEnrolledStudents?courseID='+courseID;
    return await this.http.get(url).toPromise();
  };
  async updateEnrolledStudentCount(countObj){
    var url = 'http://129.173.22.35:4000/api/updateCount';
    return await this.http.post(url,countObj).toPromise();
  };
}
