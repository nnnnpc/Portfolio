import { Component, OnInit } from '@angular/core';

//import service class to send request to the server.
import{TutorService} from '../shared/tutor.service';
import {Tutor} from '../shared/tutor.model';


@Component({
  selector: 'app-tutortime',
  templateUrl: './tutortime.component.html',
  styleUrls: ['./tutortime.component.scss']
 
})
export class TutortimeComponent implements OnInit {
  constructor(public tutorService:TutorService) { }
    
  ngOnInit() {
  }

  //this function call service method to get list of tutors by courseName
  public getTutorListByCourseName(courseName: string) {
    event.preventDefault();
    this.tutorService.getTutorListByCourseName(courseName).subscribe((res) => {
      this.tutorService.tutors = res as Tutor[];
  
      if(this.tutorService.tutors.length==0)
      {
        alert("Sorry, there are no tutors in your area who match your requirements at this time");
      }
    });
  }
}

