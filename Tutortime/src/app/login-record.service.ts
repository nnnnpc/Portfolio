/**
 * @author Ganrong Tan
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginRecordService {

  constructor(private http:HttpClient) { }

  // Create new post
  newPost(post){
    return this.http.post('http://129.173.22.35:4000/api/newpost', post)
      .subscribe(data => console.log("callback => " + data));
  };

  getPost(){
    return this.http.get('http://129.173.22.35:4000/api/getpost').toPromise();
  }

  async resetPassword(post){
    var url;
    try {
      url = 'http://129.173.22.35:4000/api/students/resetStudentPassword';
      await this.http.post(url, post).toPromise();
    } catch (error) {
      return error;
    }
    return url;
  }

  async resetTutorPassword(obj) {
    var url;
    try {
      url = 'http://129.173.22.35:4000/api/tutors/resetTutorPassword';
      await this.http.post(url, obj).toPromise();
    } catch (error) {
      return error;
    }
    return url;
  }

  getTitle(post){
    return this.http.post('http://129.173.22.35:4000/api/getTitle', post).toPromise();
  }

  updatedPostDoc(post) {
    return this.http.post('http://129.173.22.35:4000/api/updatedPostDoc', post).toPromise();
  }
  
}

