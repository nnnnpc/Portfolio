import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TutorServiceService {
  registerTutor1: any;
  registerStudent1: any;

  constructor(private http: HttpClient) {}

  async getTutorInfo(email: string) {
    return await this.http
      .get("http://129.173.22.35:4000/api/getTutorDetails?email=" + email)
      .toPromise();
  }
  async loginStudent(obj) {
    var response;
    try {
      response = await this.http
        .post("http://129.173.22.35:4000/api/loginStudent/authenticate", obj)
        .toPromise();
    } catch (error) {
      return error;
    }
    return response;
  }

  async registerTutor(obj) {
    return await this.http
      .post("http://129.173.22.35:4000/api/register", obj)
      .toPromise();
  }

  async registerStudent(object) {
    return await this.http
      .post("http://129.173.22.35:4000/api/registerStudent", object)
      .toPromise();
  }
  async loginTutor(object) {
    var response;
    try {
      response = await this.http
        .post("http://129.173.22.35:4000/api/loginTutor/authenticate", object)
        .toPromise();
    } catch (error) {
      return error;
    }
    return response;
  }
}
