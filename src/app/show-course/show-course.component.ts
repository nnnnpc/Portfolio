import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TutorTimeBackendService } from '../tutor-time-backend.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.scss']
})
export class ShowCourseComponent implements OnInit {
  // Here I am binding all the View objects into specific keys and then making a OBJ and sending it to the service that connects to the node server.
  course_name= new FormControl('');
  time_slot= new FormControl('');
  fee= new FormControl('');
  skills= new FormControl('');
  tags= new FormControl('');
  description= new FormControl('');
  constructor(private tutorTimeServiceInstance:TutorTimeBackendService,private router: Router){
    router.navigate(['/tutorsetting']);

    // var response = this.tutorTimeServiceInstance.showCourse();
    // alert(response[0])
  }


  ngOnInit() {
  }

}
