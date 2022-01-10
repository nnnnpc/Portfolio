import { Component, OnInit } from '@angular/core';
import { TutorTimeBackendService } from '../tutor-time-backend.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {
  constructor(private tutorTimeServiceInstance:TutorTimeBackendService,private router: Router) { 
  }
  abc;

  tutorDashboardGroup = new FormGroup({
  });
  tutorDashboardEnrollment = new FormGroup({
  });
  editCourse(courseID){
    this.router.navigate(['/editCourse'],{queryParams:{courseID:courseID}});
  };
  async ngAfterContentInit(){
    var emailID = localStorage.getItem('emailID');
    var response = await this.tutorTimeServiceInstance.showCourse(emailID);
    var responseIterator = response["courses"];
    for(var i = 0 ; i<responseIterator["length"];i++){
      console.log(responseIterator[i]);
      var courseID = responseIterator[i]["courseID"];
      var countStudentEnrolled = await this.tutorTimeServiceInstance.countEnrolledStudents(courseID);
      const obj = {emailID:emailID,courseID:courseID,count:countStudentEnrolled['tutorCount']};
      await this.tutorTimeServiceInstance.updateEnrolledStudentCount(obj);
    }
  var response = await this.tutorTimeServiceInstance.showCourse(emailID);
  this.tutorDashboardGroup = response["courses"];
  };
   ngOnInit() {
    }
}
