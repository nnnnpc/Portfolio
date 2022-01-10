import { Component, OnInit } from '@angular/core';
import{TutorService} from '../shared/tutor.service';
import {TutorBook} from '../shared/tutorBook.model';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(public tutorService:TutorService) { }
  
  ngOnInit() {
    this.getTutorList();
  }
  getTutorList()
  { 
    var email=localStorage.getItem('emailID');
    this.tutorService.getRegistredTutors(email).subscribe((res) => {
    this.tutorService.bookedTutors = res as TutorBook[];
  }
)};

cancelRegistration(id:string)
  {
    var r = confirm("Do you really want to cancel the registration?");
    if (r == true) {
      this.tutorService.cancelRegistration(id).subscribe((res) => {
      });
    window.location.reload();
     this.getTutorList();
     } 
    
  }
}