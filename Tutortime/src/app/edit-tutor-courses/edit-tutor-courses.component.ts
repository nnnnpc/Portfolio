import { Component, OnInit } from '@angular/core';
import { TutorTimeBackendService } from '../tutor-time-backend.service';
import { Router,ActivatedRoute } from "@angular/router";
import {  FormControl } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-edit-tutor-courses',
  templateUrl: './edit-tutor-courses.component.html',
  styleUrls: ['./edit-tutor-courses.component.scss']
})
export class EditTutorCoursesComponent implements OnInit {
  course_name= new FormControl('');
  time_slot= new FormControl('');
  fee= new FormControl('');
  skills= new FormControl('');
  description= new FormControl('');

  constructor(private tutorTimeServiceInstance:TutorTimeBackendService,private router: Router,private activatedRoute: ActivatedRoute) {}

  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  makeid(length) {
    var result= '';
    var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  async updateCourse(){
    var courseID = this.activatedRoute.snapshot.queryParams['courseID'];
    const updateCourseObject = {
      'emailID':localStorage.getItem('emailID'),
      'courseID':courseID,
      'courseName': this.course_name.value,
      'timeSlot': this.time_slot.value,
      'skills':this.skills.value,
      'fee':this.fee.value+"$",
      'description':this.description.value,
      'currentTime':formatDate(new Date(), 'yyyy/MM/dd', 'en'),
    }
    var response = await this.tutorTimeServiceInstance.updateCourse(localStorage.getItem('emailID'),courseID,updateCourseObject);    
    this.router.navigate(['/tutorDashboard']);

  }
  async removeCourse(){
    var courseID = this.activatedRoute.snapshot.queryParams['courseID'];
    var response = await this.tutorTimeServiceInstance.removeCourse(courseID);    
    this.router.navigate(['/tutorDashboard']);

  }
  async ngOnInit() {
    var courseID = this.activatedRoute.snapshot.queryParams['courseID'];
    var response = await this.tutorTimeServiceInstance.editCourse(localStorage.getItem('emailID'),courseID);
    var editResponse = response["editCourse"];
    editResponse=editResponse[0];
    this.course_name.setValue(editResponse.courseName);
    this.time_slot.setValue(editResponse.timeSlot);
    this.description.setValue(editResponse.description);
    this.skills.setValue( editResponse.skills);
    this.fee.setValue( Number(editResponse.fee.replace('$','')));
  }
}
