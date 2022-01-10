import { Component, OnInit } from '@angular/core';
import { TutorTimeBackendService } from '../tutor-time-backend.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tutorprofile',
  templateUrl: './tutorprofile.component.html',
  styleUrls: ['./tutorprofile.component.scss']
})
export class TutorprofileComponent implements OnInit {
  userName;
  designation;
  courses;
  constructor(private tutorTimeServiceInstance:TutorTimeBackendService,private router: Router) { }

  async ngAfterContentInit(){
    var emailID = localStorage.getItem('emailID');
    var response = await this.tutorTimeServiceInstance.getTutorProfile(emailID);
    console.log( response["tutor"]);
    const tutorDetails = response["tutor"];
   this.userName = tutorDetails.fullName;
   this.designation =tutorDetails.designation
  //  this.courses = tutorDetails.rating
  };
  
  async deleteProfile(){
    var emailID = localStorage.getItem('emailID');
    var response = await this.tutorTimeServiceInstance.deleteTutorProfile(emailID);
    if(response["status"]){
      this.router.navigate(['/logout']);
    }else{
      this.router.navigate(['/tutorDashboard']);

    }
  }
  ngOnInit() {

  }

}
